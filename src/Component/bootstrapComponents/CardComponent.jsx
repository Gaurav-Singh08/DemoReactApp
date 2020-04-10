import React from "react";
import {Link} from 'react-router-dom'

class CardComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card-deck">
                    {this.props.images.map(image =>

                        (

                            <div className="col-md-4 col-xs-6 mt-5" key={image.id}>
                                <Link to={`/about/${image.id+'/'+image.width+'/'+image.height}`}>
                                    <div className="card">

                                        <img className="card-img-top img-fluid"
                                             src={image.download_url} height="500"
                                             width="500" alt={image.download_url}/>
                                        <div className="card-img-overlay">
                                            <p className="card-text"><small
                                                className="text-muted">{image.author}</small>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        )
                    )}

                </div>
            </div>
        );
    }
}
export default CardComponent;