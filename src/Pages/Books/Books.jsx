
import Book from '../Book/Book';

const Books = ({data}) => {





    return (
       <div className='pt-25'>
        <h1 className='text-center playfair-display text-4xl font-bold pb-15'>Books</h1>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            
            {
             data.map((book)=><Book  key={book.bookId} book={book}></Book>)
            }
         </div>
       </div>
    );
};

export default Books;