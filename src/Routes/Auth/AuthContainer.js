import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQueris";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const userName = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("asdas@a.com");
  const [requestSecret] = useMutation(LOG_IN, {
    // update: The function what will be executed when mutation occured
    update: (_, { data }) => {
      const { requestSecret } = data;
      if (!requestSecret) {
        toast.error("You dont have an account yet, create one");
        setTimeout(() => setAction("signUp"), 3000);
      }
    },
    variables: { email: email.value },
  });

  const createAccount = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      userName: userName.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email !== "") {
        requestSecret();
      } else {
        toast.error("Email is required");
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        userName.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        createAccount();
      } else {
        toast.error("All fields is required");
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      userName={userName}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onSubmit={onSubmit}
    />
  );
};
