const formatPrice = (price: number): string => {
  const regEx: RegExp = /^(\d\d)/
  const match: RegExpMatchArray | null = price?.toString().match(regEx)

  return price.toString().replace(regEx, `${match![1]} `)
}

export default formatPrice
