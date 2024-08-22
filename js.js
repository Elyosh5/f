let firstnum = 5;
let secondnum = 23;
let sum = firstnum + secondnum;
if (sum > 10 && sum < 20) {
  console.log(sum * 5);
} else if (sum > 20 && sum < 50) {
  console.log(sum / 3);
} else {
  console.log(sum + 10);
}

let username = "elaman";
let password = 777;
if (username === "elaman" && password === 777) {
  console.log("Welcome user");
} else {
  console.log("User not found");
}

let firstNum = 7;
let secondNum = 7;
let thirdNum = 7;
if (firstNum > secondNum && firstNum > thirdNum) {
  console.log(`Maximum number is ${firstNum}`);
} else if (secondNum > firstNum && secondNum > thirdNum) {
  console.log(`Maximum number is ${secondNum}`);
} else if (thirdNum > firstNum && thirdNum > secondNum) {
  console.log(`Maximum number is ${thirdNum}`);
} else if (firstNum == secondNum && firstNum == thirdNum) {
  console.log("Numbers are even");
}

let firstNumm = 5;
let seconNumm = 12;
let age = 17;
let summ = firstNumm + seconNumm;
if (summ > age) {
  console.log(`Сумма чисел ${summ} больше моего возраста ${age}`);
} else if (summ == age) {
  console.log(`Сумма чисел ${summ} равно ${age}`);
} else {
  console.log(`Сумма чисел ${summ} менше моего возраста ${age}`);
}

let num = 2;
if (num >= 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("negative");
}

let numm = 5;
if (numm % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// let lang = "ru";
// console.log(
//   lang === "kg"
//     ? "Бул кыргыз тили"
//     : lang === "des" ? "Das ist Deutsch" && lang === "en"
//     ? "This is english"
//     : "Это русский")

// let user = {
//   name: "Elaman",
//   age: 17,
//   status: "student",
//   class: "JS-44",
//   school: "Motion",
// };
// if (user.age <= 20 && user.status == "student" && user.school === "Motion") {
//   console.log(
//     `Привет, меня зовут ${name} и я студент в ${school} классе class`
//   );
// } else {
//   console.log(`Привет, меня зовут ${name} и мне ${age} лет`);
// }

let minute = 55;
if (minute <= 14) {
  console.log(`minute ${minute} ->1 `);
} else if (minute < 29) {
  console.log(`minute ${minute} ->2 `);
} else if (minute < 44) {
  console.log(`minute ${minute} ->3 `);
} else if (minute < 61) {
  console.log(`minute ${minute} ->4 `);
} else {
  console.log("Число не верное");
}

let num1 = 555555;
let num2 = num1.toString();
+num2[0] + +num2[1] + +num2[2] === +num2[3] + +num2[4] + +num2[5]
  ? console.log("True")
  : console.log("False");

let month = 2;
if (month <= 3) {
  console.log("Winter");
} else if (month <= 6) {
  console.log("Spring");
} else if (month <= 9) {
  console.log("Summer");
} else if (month <= 12) {
  console.log("Autumn");
} else {
  console.log("Number is wrong");
}
