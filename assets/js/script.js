var validZipEl = document.querySelector("#zipcodelist");
var allTestingLocations = [];





var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://covid-19-testing.github.io/locations/utah/complete.json", requestOptions)
    .then(response => response.json())
    .then(result => {
        allTestingLocations = result;
        for (i = 0; i < result.length; i++){
            var option = document.createElement("option")
            option.value = result[i].physical_address[0].postal_code;
            option.text = result[i].physical_address[0].postal_code;
            validZipEl.appendChild(option);
            
            // console.log(result[i].physical_address[0].postal_code)
        }
       
    })  

    .catch(error => console.log('error', error));

    
   
    document.getElementById("submit-btn").addEventListener('click', function() {
       var selectedZipCode = validZipEl.value;
       var filteredResults = allTestingLocations.filter(location => location.physical_address.filter(address => address.postal_code == selectedZipCode).length > 0)
        console.log(filteredResults);
      });