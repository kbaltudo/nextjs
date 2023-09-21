import { useForm } from "react-hook-form";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Title from "../../Elements/Title";
import Link from "next/link";
import { useState } from "react";
import Alert from "../../Elements/Alert";
import {
  faTriangleExclamation,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ForgetPasswordLink from "./ForgetPasswordLink";

function Login() {
  const router = useRouter();
  const [res, setResponse] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    // e.preventDefault();
    setResponse(null);
    const result = await signIn("credentials", {
      redirect: false,
      email: e.target.email.value,
      password: e.target.password.value,
    });
    if (result.ok) {
      router.replace("/dashboard");
      return;
    }
    setResponse(result);
    // alert("Credential is not valid");
  };
  return (
    <>
      <Title type={undefined}> Sign In </Title>
      {null !== res && res.status == 401 ? (
        <Alert
          type="danger"
          message={"Invalid credentials."}
          icon={faTriangleExclamation}
        />
      ) : null}
      <form method="post" className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">
            Email <span className="text-danger">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email *"
            className="form-control"
            {...register("email", {
              required: "Please enter your email address!.",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className="text-danger">Email is required!</span>
          )}
        </div>
        <div className="form-group">
          <label
            style={{
              marginTop: 10,
            }}
            htmlFor="password"
          >
            Password
            <span className="text-danger"> *</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password *"
            className="form-control"
            {...register("password", {
              required: "Please enter your email address!.",
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className="text-danger">Email is required!</span>
          )}
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <button
                className="btn btn-primary"
                style={{
                  marginTop: 15,
                }}
              >
                Sign In
              </button>
            </div>
            <div className="col-xs-12 col-sm-6 text-md-end">
              <p className="py-4">
                <ForgetPasswordLink />
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
