const counter = (val, delta=1) => {
    return val + delta;
};
const accounter = (val, delta) => {
    val += delta;
};
const stringBuffer = (string,txt='') => {
    string += txt;
};
const paramSetting = (param, newParam={}) => {
    param = newParam;
};
let _value = 0;
const valueSetting = (newVal) => {
    _value = newVal;
};
const getValue = () => {
    return _value;
}
exports.counter = counter;
exports.accounter = accounter;
exports.stringBuffer = stringBuffer;
exports.paramSetting = paramSetting;
exports.value = _value;
exports.valueSetting = valueSetting;
exports.getValue = getValue;