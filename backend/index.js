const express = require('express')
const createHouse = require('./routes/createHouse')
const getHouses = require('./routes/getHouses')
const bodyParser = require('body-parser')
const getHouse = require('./routes/getHouse')
const uploadImage = require('./routes/uploadImage')
const deleteHouse = require('./routes/deleteHouse')
const editHouse = require('./routes/editHouse')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({ storage })

const app = express()
const port = 8080
app.use(bodyParser.json())

app.use('/api/houses', getHouses)

app.use('/api/createHouse', createHouse)

app.use('/api/getHouse', getHouse)

app.use('/api/uploadImage', upload.single('image'), uploadImage)

app.use('/api/deleteHouse', deleteHouse)

app.use('/api/editHouse', editHouse)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
