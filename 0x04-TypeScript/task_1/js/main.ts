
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


function printTeacher(firstName: string, lastName: string): string {
  var firstInitial = firstName.charAt(0);
  var result = firstInitial + ". " + lastName;
  return result;
}


console.log(printTeacher("John", "Doe"));
