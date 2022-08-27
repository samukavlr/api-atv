const router = require('express').Router();

// Routas de categorias
const categoriesRoutes = require('./categories.routes');
router.use('/categories', categoriesRoutes);

// Routas de usuarios
const usersRoutes = require('./users.routes');
router.use('/users', usersRoutes);

// Routas de produtos
const productsRoutes = require('./products.routes');
router.use('/products', productsRoutes);

module.exports = router;

