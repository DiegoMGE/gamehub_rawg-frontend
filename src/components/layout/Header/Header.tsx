import style from './Header.module.css'
import Logo from '../../../assets/logo.webp'

const Header = () => {
  return (
    <header className={style.container}>
        <img src={Logo} alt="The logo for my project!" className={style.logo} />
        <nav>NAVIGATION</nav>
    </header>
  )
}

export default Header