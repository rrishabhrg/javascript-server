import {functionEquiTriangle} from './../interfaces';

let displayEquiTriangle: functionEquiTriangle;
displayEquiTriangle = function (args: string) {
  let rows=Number.parseInt(args);
  for (let i = 0; i <= rows; i++) {
    var str = '';
    for (let j = 0; j <= rows-i; j++) {
      str = str + ' ';
    }
    for (let k = 0; k <= i; k++) {
      str = str + '* ';
    }
    console.log(str);
  }
}

export {displayEquiTriangle};
