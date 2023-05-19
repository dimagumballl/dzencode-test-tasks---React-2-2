import style from './Layout.module.css'
import TopMenu from '../TopMenu/TopMenu';
import NavigationMenu from '../NavigationMenu/NavigationMenu'


function Layout(props) {
    return (
      <div className={style.Layout}>
        <div className={style.TopMenu}>
          <TopMenu/>
        </div>
        <div className={style.WorkSpace}>
            <div className={style.NavigationMenu}>
              <NavigationMenu/>
            </div>
            <div className={style.Children}>
              {props.children}
            </div>
        </div>
      </div>
    );
  }
  
  export default Layout;
  