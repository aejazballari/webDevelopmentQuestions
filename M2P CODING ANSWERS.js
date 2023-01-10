// const valueCalculator = () => {
//     return {
//         total: 0,
//         crore: function(x) {
//             this.total += x * 10000000
//             return this
//         },
//         lakh: function(x) {
//             this.total += x * 100000
//             return this
//         },
//         thousand: function(x) {
//             this.total += x * 1000
//             return this
//         },
//         value: function() {
//             return this.total
//         }
//     }
// }

// const total = valueCalculator().crore(4).lakh(35).thousand(50).crore(2).lakh(20).crore(7).thousand(12).value()
// console.log(total);

const obj = {
  A: 23,
  T: "43",
  L: {
    P: "9",
    O: {
      K: "67",
    },
    M: ["10", "54"],
  },
};

// output:
// {
//     A: 23,
//     T: "43",
//     "L.P": '9',
//     "L.O.K": '67',
//     "L.M.0": '10',
//     "L.M.1": '54'
// }

const flattenObject = (obj, path = "") => {
  let newObj = {};
  for (let key in obj) {
    let propName = path ? path + "." + key : key;
    if (typeof obj[key] !== "object" && typeof obj[key] !== null) {
      newObj[propName] = obj[key];
    } else {
      const data = flattenObject(obj[key], propName);
      newObj = { ...newObj, ...data };
    }
  }
  return newObj;
};
console.log(flattenObject(obj));
