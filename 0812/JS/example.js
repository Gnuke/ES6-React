//example.js
// export data
export var color = 'red';
export let name = 'Michael';
export const magicNumber = 7;

// export function
export function add(num1, num2) {
  return num1 + num2;
}

// export class
export class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
}

// 지금 이 함수는 비공개 함수입니다.
function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

export { multiply };