function planSchedule(classes) {
    return classes.filter((c) => c.match(/PM/));
}


module.exports = {planSchedule};