import React from 'react';
import BookItem from '../components/bookitem';

const BookList = ({ books, selectedCategory, onItemSelect }) => {
  const filteredBooks = books.filter((book) =>
    selectedCategory === 'All' ? true : book.category === selectedCategory
  );

  return (
    <div>
      <h2>Books</h2>
      {filteredBooks.map((book, index) => (
        <BookItem
          key={`${index}-${book.category}`} // Unique key based on index and category
          book={book}
          onItemSelect={(selectedBook, isSelected) => onItemSelect(selectedBook, isSelected)}
        />
      ))}
    </div>
  );
};

export default BookList;


