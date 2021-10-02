import './App.css';
import Search from "./components/Search";
import {Route, Switch} from "react-router-dom";
import Offer from "./components/Offer";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path={'/'} render={() => <Search />}/>
            <Route path={'/:id'} render={() => <Offer />}/>
        </Switch>
    </div>
  );
}

export default App;
