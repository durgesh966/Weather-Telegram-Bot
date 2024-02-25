const convert = require('convert-units');

function ms_To_kmh_Convert(wind_speed) {
    return Number(convert(wind_speed).from('m/s').to('km/h').toFixed(2));
}

function m_To_km_Convert(visibility) {
    return Number(convert(visibility).from('m').to('km').toFixed(2));
}

module.exports = { ms_To_kmh_Convert, m_To_km_Convert };

