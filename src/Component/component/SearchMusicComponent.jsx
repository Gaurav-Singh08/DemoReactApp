import React from "react";
import {getSongs} from "../../resources/constants";

class SearchMusicComponent extends React.Component {
    state = {
        value: '',
        songsList: []
    };
    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="input-group flex-nowrap">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping"></span>
                    </div>
                    <input value={this.state.value} type="search" className="form-control"
                           placeholder="Search songs here..." aria-label="Username"
                           aria-describedby="addon-wrapping" onChange={this.handleChange} onKeyDown={this.enterPress}/>
                </div>

                {this.state.songsList.map(value => {
                    return (
                        <li>{value.trackName}</li>
                    )
                })}

            </div>
        );
    }

    enterPress = (event) => {
        if (event.key === 'Enter')
            this.getSongsList(this.state.value)

    }


    getSongsList = async (abc) => {
        fetch(getSongs + abc)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        songsList: result.results
                    });
                },
                (error) => {
                    this.setState({
                        songsList: []
                    });
                }
            )
    }

}

export default SearchMusicComponent;