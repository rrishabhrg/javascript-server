import { IPyramid } from './../interfaces';

interface INumber {
  parseInt: Function
}
declare var Number: INumber;

let displayPyramid: IPyramid;
displayPyramid = function (args: number) {
  let rows=Number.parseInt(args);
  for (let i = 0; i < rows; i++) {
    let str = '';
    for (let j = 0; j < rows-i; j++) {
      str = str + ' ';
    }
    for (let k = 0; k < i; k++) {
      str = str + '* ';
    }
    console.log(str);
  }
  for (let i = rows; i > 0; i--) {
    let str = '';
    for (let j = 0; j < rows-i; j++) {
      str = str + ' ';
    }
    for (let k = 0; k < i; k++) {
      str = str + '* ';
    }
    console.log(str);
  }
}

export { displayPyramid };
