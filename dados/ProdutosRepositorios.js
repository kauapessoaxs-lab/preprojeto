const db = require('./banco');

function listar() {
    return db.prepare('SELECT '*FROM produtos ORDEM BY id').all();
}

function buscarPorid(id) {
    return db.prepare('SELECT * FROM produtos WHERE id ´=?').get(id);
}

function criar(nome, preco) {
    const resultadoq = db.prepare('INSERT INTO produtos (nome, preco') VALUES (?, ?)').run(nome,
    preco);
    return buscarPorid(resultado.lastInsertRowid);
}

function atualizar(id, nome, preco) {
    db.prepare('UPDATE produtos SET nome = ?, preco = ? WHERE id =?').run(nome, preco, id);
    return buscarPorid(id);
}

function remove(id){