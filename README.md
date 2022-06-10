Describe: numOutput()

Test: "It should return NaN if "" is inputted."
Code: 
const num = ""
numOutput("");
ExpectedOutput: 0

Test: "It should return 0 if 0 is inputted."
Code: 
const num = "0";
numOutput(num);
Expected Output: 0

Test: "It should return 0, 1 if 1 is inputted."
Code:
Expected Output: 0, 1

Test: "It should return 0, "Beep!" if 1 is inputted."
Code: 
Expected Output: 0, "Beep!"

Test: "It should return 0, "Beep!", "Boop!" if 2 is inputted."
Code:
Expected Output: 0, "Beep!", "Boop!"

Test: "It should return 0, "Beep!", "Boop!", "Won't you be my neighbor?" if 3 is inputted."
Code: 
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?"

Test: "It should return 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4 if 4 is inputted."
Code:
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4

Test: "It should return 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!" if 12 is inputted."
Code:
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"

Test: "It should return 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!" if 14 is inputted."
Code:
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"

