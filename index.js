function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderBooks(data); 
      return data; 
    })
    .catch(error => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const bookList = document.getElementById('books');
  bookList.innerHTML = ''; 
  books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book.name;
    bookList.appendChild(li);
  });
}


document.addEventListener('DOMContentLoaded', fetchBooks);
