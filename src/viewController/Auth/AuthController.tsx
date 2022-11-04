import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuthModel from "../../viewModel/AuthModel";
import useAuth from "../../Context/AuthContext";
import { USER_KEY } from "../../constants/general-constatnts";
import { storeDataObject } from "../../services/storage";

const useAuthController = () => {
  const navigation = useNavigation();
  const { Login, SignUp } = useAuthModel();
  const { authInfo } = useAuth();

  const [name, setName] = useState(authInfo.name);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>(authInfo.email);
  const [password, setPassword] = useState<string>(authInfo.password);

  const [surname, setSurname] = useState<string>(authInfo.confirmPassword);
  const [username, setUsername] = useState<string>(authInfo.username);
  const [password1, setPassword1] = useState<string>(authInfo.confirmPassword);

  const onChangeName = (text: string) => setName(text);
  const onChangeSurname = (text: string) => setSurname(text);

  const onChangeUsername = (text: string) => setUsername(text);

  const onChangePassword1 = (text: string) => setPassword1(text);
  const onChangeEmail = (text: string) => setEmail(text);

  const onChangePassword = (text: string) => setPassword(text);

  const onClickSignUp = () => {
    setIsLoading(true);
    let payload = {
      email,
      password,
      name,
      surname,
      username,
    };
    console.log("payload signup :", payload);

    SignUp(payload)
      .then((json) => {
        console.log("signUp: ", json);
        if (json.code !== 200) {
          console.log("login error: ", json);
          setError(`${json.message}: ${json.err_code}`);
          return;
        }
        storeDataObject(USER_KEY, json);
      })
      .catch((e) => {
        console.log("error sign up:", e);
        setError(e);
      })
      .finally(() => setIsLoading(false));
  };

  const onClickLogin = () => {
    let payload = {
      email,
      password,
    };
    console.log("login payload: ", payload);

    Login(payload)
      .then((json) => {
        console.log("login: ", json);

        if (json.code !== 200) {
          console.log("login error: ", json);
          setError(`${json.message}: ${json.err_code}`);
          return;
        }
        console.log("login: ", json);
        storeDataObject(USER_KEY, json);
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  };

  return {
    email,
    password,
    password1,
    name,
    surname,
    username,
    error,
    isLoading,
    onChangeEmail,
    onChangePassword,
    onChangePassword1,
    onChangeName,
    onChangeSurname,
    onChangeUsername,
    onClickLogin,
    onClickSignUp,
  };
};

export default useAuthController;
