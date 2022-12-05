import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import toast from "react-hot-toast";
import BgContext from "../Context/BgContext";
import { useEffect } from "react";

export default function Login() {
  const { login, forgetPassword } = useAuth();
  const { changeBg } = useContext(BgContext);
  useEffect(() => {
    changeBg(false);
  }, [changeBg]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState("");

  const handleForgetLogin = async function () {
    if (!userEmail) {
      setError("Your email is required to reset!");
      return;
    }
    try {
      setError("");
      await forgetPassword(userEmail);

      toast.success("Password reset message sent! Check your spam folder :)", {
        duration: 3500,
      });
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  const handleLogin = async function (e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setError("");
      setLoading(true);
      const { user } = await login(email, password);
      if (user.emailVerified) {
        navigate(from, { replace: true });
      } else {
        toast.error(
          "Your email is not verified. Plz verify your email address",
          { duration: 3500 }
        );
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <div className=" min-h-[490px]  shadow rounded-md shadow-amber-100">
      <form className="py-8 space-y-8" onSubmit={handleLogin}>
        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3">
          <label
            className="block w-40 font-bold text-gray-500 "
            htmlFor="email"
          >
            Email:
          </label>
          <input
            onBlur={(e) => setUserEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 leading-tight transition duration-300 border-2 border-gray-200 rounded-md appearance-none bg-gray-50 focus:outline-none focus:bg-white focus:border-amber-500"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3 ">
          <label
            className="block w-40 font-bold text-gray-500 "
            htmlFor="password"
          >
            Password:
          </label>
          <div className="w-full">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 leading-tight transition duration-300 border-2 border-gray-200 rounded-md appearance-none bg-gray-50 focus:outline-none focus:bg-white focus:border-amber-500"
              placeholder="**********"
              required
            />
            <span
              onClick={handleForgetLogin}
              className="text-amber-500 cursor-pointer"
            >
              Forgot Password?
            </span>
          </div>
        </div>

        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3">
          <p className="text-red-500 font-regular">{error}</p>
        </div>

        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3 ">
          <div className="w-40"></div>
          <div className="flex flex-col w-full gap-4 sm:flex-row sm:items-center sm:gap-6 ">
            <button
              disabled={loading}
              type="submit"
              className="px-4 py-2 text-base font-semibold text-white transition duration-300 rounded w-28 bg-amber-400 hover:bg-amber-500"
            >
              Login
            </button>
          </div>
        </div>
        <div className="flex items-center w-11/12 gap-4 mx-auto font-bold text-gray-500 md:w-2/3">
          <p>
            Doesn't have an account? &nbsp;
            <Link className="underline text-amber-500" to="/signup">
              Signup
            </Link>
            &nbsp; instead.
          </p>
        </div>
      </form>
    </div>
  );
}
