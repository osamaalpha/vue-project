const myApi = require('../myApi')

module.exports = (request, response) => {
  const {
    price,
    bedrooms,
    bathrooms,
    size,
    streetName,
    houseNumber,
    numberAddition,
    zip,
    city,
    constructionYear,
    hasGarage,
    description
  } = request.body
  myApi
    .post('', {
      price,
      bedrooms,
      bathrooms,
      size,
      streetName,
      houseNumber,
      numberAddition,
      zip,
      city,
      constructionYear,
      hasGarage,
      description
    })
    .then((res) => {
      return response.send(res.data)
    })
}
