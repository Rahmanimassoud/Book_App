import { Link } from "react-router-dom";



const Library = ({books}) => {


    return (
        <div className='page-container'>
            <h1>Library Page</h1>
            {books.map((eachbook, indx) => {
                return <Link to={`/single_book/?bookId=${eachbook.id}`} key={JSON.stringify(eachbook + indx)}><div>{eachbook.title}</div></Link> 
            })}
        </div>
    )
};

export default Library;
