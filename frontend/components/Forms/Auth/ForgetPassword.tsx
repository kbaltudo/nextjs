import React from 'react'
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { resetPassword } from '../../../services/auth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLock,
    faRightToBracket
} from "@fortawesome/free-solid-svg-icons";

function ForgetPassword() {

    const { register, handleSubmit, formState: { errors }, } = useForm({
        mode: "onBlur" // "onChange"
    });
    const onSubmit = (data, e) => {
        const response = resetPassword({
            email: e.target.value
        })
        
    }
    const onError = (errors, e) => console.log(errors, e);

    return (
        <>

            <div className='col-md-4 offset-4'>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Email *"
                            className="form-control"
                            {...register("email", {
                                required: 'Email address is required!',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid email',
                                },
                            })}
                        />
                        {errors.email && errors.email.type === "required" && (
                            <span className="text-danger">Email is required!</span>
                        )}
                    </div>
                    <div className='form-group pt-3'>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <button className='btn btn-primary' type="submit">Submit</button>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <p className='py-2'>
                                    <Link href="/auth/sign-in">
                                        <a >
                                            <FontAwesomeIcon icon={faRightToBracket} />
                                            <span className='px-2'> Log In</span>
                                        </a>
                                    </Link>
                                </p>
                        </div>
                    </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default ForgetPassword