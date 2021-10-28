var validZipEl = document.querySelector("#zipcodelist");
var allTestingLocations = [];
var dict = {};


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
            dict[result[i].physical_address[0].postal_code]=i;
            
            validZipEl.appendChild(option);
            
            // console.log(result[i].physical_address[0].postal_code)
        } 
       
    })  

    .catch(error => console.log('error', error));

    
   
    function showResults() {
       var selectedZipCode = validZipEl.value;
       var index = dict[selectedZipCode];
       var physical_address = allTestingLocations[index].physical_address[0].address_1;
       var name = allTestingLocations[index].alternate_name;
       var description = allTestingLocations[index].description;
       var myResults =document.getElementById('results')
        myResults.innerText ="NEAR YOU: " + name + physical_address + description;
        
       
      //  var filteredResults = allTestingLocations.filter(location => location.physical_address.filter(address => address.postal_code == selectedZipCode).length > 0)
    
      };
      