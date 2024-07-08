import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Field from "../components/common/Field";
import { useForm } from "react-hook-form";
import { api } from "../components/auth/api";

export default function Registration() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const formHandlerFunc = (formData) => {
    const registerUser = async () => {
      try {
        const response = await api.post(
          `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
          formData
        );

        if (response.status === 201) {
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        setError("root.random", {
          type: "random",
          message: `User with ${formData.email} already exists`,
        });
      }
    };

    registerUser();
  };

  return (
    <main>
      <section className="container">
        <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form onSubmit={handleSubmit(formHandlerFunc)} autoComplete="off">
            <Field label="First Name" error={errors.firstName}>
              <input
                {...register("firstName", {
                  required: "First Name is required",
                })}
                type="firstName"
                name="firstName"
                id="firstName"
                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </Field>

            <Field label="Last Name" error={errors.lastName}>
              <input
                {...register("lastName", {
                  required: "Last Name is required",
                })}
                type="lastName"
                name="lastName"
                id="lastName"
                className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </Field>

            <Field label="Email" error={errors.email}>
              <input
                {...register("email", {
                  required: "Email is required",
                })}
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
                    message: "Your password must be at least 8 characters long",
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
                Submit
              </button>
            </Field>

            <p className="text-center">
              Already have account?{" "}
              <Link to="../login" className="text-indigo-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
