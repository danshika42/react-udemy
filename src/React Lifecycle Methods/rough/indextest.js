import foods from './foods'
import {choice,remove} from './helpers'

let fruit = choice(foods);

console.log(`Like to have ${fruit} one.`);

console.log(`Here you go: ${fruit}`);

let remaining=remove(foods,fruit);
console.log(remaining.length);