var router = require('express').Router()
const mujeres = new Map();

mujeres.set("1", "Maria");
mujeres.set("2", "Ana");

router.get('/:id', function (req, res) {
    var nombre = mujeres.get(req.params.id);

    if (nombre == null) {
        res.json({ message: "No existe la mujer con id " + req.params.id });
    }
    else {
        res.json({ name: nombre })
    }
})

router.get('/', function (req, res) {
    array = Array.from(mujeres, ([id, name]) => ({ id, name }));
    res.json(array)
})

router.post('/', function (req, res) {
    res.json({ message: 'Vas a añadir una mujer' })
})

router.put('/:id', function (req, res) {
    res.json({ message: 'Vas a actualizar la mujer con id ' + req.params.id })
})

router.delete('/:id', function (req, res) {
    res.json({ message: 'Vas a borrar la mujer con id ' + req.params.id })
})

module.exports = router