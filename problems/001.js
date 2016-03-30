import { filter, range, sum, modulo } from 'ramda';

console.log(sum(filter(n => modulo(n, 3) === 0 ||
                       modulo(n, 5) === 0, range(1, 1000))));
