import React,{Component} from 'react';
import styles from './index.module.scss';
import booksData from '../books.json';
import BookLists from '../../components/BookLists'
function Home(){
    return (
        <div className={styles.home}>
            <ul className={styles.left}>
                <li >書籍種類</li>
            </ul>
            <div className={styles.right}>
                <BookLists dataSource={booksData.data} />
                <button></button>
            </div>
        </div>
    );
}

export default Home;