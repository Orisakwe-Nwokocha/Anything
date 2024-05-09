const {modeObjectOf} = require('../src/ModeObject');


test("get mode object", () => {
    let input = [1, 2, 2, 1, 3];
    expect(modeObjectOf(input)).toEqual({1: 2, 2: 2, 3: 1});
})