interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
    return firstName.charAt(0) + ". " + lastName;

}
console.log(printTeacher("John", "Doe"));
