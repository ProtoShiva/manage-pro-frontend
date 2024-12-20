import React, { useEffect } from "react"
import logoImage from "../asset/Art.png"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { loginUserAction } from "../redux/slices/usersSlices.js"

//yup form schema
const formSchema = Yup.object({
  email: Yup.string().required("Email is Required!"),
  password: Yup.string().required("Password is Required!"),
})

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginUserAction(values))
    },
    validationSchema: formSchema,
  })

  const storeData = useSelector((state) => state?.users)

  const { loading, appErr, serverErr, user } = storeData

  //redirect when user is registered successfully
  useEffect(() => {
    if (user) {
      navigate("/dashboard")
    }
  }, [user, navigate])

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
        <label className="input input-bordered flex items-center gap-2 w-2/3">
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
            type="text"
            className="grow"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-2/3">
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
            type="password"
            className="grow"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
          />
        </label>
        {appErr || serverErr ? (
          <p className="text-red-500 font-medium mt-4 rounded-md py-2">
            {appErr || serverErr ? `${appErr}` : null}
          </p>
        ) : null}
        <button
          className="btn btn-success w-2/3 rounded-full text-white"
          type="submit"
          onClick={formik.handleSubmit}
        >
          Log In
        </button>
        <p>Have no account yet?</p>
        <Link
          to={"/register"}
          className="btn btn-outline btn-success w-2/3 rounded-full"
        >
          Register
        </Link>
      </div>
    </div>
  )
}

export default Login