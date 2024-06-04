const myApi = require('../myApi')
const fs = require('fs')
const FormData = require('form-data')
const removeFilesFromFolder = require('../helpers/removeFilesFromFolder')

module.exports = (request, response) => {
  const directory = './public/images'

  var files = fs.readdirSync(directory)
  const formData = new FormData()

  formData.append('image', fs.createReadStream(`${directory}/${files[0]}`))

  myApi
    .post(`/${Number(request.query.id)}/upload`, formData, {
      headers: {
        ...formData.getHeaders()
      }
    })
    .then((res) => {
      return response.send(res.data)
    })
    .catch(function (error) {
      console.error(error)
    })
    .then(() => {
      removeFilesFromFolder(directory)
    })
}
