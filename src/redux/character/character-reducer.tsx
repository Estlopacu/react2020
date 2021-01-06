import { ICharacter } from "./character.types";

const INITIAL_STATE: ICharacter = {
    name: "",
    image: "",
    description: "",
    urls: [],
}

const characterReducer = (state: ICharacter = INITIAL_STATE, action: { type: string, payload: ICharacter}) => {
    switch (action.type) {
        case "SET_CHARACTER":
            return {
                ...action.payload,
            };
        default:
            return state;
    }
};

export default characterReducer;
