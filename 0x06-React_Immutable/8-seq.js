import { Seq } from 'immutable';

// Create an immutable sequence from the input object
export default function printBestStudents(object) {
  const seq = Seq(object);

  // Filter the students based on their score, keeping those with a score above 70
  const filtered = seq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();  // This line doesn't modify the string, consider using `toUpperCase()`
    return student.score > 70;
  });

  // Function to capitalize the first letter of a string
  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Convert the filtered sequence back to a regular JavaScript object
  const JSObject = filtered.toJS();

  // Capitalize the first letter of first and last names for each student
  Object.keys(JSObject).map((key) => {
    JSObject[key].firstName = capFirstLetter(JSObject[key].firstName);
    JSObject[key].lastName = capFirstLetter(JSObject[key].lastName);
    return JSObject[key];
  });

  // Print the modified JavaScript object
  console.log(JSObject);
}

