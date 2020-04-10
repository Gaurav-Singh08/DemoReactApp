import React from "react";

class AboutComponent extends React.Component {
    render() {

        return (
            <img src= {this.props.match.params.id}></img>
        );
    }
}

export default AboutComponent;