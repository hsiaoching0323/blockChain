import React, { useEffect, useState } from "react";
import Axios from "axios";

function Login() {
  
  const [bookTitle,setBookTitle] = useState("");
  const [author,setAuthor] = useState("");
  const [IssueDate, setIssueDate] = useState([]);
  const [version, setVersion] = useState(0);
  const [price, setPrice] = useState(0);
  const [bookList, setBookList] = useState([]);
  const [category, setCategory] = useState("");
  
  
  const addbook = ()=>{
    Axios.post('http://localhost:3001/addbook',{
      bookTitle: bookTitle,
      author: author,
      category: category,
      IssueDate: IssueDate,
      version: version,
      price: price
    }).then(()=>{
      setBookList([...bookList,{
      bookTitle: bookTitle,
      author: author,
      category: category,
      IssueDate: IssueDate,
      version: version,
      price: price
      }])
    })
  };
  const getBookList = ()=>{
    Axios.get("http://localhost:3001/book").then((response)=>{
      setBookList(response.data);
    })
  }
  return (
    <div className="Login">
      <label>Author</label>
      <input type="text" onChange={(event)=>{
        setAuthor(event.target.value);
      }}/><br/>

      <label>bookTitle</label>
      <input type="text" onChange={(event)=>{
        setBookTitle(event.target.value);
      }}/><br/>

      <label>Category</label>
      <input type="text" onChange={(event)=>{
        setCategory(event.target.value);
      }}/><br/>

      <label>Version</label>
      <input type="number" onChange={(event)=>{
        setVersion(event.target.value);
      }}/><br/>

      <label>Price</label>
      <input type="number" onChange={(event)=>{
        setPrice(event.target.value);
      }}/><br/>

      <label>IssueDate</label>
      <input type="date" onChange={(event)=>{
        setIssueDate(event.target.value);
      }}/><br/>
     
      <button onClick={addbook}>add book</button>
      <hr/>
      <div>
        <button onClick={getBookList}>show book</button>
        {bookList.map((val,key)=>{
          return <div>{val.bookTitle}</div>
        })}
      </div>
    </div>
  );
}
  
export default Login;
