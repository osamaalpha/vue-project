const myApi = require('../myApi')

module.exports = (request, response) => {
  myApi
    .delete(`/${Number(request.query.id)}`)
    .then((res) => {
      return response.send(res.data)
    })
    .catch((err) => console.error(err))
}
