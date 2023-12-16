import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHeart} from '@fortawesome/free-solid-svg-icons';
import './MovieItem.css';


function MovieItem (props){
    return(
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="box">
                <div className="img-box">
                    <img src={props.poster} alt="poster"/>
                </div>
                <div className="text">
                    <div className="text-header">
                        <a href="/#">{props.title}</a>
                        <span>{props.year}</span>
                    </div>
                    <div className="text-footer">
                        <span className="first">{props.type}</span>
                        <ul>
                            <li>
                                <span><FontAwesomeIcon icon={faHeart} className="icon"/> 3.5</span>
                                <span><FontAwesomeIcon icon={faClock} className="icon"/> 128 min </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MovieItem;