import { JSX } from 'react';
import style from './HeaderPage.module.css';
import ButtonHeader from '../../Children/ButtonHeader/ButtonHeader';

function HeaderPAge():JSX.Element {
    function btAtivo(path:string): boolean {
        return window.location.pathname === path;
    }

    let HeaderNav = [
        { name: "Home", hrf: "/", active: btAtivo('/') },
        { name: "TCG", hrf: "/TCG", active: btAtivo('/TCG') },
        { name: "VGC", hrf: "/VGC", active: btAtivo('/VGC') }
    ];

    var HeaderLogado: { name: string; hrf: string; active: boolean }[] = [];

    if(sessionStorage.getItem('loggedIn') === 'true') {
        HeaderLogado = [
            { name: "Profile", hrf: "/Profile", active: btAtivo('/Profile') },
            { name: "Logout", hrf: "/Logout", active: btAtivo('/Logout') },
        ];
    }else {
        HeaderLogado = [
            { name: "Login", hrf: "/Login", active: btAtivo('/Login') },
            { name: "Register", hrf: "/Register", active: btAtivo('/Register') }
        ];
    }

  return (
    <header>
        <div className={style.logo}>
            <img src="/logo.png" alt="Pokecup Logo" />
            <h1>Pokecup</h1>
        </div>
        <div className={style.navHeader}>
            <nav>
                    {HeaderNav.map((item) => (
                        
                            <ButtonHeader name={item.name} hrf={item.hrf} active={item.active} />
                        
                    ))}
            </nav>
            <div className={style.login}>
                {HeaderLogado.map((item) => (
                            <ButtonHeader name={item.name} hrf={item.hrf} active={item.active} /> 
                ))}
            </div>
        </div>
    </header>
  );
}

export default HeaderPAge;