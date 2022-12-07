import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuthModel from "../../viewModel/AuthModel";
import useAuth from "../../Context/AuthContext";
import { USER_KEY } from "../../constants/general-constants";
import { removeData, storeDataObject } from "../../services/storage";
import { useUserContext } from "../../Context";

const useAuthController = () => {
  const { Login, SignUp } = useAuthModel();
  const { authInfo } = useAuth();
  const { onSignInSuccess, onLogOut } = useUserContext();

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
    //console.log("payload signup :", payload);

    SignUp(payload)
      .then((json) => {
        //console.log("signUp: ", json);
        if (json.code !== 200) {
          //console.log("login error: ", json);
          setError(`${json.message}: ${json.err_code}`);
          return;
        }
        storeDataObject(USER_KEY, json);
      })
      .catch((e) => {
        //console.log("error sign up:", e);
        setError(e);
      })
      .finally(() => setIsLoading(false));
  };

  const onClickLogin = () => {
    let payload = {
      email,
      password,
    };
    //console.log("login payload: ", payload);
    setIsLoading(true);
    Login(payload)
      .then((json) => {
        //console.log("login: ", json);

        if (json.code !== 200) {
          //console.log("login error: ", json);
          setError(`${json.message}: ${json.err_code}`);
          return;
        }
        //console.log("login: ", json);
        const user = json;
        //console.log("user: ", user);

        storeDataObject(USER_KEY, user.data);
        storeDataObject("auth", user.auth);

        onSignInSuccess({ user: user.data, auth: user.auth });
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  };

  const onClickLogout = () => {
    removeData(USER_KEY);
    removeData("auth");
    onLogOut();
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
    onClickLogout,
  };
};

export default useAuthController;
