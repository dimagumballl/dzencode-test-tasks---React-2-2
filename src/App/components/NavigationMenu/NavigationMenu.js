import style from './NavigationMenu.module.css'
import avatar from '../../../style/image/avatar.png'
import seting from '../../../style/image/seting.png'
import {Link} from 'react-router-dom'



function NavigationMenu(props) {
    return (
      <div className={style.NavigationMenu}>
        <div className={style.AvatarConteiner}>
          <div className={style.Avatar}>
            <img src={avatar}></img>
          </div>
          <div className={style.AvatrSeting}>
            <img src={seting}>
            </img>
          </div>
        </div>
        <div className={style.ListLinks}>
          <div className={style.Link}>
            <Link to='/orders'>ЗАКАЗИ</Link>
            
          </div>

          <div className={style.Link}>
            <Link to='/'>ПРОДУКТЫ</Link>
            
          </div>
        </div>
      </div>
    );
  }
  
  export default NavigationMenu;