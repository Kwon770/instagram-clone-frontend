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

`<Switch><Switch/>` : Switch render only one Route

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