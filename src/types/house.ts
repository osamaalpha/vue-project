export type House = {
  constructionYear: number
  createdAt: string
  description: string
  hasGarage: boolean
  id: number
  image: string
  location: location
  madeByMe: boolean
  price: number
  rooms: Record<string, number>
  size: number
}

type location = {
  street: string
  city: string
  houseNumber: number
  houseNumberAddition: string
  zip: string
}
