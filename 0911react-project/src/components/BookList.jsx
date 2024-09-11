import React from 'react'

export default function BookList({ title, author, year }) {
  return (
    <div>
      <ul>
        <li>제목 : {title}</li>
        저자 : {author}<br />
        출판년도 : {year}
      </ul>
    </div>
  )
}

// export default function BookList() {
//   const books = [
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//     { title: '1984', author: 'George Orwell', year: 1949 },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }
//   ]
//   console.log('BL에서 : ' + books);
//   return (
//     <div>
//       <Book />
//     </div>
//   )
// }
