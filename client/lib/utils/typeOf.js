export function isNumericString(data) {
  data = Number(data);
  return !isNaN(data);
}

//보다 정확한 타입 체크를 위해, TypeOf라는 유틸함수를 만들었다.
//JS의 typeOf가 정확하지 않은 이유는 언어상의 오류, 그러나 이미 많이 쓰여졌기 때문에 어쩔 수 없이 그대로 둔 것.

function typeOf(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

export const isObject = (data) => typeOf(data) === "object";
export const isString = (data) => typeOf(data) === "string";
export const isArray = (data) => typeOf(data) === "array";
export const isNumber = (data) => typeOf(data) === "number" && !isNaN(data);
export const isBigInt = (data) => typeOf(data) === "bigint" && !isNaN(data);
export const isBoolean = (data) => typeOf(data) === "boolean";
export const isFunction = (data) => typeOf(data) === "function";
export const isUndefined = (data) => typeOf(data) === "undefined";
export const isNull = (data) => typeOf(data) === "null";
export const isSymbol = (data) => typeOf(data) === "symbol";
export const isElement = (node) => node.nodeType === document.ELEMENT_NODE;
