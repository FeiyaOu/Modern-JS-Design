const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);
budget[0].value = 1000;
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jay = 200;
// console.log(spendingLimits);
const getLimit = (limits, user) => limits?.[user] ?? 0;
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  // if (!user) user = 'jonas';
  // user = user.toLowerCase();
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  // const limit = spendingLimits?.[user] ?? 0;
  // const limit = getLimit(user);

  // if (value <= getLimit(cleanUser))
  // budget.push({ value: -value, description: description, user: user });
  // budget.push({ value: -value, description, user: cleanUser });
  return value <= getLimit(spendingLimits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1);
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
console.log(newBudget2);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);

const checkExpense = function (state, limits) {
  // let lim;
  // if (spendingLimits[entry.user]) {
  //   lim = spendingLimits[entry.user];
  // } else {
  //   lim = 0;
  // }
  // const limit = spendingLimits?.[entry.user] ?? 0;
  // const limit = getLimit(entry.user);
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
  // for (const entry of budget)
  //   if (entry.value < -getLimit(limits, entry.user))
  //     entry.flag = 'limit';
};
const finalBudget3 = checkExpense(newBudget3, spendingLimits);

console.log(finalBudget3);

const logBigExpense = function (state, bigLimit, output = '') {
  // let output = '';
  // if (entry.value <= -bigLimit) {
  //   output += `${entry.description.slice(-2)}/`; // Emojis are 2 chars
  // }
  // for (const entry of state)
  //   output += entry.value <= -bigLimit ? `${entry.description.slice(-2)}/` : '';
  output = state
    .filter(entry => {
      return entry.value <= -bigLimit;
    })
    .reduce((acc, cur) => {
      return `${acc}/${cur.description.slice(-2)}`;
    }, '');

  /////another way is to use filter, map and join.

  ////////////not using reduce like this
  //  state.reduce((accumulator, currentValue) => {
  // //   return currentValue.value <= -bigLimit
  // //     ? `${currentValue.description.slice(-2)}/`
  // //     : '';
  // }, '');
  ////////////not using reduce like this
  // output = output.slice(1); // Remove last '/ '
  output = output.slice(1);
  return output;
  // console.log(output);
};

const BigEx1 = logBigExpense(newBudget1, 10);
console.log(BigEx1);

console.log(budget);

// let output = 'example';
// let result = output.slice(0, -2);
// console.log(result); // result : examp
