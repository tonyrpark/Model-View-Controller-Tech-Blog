const { format_date } = require("../utils/helpers");
test("format_date() returns a date string", () => {
  const date = new Date("2021-03-22 18:49:00");
  expect(format_date(date)).toBe("3/22/2021");
});
