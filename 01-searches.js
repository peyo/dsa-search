/*
function search(array, find){
  if (array.length == 0) {
    return `No array.`;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] == find) {
      return `Value found.`;
    }
  }
}

let array = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
let find = 8;
console.log(search(array, find))
*/

function search(array, find) {
  if (array.length == 0) {
    return `No array.`;
  }

  if (
    array.length < 3 &&
    array[0] !== find &&
    array[1] !== find &&
    array[2] !== find
  ) {
    return `Value not found.`;
  }

  let i = Math.floor(array.length / 2);
  if (array[i] == find) {
    return `Value found.`;
  } else if (array[i] > find) {
    let newArr = array.slice(0, i);
    return search(newArr, find);
  } else if (array[i] < find) {
    let newArr = array.slice(i);
    return search(newArr, find);
  }
}

let array = [3, 5, 6, 8, 11, 12, 14, 15, 17];
let find = 3;
console.log(search(array, find));
