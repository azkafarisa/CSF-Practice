function nbYear(p0, percent, aug, p) {
    // your code
    let counter = 1;
    while (p0<=p){
      counter ++;
      p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
    }
    return counter-1;
  }

// function nbYear(p0, percent, aug, p) {
//   // your code
//   let counter = 1;
//   if (p0 >= p) return counter;
//   else {
//     return counter + nbYear(Math.floor(p0 + (p0 * percent) / 100 + aug), percent, aug, p);
//   }
// }


describe("nbYear",function() {
    it("Basic tests",function() {
        Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
        Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
        Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
    })})


