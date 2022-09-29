export const getFormulation = (num: number) => {
  if (num === 0) return 'без пересадок'
  if (num === 1) return `${num} пересадка`
  if (num <= 4) return `${num} пересадки`
  return `${num} пересадок`
}

export const getTimeZone = (zone: string) => {
  switch (zone) {
    case 'MOW':
      return 180 * 60 * 1000

    case 'HKT':
      return 420 * 60 * 1000

    default:
      return 0
  }
}

export const getTime = (time: string) => {
  return time.match(/\d\d:\d\d/g)?.join('')
}

export const getDestinationTime = (date: string, duration: number) => {
  const getDateWithDuration = new Date(date).getTime() + duration * 60 * 1000
  const dateToStr = new Date(getDateWithDuration).toISOString()
  return dateToStr.match(/\d\d:\d\d/g)?.join('')
}

export const formatDuration = (duration: number) => {
  const hours = Math.trunc(duration / 60)
  const minutes = duration % 60 < 10 ? `0${duration % 60}` : duration % 60

  return `${hours}ч ${minutes}м`
}
