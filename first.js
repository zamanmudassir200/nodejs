const fs = require("fs");

let age = 10;
if (age <= 10) {
  fs.writeFile("agelessThan10.txt", "You cannot drive a car", (err) => {
    if (err) throw err;
    else console.log("Writing file below 10");
  });
} else if (age >= 18 && age <= 60) {
  fs.writeFile("ageGreaterOrEqualTo18.txt", "You can drive a car", (err) => {
    if (err) throw err;
    else console.log("Writing file below 10");
  });
} else {
  fs.writeFile(
    "adult.txt",
    "You can rest now your sons will drive a car",
    (err) => {
      if (err) {
        throw err;
      } else {
        console.log("Writing file");
      }
    }
  );
}
