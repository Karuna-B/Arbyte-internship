import fs from "fs/promises";

// //readfile default callback

// fs.readFile("./text.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// //readfilesyn- synchronous version

// const data = fs.readFileSync("./text.txt", "utf8");
// console.log(data);

// // readfile()- promise.then

// fs.readFile("./text.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const readFile = async () => {
  try {
    const data = await fs.readFile("./text.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//writfile

const writeFile = async () => {
  try {
    await fs.writeFile("./text.txt", "Okay overwriting succesfull");
  } catch (error) {
    console.log(error);
  }
};

//appendFile
const appendFile = async () => {
  try {
    await fs.appendFile("./text.txt", "\nThis is appended text");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
