// Week 6 exercises 

// Arrays 

// create 
var student_names = ["Simon", "Billybob"];

// write up the html
document.write("The student names manually" + "<br/>");
document.write(student_names[0]);
document.write(student_names[1]);

//write the length 
document.write("The number of students in the array"+ "br/>");
document.write(student_names.length);

//write out using a for
document.write("the student names automatically"+ "br/>");
// print out names
for(let i = 0; i < student_names.length; i++) {
    document.write(student_names[i]+ "br/>");
}

//add a student 
document.write("add a student"+ "br/>");
// the promt function allows you to ask the user to enter a name 
student_names.push("Maryanne");
student_names.push(window.prompt("enter a name"));

//write usin the same for...
document.write("the student names automatically"+ "br/>");
for(let i = 0; i < student_names.length; i++) {
    document.write(student_names[i]+ "br/>");
}

