import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuthModel from "../../viewModel/AuthModel";

const useLoginController = () => {
  const navigation = useNavigation();
  const { Login } = useAuthModel();

  const [error, setError] = useState("");
  const [res, setRes] = useState(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };
  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  const onClickSubmit = () => {
    let payload = {
      email,
      password,
    };
    Login(payload)
      .then((res) => res.json())
      .then((json) => {
        setRes(json);
        console.log("Login: ", json);
        navigation.navigate("AppStack");
      })
      .catch((e) => setError(e));
  };

  return {
    email,
    password,
    error,
    onChangeEmail,
    onChangePassword,
    onClickSubmit,
  };
};

export default useLoginController;
