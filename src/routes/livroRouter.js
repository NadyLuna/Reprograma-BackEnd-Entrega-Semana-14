const express = require('express');
const router = express.Router();
const controller = require('../controller/livroController');

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/livro', controller.postLivros)
//router.delete('/:id', controller.deleteLivro)
//router.get('/:genero', controller.getLivrosByGenero)
//router.put('/:id', controller.putLivro)
//router.patch('/:id', controller.patchLivro)


module.exports = router;