const imageSearch = require('image-search-google');

async function searchGoogleImages(titleToSearch) {

    console.log("Searching article title on google...")

    const client = new imageSearch(String(process.env.CSE_ID), String(process.env.GOOGLE_API_KEY));
    const options = { page: 1 };
    const imageResults = await client.search(titleToSearch, options)

    console.log("Found image -> " + imageResults[0].url)

    return(imageResults[0].url)
}

module.exports = { searchGoogleImages }