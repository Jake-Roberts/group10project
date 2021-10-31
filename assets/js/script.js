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
       var physical_address = allTestingLocations[index].physical_address[0];
       var name = allTestingLocations[index].alternate_name;
       var description = allTestingLocations[index].description;
       var phoneNumber = allTestingLocations[index].phones[0].number;
       var schedule = allTestingLocations[index].regular_schedule;
       var days = function(){
         for(var i = 0; i < schedule.length; i++){
          if(schedule[i].weekday == 1){ let day = "Monday:" 
          myResults.innerHTML+=(`
          <h4 style="padding: 5px;">${day}</h4>
          <p style="padding: 5px;">Opens: ${schedule[i].opens_at}</p>
          <p style="padding: 5px;">Closes: ${schedule[i].closes_at}</p>`)
         }
          else if(schedule[i].weekday == 2){ let day = "Tuesday:"
          myResults.innerHTML+=(`
          <h4 style="padding: 5px;">${day}</h4>
          <p style="padding: 5px;">Opens: ${schedule[i].opens_at}</p>
          <p style="padding: 5px;">Closes: ${schedule[i].closes_at}</p>`)
         }
          else if(schedule[i].weekday == 3){ let day = "Wednesday:"
          myResults.innerHTML+=(`
          <h4 style="padding: 5px;">${day}</h4>
          <p style="padding: 5px;">Opens: ${schedule[i].opens_at}</p>
          <p style="padding: 5px;">Closes: ${schedule[i].closes_at}</p>`)
         }
          else if(schedule[i].weekday == 4 ){ let day = "Thursday:"
          myResults.innerHTML+=(`
          <h4 style="padding: 5px;">${day}</h4>
          <p style="padding: 5px;">Opens: ${schedule[i].opens_at}</p>
          <p style="padding: 5px;">Closes: ${schedule[i].closes_at}</p>`)
         }
         else if(schedule[i].weekday == 5 ){ let day = "Friday:"
          myResults.innerHTML+=(`
          <h4 style="padding: 5px;">${day}</h4>
          <p style="padding: 5px;">Opens: ${schedule[i].opens_at}</p>
          <p style="padding: 5px;">Closes: ${schedule[i].closes_at}</p>`)
         }
         else if(schedule[i].weekday == 6 ){ let day = "Saturday:"
          myResults.innerHTML+=(`
          <h4 style="padding: 5px;">${day}</h4>
          <p style="padding: 5px;">Opens: ${schedule[i].opens_at}</p>
          <p style="padding: 5px;">Closes: ${schedule[i].closes_at}</p>`)
         }
         else if(schedule[i].weekday == 7 ){ let day = "Sunday:"
          myResults.innerHTML+=(`
          <h4 style="padding: 5px;">${day}</h4>
          <p style="padding: 5px;">Opens: ${schedule[i].opens_at}</p>
          <p style="padding: 5px;">Closes: ${schedule[i].closes_at}</p>`)
         }
       }};
       var myResults =document.getElementById('results')
        myResults.innerHTML = `<h2>Near You:</h2>
        <ul>
        <p style = "padding:5px">Name: ${name}</p>
        <p style = "padding:5px">Address: ${physical_address.address_1}, ${physical_address.city}, ${physical_address.state_province}</p>
         <p style = "padding:5px">Description: ${description}</p>
         <p style = "padding:5px">Phone Number: ${phoneNumber}</p>
         </ul>
         <h3>Schedule:</h3>`
         days()
  
       console.log(name);
      //  var filteredResults = allTestingLocations.filter(location => location.physical_address.filter(address => address.postal_code == selectedZipCode).length > 0)
    
      };
      