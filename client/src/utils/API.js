import axios from "axios";

export default {
    // Get books from google API
    getBooks: title => {
        return axios.get("/api/google", { params: { title } });
    },

    // Get all saved books
    getSavedBooks: () => {
        return axios.get("/api/books");
    },

    // Deletes saved books with id
    deleteBook: id => {
        return axios.delete("/api/books/" + id);
    },

    // Saves a book to the database
    saveBook: bookData => {
        return axios.post("/api/books", bookData);
    }

};