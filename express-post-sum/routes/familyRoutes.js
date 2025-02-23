const express = require("express");
const router = express.Router();
const familyTree = require("../models/familyTree"); 


router.get("/family", (req, res) => {
  const members = familyTree.getAllMembers();
  res.json(members);
});


router.get("/family/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const member = familyTree.getMemberById(id);

  if (!member) {
    return res.status(404).json({ error: "Familiemedlem ikke funnet" });
  }

  res.json(member);
});


router.post("/family", (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: "Navn og alder kreves" });
  }

  const newMember = familyTree.addMember(name, age);
  res.status(201).json(newMember);
});


router.put("/family/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name, age } = req.body;
  const updatedMember = familyTree.updateMember(id, name, age);

  if (!updatedMember) {
    return res.status(404).json({ error: "Familiemedlem ikke funnet" });
  }

  res.json(updatedMember);
});


router.delete("/family/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const deleted = familyTree.deleteMember(id);

  if (!deleted) {
    return res.status(404).json({ error: "Familiemedlem ikke funnet" });
  }

  res.json({ message: "Familiemedlem slettet" });
});


module.exports = router;

