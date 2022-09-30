export const getFormulation = (num: number): string => {
  if (num === 0) return 'без пересадок'
  if (num === 1) return `${num} пересадка`
  if (num <= 4) return `${num} пересадки`
  return `${num} пересадок`
}

export const getTime = (time: string): string | undefined => {
  return time.match(/\d\d:\d\d/g)?.join('')
}

export const getDestinationTime = (date: string, duration: number): string | undefined => {
  const getDateWithDuration = new Date(date).getTime() + duration * 60 * 1000
  const dateToStr = new Date(getDateWithDuration).toISOString()
  return dateToStr.match(/\d\d:\d\d/g)?.join('')
}

export const formatDuration = (duration: number): string => {
  const hours = Math.trunc(duration / 60)
  const minutes = duration % 60 < 10 ? `0${duration % 60}` : duration % 60

  return `${hours}ч ${minutes}м`
}
