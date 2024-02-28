import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.REACT_APP_BACK_URL + "auth/";

export interface ILoginRequest {
  email: string;
  password: string;
}

interface ILoginResponse {
  access_token: string;
}

interface IRegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const authService = {
  setRememberMe: (value: boolean) => {
    localStorage.setItem("rememberMe", JSON.stringify(value));
  },
  getRememberMe: (): boolean => {
    const storedValue = localStorage.getItem("rememberMe");
    return storedValue ? JSON.parse(storedValue) : false;
  },
  setEmail: (email: string) => {
    localStorage.setItem("email", email);
  },
  getEmail: (): string => {
    let email = "";
    if (authService.getRememberMe()) {
      email = localStorage.getItem("email") ?? "";
    }
    return email;
  },
  login: async (credentials: ILoginRequest) => {
    try {
      const response = await axios.post(API_URL + "login", credentials);
      if (response.status === 200) {
        const data: ILoginResponse = response.data;
        Cookies.set("TOKEN", data.access_token);
        if (authService.getRememberMe()) {
          authService.setEmail(credentials.email);
        }
        return true;
      } else return false;
    } catch (error) {
      console.error("Login Error: ", error);
      return false;
    }
  },
  register: async (userData: IRegisterRequest) => {},
};

export default authService;
