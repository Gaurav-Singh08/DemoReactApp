import React from "react";
import Navigation from "./navBar/navigation";
import AboutComponent from "./component/AboutComponent";
import SearchMusicComponent from "./component/SearchMusicComponent";
import ImagesComponent from "./component/ImagesComponent";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomeComponent from "./component/HomeComponent";

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Navigation></Navigation>
                    <Route path="/about/:id/:width/:height" component={AboutComponent}/>
                    <Route path="/" exact component={HomeComponent}/>
                    <Route path="/walls" component={ImagesComponent}/>
                    <Route path="/music" component={SearchMusicComponent}/>
                </Router>
            </div>
        );
    }
}

export default AppComponent;