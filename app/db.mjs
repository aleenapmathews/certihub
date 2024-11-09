import Database from "better-sqlite3";
import { join } from "path";

const db_path = join(process.cwd(), "certihub.db");

console.log(db_path);
const db = new Database(db_path);

//create user table
db.exec(`CREATE TABLE IF NOT EXISTS"user" (
	"username"	TEXT NOT NULL UNIQUE,
	"password"	TEXT NOT NULL,
	"id"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT));`);

db.exec(`CREATE TABLE IF NOT EXISTS "document" (
	"user_id"	INTEGER NOT NULL,
	"url"	TEXT NOT NULL,
	"file_name"	TEXT NOT NULL,
	"id"	INTEGER UNIQUE,
  "issuer" TEXT,
  "expiry_date" TEXT,
	PRIMARY KEY("id")
);`);

export function getDocumentsWithUserId(user_id) {
  const rows = db
    .prepare(`SELECT * FROM document WHERE user_id = ? `)
    .all(user_id);
  return rows;
}

function getUsernameWithUserId(user_id) {
  const row = db
    .prepare("SELECT username FROM user WHERE id = ? ")
    .get(user_id);
  if (row == undefined) {
    return -1;
  }
  return row.username;
}

export function getUserIdWithUsernameAndPassword(username, password) {
  const row = db
    .prepare(`SELECT id from user where username=? and password=?`)
    .get(username, password);
  if (row == undefined) {
    return -1;
  }
  return row.id;
}

export function createDocument(user_id, url, file_name, expiry_date, issuer) {
  db.prepare(
    `INSERT into document(user_id,url,file_name,expiry_date,issuer)
 VALUES(?,?,?,?,?)`
  ).run(user_id, url, file_name, expiry_date, issuer);
}

export function createUser(username, password) {
  db.prepare(
    `INSERT into user(username,password)
VALUES (?,?);`
  ).run(username, password);
}

export function deleteDoc(id) {
  db.prepare(`DELETE  FROM document where id=?`).run(id);
}
