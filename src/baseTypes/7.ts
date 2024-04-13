/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum IsWeekend {
  monday = 'weekday',
  tuesday = 'weekday',
  wednesday = 'weekday',
  thursday = 'weekday',
  friday = 'weekday',
  saturday = 'weekend',
  sunday = 'weekend',
}

function isWeekend(day: IsWeekend): boolean {
  return IsWeekend[day] === 'weekend';
}
