import type { House } from '../types/house'

export const searchResults = (searchQuery: string, houses: House[]) => {
  const searchQueryLowerCase = searchQuery.toLowerCase()
  const searchedHouses = houses?.filter(
    (house: House) =>
      house.location.street.toLowerCase().startsWith(searchQueryLowerCase) ||
      house.price.toString().toLowerCase().startsWith(searchQueryLowerCase) ||
      house.location.zip.toLowerCase().startsWith(searchQueryLowerCase) ||
      house.location.city.toLowerCase().startsWith(searchQueryLowerCase) ||
      house.size.toString().toLowerCase().startsWith(searchQueryLowerCase)
  )

  return searchedHouses
}
