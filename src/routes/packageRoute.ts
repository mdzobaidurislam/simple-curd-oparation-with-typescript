import express from 'express';
import { addPackage, allPackage, deletePackage, packagesFilter,  } from '../controller/packageController';
const router = express.Router();


router.get('/api/package',allPackage)
router.post('/api/package',addPackage)
router.delete('/api/package/:id',deletePackage)

router.get('/api/packagefilter',packagesFilter)


export {router as packageRouter};