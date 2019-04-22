const args=process.argv.slice(2);

let displayPyramid = (args) => {
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
displayPyramid(args);