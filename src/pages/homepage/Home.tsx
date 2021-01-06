import React, {useEffect, useState} from 'react';
import './home.scss';
import Character from "../../components/character/Character";
import Search from "../../components/search/search";
import getUrl from "../../utils/getUrl";
import {useDispatch, useSelector} from "react-redux";
import {ICharacter} from "../../redux/character/character.types";

function Home() {
    // const [character, setCharacter] = useState({ name: "", Image: {}, description: "", image: "", urls: []});
    const character = useSelector((state: { character: ICharacter}) => state.character);
    const dispatch = useDispatch();
    const [characterName, setCharacterName] = useState("hulk");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getInfo = async () => {
            setLoading(true);
            const response = await fetch(getUrl(characterName));
            const data = await response.json();

            if(data?.data?.results[0]) {
                const { name, description, thumbnail, urls } = data.data.results[0];
                // console.log('data.data.results[0]', data.data.results[0]);
                const payload = {
                    name,
                    description,
                    image: `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`,
                    urls,
                };
                dispatch({type: "SET_CHARACTER", payload});
                setLoading(false);
            }
        };

        getInfo();
    }, [characterName, dispatch])

    return (
        <div className="home">
            <Search setCharacterName={setCharacterName}></Search>
            { loading ? <div className="loading">Loading!</div> : <Character character={character}/>}
        </div>
    );
}

export default Home;
