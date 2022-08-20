const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
  const testGithub = "BeckySwans";
  const employeeInstance = new Engineer(
    "Becky",
    2,
    "BeckySwans@gmail.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "BeckySwans";
  const employeeInstance = new Engineer(
    "Becky",
    2,
    "BeckySwans@gmail.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Becky",
    2,
    "BeckySwans@gmail.com",
    "BeckySwans"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
