const express = require('express');
const router = express.Router();

const DemoController = require('../contollers/DemoController');
const ProductsController = require('../contollers/ProductsController');

// URl Params
router.get('/demo/:name/:city',DemoController.demo);

// Request Body
router.post('/demo2',DemoController.demo2);

// Request Headers
router.post('/demo3',DemoController.demo3);

// Cookies
router.post('/demo4',DemoController.demo4);



//ProductsController
router.post('/CreateProduct',ProductsController.CreateProduct);
router.post('/ReadProduct',ProductsController.ReadProduct);
router.post('/DeleteProduct',ProductsController.DeleteProduct);
router.post('/UpdateProduct/:id',ProductsController.UpdateProduct);

module.exports = router;
