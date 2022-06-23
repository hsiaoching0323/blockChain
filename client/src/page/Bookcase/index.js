import React,{Component} from 'react'
import BookBuyerLists from '../../components/BookBuyerLists'
import booksData from '../books.json'

export default () =>{
    return <div>
            <BookBuyerLists dataSource={booksData.data} />
        </div>
}