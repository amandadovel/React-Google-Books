const axios = require("axios");
const db = require("../models");
require('dotenv').config();

// Defines methods for googleController
// findAll searches the API and returns only the entries that haven't been saved
// Makes sure the books returned from the API from the API all contain a title, author, link, description, and image

module.exports = {
  findAll: (req, res) => {
    const title = req.query.title.replace(/\s/g, "+");
    const apiKey = process.env.REACT_APP_GOOGLE_APIKEY;

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${apiKey}`)
      .then(results =>
        results.data.items.filter(result =>
          result.volumeInfo.title &&
          result.volumeInfo.infoLink &&
          result.volumeInfo.authors &&
          result.volumeInfo.description &&
          result.volumeInfo.imageLinks
        )
      )
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId !== apiBook.id)
          )
        )
      )
    .then(books => res.send(books))
    .catch(err => res.status(422).json(err));
  }
};