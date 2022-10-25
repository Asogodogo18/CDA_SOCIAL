import React from "react";
import Layout from "../../Layout";
import {
  Box,
  Text,
  Infos,
  Securite,
  Verify,
  Language,
  Country,
} from "../../../components";

const InnerParams = ({ route }) => {
  const { id } = route.params;

  switch (id) {
    case 1:
      return <Infos />;
      break;
    case 2:
      return <Securite />;
      break;

    case 3:
      return <Verify />;
      break;
    case 4:
      return <Language />;
      break;
    case 5:
      return <Country />;
    default:
      null;
      break;
  }
};

export default InnerParams;
