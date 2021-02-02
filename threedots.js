const ages = [12, 23, 34];
const ages2 = [12, 23, 34, 85];
const ages3 = [12, 23, 24, 52, 58];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages,...ages2,5,...ages3];
// 

const business = 650;
const minister = 450;
const sochib = 389;
const takaPoisa = [650, 450, 389];
const maximum = Math.max(...takaPoisa);
console.log(maximum);