import React from "react";
import CardComponent from "../bootstrapComponents/CardComponent";
import {getImages} from "../../resources/constants";

class ImagesComponent extends React.Component{
    state={
        imageList:[]
    }
    componentDidMount() {
        fetch(getImages)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        imageList: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <CardComponent images={this.state.imageList}></CardComponent>
        );
    }
}
export default ImagesComponent;