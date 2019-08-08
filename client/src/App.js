import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "./components/Grid";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import NoMatch from "./pages/NoMatch";


const App = () => (
    <Router>
        <div>
            <Navbar />
            <Container>
                <Switch>
                    <Route exact path="/" component={SearchPage} />
                    <Route exact path="/saved" component={SavedPage} />
                    <Route component={NoMatch} />
                </Switch>
            </Container>
        </div>
    </Router>
)

export default App;