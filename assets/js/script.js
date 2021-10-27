var displayZipOnDropDown = document.querySelector("#zip-code");




var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://covid-19-testing.github.io/locations/utah/complete.json", requestOptions)
    .then(response => response.json())
    .then(result => {
        for (i = 0; i < result.length; i++){
            
            console.log(result[i].physical_address[0].postal_code)
        }
       
    })  

    .catch(error => console.log('error', error));

    
   
    document.getElementById("zip-code").addEventListener('click', function() {
        console.log("You Clicked");
      });