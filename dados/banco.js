const { DatabaseSync} = require('node:sqlite');
const path = require('path');

const db = new DatabaseSync(path.join(__dirname, 'loja.db'));

db.exec(`
    CREATEN TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL CHECK (preco > 0)
)
 `);

 const { total } = db.prepare('SELECT COUNT'(*) AS total FROM produtos').get();
 if (total ===0) {