import { JSX } from "react";
import FooterPage from "./FooterPage/FooterPage";
import HeaderPAge from "./HeaderPage/HeaderPage";

type PageBuilderProps = {
  children: React.ReactNode;
};

function PageBuilder({children}:PageBuilderProps){
    return(
        <>
        <HeaderPAge/>
        {children}
        <FooterPage/>
        </>
    )
}

export default PageBuilder;