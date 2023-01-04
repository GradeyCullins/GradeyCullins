export const shortAddress = (address: string, decimals = 4): string => {
  if (!address) {
    return ''
  }

  return address.substring(0, decimals) + '...' + address.slice(address.length - decimals)
}
