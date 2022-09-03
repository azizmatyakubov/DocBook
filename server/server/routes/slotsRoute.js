import express from 'express'
import { createSlots, getAllSlots, getAllSlotsByDoctor } from '../controllers/SlotsController.js'
import { tokenVerification } from '../middlewares/tokenVerification.js';
import { permission } from '../middlewares/permission.js';


const slotsRouter = express.Router();



slotsRouter.post('/',  tokenVerification, permission('doctor'), createSlots);

slotsRouter.get('/',  tokenVerification, permission('doctor'), getAllSlots);

slotsRouter.get('/doctor/:doctorId',  tokenVerification, permission('doctor'), getAllSlotsByDoctor);

slotsRouter.get('/:id',  tokenVerification, permission('doctor'), createSlots);

slotsRouter.put('/:id',  tokenVerification, permission('doctor'), createSlots);

slotsRouter.delete('/:id',  tokenVerification, permission('doctor', 'admin'), createSlots);




export default slotsRouter;