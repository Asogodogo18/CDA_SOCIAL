import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuthModel from "../../viewModel/AuthModel";

const useAuthController = () => {
  const navigation = useNavigation();
  const { Login, SignUp } = useAuthModel();

  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [res, setRes] = useState(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");

  const onChangeName = (text: string) => {
    setName(text);
  };
  const onChangeSurname = (text: string) => {
    setSurname(text);
  };
  const onChangeUsername = (text: string) => {
    setUsername(text);
  };
  const onChangePassword1 = (text: string) => {
    setPassword1(text);
  };
  const onChangeEmail = (text: string) => {
    setEmail(text);
  };
  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  const onClickSignUp = () => {
    let payload = {
      email,
      password,
      name,
      surname,
      username,
    };
    SignUp(payload)
      .then((json) => {
        setRes(json);
        console.log("signUp: ", json);
      })
      .catch((e) => {
        console.log("error sign up:", e );

        setError(e);
      });
  };

  const onClickLogin = () => {
    let payload = {
      email,
      password,
    };
    Login(payload)
      .then((res) => res.json())
      .then((json) => {
        setRes(json);
        if (json.code !== 200) {
          setError(`${json.message}: ${json.err_code}`);
          return;
        }
        navigation.navigate("AppStack");
      })
      .catch((e) => setError(e));
  };

  return {
    email,
    password,
    password1,
    name,
    surname,
    username,
    error,
    res,
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
