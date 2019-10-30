const express = require('express');
const router = express.Router();
const items = require('../lib/items');
const itemModule = require('../modules/items')

const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024,
    }
})


router.get('/', async function(req, res) {

    const totalRecords = await itemModule.estimatedDocumentCount();

    const itemsPerPage = Number(req.query.limit) || 3;
    const page = Number(req.query.page) || 1;

    const totalPages = totalRecords / itemsPerPage;
    const offset = itemsPerPage * (page - 1);

    const itemsList = await items.index(itemsPerPage,offset);
    
    res.send({items:itemsList,totalPages:totalPages,itemsPerPage:itemsPerPage});
});

router.post('/', upload.single('img') ,async function(req, res, next) {
    const newId = await items.create(req.body, req.file);
    res.send({ id: newId });
});

router.get('/:name', async function(req, res, next) {
    const itemsList = await items.find(req.params.name);
    res.send(itemsList);
});

router.put('/:id', async function(req, res, next) {
    await items.update(req.params.id, req.body.name, req.body.price)
    res.sendStatus(204);
});

router.delete('/:id', async function(req, res, next) {
    await items.delete(req.params.id);
    res.sendStatus(204);
});

router.get('/img/:id', async function(req, res, next) {
    console.log(req.params.id);
    const item = await items.findById(req.params.id);
    console.log(item);
    res.end(item.img);
});

module.exports = router;