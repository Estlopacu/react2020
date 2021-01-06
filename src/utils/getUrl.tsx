const CryptoJS = require("crypto-js");

const getUrl = (characterName: string) => {
    const ts = new Date().getTime();
    const PUBLIC_KEY = "9331073afdf66ff1ce18f712ab7c6d56";
    const PRIV_KEY = "4c6f2a076090f90cdd3e5bfdc5a7d650bcf343b7";
    const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

    return `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${characterName}&apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}`
}

export default getUrl;
