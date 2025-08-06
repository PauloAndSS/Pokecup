import { JSX } from "react";
import PageBuilder from "../../components/Parents/PageBuilder/PageBuilder";
import style from './Login.module.css';

function Login():JSX.Element {
  let mainContent = (
        <main>
        <div className={style["login-page"]}>
            <h1>Login Page</h1>
            <p>Please enter your credentials to log in.</p>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button
                type="submit"
                onClick={() => {
                    sessionStorage.setItem('loggedIn', 'true');
                    window.location.href = '/';
                }}
                >
                Login
                </button>
            </form>
        </div>
        </main>
    );
  return (
    <PageBuilder main={mainContent}/>
  );
}

export default Login;