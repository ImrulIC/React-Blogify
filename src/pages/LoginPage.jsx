import React from "react";
import { useForm } from "react-hook-form";
import Field from "../components/common/Field";
import { api } from "../components/auth/api";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const formHandlerFunc = (formData) => {
    const loginFunc = async () => {
      try {
        const response = await api.post(
          `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
          formData
        );
        if (response.status === 200) {
          setAuth({ user: response.data.user, token: response.data.token });
          navigate("/profile");
        }
      } catch (error) {
        console.log(error);
        setError("root.random", {
          type: "random",
          message: `User with ${formData.email} is not found`,
        });
      }
    };
    loginFunc();
  };
  return (
    <>
      <main>
        <section className="container">
          {/* <!-- Login Form into a box center of the page --> */}
          <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit(formHandlerFunc)} action="">
              <Field label="Email" error={errors.email}>
                <input
                  {...register("email", { required: "Email ID is required" })}
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </Field>

              <Field label="Password" error={errors.password}>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message:
                        "Your password must be at least 8 characters long",
                    },
                  })}
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </Field>

              <Field>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                >
                  Login
                </button>
              </Field>

              <p className="text-center">
                Don't have an account?{" "}
                <Link
                  to="../register"
                  className="text-indigo-600 hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
