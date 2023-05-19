import style from './Socket.module.css'
import clock from '../../../style/image/clock.png'
import {useEffect, useState} from 'react'
//import { socket } from '../../../socket'

function Socket(props) {
  const [Time, setTime]=useState({})
  const [count, setcount] = useState(0)

  useEffect(()=>{
    let interval = setInterval(()=>{
      let temp = count+1
      setcount(temp)
    },(1000))

  },[count])

  useEffect(() => {
    let today = new Date()
    let year = today.toLocaleString('en-US', {year: 'numeric'});
    let month = today.toLocaleString('en-US', {month: 'long'});
    let day = today.toLocaleString('en-US', {day: 'numeric'});
    let clock = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+" "
    setTime({
      ...Time,
      year:year,
      month:month,
      day:day,
      clock:clock
    })
    
  },[count]);



    return (
      <div className={style.Socket}>
        <div className={style.row}>
          <div className={style.column}>
            Today
          </div>
          <div className={style.column}>
            VISITOR 1
          </div>
        </div>
        <div  className={style.row}>
          <div className={style.column}>
            {Time.day!==undefined?Time.day+" ":""} {Time.month!==undefined?Time.month+", ":""} {Time.year!==undefined?Time.year+" ":""}
          </div>
          <div className={style.column}>
            <div className={style.columnClock}>
              <img src={clock}>
              </img>
            </div>
            <div className={style.columnClock}>
              {Time.clock}
            </div>
              
          </div>
        </div>
      </div>
    );
  }
  
  export default Socket;