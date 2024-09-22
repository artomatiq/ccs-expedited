const nationalHolidays = [
    '2023-09-04', // Labor Day 2023
    '2023-11-23', // Thanksgiving Day 2023
    '2023-12-25', // Christmas Day 2023
    '2024-01-01', // New Year's Day 2024
    '2024-01-15', // Martin Luther King Jr. Day 2024
    '2024-02-19', // Presidents' Day 2024
    '2024-05-27', // Memorial Day 2024
    '2024-06-19', // Juneteenth 2024
    '2024-07-04', // Independence Day 2024
    '2024-09-02', // Labor Day 2024
];

function isNationalHoliday(date) {
    const dateString = date.toISOString().split('T')[0];
    return nationalHolidays.includes(dateString);
}

function getRandomTime(date, startHour, endHour) {
    const start = new Date(date);
    start.setHours(startHour, 0, 0, 0);
    const end = new Date(date);
    end.setHours(endHour, 0, 0, 0);
    const randomTime = new Date(start.getTime() + Math.random() * (end - start));
    return randomTime;
}