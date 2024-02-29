import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Loading from './ui/Loading';
import { Link } from 'react-router-dom';

interface IRegisterInput {
  name: string;
  surname: string;
  email: string;
  birthdate: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const RegistrationForm = () => {
  const { register, handleSubmit, setValue } = useForm<IRegisterInput>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IRegisterInput> = async (data) => {
    console.log('data');
  };

  return (
    <div className="bg-white px-20 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl font-semibold">Sign up</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Please enter your details.
      </p>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-4">
          <div className="flex-1">
            <label className="text-lg font-medium">Name</label>
            <input
              className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-gray-100"
              placeholder="Enter your name"
              type="text"
              {...register('name', { required: true })}
            />
          </div>
          <div className="flex-1">
            <label className="text-lg font-medium">Surname</label>
            <input
              className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-gray-100"
              placeholder="Enter your name"
              type="text"
              {...register('surname', { required: true })}
            />
          </div>
        </div>
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-gray-100"
            placeholder="Enter your email"
            type="email"
            {...register('email', { required: true })}
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-gray-100"
            placeholder="Enter your password"
            type="password"
            {...register('password', { required: true })}
          />
          <div></div>
        </div>
        <div>
          <label className="text-lg font-medium">Confirm password</label>
          <input
            className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-gray-100"
            placeholder="Confirm your password"
            type="password"
            {...register('confirmPassword', { required: true })}
          />
        </div>
        <div className="mt-4">
          <input type="checkbox" {...register('terms')} />
          <label className="ml-2 font-medium text-base">
            <Link to="../terms-and-conditions">
              I agree with the terms and conditions.
            </Link>
          </label>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
            type="submit"
          >
            {loading ? <Loading /> : 'Sign up'}
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Already have an account?</p>
          <Link
            className="text-violet-500 text-base font-medium ml-2"
            to="../signin"
          >
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
