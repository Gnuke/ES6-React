import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent.jsx';

function App() {
  const students = [
    { name: 'John Doe', age: 20, major: 'Computer Science' },
    { name: 'Jane Smith', age: 22, major: 'Mathematics' },
    { name: 'Alice Johnson', age: 19, major: 'Physics' },
    { name: 'Bob Brown', age: 21, major: 'Chemistry' }
  ];

  const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }
  ];

  return (
    <div>
      {/* {students.map((student, index) => (
        <Student key={index} {...student} />
      ))}

      <br />

      {books.map((book, index) => (
        <BookList key={index} {...book} />
      ))}
      {/* <BookList /> */}
      {/* <Counter /> */}

      <MyComponent />

    </div>
  )
}

export default App
