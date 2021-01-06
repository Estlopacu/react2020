import {ICharacter} from "./character.types";

export const setCharacter = (character: ICharacter) => ({
    type: "SET_CHARACTER",
    payload: character,
})
