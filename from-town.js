
function countAllFromTown(regNumbers, regStart) {
    let Arr = []; 
     var strArray= regNumbers.split(',');
     
      for (var i=0; i<strArray.length; i++) {
      
        var regN = strArray[i].trim();
       
      if (regN.startsWith(regStart)) {
        Arr.push(regN);
     }
      }

     return Arr.length;
   }
   