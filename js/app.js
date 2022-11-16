document.getElementById("HamzasText").innerHTML = 'Hamza'

//Declare the variables
let firstname = 'Hamza'; // 
let lastname = 'Salih';
let birthdate = new Date("11-27-2002");


// array aa list of values
const personality = ["funny","carring","humble","genuine","alwaysPositive","alwaysSmiling","hilarious","veryHardWorker","50cent","goodenergy","bestcodplayer","smart","rollieboy"]

const saying = ["lilbabythegoat","whytheysayffifdyfor?","yankeewithnobrim","I am 50 cent","I am from Qatar","I like motorcycles","I love my family", "I love life","I love my family","50 ain't broke", "Call me 50", "I sold a ROlex for 20k", "We don't get offended in Qatar like Americans", "I hacked my middle schools database","You G now my guy","yankeewithnobrim","Always with App Dev 4L","How you been", "Need help", "awesome bro"]


let fullname = `${firstname} ${lastname}`; // This call string interpolation


// Make a function that returns the first and lastname of person. 
// Function accepts two parameters (Firstname and lastname)
// Use string interperpolation

 function displayFullName(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    return fullName;
 }
 
 let fullname3 = displayFullName("Hamza", "Salih");
 alert(fullname3);
    