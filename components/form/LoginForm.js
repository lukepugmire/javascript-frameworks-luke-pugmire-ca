import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import Router from "next/router";
import  axios  from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN_URL, TOKEN_PATH } from "../../constants/LoginApi";
import AuthContext from "../../context/AuthContext";

const url = LOGIN_URL + TOKEN_PATH;

const schema = yup.object().shape({
    username: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(null);

        const { register, handleSubmit, errors } = useForm({
            resolver: yupResolver(schema),
        });

        const [auth, setAuth] = useContext(AuthContext);

        async function onSubmit(data) {
            setSubmitting(true);
            setLoginError(null);

            try {
                const response = await axios.post(url, data);
                console.log("response", response.data);
                setAuth(response.data)
                Router.push("/admin");
            } catch (error) {
                console.log("error", error);
                setLoginError(error.toString());
            } finally {
                setSubmitting(false);
            }
        }
    
        console.log(errors);


    return (
        <div className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
            <form>
                {loginError && <span>{loginError}</span>}
                <label for="username">Username</label>
                {errors.username && <span>{errors.username.message}</span>}
                <input name="username" id="username" ref={register}></input>
                <label for="password">Password</label>
                {errors.password && <span>{errors.password.message}</span>}
                <input name="password" id="password" ref={register}></input>
                <button>{submitting ? "Loggin in..." : "Login"}</button>
            </form>
        </div>
    )
}
