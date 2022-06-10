// function numOutput(num) {
//   let numList = [];
//   for (let i = 0; i <= num; i += 1) {
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
  let numWords = [];
  for (let i = 0; i <= num; i += 1) {
    console.log(i)
    let wordNum=i.toString();
      if (wordNum.includes("3")) {
        numWords.push(" " + "Won't you be my neighbor?");
      } else if (wordNum.includes("2")) {
        numWords.push(" " + "Boop!");
      } else if (wordNum.includes("1")) {
        numWords.push(" " + "Beep!");
      } else {
        numWords.push(" ")
      }
  }
  return numWords;
}


$(document).ready(function() {
  $("form#numList").submit(function (event) {
    
  });
});  