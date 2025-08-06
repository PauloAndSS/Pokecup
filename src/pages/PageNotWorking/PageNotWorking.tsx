import { JSX } from "react";
import PageBuilder from "../../components/Parents/PageBuilder/PageBuilder";

function PageNotWorking ():JSX.Element {
    let mainContent = (
        <main>
            <h1>This Page is Not Working Back later {":("}</h1>
        </main>
    );
  return (
    <PageBuilder main={mainContent}/>
  );
}

export default PageNotWorking;