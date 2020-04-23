import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN,
} from "./AuthQueris";
import { toast, ToastType } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const userName = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const secret = useInput("");
  const [requestSecretMutation] = useMutation(LOG_IN, {
    // update: The function what will be executed when mutation occured
    // update: (_, { data }) => {
    //   const { requestSecret } = data;
    //   if (!requestSecret) {
    //     toast.error("You dont have an account yet, create one");
    //     setTimeout(() => setAction("signUp"), 3000);
    //   }
    // },
    variables: { email: email.value },
  });

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      userName: userName.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value,
    },
  });

  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email !== "") {
        try {
          const {
            data: { requestSecret },
          } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error("You dont have an account yet, create one");
            setTimeout(() => setAction("signUp"), 3000);
          } else {
            toast.success("Check your inbox for your login secret");
            setAction("confirm");
          }
        } catch {
          toast.error("Can't request secret, try again");
        }
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
        try {
          const {
            data: { createAccount },
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("Can't create account");
          } else {
            toast.success("Account created! Log in now");
            setTimeout(() => setAction("logIn", 2000));
          }
        } catch {
          toast.error("Can't create account, try again");
        }
      } else {
        toast.error("All fields is required");
      }
    } else if (action === "confirm") {
      if (secret.value !== "") {
        try {
          const {
            data: { confirmSecret: token },
          } = await confirmSecretMutation();
          if (token !== "" && token !== undefined) {
            localLogInMutation({ variables: { token } });
          } else {
            throw Error();
          }
        } catch {
          toast.error("Can't confirm secret, check again");
        }
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
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
