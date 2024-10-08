const { create } = require('domain');
const fs = require('fs');
const path = require('path');

const nationalHolidays = [
    // 2023
    '2023-01-01', // New Year's Day 2023
    '2023-01-16', // Martin Luther King Jr. Day 2023
    '2023-02-20', // Presidents' Day 2023
    '2023-05-29', // Memorial Day 2023
    '2023-06-19', // Juneteenth 2023
    '2023-07-04', // Independence Day 2023
    '2023-09-04', // Labor Day 2023
    '2023-10-09', // Columbus Day 2023
    '2023-11-10', // Veterans Day (observed) 2023
    '2023-11-23', // Thanksgiving Day 2023
    '2023-12-25', // Christmas Day 2023

    // 2024
    '2024-01-01', // New Year's Day 2024
    '2024-01-15', // Martin Luther King Jr. Day 2024
    '2024-02-19', // Presidents' Day 2024
    '2024-05-27', // Memorial Day 2024
    '2024-06-19', // Juneteenth 2024
    '2024-07-04', // Independence Day 2024
    '2024-09-02', // Labor Day 2024
    '2024-10-14', // Columbus Day 2024
    '2024-11-11', // Veterans Day 2024
    '2024-11-28', // Thanksgiving Day 2024
    '2024-12-25', // Christmas Day 2024

    // 2025
    '2025-01-01', // New Year's Day 2025
    '2025-01-20', // Martin Luther King Jr. Day 2025
    '2025-02-17', // Presidents' Day 2025
    '2025-05-26', // Memorial Day 2025
    '2025-06-19', // Juneteenth 2025
    '2025-07-04', // Independence Day 2025
    '2025-09-01', // Labor Day 2025
    '2025-10-13', // Columbus Day 2025
    '2025-11-11', // Veterans Day 2025
    '2025-11-27', // Thanksgiving Day 2025
    '2025-12-25', // Christmas Day 2025
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

function formatDateTime(date) {
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function padZero(number) {
    return number.toString().padStart(2, '0');
}

function generateShiftsForDate(date) {
    const entries = [];
    const numberOfDrivers = 5;
    const drivers = [1, 2, 3, 4, 5]

    const numberOfDriversToday = Math.floor(Math.random() * numberOfDrivers) + 1;

    //assign random drivers for given date
    const driversWorkingToday = [];
    while (driversWorkingToday.length < numberOfDriversToday) {
        //pick random driver ID
        const randomIndex = Math.floor(Math.random() * drivers.length);
        const driverId = drivers[randomIndex];
        //don't add same driver twice in same day
        if(!driversWorkingToday.includes(driverId)) {
            driversWorkingToday.push(driverId);
        }
    }

    //create an entry for each driver
    driversWorkingToday.forEach(driverId => {
        //pick number of shifts
        const numberOfShifts = Math.random() < 0.8 ? 1 : 2; //20% of the time a driver works 2 shifts in same day

        //add each shift (max 2) to entries with its time data
        for (let i = 0; i < numberOfShifts; i++) {
            const clockIn = getRandomTime(date, 6, 16); //get random time between 6am and 4pm

            const shiftDurationHours = Math.floor(Math.random() * 5) + 3; //shift between 3 to 7 hours
            
            const clockOut = new Date(clockIn.getTime() + shiftDurationHours * 60 * 60 * 1000); //add shift duration to clock in time

            if (clockOut.getDate() !== clockIn.getDate()) {
                clockOut.setHours(23, 59, 59, 999); //no clockouts past 11:59:59 PM
            }

            let clockPause = null;
            let clockResume = null;

            if (Math.random() < 0.3) {//30% of the time a driver pauses
                const pauseStart = new Date(clockIn.getTime() + Math.random() * (clockOut - clockIn - 30 * 60 * 1000)); //pause starts between clock in and 30 minutes before clock out
                const pauseDuration = Math.floor(Math.random() * 61) + 30; //pause between 30 to 90 minutes
                const pauseEnd = new Date(pauseStart.getTime() + pauseDuration * 60 * 1000); 

                //make sure shift doesn't end before pause ends
                if (pauseEnd > clockOut) {
                    pauseEnd.setTime(clockOut.getTime())
                }

                clockPause = pauseStart;
                clockResume = pauseEnd;
            }

            entries.push( {
                driver_id: driverId,
                date: date.toISOString().split('T')[0],
                clock_in: formatDateTime(clockIn),
                clock_pause: clockPause ? formatDateTime(clockPause) : null,
                clock_resume: clockResume ? formatDateTime(clockResume) :null,
                clock_out: formatDateTime(clockOut)
            })
        }
    });

    return entries;
}

function generateTimesheetData(startDateStr, endDateStr) {
    const data = [];
    let currentDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    let idCounter = 1;

    while (currentDate <= endDate) {
        const isSunday = currentDate.getDay() === 0; //sunday is valued at 0

        if (!isSunday && !isNationalHoliday(currentDate)) {
            const dailyEntries = generateShiftsForDate(currentDate);
            data.push(...dailyEntries);
        }

        //onto the next day of the month
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
}

function createDummyData(beginningDate, endingDate) {
    const generatedData = generateTimesheetData(beginningDate, endingDate);

    const filePath = path.join(__dirname, '../data/dummyData/dummyData.json');

    fs.writeFileSync(
        filePath,
        JSON.stringify(generatedData, null, 2),
        'utf-8'
    );

    console.log('Data generation complete. Check dummyData.json');

    return generatedData;
}

module.exports = createDummyData;