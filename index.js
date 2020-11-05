const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(input) {
  const result = input.find( ({result}) => result === "W")
  if (result === undefined) {
    return undefined;
  } else {
    return result['year'];
  }
};