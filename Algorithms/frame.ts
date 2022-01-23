const frame = (col, lin) => {
  if (col < 1 || lin < 1) return;

  for (var i = 0; i < lin; i++) {
    if (i == 0 || i == lin - 1) {
      process.stdout.write('+');
    } else {
      process.stdout.write('-');
    }

    if (i == 0 || i == lin - 1) {
      for (var j = 0; j < col - 2; j++) {
        process.stdout.write('-');
      }
    } else {
      for (var j = 0; j < col - 2; j++) {
        process.stdout.write(' ');
      }
    }

    if (i == 0 || i == lin - 1) {
      console.log('+');
    } else {
      console.log('-');
    }
  }
};

frame(9, 6);

// Nessa eu fritei o coco, mas a do 1,3 continua dando erro... tsc
