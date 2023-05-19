import style from './TopMenu.module.css'
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Socket from '../Socket/Socket';


function TopMenu(props) {
    return (
      <div className={style.TopMenu}>
        <div className={style.TopMenu_50}>
            <div className={style.Logo}>
                <Logo/>
            </div>
            <div className={style.SearchBar}>
                <SearchBar/>
            </div>
        </div>
        <div className={style.TopMenu_05}>
          <Socket/>
        </div>
      </div>
    );
  }
  
  export default TopMenu;
  