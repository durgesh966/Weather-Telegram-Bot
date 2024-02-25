function deg_to_direction(deg) {
    deg = (deg + 360) % 360;
    if (deg >= 0 && deg < 45) {
        return 'North';
    } else if (deg >= 45 && deg < 90) {
        return 'North East';
    } else if (deg >= 90 && deg < 135) {
        return 'East';
    } else if (deg >= 135 && deg < 180) {
        return 'South East';
    } else if (deg >= 180 && deg < 225) {
        return 'South';
    } else if (deg >= 225 && deg < 270) {
        return 'South West';
    } else if (deg >= 270 && deg < 315) {
        return 'West';
    } else {
        return 'North West';
    }
}

module.exports = deg_to_direction;
