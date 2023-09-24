import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


// useLocation is a function that let's us interact with the url. we have to call that function.



const SingleBook = ({books}) => {




    const [bookToShow, setBookToShow] = useState(null)

  // get the id from url
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const bookIdFromUrl = params.get('bookId')
    console.log(bookIdFromUrl);

    // look through books array for the right book, it's in useEffect cuz we just want to show it in the first render
    useEffect(() => {

        let myBook = books.find((book) => book.id === bookIdFromUrl);
        console.log(myBook);
        if(myBook !== undefined) {
            setBookToShow(myBook)
        }

    }, [books])

    // show that books info
    return (
        <div className='page-container'>
            <h1>SIngle Book page</h1>
            {bookToShow ? <div><h1>{bookToShow.title}</h1>
            <p>Book Pages: {bookToShow.pages}</p>
            <p>Book Author: {bookToShow.author}</p></div>: <></> }

        </div>
    )
};

export default SingleBook;
