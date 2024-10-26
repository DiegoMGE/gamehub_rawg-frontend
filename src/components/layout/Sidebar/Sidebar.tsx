import GenreList from '@/components/common/GenreList/GenreList'
import style from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={style.cntSidebar}>
      <GenreList />
    </div>
  )
}

export default Sidebar