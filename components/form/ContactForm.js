import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ContactForm() {

    const schema = yup.object().shape({
        fname: yup.string().required("Please enter your first name").min(3, "Must be at least 3 characters"),
        lname: yup.string().required("Please enter your last name").min(4, "Must be at least 4 characters"),
        email: yup.string().required("Please enter you email address").email("Please enter a valid email address"),
        lotr: yup.number().required("You need to choose your favourite").typeError("You need to choose your favourite"),
        message: yup.string().required("Please include a message").min(10, "Message mus be at least 10 characters"),
    });

        const { register, handleSubmit, errors } = useForm({
            resolver: yupResolver(schema),
        });

        function onSubmit(data) {
        }
    
        console.log(errors);
    

    return (
        <div class="contact_form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label for="fname">First Name</label>
                    {errors.fname && <span>{errors.fname.message}</span>}
                    <input name="fname" id="fname" ref={register}/>
                    <label for="lname">Last Name</label>
                    {errors.lname && <span>{errors.lname.message}</span>}
                    <input name="lname" id="lname" ref={register}/>
                    <label for="email">Email Address</label>
                    {errors.email && <span>{errors.email.message}</span>}
                    <input name="email" id="email" ref={register}/>
                    <label for="lotr">What story is your favourite?</label>
                    {errors.lotr && <span>{errors.lotr.message}</span>}
                    <select name="lotr" id="lotr" size="5" multiple ref={register}>
                        <option value="1">Lord of the Rings</option>
                        <option value="2">Harry Potter</option>
                        <option value="3">50 Shades of Grey</option>
                        <option value="4">The Hobbit</option>
                    </select>
                    <label for="message">Send me a message</label>
                    {errors.message && <span>{errors.message.message}</span>}
                    <textarea name="message" rows="6" cols="30" ref={register}></textarea>
                    <button>Send</button>
                </form>
            </div>
    )
}
