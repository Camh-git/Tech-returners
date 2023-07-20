function processTransactions(transactions) {
  if (!validateTransactions(transactions)) {
    throw new Error("Undefined collection of transactions");
  }

  let txCount = {};

  transactions.forEach((entry) => {
    txCount[entry] ? (txCount[entry] += 1) : (txCount[entry] = 1);
  });

  txCount = sortByAmountThenName(txCount);

  // Place the values back in an array and return
  return Object.keys(txCount).map((key) => {
    return `${key} ${txCount[key]}`;
  });
}

function sortByAmountThenName(txCount) {
  let sortedKeys = Object.keys(txCount).sort((itemOne, itemTwo) => {
    return (
      txCount[itemTwo] - txCount[itemOne] ||
      itemOne > itemTwo ||
      -(itemOne < itemTwo)
    );
  });

  let sortedResults = {};
  sortedKeys.forEach((key) => {
    sortedResults[key] = txCount[key];
  });

  return sortedResults;
}

function validateTransactions(transactions) {
  return transactions !== undefined;
}

module.exports = processTransactions;

/*Changes:
  The parameter transActions was changed to transactions since it's one word and makes more sense that way
  txr was taken out of the global scope and not declared until it was to be used 
    (update: txr was removed after being made redundant by using map to place values in the returned array and returning immediately)
  the loop where we populate txCount before calling sortByAmmountThenName was changed to a foreach, which eliminated numberOfTransactions and the const 
    transaction used in that loop to match i, so they where removed, with references to them replaced with the foreach value "entry" when needed
  the final section of processTransactions(the bit after the comment on making the array) was modified to return the output of using a map to achieve the
    same output as the original declare an array and a function then return the array approach  

  The sorting function in sortByAmountThenName was simplified with an arrow function
  simplified the filling of sortedKeys with a forEach loop

  Validate transactions was collapsed down to simply return wether or not it's paramater is strictly not undefined 
    (I definitely didn't use === the first time, leading to only undefined transactions passing validation)
  
*/
