/*
This is a morning routine. 
As this is the first time creating script, I had limited my pseudocode down as I had diffculties further down writing script for it. 
*/

// Create variables [String: Wake up on own terms?, check phone, do I need to use bathroom?, is there a banana for brekkie?, Am I doing anything today?, do I have work?]
var wakeUp = "Wake up on own terms?";
var checkPhone = "Check phone - any messages to reply to?";
var bathroom = "Do I need to use bathroom?";
var banana = "Is there a banana for brekkie?";
var goingAnywhere = "Am I going anywhere today?";
var work = "Do I have work?";  

    //  // sample if else statement
    //  if (a_num != 1) {
    //     windows.alert("this won't be run");
    // } else {
    //     windows.alert(a_string);
    // }

// Wake up
var message1 = "Wake Up";
window.alert(message1);
// DO LOOP 
var wakeUp; 
window.alert(wakeUp);// wake up on own terms?	
// IF 
if (wakeUp == "false") { // 	Wake up on own terms= "false" THEN
    windows.alert("go back to sleep"); // 		Go back to sleep
    // 		EXIT LOOP
    // WHILE 
// ELSE 
} else {
    var checkPhone
    windows.alert(checkPhone) // 	Check phone - any messages to reply to?
}
// 	IF 
if (checkPhone == "true") { // 		Messages to reply to= "true" THEN
    windows.alert("reply to message"); // 			Reply to messages
// 	ELSE
} else {
    var bathroom // 		Do I need to use bathroom?
    window.alert(bathroom);
}

// 		IF 
// 			Need to use bathroom= "true" THEN
// 				Use bathroom THEN
// 			Go to kitchen
// 		ELSE	
// 			Go to kitchen 
// Is there a banana for brekkie?
    var banana
    window.alert(banana)
// IF
// 	Is there a banana for brekkie= "true" THEN
// 		Eat banana 
// ELSE
// 		Wait till brunch/when hungry to eat meal
// Head to bathroom to brush teeth
// Am I going anywhere today?
    var goingAnywhere
    window.alert(goingAnywhere)
// IF
// 	Am I going anywhere today?= "false" THEN
// 		Stay in pjs 
// ELSE
// 	Do I have work? 
    var work
    window.alert(work)
// 		IF 
// 			Do I have work?= "false" THEN
// 				Dress in causal clothes
// 		ELSE
// 			Dress in work uniform
// 	Get in car
// Continue day as planned