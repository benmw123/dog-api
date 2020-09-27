function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => 
      $(createDogImage(responseJson)).appendTo('.results')) 
    .catch(error => alert('Something went wrong. Try again later.'));
}

function createDogImage(responseJson) {
console.log(responseJson);
return `<img src="${responseJson.message}" class="results-img">`
}



function formListener() {
  $('form').submit(event => {
      event.preventDefault();
      $('.results').empty(); 
      input = $('#dogAmount').val(); 
      console.log(input); 
      for (i=1; i <= input; i++) {
        getDogImage();
      }
  });
}

$(function() {
  formListener();
});
