import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "./components/Grid";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";


const App = () => (
   
            <Router>
                    <Navbar />
                    <Container>
                    <Switch>
                        <Route exact path="/" component={Search} />
                        <Route exact path="/saved" component={Saved} />
                        <Route component={NoMatch} />
                    </Switch>
                    </Container>
            </Router>
 
    )

export default App;