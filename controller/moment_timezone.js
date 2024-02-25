const moment = require('moment-timezone');

function convert_in_indian_date(date) {
    return moment.unix(date).tz('Asia/Kolkata').format('DD-MM-YY');
}

function convert_in_indian_time(time) {
    return moment.unix(time).tz('Asia/Kolkata').format('hh:mm:ss A');
}

module.exports = { convert_in_indian_date, convert_in_indian_time };
