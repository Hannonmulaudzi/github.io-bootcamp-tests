function countRegNumber(regNum){
    var regcount = regNum.split(',').length;
   return regcount;
   
 }
 console.log(countRegNumber('CA 182736,CY 523519,CJ 812328'));
 console.log(countRegNumber('CA 42665, AA 12 RT GP'));