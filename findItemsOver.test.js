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

export default function findItemsOver(quantityCheck, threshold) { 
    var results2 = [];
      for (let prop in quantityCheck) {
        if (quantityCheck[prop].qty > threshold) {
         results2.push(quantityCheck[prop]); 
        }
      } 
    return results2; 
  }
  console.log(findItemsOver(itemList, 20)); 
  console.log(findItemsOver(itemList2, 20)); 
  console.log(findItemsOver(itemList3, 20)); 