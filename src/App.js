//libraries
import React from "react";
import { Route, Switch, Redirect } from "react-router";

//styles
import "./App.css";
//pages
import DogPage from "./pages/DogPage";
import Index from "./pages/Index";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Faq from "./pages/Faq";
import Privacy from "./pages/Privacy";
import Market from "./pages/Market";
import Buy from "./pages/Buy";
import Settings from "./pages/Settings/Settings";
import Breed from "./pages/Breed/Breed";
import Mint from "./pages/Mint/Mint";


export const AuthContext = React.createContext(null);


const authReducer = (action) => {
  switch (action.type) {
    case "login": {
      return { logged: true };
    }
    case "logout": {
      localStorage.removeItem("userID");
      return { logged: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, {
    logged: !!localStorage.getItem("userID"),
  });
  const value = { state, dispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function App() {
  
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route
          path="/breed"
          component={Breed}
        ></Route>
         <Route
          path="/mint"
          component={Mint}
        ></Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/buy">
          <Buy />
        </ Route>
        <Route path="/market">
          <Market showElementsStatus={true} ShowConvertPage={false} />
        </Route>
        <Route path="/dog-page/:dogid" component={DogPage}></Route>
        <Route path="/about" exact component={About} />
        <Route path="/terms" exact component={Terms} />
        <Route path="/faq" exact component={Faq} />
        <Route path="/privacy" exact component={Privacy} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </AuthProvider>
  );
}

export default App;