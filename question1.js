function printName(hundred) {
  for (let i = 1; i <= hundred; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      console.log(i);
    }

    if (i % 3 === 0 && i % 5 == 0) {
      console.log("Vision Micron");
    }

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Vision");
    }
    if (i % 3 !== 0 && i % 5 === 0) {
      console.log("Micron");
    }

    // console.log(i);
  }
  return hundred;
}
printName(100);
