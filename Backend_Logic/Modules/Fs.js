import fs from "fs";

const fileName = "text.txt";

// 1. Write
fs.writeFileSync(fileName, "This is initial data\n", "utf-8");
console.log("File created");

// 2. Read
let data = fs.readFileSync(fileName, "utf-8");
console.log("Before update:", data);

// 3. Update (append)
fs.appendFileSync(fileName, "This is appended data\n", "utf-8");

// 4. Read again
data = fs.readFileSync(fileName, "utf-8");
console.log("After update:", data);

// 5. Delete (optional – end me hi karo)
fs.unlinkSync(fileName);
console.log("File deleted");