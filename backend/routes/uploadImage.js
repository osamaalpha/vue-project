const myApi = require('../myApi')

module.exports = (request, response) => {
  myApi.post(`/${Number(request.query.id)}/upload`).then((res) => {
    return response.send(res.data)
  })
}
