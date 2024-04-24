const {planSchedule} = require("./PlanSchedule");



test("plan schedule", () => {
    let classes =  ["9:00 AM", "1:00 PM", "11:00 AM", "3:00 PM", "5:00 PM"];
    let expected = ["1:00 PM", "3:00 PM", "5:00 PM"];
    expect(planSchedule(classes)).toEqual(expected);
});