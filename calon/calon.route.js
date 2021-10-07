const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const Datastore = require('nedb');

const database = new Datastore('');
database.loadDatabase();
database.insert({name: 'Zaed', id:1});
database.insert({name: 'Zaaed', id:1});
database.insert({name: 'Zawed', id:1});
router.get("/", (req, res) => {
  res.json(calons);
});

router.get("/:id", (req, res) => {
  const found = calons.some(calon => calon.id === parseInt(req.params.id));
  if (found) {
    res.json(calons.filter(calon => calon.id === parseInt(req.params.id)));
  } else {
    res.sendStatus(400);
  }
});

router.post("/", (req, res) => {
  const newCalon = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email
  };

  if (!newCalon.name || !newCalon.email) {
    return res.sendStatus(400);
  }

  calons.push(newCalon);
  res.json(calons);
});

//Update Calon
router.put("/:id", (req, res) => {
  const found = calons.some(calon => calon.id === parseInt(req.params.id));
  if (found) {
    const updateCalon = req.body;
    calons.forEach(calon => {
      if (calon.id === parseInt(req.params.id)) {
        calon.name = updateCalon.name ? updateCalon.name : calon.name;
        calon.email = updateCalon.email ? updateCalon.email : calon.email;
        res.json({ msg: "Calon updated", calon });
      }
    });
  } else {
    res.sendStatus(400);
  }
});

//Delete Calon
router.delete("/:id", (req, res) => {
  const found = calons.some(calon => calon.id === parseInt(req.params.id));

  if (found) {
    calons = calons.filter(calon => calon.id !== parseInt(req.params.id))

    res.json({
      msg: "Calon deleted",
      calons
    });
  } else {
    res.sendStatus(400);
  }
});