$(document).ready(readyNow); // jquery intialization

let garage = []; // global array


function displayCar(carToDisplay) {
  console.log(' in displayCar');

  let display = $('#carOutput'); // variable holding the value of the unordered list ID

  display.append(`<li>${carToDisplay.year}, ${carToDisplay.make}, ${carToDisplay.model}</li>`); // appending car's info to display ID in a <li>
  console.log(carToDisplay); // logging the car object to the console
} // end displayCar


function readyNow() {
  console.log('JQ');

  $('#addCarButton').on('click', newCar); // on the click of the 'add car' button function newCar will be run


} // end readyNow

/*
Do not change newCar for base mode!
*/
function newCar(yearInput, makeInput, modelInput){
  console.log('in newCar:', yearInput, makeInput, modelInput);
  const newCarObject = {
    year: $('#yearInput').val(),
    make: $('#makeInput').val(),
    model: $('#modelInput').val()
  }
  garage.push(newCarObject); // pushing newCarObject object to the global 'garage' array
  displayCar(newCarObject); // calling function displayCar passing the newCarObject as a parameter

  $('#yearInput').val(''); // clearing car year input (STRETCH GOAL)
  $('#makeInput').val(''); // clearing car make input (STRETCH GOAL)
  $('#modelInput').val(''); // clearing car model input (STRETCH GOAL)

  return true;
} // end newCar

// newCar(2020, 'toyota', 'highlander');
