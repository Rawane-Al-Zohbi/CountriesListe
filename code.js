
            var countries = document.getElementById('nom') 
            var fifa = document.getElementById('fif')
          var capital = document.getElementById('cap') 
          var region=document.getElementById('reg')

            fetch('https://restcountries.com/v3.1/all')
             .then(response => response.json())
             .then(json => {
                json.forEach(element => {
                    debugger;

                    var listeName=document.createElement('li')
                    listeName.innerHTML=element.name.common;
                   countries.appendChild(listeName);
                 
                   var fi=document.createElement("li")
                   fi.innerHTML=element.fifa
                  fifa.appendChild(fi);
 
                  var ct=document.createElement("li")
                   ct.innerHTML=element.capital;
                  capital.appendChild(ct)
    
                  var rg=document.createElement("li")
                   rg.innerHTML=element.region;
                  region.appendChild(rg);

                  
                 
             } )});