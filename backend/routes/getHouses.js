const myApi = require('../myApi')

module.exports = (request, response) => {
  myApi
    .get('')
    .then((res) => {
      return response.send(res.data)
    })
    .catch((err) => console.error(err))
}
