import { useFormik } from "formik"
import logoImage from "../asset/Art.png"
import { Link, useNavigate } from "react-router-dom"
import { loginSchema } from "../utils/formValidation"
import { signInUser } from "../apis/auth"
import { useState } from "react"

const Login = () => {
<<<<<<< HEAD
  const [error, setError] = useState("")
  const navigate = useNavigate()
=======
  const navigate = useNavigate()
  const [error, setError] = useState("")
>>>>>>> b3dfd09bdd2d5ae4fafaf56877a60b8cd00792a8
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, actions) => {
      const response = await signInUser(values)
      if (response.success) {
        navigate("/dashboard")
      } else {
        setError(response.message)
      }
      await new Promise((resolve) => setTimeout(resolve, 1000))
      actions.resetForm()
    },
  })

  return (
    <div className="h-screen grid grid-cols-[70%_30%]">
      <div className="flex flex-col items-center bg-customBlue text-white relative">
        <img src={logoImage} alt="astraunaut with laptop" />
        <h1 className="text-3xl font-semibold absolute top-[60%]">
          Welcome aboard my friend
        </h1>
        <p className="absolute top-[66%]">
          just a couple of clicks and we start
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-3xl font-semibold text-customBlue">Login</h2>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="w-full flex flex-col items-center gap-8 justify-center"
        >
          <label
            className={`${
              errors.email && touched.email ? "border border-red-500" : ""
            } input input-bordered flex items-center gap-2 w-2/3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              value={values.email}
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="Enter your email"
              onBlur={handleBlur}
              className="grow"
            />
          </label>
          {errors.email && touched.email && (
            <p className="text-red-500">{errors.email}</p>
          )}
          <label
            className={`${
              errors.password && touched.password ? "border border-red-500" : ""
            } input input-bordered flex items-center gap-2 w-2/3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="grow"
            />
          </label>
          {errors.password && touched.password && (
            <p className="text-red-500">{errors.password}</p>
          )}
          {error && <p className="text-red-500">{error}</p>}
          <button
            className="btn btn-success w-2/3 rounded-full text-white"
            disabled={isSubmitting}
            type="submit"
          >
            Log In
          </button>
        </form>
        <p>Have no account yet?</p>
        <Link
          to="/register"
          className="btn btn-outline btn-success w-2/3 rounded-full"
        >
          Register
        </Link>
      </div>
    </div>
  )
}

export default Login
