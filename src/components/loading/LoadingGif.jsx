import React from "react";

function LoadingGif () { 
    const loadingGif = require("loading-gif.gif")
    return (
    <>
        <img src={loadingGif} alt="Cargando..."/>
    </>
    )
};

export default LoadingGif;