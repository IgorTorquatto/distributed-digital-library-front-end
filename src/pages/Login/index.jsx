import styles from './login.module.css';
import LoginNubi from '../../assets/nubi01_login.png';
import NubiLogo from '../../assets/Nubi Logo.png'


export const Login = () => {

  return (
    <>
    <div className={styles.Logincontainer}>
      <div className={styles.LoginLeft}>
        <img src={LoginNubi} alt="nubi_login" className={styles.NubiLoginImg}/>
        {/*<h1>É bom tê-lo de volta!</h1>*/}
      </div>

      <div className={styles.loginRight}>
        <img src={NubiLogo} alt="logo" className={styles.NubiLogoImg} />
        <h2>Entrar</h2>
        <p>Para ter acesso à sua conta, informe o seu endereço de E-mail e Senha!</p>

        <form className={styles.loginForm}>
          <input type="email" placeholder="Digite seu endereço de e-mail..."/>
          <input type="password" placeholder="Digite sua senha..."/>
          <a href="/register" className={styles.registerLink}>Não tem cadastro? Crie uma conta</a>
          <button type="submit">Entrar</button>
        </form>

      </div>

    </div>

    
    
    </>
  );
  
};