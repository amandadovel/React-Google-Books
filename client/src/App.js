import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "./components/Grid";
// import Search from "./pages/Search";
import SavedPage from "./pages/SavedPage";
import NoMatch from "./pages/NoMatch";


const App = () => (
    <Router>
        <div>
            <Navbar />
            <Container>
                <Switch>
                    {/* <Route exact path="/" component={Search} /> */}
                    <Route exact path="/saved" component={SavedPage} />
                    <Route exact path="/" component={NoMatch} />
                </Switch>
            </Container>
        </div>
    </Router>
)

export default App;