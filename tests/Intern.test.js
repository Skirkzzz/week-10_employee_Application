const Intern = require("../lib/Intern");

test("Can create school.", () => {
  const testSchool = "School Name";
  const employeeInstance = new Intern(
    "Lennon",
    2,
    "jamesnates@gmail.com",
    testSchool
  );
  expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
  const testSchool = "School Name";
  const employeeInstance = new Intern(
    "Lennon",
    2,
    "Lennonnates@gmail.com",
    testSchool
  );
  expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern(
    "Lennon",
    2,
    "Lennonnates@gmail.com",
    "School Name"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
