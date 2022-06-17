import express from 'express';
import { addCity, allCity, deleteCity, editCity, updateCity } from '../controller/cityController';
const router = express.Router();


router.get('/api/city',allCity)
router.get('/api/city/:id',editCity)
router.post('/api/city',addCity)
router.put('/api/city/:id',updateCity)
router.delete('/api/city/:id',deleteCity)

export {router as cityRouter};