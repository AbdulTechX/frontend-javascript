interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract: boolean;
}
interface Directors extends Teacher {
    numberOfReports: number;
}

interface  printTeacherFunction {
    (firstName: string, lastName:string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
console.log(printTeacher("John", "Doe"));