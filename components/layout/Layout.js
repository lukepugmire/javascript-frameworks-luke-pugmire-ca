import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Router from "next/router";

export default function Layout({children}) {
    const [auth, setAuth] = useContext(AuthContext);

    function logout() {
        setAuth(null);
        Router.push("/")
    }

    return (
        <>
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="contact"><a>Contact</a></Link>
            {auth ? (
                <>
               <Link href="admin">Admin</Link>  <button onClick={logout}>Log out</button>
                </>
            ) : (
                <Link href="login"><a>Login</a></Link>
            )}  
        </nav>

        <div className="container">{children}</div>
            
        </>
    )
}
