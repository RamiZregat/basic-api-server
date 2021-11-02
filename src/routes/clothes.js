
'use strict';

const express = require('express');

const { Clothes } = require('../models/index');

const clothesRouter = express.Router();

clothesRouter.post('/clothes', createCloth); 
clothesRouter.get('/clothes', getClothes); 
clothesRouter.get('/clothes/:id', getOneCloth); 
clothesRouter.put('/clothes/:id', updateCloth); 
clothesRouter.delete('/clothes/:id', deleteCloth); 


async function getClothes(req, res) {

    const allClothes = await Clothes.findAll();
    res.status(200).json(allClothes);
  
  }
  
  async function getOneCloth(req, res) {
    const id = parseInt(req.params.id); 
    const cloth = await Clothes.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json(cloth);
  }
  
  async function createCloth(req, res) {
    const obj = req.body;
    let cloth = await Clothes.create(obj);
    res.status(201).json(cloth);
  
  }
  
  async function updateCloth(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let foundCloth = await Clothes.findOne({ where: { id: id } });
    const updatedCloth = await foundCloth.update(obj);
    res.status(201).json(updatedCloth);
  }
  
  async function deleteCloth(req, res) {
    const id = parseInt(req.params.id);
    const deletedCloth = await Clothes.destroy({ where: { id } });
    res.status(204).json(deletedCloth);
  }
  
  
  module.exports = clothesRouter;