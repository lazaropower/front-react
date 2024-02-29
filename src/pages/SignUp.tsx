import RegistrationForm from "../components/RegistrationForm";

const SignUp = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <RegistrationForm />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin"></div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg an"></div>
      </div>
    </div>
  );
};

export default SignUp;
