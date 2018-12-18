export function generateDays(instance, currentDay, day) {
  // Generating all days
  let days = []
  do {
    days.push(currentDay)
    currentDay = instance.moment(currentDay).add(1, 'days')
  } while (currentDay.month() + 1 === instance.getMonth)

  // Add pervious days to start
  const MONDAY = 1
  currentDay = instance.moment(days[0])

  if (currentDay.day() !== MONDAY) {
    do {
      currentDay = instance.moment(currentDay).subtract(1, 'days')
      days.unshift(currentDay)
    } while (currentDay.day() !== MONDAY)
  }

  // Add next month days to end
  const SUNDAY = 0
  currentDay = instance.moment(days[days.length - 1])

  if (currentDay.day() !== SUNDAY) {
    do {
      currentDay = instance.moment(currentDay).add(1, 'days')
      days.push(currentDay)
    } while (currentDay.day() !== SUNDAY)
  }
  return days
}

export function generateWeeks(days) {
  let weeks = []
  let week = []

  for (let day of days) {
    week.push(day)
    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  }

  return weeks
}
