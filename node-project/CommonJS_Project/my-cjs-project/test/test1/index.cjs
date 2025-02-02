const count = require('./count.cjs');
const originVal = 101;
console.log(count.counter(originVal));
console.log(count.counter(originVal, 5));
console.log(count.counter(originVal, 8));

console.log(count.accounter(originVal));
console.log(originVal);

const param = {"key": "測試"};
console.log(count.stringBuffer(param.key, "A"));
console.log(param.key);

console.log(count.paramSetting(param, {"皮卡丘": "LV1"}));
console.log(param);

const count2 = require('./count.cjs');
console.log(count.valueSetting(20));
console.log(count2.valueSetting(88));
console.log(count.value);
console.log(count2.value);

console.log(count.getValue());  // 88
console.log(count2.getValue()); // 88