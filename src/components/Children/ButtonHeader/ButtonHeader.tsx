import React, { JSX } from "react";
import style from './ButtonHeader.module.css';

type ButtonHeaderProps = {
    name: React.ReactNode;
    hrf: string;
    active: boolean;
}

function ButtonHeader(props: ButtonHeaderProps): JSX.Element {
    let name = props.name;
    let hrf = props.hrf as string;
    let active = props.active || false;
    return (
        <a href={hrf} className={`${style.buttonHeader} ${active ? style.active : ''}`}>
            {name}
        </a>
    );

}

export default ButtonHeader;