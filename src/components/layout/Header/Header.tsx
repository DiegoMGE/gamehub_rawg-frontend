import style from './Header.module.css'
import Logo from '../../../assets/logo.webp'
import SearchInput from '@/components/common/SearchInput/SearchInput'

interface SearchInputProps { 
  onSearch: (searchText: string) => void;
}

const Header = ({ onSearch }:SearchInputProps) => {
  return (
    <header className={style.container}>
        <img src={Logo} alt="The logo for my project!" className={style.logo} />
        <SearchInput onSearch={onSearch} />
    </header>
  )
}

export default Header