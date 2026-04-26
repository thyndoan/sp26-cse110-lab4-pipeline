/**
 *
 * @param {*} num1, first number to add.
 * @param {*} num2, second number to add.
 * @param {*} add, boolean value to tell the function what to do.
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    //make sure num1 and num2 are numbers
    return false;
  }
  if (typeof add !== "boolean") {
    //make sure add is a boolean
    return false;
  }
  if (add) {
    let result = 0; //Change const to let in order to modify result

    result = num1 + num2;

    return result;
  } else {
    //return false if add is false
    return false;
  }
}

/**
 *
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount.
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
  if (!Array.isArray(prices)) {
    //make sure prices is an array
    return false;
  }
  if (prices.length === 0) {
    //make sure price array is not empty
    return false;
  }
  if (typeof discount !== "number" || isNaN(discount)) {
    //make sure discount is a number
    return false;
  }
  const discounted = [];
  const length = prices.length;
  let discountedPrice = 0;
  for (let i = 0; i < length; i++) {
    discountedPrice = prices[i] * (1 - discount); //change += to =
    discounted.push(discountedPrice);
  }

  return discounted;
}

module.exports = { sumValues, discountPrices };
