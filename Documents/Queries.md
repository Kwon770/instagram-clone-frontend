## Local quries with Apollo

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

## Send gql mutation with 'react-apollo-hooks'

- `useMutation(QUERIES, { update: (_, __) => {}, skip: CONDITION, variables: {VARIABLE: VALUE}})`

`update(_, __) => {}` : This will be execute when the mutation is transmitted
`skip: CONDITION` : If the conditions what skip get is true, don't send this query

- _** when you declare mutation, you must use '[]' **_

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

## Send gql query with 'react-apollo-hooks'

- `useQuery(QUERIES, { update: (_, __) => {}, variables: {VARIABLE: VALUE}})`

```js
import { useQuery } from "react-apollo-hooks";

const ME = gql`
  {
    me {
      userName
    }
  }
`;

const {data, error, loading} = useQuery(ME);
if (loading) {
  return <div>Loading...</div>;
} 
if (error) {
  return <div>Error!... {error.message}</div>;
}

return <div>{data.me.userName}</div>
```
