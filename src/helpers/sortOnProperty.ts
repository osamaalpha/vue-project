export const sortOnProperty = (array: any, property: string | number, descending: boolean) => {
  if (!property || array.length < 1) return

  return array?.sort((a: any, b: any) =>
    descending
      ? parseFloat(a[property]) - parseFloat(b[property])
      : parseFloat(b[property]) - parseFloat(a[property])
  )
}
