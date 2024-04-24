function planSchedule(classes) {
    return classes.filter((c) => c.match(/PM/) && c.match(/(12|[1-5])/));
}


module.exports = {planSchedule};