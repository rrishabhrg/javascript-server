import { functionPyramid } from './../interfaces';

  let displayPyramid: functionPyramid;
  displayPyramid = function (args: string) {
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

export {displayPyramid};
