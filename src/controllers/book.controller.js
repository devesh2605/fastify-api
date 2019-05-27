const boom = require('boom');
const Book = require('../models/book.model');

exports.getBooks = async (req, reply) => {
    try {
        const books = await Book.find({});
        if (books) {
            reply
                .code(200)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send({ books: books })
        } else {
            return boom.notFound('No book found');
        }
    } catch (error) {
        throw boom.boomify(error);
    }
}

exports.getSingleBook = async (req, reply) => {
    try {
        let id = req.params.id;
        let book = await Book.findById(id);
        if (book) {
            reply
                .code(200)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send(book)
        } else {
            return boom.notFound('No book found');
        }
    } catch (error) {
        throw boom.boomify(error);
    }
}

exports.addBook = async (req, reply) => {
    try {
        const book = new Book(req.body);
        const result = await book.save();
        if (result) {
            reply
                .code(201)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send(result)
        }
    } catch (error) {
        throw boom.boomify(error);
    }
}

exports.updateBook = async (req, reply) => {
    try {
        const id = req.params.id;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (updatedBook) {
            reply
                .code(200)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send(updatedBook)
        } else {
            return boom.notFound('No book found');
        }
    } catch (error) {
        throw boom.boomify(error);
    }
}

exports.deleteBook = async (req, reply) => {
    try {
        const id = req.params.id;
        const result = await Book.findByIdAndRemove(id);
        if (result) {
            reply
                .code(200)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send({ 'message': 'Book deleted successfully' });
        } else {
            return boom.notFound('No book found');
        }
    } catch (error) {
        throw boom.boomify(error);
    }
}