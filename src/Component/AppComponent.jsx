import React from "react";
import Navigation from "./navBar/navigation";
import AboutComponent from "./component/AboutComponent";
import PricingComponent from "./component/PricingComponent";
import HomeComponent from "./component/HomeComponent";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Navigation></Navigation>
                    <Route path = "/about/:id" component ={AboutComponent}/>
                    <Route path = "/" exact component ={HomeComponent}/>
                    <Route path = "/pricing" component ={PricingComponent}/>
                </Router>
            </div>
        );
    }
}

export default AppComponent;