import express from 'express';

import { Doctor } from '../models/doctor.js';

const router = new express.Router();


router.get('/signup', async (req, res) => {
  try{
    res.render("doctor_signup");
  }catch(err){
    res.send(err.message);
  }
});

router.post('/signup', async (req, res) => {
  try{
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.send(doctor);
  }catch(err){
    res.send(err.message);
  }
});

export {router};