import React from "react";
import './PageBuilder.module.css';
import HeaderPage from "../HeaderPage/HeaderPage";
import FooterPage from "../FooterPage/FooterPage";

type pageProps = {
    Element : React.ReactNode;
}

function PageBuilder (props:pageProps){
    let content = props.Element;
    return(
       <html lang="en">
        <head>
            <title>Pokecup</title>
        </head>
        <body>
            <HeaderPage Login={false}/>
            {content}
            <FooterPage/>
        </body>
        </html>
    )
}

export default PageBuilder;