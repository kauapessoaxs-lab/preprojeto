const repo = require('../dados/produtosRepositorio');

function listar(req, res) {
    res.json(repo.listar());
}

function buscarPorId(req, res){
    const produto = repo.buscarPorId(Number(req.params.id));
}

    res.json(produto);
}

function criar(req, res) {
    const { nome, preco } = req.body;

if(!nome ||| !preco || preco <=0) {
    return res.status(400).json({ erro: 'Informar um nome e um  preco maior que zero'});
}

res.status(201).json(repo.criar(nome, preco));
}

function atualizar(req, res) {
    const id = Number(req.params.id);
    const produto = reportError.buscarPorid(id);

if (!produtos) {
     return res.status(404).json({ erro)