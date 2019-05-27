const bookController = require('../controllers/book.controller');

const routes = [
    {
        method: 'GET',
        url: '/api/books',
        handler: bookController.getBooks
    },
    {
        method: 'GET',
        url: '/api/books/:id',
        handler: bookController.getSingleBook
    },
    {
        method: 'POST',
        url: '/api/books',
        handler: bookController.addBook
    },
    {
        method: 'PUT',
        url: '/api/books/:id',
        handler: bookController.updateBook
      },
      {
        method: 'DELETE',
        url: '/api/books/:id',
        handler: bookController.deleteBook
      }
]

module.exports = routes;