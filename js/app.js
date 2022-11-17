// Create an object in JSON format or XML
const hamza = {
  firstname: 'Hamza',
  lastname: 'Salih',
  saying: ["lilbabythegoat","whytheysayffifdyfor?","yankeewithnobrim","I am 50 cent","I am from Qatar","I like motorcycles","I love my family", "I love life","I love my family","50 ain't broke", "Call me 50", "I sold a ROlex for 20k", "We don't get offended in Qatar like Americans", "I hacked my middle schools database","You G now my guy","yankeewithnobrim","Always with App Dev 4L","How you been", "Need help", "awesome bro"],
  personality: ["funny", "carring", "humble", "genuine", "alwaysPositive", "alwaysSmiling",
  "hilarious",
  "very hard worker", "50cent", "goodenergy", "bestcodplayer", "smart", "rollieboy"
  ],
  birthdate: new Date("11-27-2002"),
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
}



function addPersonalityTrait() {
  //  alert('Yes');
  let newtrait = document.getElementById('inputTextFieldName').value;
  hamza.personality.push(newtrait);
  hamza.personality.sort(); // 
  document.getElementById("demo").innerHTML = hamza.personality.join(' - ');
 }



function addPark() {
 // const parkdata = JSON.stringify(parkTypesArray);

  //document.getElementById("park").innerHTML = hamzadata; // This shows all the information


 let parks = "";
 for (let i = 0; i < parkTypesArray.length; i++) {
        parks += parkTypesArray[i] + "<br>";
 }
 document.getElementById("park").innerHTML = parks; // 

 }










 function addInfoHamza() {
  const hamzadata = JSON.stringify(hamza);

  //document.getElementById("park").innerHTML = hamzadata; // This shows all the information
 document.getElementById("hamzainfo").innerHTML = hamza.lastname;
 }
 

 
// array aa list of values




// Make a function that returns the first and lastname of person. 
// Function accepts two parameters (Firstname and lastname)
//
//function FullName(firstName, lastName) {
 // return `${firstName} ${lastName}`;
//}
//personality.reverse(); //
// Use string interperpolation






    