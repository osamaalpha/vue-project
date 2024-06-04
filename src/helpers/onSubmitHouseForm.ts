import axios from 'axios'

export const onSubmitHouseForm = (house, endPoint, houseId, router) => {
  const formData = new FormData()
  const config = {
    headers: { 'content-type': 'multipart/form-data' }
  }
  const {
    streetName,
    houseNumber,
    zip,
    city,
    price,
    size,
    hasGarage,
    bedrooms,
    bathrooms,
    constructionYear,
    description,
    houseImage
  } = house

  formData.append('image', houseImage)
  axios
    .post(`${endPoint}`, {
      streetName,
      houseNumber,
      zip,
      city,
      price,
      size,
      hasGarage,
      bedrooms,
      bathrooms,
      constructionYear,
      description
    })
    .then((res) => {
      const id = houseId || res.data.id
      if (res.status === 200) {
        axios.post(`/api/uploadImage?id=${id}`, formData, config).then((res) => {
          if (res.status === 200) {
            router.push(`/house/${id}`)
          } else {
            console.error(res)
            router.push(`/error`)
          }
        })
      } else {
        console.error(res)
        router.push(`/error`)
      }
    })
}
