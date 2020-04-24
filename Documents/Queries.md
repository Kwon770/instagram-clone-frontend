## Making gql queries with 'apollo-boost'

```js
import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $userName: String!
    $email: String!
    $firstName: String
    $lastName: String
  ) {
    createAccount(
      userName: $userName
      email: $email
      firstName: $firstName
      lastName: $lastName
    )
  }
`;
```

## Send gql queries with 'react-apollo-hooks'

`useMutation(QUERIES, { update: (_, __) => {}, variables: {VARIABLE: VALUE}})`

```js
import { useMutation } from "react-apollo-hooks";

const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      userName: userName.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });
```