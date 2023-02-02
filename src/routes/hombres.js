var router = require('express').Router()
const hombres = new Map();

hombres.set("1", "Juan");
hombres.set("2", "Pedro");

router.get('/:id', function (req, res) {
  var nombre = hombres.get(req.params.id);

  if (nombre == null) {
    res.json({ message: "No existe el hombre con id " + req.params.id });
  }
  else {
    res.json({ name: nombre })
  }
})

router.get('/', function (req, res) {
  array = Array.from(hombres, ([id, name]) => ({ id, name }));
  res.json(array)
})

router.put('/', function (req, res) {
  res.json({ message: 'Vas a agregar un hombre'})
})

router.put('/:id', function (req, res) {
  res.json({ message: 'Vas a actualizar el hombre con id ' + req.params.id })
})

router.delete('/:id', function (req, res) {
  res.json({ message: 'Vas a borrar el hombre con id ' + req.params.id })
})

module.exports = router