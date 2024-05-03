import React from "react";
import { useForm } from "react-hook-form";
import './form.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    message: yup.string().required(),
}).required();

const ContactUsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(JSON.stringify(data));

    return (
        <div className="container">
            <div className="text">
                Contact us Form
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <div className="input-data">
                        <input {...register("firstName", { maxLength: 20 })} id="firstName" required />
                        <p>{errors.firstName?.message}</p>
                        <div className="underline"></div>
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-data">
                        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} id="lastName" required />
                        <p>{errors.lastName?.message}</p>
                        <div className="underline"></div>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input type="text" {...register("email", { maxLength: 20 })} id="email" required />
                        <p>{errors.email?.message}</p>
                        <div className="underline"></div>
                        <label htmlFor="email">Email Address</label>
                    </div>

                </div>
                <div className="form-row">
                    <div className="input-data textarea">
                        <textarea rows="8" cols="80" {...register("message", { maxLength: 50 })} id="message" required></textarea>
                        <p>{errors.message?.message}</p>
                        <br />
                        <div className="underline"></div>
                        <label htmlFor="message">Write your message</label>
                        <br />
                        <div className="form-row submit-btn">
                            <div className="input-data">
                                <input type="submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default ContactUsForm;