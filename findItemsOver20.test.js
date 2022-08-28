var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];
export default function findItemsOver20 (quantityCheck) {
  var results = [];
  
  for (let prop in quantityCheck) {
    if (quantityCheck[prop].qty > 20) {
   results.push(quantityCheck[prop]); 
    }   
  }
  return results;
}
console.log(findItemsOver20(itemList)); 
console.log(findItemsOver20(itemList2));
console.log(findItemsOver20(itemList3));