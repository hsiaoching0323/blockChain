import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import styles from './book.module.scss'

function BookLists({dataSource}){
    const BuyBook = () =>{
        
    }
    return (
        <div className={styles.book}>
            <ul>
                {
                    dataSource && dataSource.map(item=>
                        <li key={item.id}>
                            <Link to={`/books/${item.id}`}>
                                <div className = {styles.cover}>
                                    <img src={item.cover}></img>
                                </div>
                                <div className={styles.workbrief}>
                                    <h3>{item.title}</h3>
                                    <p>{item.brief}</p>
                                    {/* <div className={styles.tag}>
                                       {item.tags && item.tags.map(i=><span key={i}>{i}</span>)}  
                                    </div> */}
                                    <div>price:{item.price}</div>
                                    <button onClick = {BuyBook}>購買書籍</button>
                                </div>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default BookLists;