console.log("Hello JuanSe");

const number = "1,2,4/6,4,5"

/**
 * 
 * @param {string} list two list of numbers separated by comma, and the list of numbers separated by slash
 * @returns {number} sum of all numbers
 * @example
 * getSumOfList("1,2,3/4,5,6") // [5, 7, 9]
 */
function getSumOfList(list) {
    const list1 = list.split("/")[0].split(",");
    const list2 = list.split("/")[1].split(",");
    const list3 = [];
    
    for (let i = 0; i < list1.length; i++) {
        list3.push(parseInt(list1[i]) + parseInt(list2[i]));
    }
    
    return list3;

}

console.log(getSumOfList(number));
