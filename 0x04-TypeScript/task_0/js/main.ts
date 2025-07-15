// Define the stundent interface
interface Student {
    firstName: string;
    lastName: string;
    age: Number;
    location: string;
}
// create two stundents
let student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "Lagos"
}
let student2 = {
    firstName: "Jumoke",
    lastName: "Smith",
    age: 22,
    location: "Abuja",
};

// store them in array
const studentsList: Student[] = [student1, student2];

// Create table 
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");


const headerRow = document.createElement("tr");
["First Name", "Location"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);

//add Student rows

studentsList.forEach(student => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);