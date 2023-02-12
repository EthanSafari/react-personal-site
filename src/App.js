import { Route, Switch } from "react-router-dom";
import Album from "./components/Album";

function App() {
  return (
    <>
      <Switch>
        <Route path={['/']} component={Album} />
      </Switch>
    </>
  );
};

export default App;
