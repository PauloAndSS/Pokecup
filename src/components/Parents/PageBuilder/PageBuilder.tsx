import style from './PageBuilder.module.css';
import FooterPage from "../FooterPage/FooterPage";
import HeaderPAge from "../HeaderPage/HeaderPage";
import { JSX } from 'react';

type propsPageBuilder = {
    main: React.ReactNode;
}

function PageBuilder(props:propsPageBuilder):JSX.Element {
    const { main } = props;
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Pokecup</title>
            </head>
            <body>
                <HeaderPAge/>
                {main}
                <FooterPage/>
            </body>
        </html>
    );
}

export default PageBuilder;