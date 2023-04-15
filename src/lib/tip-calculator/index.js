/**
 * Calculates the tip amount
 *
 * @param {number} bill
 * @param {number} tip
 * @param {number} people
 * @returns {TipCalculator.Calculation}
 */
export const calculateTip = (bill, tip, people) => {
  console.log(`Calculating tip for bill: ${bill}, tip: ${tip}, people: ${people}`);
  let totalTip = bill * (tip / 100);
  return {
    tipAmountPerPerson: totalTip / people,
    totalPerPerson: (bill + totalTip) / people
  };
};

/**
 * Test for a valid number
 *
 * @param {string} value
 * @returns
 */
export const isNumber = (value) => {
  const validNumberRegEx = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;
  return validNumberRegEx.test(value);
};
