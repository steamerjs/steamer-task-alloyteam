let dev = [
        'npm start'
    ],
    dist = [
        'npm run dist',
        'steamer jb --run'
    ];

module.exports = {
    "plugin": "steamer-plugin-task",
    "config": {
        "start": dev,
        "s": dev,
        "dist": dist,
        "d": dist,
    }
};