/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Arrays

/* create an array of people in your family - 
add an extra person
use an if statement in your for to only print out some peoples name (only people's whose name starts with "S" or something)
*/

//create 
var family_names = ["Tuan", "Tran", "Jennifer"];

// write the length 
document.write("The number of family members in the array"+ "br/>");
document.write(family_names.length);

//write out using a for
document.write("the family member names automatically"+ "br/>");
//print out names
for(let i = 0; i < family_names.length; i++) {
   
    if(family_names[i].substring(0, 1) == "J") { 
        document.write(family_names[i]);
    }    
}
