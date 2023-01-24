const numberText = "1,2,3/3,2,1"
/**
 *
 * @param {string} list two list of numbers separated by comma, and the list of numbers separated by slash
 * @returns {number[]} sum of all numbers
 * @example
 * getSumOfList("1,2,3/4,5,6") // [5, 7, 9]
 */
function getSumOfList2(list:string) {
  const list1: string[] = list.split("/")[0].split(",");
  const list2: string[] = list.split("/")[1].split(",");
  const list3: number[] = [];

  for (let i = 0; i < list1.length; i++) {
    list3.push(parseInt(list1[i]) + parseInt(list2[i]));
  }

  return list3;
}

console.log(getSumOfList2(numberText));
