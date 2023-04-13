import styles from './SearchBar.module.css';

function SearchBar({action}) {
    return ( 
        <input onChange={(e) => action(e.target.value)} type="text" className={styles.eventInput}/>
     );
}

export default SearchBar;