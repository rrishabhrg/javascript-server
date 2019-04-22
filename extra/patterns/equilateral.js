const args=process.argv.slice(2);

let displayEquiTriangle = (args) => {
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
displayEquiTriangle(args);