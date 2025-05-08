import styles from './register.module.css';
import LoginNubi2 from '../../assets/nubi02_login.png';
import NubiLogo from '../../assets/Nubi Logo.png'


export const Register = () => {

  return (
    <>
    <div className={styles.Logincontainer}>
      <div className={styles.LoginLeft}>
        <img src={LoginNubi2} alt="nubi2_login" className={styles.NubiLoginImg}/>
      </div>

      <div className={styles.loginRight}>
        <img src={NubiLogo} alt="logo" className={styles.NubiLogoImg} />
        <h2>Inscrever-se</h2>
        <p>Realize o seu cadastro e tenha acesso a todas as funcionalidades que o NUBI oferece!</p>

        <div className={styles.formScrollable}>
          <form className={styles.loginForm}>
            <input type="email" placeholder="Digite seu endereço e-mail..." />
            <input type="password" placeholder="Digite sua senha..." />
            <input type="password" placeholder="Digite novamente a sua senha..." />
            <input type="text" placeholder="Nome Completo" />
            <input type="text" placeholder="Nome de Usuário" />
            <input type="text" placeholder="CPF" />
          </form>
        </div>

        <a href="/" className={styles.link}>Fazer Login</a>
        <button type="submit" className={styles.button}>Confirmar</button>


        <p className={styles.terms}>
          Ao continuar você concorda com os <a>Termos de Serviço</a> e <a>Política de privacidade</a>
        </p>

      </div>

    </div>

    
    
    </>
  );
  
};