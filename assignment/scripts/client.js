$(document).ready(readyNow); // jquery intialization

let garage = []; // global array

function addCar(){
  console.log('in addCar');

  $('#addCarButton').on('click', newCar($('#yearInput').val(), $('#makeInput').val(), $('#modelInput').val())); // passing input parameters for addCar function
  $('#yearInput').val(''); // clearing input
  $('#makeInput').val(''); // clearing input
  $('#modelInput').val(''); // clearing input

  displayCar(); // calling displayCar to run once addCar function is executed
} // end addCar


function displayCar() {
  console.log(' in displayCar');

  let display = $('#carOutput'); // variable holding the value of the unordered list ID
  display.empty();

  for(car in garage){
    display.append(`<li>${garage[car].year}, ${garage[car].make}, ${garage[car].model}</li>`); // appending car's info to display ID in a <li>
    console.log(garage[car]);  // logging the car object to the console
  } // end for
} // end displayCar


function readyNow() {
  console.log('JQ');
  $('#addCarButton').on('click', addCar); // on the click of the 'add car' button function newCar will be run

} // end readyNow

/*
Do not change newCar for base mode!
*/
function newCar(yearInput, makeInput, modelInput){
  console.log('in newCar:', yearInput, makeInput, modelInput);
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput
  }
  garage.push(newCarObject); // pushing newCarObject object to the global 'garage' array

  // return true;
} // end newCar
