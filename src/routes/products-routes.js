const express = require('express');
const router = express.Router();

//router.get('/', (req, res, next) => {
 //   res.status(200).send({
   ///     title:"Node API",
      ///  version: "0.0.1"
    //});
//});
router.post('/', (req, res, next) => {
    res.status(201).send();
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body 
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

router.patch = ('/', (req, res, next) => {
    const id = req.params.id;

    for (let b in req.body) {
        console.log(b);
        console.log(req.body[b]);
    }


    res.status(201).send(req.body,`Requisição recebida com sucesso! `);
});

module.exports = router;