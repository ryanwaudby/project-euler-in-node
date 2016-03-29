import { filter, range, sum } from 'ramda';

const isMultiple = n => n % 3 === 0 || n % 5 === 0;
console.log(sum(filter(isMultiple, range(1, 1000))));
