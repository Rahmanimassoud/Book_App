
import { useState } from 'react';
import './index.css'

const NewBook = ({books, setBooks}) => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState(1)
    const [submitSuccess, setSubmitSuccess] = useState(false)




    // function for generating a random id in order to use in the url for we can show, the clicked book using this id.

    const generateId = (length = 10) => {
        const chars = "AJHASDHHSAHJHASFHJKHAsjhhjhshHJASH125489617";
        let result = '';
        for(let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return result;
    }


    const handelSubmit = (e) => {
        e.preventDefault();
        let newBookArray = [...books, {
            title: title,
            author: author,
            pages: pages,
            id: generateId()   //here we hare gaving the books a random id, calling the random id generator function.
        }]

        localStorage.setItem('books', JSON.stringify(newBookArray))
        setBooks(newBookArray)
        setAuthor("")
        setPages("")
        setTitle("")
        setSubmitSuccess(true)
    }


    return (
        <div className='page-container'>
            <h1>Enter a book!</h1>
            {submitSuccess ? <p style={{color: "green"}}>Your book was submitted</p> : "please submit a book"}

            <form onSubmit={handelSubmit} className="form">
                <label htmlFor="title">Title </label>
                <input name='title' type="text" value={title} onChange={(e)=> {setTitle(e.target.value), setSubmitSuccess(false)}}/>

                <label htmlFor="author">Author </label>
                <input name='author' type="text" value={author} onChange={(e)=> {setAuthor(e.target.value)}}/>

                <label htmlFor="pages">Pages </label>
                <input name='pages' type="number" value={pages} onChange={(e)=> {setPages(e.target.value)}}/>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
};

export default NewBook;
