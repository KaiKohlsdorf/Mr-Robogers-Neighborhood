// function numOutput(num) {
//   let numList = [];
//   for (let i = 0; 1 <= num; i += 1) {
//     numList.push(i);
//     let stringNum = i.toString();
//       if (stringNum.includes("3")) {
//         numList.push("Won't you be my neighbor?");
//       } else if (stringNum.includes("2")) {
//         numList.push("Boop!");
//       } else if (stringNum.includes("1")) {
//         numList.push("Beep!");
//       } else {
//         numList.push(stringNum);
//       }
//       console.log(numList)
//   }
//   return numList;
// }

function numOutput(num) {
  let numList = ["0"]
  for (let i=0; 1 <= num; i+=1) {
    numList.push(i);
  }
  console.log(numList);
  return numList;
}