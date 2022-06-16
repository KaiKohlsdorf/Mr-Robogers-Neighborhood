function numOutput(num) {
  let numWords = [];
  for (let i = 0; i <= num; i += 1) {
    numWords.push(i);
    let wordNum = i.toString();
      if (wordNum.includes("3")) {
        numWords.push("Won't you be my neighbor?");
      } else if (wordNum.includes("2")) {
        numWords.push("Boop!");
      } else if (wordNum.includes("1")) {
        numWords.push("Beep!");
      } else {
        numWords.push(wordNum);
      }
      console.log(numWords)
  }
  return numWords;
}


// function numOutput(num) {
//   let numWords = [];
//   for (let i = 0; i <= num; i += 1) {
//     console.log(i)
//     let wordNum=i.toString();
//       if (wordNum.includes("3")) {
//         numWords.push(" " + "Won't you be my neighbor?");
//       } else if (wordNum.includes("2")) {
//         numWords.push(" " + "Boop!");
//       } else if (wordNum.includes("1")) {
//         numWords.push(" " + "Beep!");
//       } else {
//         numWords.push(" ")
//       }
//   }
//   return numWords;
// }


$(document).ready(function() {
  $("#numList").submit(function (event) {
    event.preventDefault();
    const userInput = parseInt($("#num").val());
    const output = numOutput(userInput);
    $("#formSubmit").text(output); 
  });
});  