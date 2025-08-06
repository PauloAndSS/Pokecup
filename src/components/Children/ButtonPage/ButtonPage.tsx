import React, { JSX } from "react";
import style from './ButtonPage.module.css';

type ButtonPageProps = {
    name: React.ReactNode;
    hrf: React.ReactNode;
}

function ButtonPage(props:ButtonPageProps): JSX.Element {
    let hrf = props.hrf as string;
    let name = props.name;
  return (
      <a href={hrf} className={style.buttonPage}>
        {name}
        </a>
  );
}

export default ButtonPage;