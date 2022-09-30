import { ITicket } from '../types/'

enum CheckboxesEnum {
  no,
  one,
  two,
  three,
}

declare type CheckboxType = keyof typeof CheckboxesEnum

export const filterTickets = (tickets: ITicket[], checkboxes: string[]): ITicket[] => {
  const returnedArr: ITicket[] = []
  checkboxes.forEach((filter: string) => {
    const filteredTickets = tickets.filter((ticket) => {
      const [first] = ticket.segments
      return first.stops.length === CheckboxesEnum[filter as CheckboxType]
    })

    returnedArr.push(...filteredTickets)
  })

  return returnedArr
}

export const sortTickets = (tickets: ITicket[] | [], sort: string): ITicket[] => {
  switch (sort) {
    case 'cheap':
      return tickets.sort((a, b) => +a.price - +b.price)

    case 'fast':
      return tickets.sort((a, b) => {
        const first = a.segments[0].duration + a.segments[1].duration
        const second = b.segments[0].duration + b.segments[1].duration

        return first - second
      })

    case 'optimal':
      return tickets.sort((a, b) => {
        const first = a.segments[0].duration + a.segments[1].duration + +a.price
        const second = b.segments[0].duration + b.segments[1].duration + +b.price

        return first - second
      })

    default:
      return tickets
  }
}
