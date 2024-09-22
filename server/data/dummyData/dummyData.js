const data = [
    {
        "id": 1,
        "driver_id": 1,
        "date": "2023-08-01",
        "clock_in": "2023-08-01 08:15:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-01 12:45:00"
    },
    {
        "id": 2,
        "driver_id": 3,
        "date": "2023-08-01",
        "clock_in": "2023-08-01 09:30:00",
        "clock_pause": "2023-08-01 12:00:00",
        "clock_resume": "2023-08-01 12:30:00",
        "clock_out": "2023-08-01 16:30:00"
    },
    {
        "id": 3,
        "driver_id": 3,
        "date": "2023-08-01",
        "clock_in": "2023-08-01 17:00:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-01 20:00:00"
    },
    {
        "id": 4,
        "driver_id": 5,
        "date": "2023-08-01",
        "clock_in": "2023-08-01 11:00:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-01 15:00:00"
    },
    {
        "id": 5,
        "driver_id": 4,
        "date": "2023-08-02",
        "clock_in": "2023-08-02 07:45:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-02 12:45:00"
    },
    {
        "id": 6,
        "driver_id": 1,
        "date": "2023-08-02",
        "clock_in": "2023-08-02 09:00:00",
        "clock_pause": "2023-08-02 11:30:00",
        "clock_resume": "2023-08-02 12:00:00",
        "clock_out": "2023-08-02 15:00:00"
    },
    {
        "id": 7,
        "driver_id": 5,
        "date": "2023-08-02",
        "clock_in": "2023-08-02 13:15:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-02 17:15:00"
    },
    {
        "id": 8,
        "driver_id": 1,
        "date": "2023-08-03",
        "clock_in": "2023-08-03 08:30:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-03 13:30:00"
    },
    {
        "id": 9,
        "driver_id": 3,
        "date": "2023-08-03",
        "clock_in": "2023-08-03 10:00:00",
        "clock_pause": "2023-08-03 12:30:00",
        "clock_resume": "2023-08-03 13:15:00",
        "clock_out": "2023-08-03 16:15:00"
    },
    {
        "id": 10,
        "driver_id": 4,
        "date": "2023-08-03",
        "clock_in": "2023-08-03 09:45:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-03 14:45:00"
    },
    {
        "id": 11,
        "driver_id": 5,
        "date": "2023-08-04",
        "clock_in": "2023-08-04 07:30:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-04 12:30:00"
    },
    {
        "id": 12,
        "driver_id": 1,
        "date": "2023-08-04",
        "clock_in": "2023-08-04 10:15:00",
        "clock_pause": "2023-08-04 13:00:00",
        "clock_resume": "2023-08-04 13:45:00",
        "clock_out": "2023-08-04 16:45:00"
    },
    {
        "id": 13,
        "driver_id": 3,
        "date": "2023-08-04",
        "clock_in": "2023-08-04 11:00:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-04 15:00:00"
    },
    {
        "id": 14,
        "driver_id": 5,
        "date": "2023-08-05",
        "clock_in": "2023-08-05 09:00:00",
        "clock_pause": "2023-08-05 11:30:00",
        "clock_resume": "2023-08-05 12:00:00",
        "clock_out": "2023-08-05 16:00:00"
    },
    {
        "id": 15,
        "driver_id": 4,
        "date": "2023-08-05",
        "clock_in": "2023-08-05 12:15:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-05 17:15:00"
    },
    {
        "id": 16,
        "driver_id": 1,
        "date": "2023-08-07",
        "clock_in": "2023-08-07 08:00:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-07 13:00:00"
    },
    {
        "id": 17,
        "driver_id": 3,
        "date": "2023-08-07",
        "clock_in": "2023-08-07 09:30:00",
        "clock_pause": "2023-08-07 12:00:00",
        "clock_resume": "2023-08-07 12:30:00",
        "clock_out": "2023-08-07 15:30:00"
    },
    {
        "id": 18,
        "driver_id": 5,
        "date": "2023-08-07",
        "clock_in": "2023-08-07 10:45:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-07 14:45:00"
    },
    {
        "id": 19,
        "driver_id": 4,
        "date": "2023-08-07",
        "clock_in": "2023-08-07 13:00:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-07 17:00:00"
    },
    {
        "id": 20,
        "driver_id": 3,
        "date": "2023-08-08",
        "clock_in": "2023-08-08 08:30:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-08 12:30:00"
    },
    {
        "id": 21,
        "driver_id": 5,
        "date": "2023-08-08",
        "clock_in": "2023-08-08 11:15:00",
        "clock_pause": "2023-08-08 13:45:00",
        "clock_resume": "2023-08-08 14:15:00",
        "clock_out": "2023-08-08 17:15:00"
    },
    {
        "id": 22,
        "driver_id": 1,
        "date": "2023-08-09",
        "clock_in": "2023-08-09 09:00:00",
        "clock_pause": "2023-08-09 11:30:00",
        "clock_resume": "2023-08-09 12:00:00",
        "clock_out": "2023-08-09 15:00:00"
    },
    {
        "id": 23,
        "driver_id": 5,
        "date": "2023-08-09",
        "clock_in": "2023-08-09 10:30:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-09 14:30:00"
    },
    {
        "id": 24,
        "driver_id": 3,
        "date": "2023-08-10",
        "clock_in": "2023-08-10 08:15:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-10 12:15:00"
    },
    {
        "id": 25,
        "driver_id": 4,
        "date": "2023-08-10",
        "clock_in": "2023-08-10 09:45:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-10 13:45:00"
    },
    {
        "id": 26,
        "driver_id": 5,
        "date": "2023-08-10",
        "clock_in": "2023-08-10 12:00:00",
        "clock_pause": "2023-08-10 14:30:00",
        "clock_resume": "2023-08-10 15:00:00",
        "clock_out": "2023-08-10 17:00:00"
    },
    {
        "id": 27,
        "driver_id": 1,
        "date": "2023-08-11",
        "clock_in": "2023-08-11 07:30:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-11 12:30:00"
    },
    {
        "id": 28,
        "driver_id": 4,
        "date": "2023-08-11",
        "clock_in": "2023-08-11 10:00:00",
        "clock_pause": "2023-08-11 12:30:00",
        "clock_resume": "2023-08-11 13:15:00",
        "clock_out": "2023-08-11 16:15:00"
    },
    {
        "id": 29,
        "driver_id": 3,
        "date": "2023-08-11",
        "clock_in": "2023-08-11 11:15:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-11 15:15:00"
    },
    {
        "id": 30,
        "driver_id": 5,
        "date": "2023-08-12",
        "clock_in": "2023-08-12 09:45:00",
        "clock_pause": "2023-08-12 12:15:00",
        "clock_resume": "2023-08-12 12:45:00",
        "clock_out": "2023-08-12 15:45:00"
    },
    {
        "id": 31,
        "driver_id": 1,
        "date": "2023-08-12",
        "clock_in": "2023-08-12 13:00:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-12 17:00:00"
    },
    {
        "id": 32,
        "driver_id": 3,
        "date": "2023-08-14",
        "clock_in": "2023-08-14 08:00:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-14 13:00:00"
    },
    {
        "id": 33,
        "driver_id": 4,
        "date": "2023-08-14",
        "clock_in": "2023-08-14 09:30:00",
        "clock_pause": "2023-08-14 12:00:00",
        "clock_resume": "2023-08-14 12:30:00",
        "clock_out": "2023-08-14 15:30:00"
    },
    {
        "id": 34,
        "driver_id": 5,
        "date": "2023-08-14",
        "clock_in": "2023-08-14 10:45:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-14 14:45:00"
    },
    {
        "id": 35,
        "driver_id": 1,
        "date": "2023-08-14",
        "clock_in": "2023-08-14 13:00:00",
        "clock_pause": null,
        "clock_resume": null,
        "clock_out": "2023-08-14 17:00:00"
    }
]
