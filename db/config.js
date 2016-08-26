module.exports = {
    "production": {
        "url": process.env.MONGODB_URI
    },
    "test": {
        "url": "mongodb://localhost/address-book-test"
    },
    "development": {
        "url": "mongodb://localhost/address-book-test-dev"
    }
}
