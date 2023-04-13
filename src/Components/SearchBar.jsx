import styles from './SearchBar.module.css';

function SearchBar() {
    return ( 
        <input type="text" className={styles.eventInput}/>
     );
}

export default SearchBar;