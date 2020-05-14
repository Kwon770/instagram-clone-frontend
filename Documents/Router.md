## HashRouter

`./src/Components/App.js` => The very root of the components
```js
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";

export default () => {
  return (
    <Router>
        <Routes isLoggedIn={isLoggedIn} />
    </Router>
  );
};

```


## Switch 

`<Switch><Switch/>` : Switch render only one Route _(If it find the path in the front, it will not search more router)_

`./src/Component/Routes.js`
```js
import { Route, Switch } from "react-router-dom";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
  </Switch>
);

const LoggedOutRoutes = () => (
    // SKIP
)

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

export default AppRouter;
```

## withRouter

`withRouter((props) => {})`: It make you get the Router from here although there is no router

```js
// 1
export default withRouter(({ history }) => {
  const search = useInput("");
  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    // SKIP
  );
});


// 2
const Header = ({history}) => {
    const search = useInput("");
  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    // SKIP
  );
};
export deafult withRouter (Header);
```

## Two methods to set Url with variables

# 1. Using the params

Set Route like this, and
`<Route path="/:username" component={Profile} />`

Set 'to' props as the variable what you want to set as url
`<Link to={VARIABLE-USERNAME}>`

_=> http://localhost:3000/#/VARIABLE-USERNAME_

# 2. Using the history object

Get the history from router and set Url by `history.push()`
`history.push(`/search?term=${search.value}`);`

_If you can't get the router, use `withRouter`_

_=> http://localhost:3000/#/search?term=SEARCH-VALUE_