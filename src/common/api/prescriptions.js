export const getPrescriptions = () => {
    return new Promise((resolve, reject) => {
        const data = [[
            { key: 1, name: "Ativan", count: Math.floor(Math.random() * 10) + 25 },
            { key: 2, name: "Soma", count: Math.floor(Math.random() * 1) + 5 },
            { key: 3, name: "Buspar", count: Math.floor(Math.random() * 45) + 40 },
            { key: 4, name: "Norco", count: Math.floor(Math.random() * 34) + 20 },
            { key: 5, name: "Lasix", count: Math.floor(Math.random() * 100) + 49 },
            { key: 6, name: "Xyzal", count: Math.floor(Math.random() * 87) + 80 },
            { key: 7, name: "Inderal", count: Math.floor(Math.random() * 4) + 70 },
            { key: 8, name: "Bentyl", count: Math.floor(Math.random()) + 18 }
        ],
        [
            { key: 1, name: "Ativan", count: Math.floor(Math.random() * 10) + 25 },
            { key: 2, name: "Soma", count: Math.floor(Math.random() * 1) + 25 },
            { key: 3, name: "Buspar", count: Math.floor(Math.random() * 45) + 25 },
            { key: 4, name: "Norco", count: Math.floor(Math.random() * 34) + 25 },
            { key: 5, name: "Lasix", count: Math.floor(Math.random() * 100) + 25 },
            { key: 6, name: "Xyzal", count: Math.floor(Math.random() * 87) + 25 },
            { key: 7, name: "Inderal", count: Math.floor(Math.random() * 4) + 25 },
            { key: 8, name: "Bentyl", count: Math.floor(Math.random()) + 25 }
        ],
        [
            { key: 1, name: "Ativan", count: Math.floor(Math.random() * 10) + 25 },
            { key: 2, name: "Soma", count: Math.floor(Math.random() * 1) + 25 },
            { key: 3, name: "Buspar", count: Math.floor(Math.random() * 45) + 25 },
            { key: 4, name: "Norco", count: Math.floor(Math.random() * 34) + 25 },
            { key: 5, name: "Lasix", count: Math.floor(Math.random() * 100) + 25 },
            { key: 6, name: "Xyzal", count: Math.floor(Math.random() * 87) + 25 },
            { key: 7, name: "Inderal", count: Math.floor(Math.random() * 4) + 25 },
            { key: 8, name: "Bentyl", count: Math.floor(Math.random()) + 25 }
        ],
        [
            { key: 1, name: "Ativan", count: Math.floor(Math.random() * 10) + 25 },
            { key: 2, name: "Soma", count: Math.floor(Math.random() * 1) + 25 },
            { key: 3, name: "Buspar", count: Math.floor(Math.random() * 45) + 25 },
            { key: 4, name: "Norco", count: Math.floor(Math.random() * 34) + 25 },
            { key: 5, name: "Lasix", count: Math.floor(Math.random() * 100) + 25 },
            { key: 6, name: "Xyzal", count: Math.floor(Math.random() * 87) + 25 },
            { key: 7, name: "Inderal", count: Math.floor(Math.random() * 4) + 25 },
            { key: 8, name: "Bentyl", count: Math.floor(Math.random()) + 25 }
        ]
        ];

        setTimeout(() => {
            resolve(data);
        }, 250);
    });
}
