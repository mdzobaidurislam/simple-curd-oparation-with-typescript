import express from 'express';
import { addPackage, allPackage, deletePackage, editPackage, packagesFilter, updatepackage,  } from '../controller/packageController';
const router = express.Router();


router.get('/api/package',allPackage)
router.post('/api/package',addPackage)
router.get('/api/package/:id',editPackage)
router.put('/api/package/:id',updatepackage)
router.delete('/api/package/:id',deletePackage)

router.get('/api/packagefilter',packagesFilter)


export {router as packageRouter};