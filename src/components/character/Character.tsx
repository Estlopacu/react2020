import React from 'react';
import "./Character.scss";
import {ICharacter} from "../../redux/character/character.types";

type PropsType = {
    character: ICharacter,
}

const Character = ({character: {name, image, description, urls}}: PropsType) => {
    return (<div className="character">
        <div className="character__image-wrapper">
            <img src={image} alt="" className="src"/>
        </div>
        <div>
            <h3>{name}</h3>
            {description ? <p>{description}</p> : <p>N/A</p>}
        </div>
        <div>
            <h4>Useful links</h4>
            <ul>
                {urls.map((url, index) => <li key={index}><a href={url?.url}>{url?.type}</a></li>)}
            </ul>
        </div>
    </div>);
}

export default Character;
