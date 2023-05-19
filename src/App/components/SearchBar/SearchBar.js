import style from './SearchBar.module.css'


function SearchBar(props) {
    return (
      <div className={style.SearchBar}>
          <input value={""} readOnly={true}></input>
      </div>
    );
  }
  
  export default SearchBar;