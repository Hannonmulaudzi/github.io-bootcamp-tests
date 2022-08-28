export default function yearsAgo(year) {
    var date = new Date();
    console.log(date);
   var yr = date.getFullYear() - year;
    return yr; 
  }
  console.log(yearsAgo(1976))