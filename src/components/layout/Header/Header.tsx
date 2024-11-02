import style from './Header.module.css'
import Logo from '../../../assets/logo.webp'
import SearchInput from '@/components/common/SearchInput/SearchInput'

const Header = () => {
  return (
    <header className={style.container}>
        <img src={Logo} alt="The logo for my project!" className={style.logo} />
        <SearchInput />
    </header>
  )
}

export default Header