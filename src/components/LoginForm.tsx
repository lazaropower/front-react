import GoogleButton from "./GoogleButton";
import { SubmitHandler, useForm } from "react-hook-form";
import authService, { ILoginRequest } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";

interface ILoginInput {
  email: string;
  password: string;
  remember: boolean;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm<ILoginInput>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(
    authService.getRememberMe(),
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (rememberMe) {
      setValue("email", authService.getEmail());
    }
  }, [rememberMe]);

  const mapToLoginRequest = (data: ILoginInput): ILoginRequest => {
    return {
      email: data.email,
      password: data.password,
    };
  };

  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    setLoading(true);
    const loginData = mapToLoginRequest(data);
    const result = await authService.login(loginData);
    if (result) {
      navigate("/home");
    }
    setErrorMessage("🛈 Invalid credentials, please try again");
    setLoading(false);
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleRememberMeChange");
    const value = e.target.checked;
    console.log(value);
    setRememberMe(value);
    authService.setRememberMe(value);
  };

  return (
    <div className="bg-white px-20 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl font-semibold">Cryptocabras</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Welcome back! Please enter your details.
      </p>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className={`w-full border-2 rounded-xl p-4 mt-1 bg-transparent ${errorMessage ? "border-red-500" : "border-gray-100"}`}
            placeholder="Enter your email"
            type="email"
            {...register("email", { required: true })}
            onFocus={() => {
              setErrorMessage("");
            }}
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            className={`w-full border-2 rounded-xl p-4 mt-1 bg-transparent ${errorMessage ? "border-red-500" : "border-gray-100"}`}
            placeholder="Enter your password"
            type="password"
            {...register("password", { required: true })}
            onFocus={() => {
              setErrorMessage("");
            }}
          />
        </div>

        {errorMessage && (
          <div className="mt-2 font-medium text-base text-red-500">
            {errorMessage}
          </div>
        )}

        <div className="mt-8 flex justify-between">
          <div>
            <input
              type="checkbox"
              id="remember"
              {...register("remember")}
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label className="ml-2 font-medium text-base" htmlFor="remember">
              Remember me
            </label>
          </div>
          <button
            type="button"
            className="font-medium text-base text-violet-500"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Forgot password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
            type="submit"
          >
            {loading ? <Loading /> : "Sign in"}
          </button>
          <GoogleButton />
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Don't have an account?</p>
          <button
            className="text-violet-500 text-base font-medium ml-2"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
