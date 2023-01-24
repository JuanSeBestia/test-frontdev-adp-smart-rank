/**
 * We're making the final adjustments to Santa's sleigh!
 *
 * As you already know, the sled is flying and we are adjusting the motor so that it makes parabolas as optimal as possible.
 * For this, the jump must always be upwards and, from the highest point, it must always go downwards...
 *
 * Our trusted mechanic, Alexander, who has a great Tesla, has explained to us that the jumps can be seen as arrays...
 * and that we just have to make sure that the numbers go up and down correctly.
 * He also warns us that we will only pass arrays of at least three positions.
 *
 * Make an algorithm that receives in the console a text with values (separated by commas) and prints true in
 * the console if the values go up and down strictly, otherwise it prints false
 *
 * @param {string} list a list of numbers separated by comma
 * @returns {boolean} true if the values go up and down strictly, otherwise false
 * @example
 * isParabola("0,3,2,1") // true
 * isParabola("1,2,3") // false
 */
function isParabola(list: string) {
  const list1: string[] = list.split(",");
  const list2: number[] = [];
  let goUp: boolean = true;
  let isParabola: boolean = true;

  for (let i = 0; i < list1.length; i++) {
    list2.push(parseInt(list1[i]));
  }

  for (let i = 1; i < list2.length; i++) {
    if (goUp) {
      // is going up
      if (list2[i] < list2[i - 1]) {
        goUp = false;
      }
    } else {
      // is gong down
      if (list2[i] > list2[i - 1]) {
        isParabola = false;
      }
    }
  }
  if(goUp === false && isParabola === true){
    return true
  }else {
    return false
  }
}

console.log(isParabola("0,3,2,1"));
console.log(isParabola("1,2,3"));
