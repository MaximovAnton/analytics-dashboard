const fs = require("fs");
const path = require("path");
require("dotenv").config();

console.log("1️⃣ Ищем .env файлы рядом:\n");

const candidates = [
  ".env",
  "./.env",
  "prisma/.env",
  "./prisma/.env"
];

for (const p of candidates) {
  const full = path.resolve(p);
  if (fs.existsSync(full)) {
    const content = fs.readFileSync(full, "utf8");
    console.log("✔ Найден:", full);
    console.log("Содержимое:", JSON.stringify(content));
    console.log();
  }
}

console.log("2️⃣ Что загружено в process.env:\n");
console.log("DATABASE_URL =", process.env.DATABASE_URL);
