import React from "react";
import './HeaderPage.module.css';

type headerProps = {
    Login : React.ReactNode;
}

function HeaderPage(props:headerProps){
    if(!props.Login as boolean){
        return(
            <header>
            <div className="">
                <a href="/">
                    <img src="" alt="logan" />
                    <h2>PokeCup</h2>
                </a>
            </div>
            <div className="">
                <nav>
                    <a href="/TCG"><h2>TCG</h2></a>
                    <a href="/POKEDEX"><h2>POKEDEX</h2></a>
                </nav>
                <a>
                    <a href="/login">login</a>
                </a>
            </div>
        </header>
        )
    }else{
        return(
            <header>
            <div className="">
                <a href="/">
                    <img src="" alt="logan" />
                    <h2>PokeCup</h2>
                </a>
            </div>
            <div className="">
                <nav>
                    <a href="/TCG"><h2>TCG</h2></a>
                    <a href="/VGC"><h2>VGC</h2></a>
                    <a href="/POKEDEX"><h2>POKEDEX</h2></a>
                </nav>
                <a>
                    <a href="#">Menu</a>
                </a>
            </div>
            </header>
        )
    }
}

export default HeaderPage;