import PageBuilder from "../../components/PageBuilder/PageBuilder";
import Style from "./PageNotFound.module.css";

function PageNotFound (){
    let main = (
        <main>
            <p>página não encontrada por favor volte para o menu principal</p>
            <h1>{`Error 404 :(`}</h1>
            <p>é provavel que a página esteja em contrução volte mais tarde</p>
            <button><a href="/">Home</a></button>
        </main>
    )
    return(
        <PageBuilder Element={main}/>
    )
}

export default PageNotFound;