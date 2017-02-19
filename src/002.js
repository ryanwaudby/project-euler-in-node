import { __, gte, until, add, tail, last, takeLast, append, head, curry, modulo, filter, sum } from 'ramda';

const appendNextFib = curry(n => append(add(head(takeLast(2, n)), tail(takeLast(2, n))), n));
const completeSeq = until(n => gte(last(n), 4000000), appendNextFib(__))([1,2]);
console.log(sum(filter(n => modulo(n, 2) === 0, completeSeq)));
