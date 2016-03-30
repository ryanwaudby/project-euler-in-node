import { filter, range, sum, modulo } from 'ramda';

const isMultiple = n => modulo(n, 3) === 0 || modulo(n, 5) === 0;
console.log(sum(filter(isMultiple, range(1, 1000))));
