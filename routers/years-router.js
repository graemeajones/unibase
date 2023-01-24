import { Router } from 'express';
import Model from '../models/Model.js';
import modelConfig from '../models/years-model.js';
import database from '../database.js';
import Accessor from '../accessor/Accessor.js';

// Model -----------------------------------------

const model = new Model(modelConfig);

// Data accessor ---------------------------------

const accessor = new Accessor(model, database);

// Controllers -----------------------------------

const getController = async (req, res, variant) => {
  const id = req.params.id;

  // Validate request

  // Access data
  const { isSuccess, result, message: accessorMessage } = await accessor.read(id, variant);
  if (!isSuccess) return res.status(404).json({ message: accessorMessage });
  
  // Response to request
  res.status(200).json(result);
};

// Endpoints -------------------------------------

const router = new Router();

router.get('/', (req, res) => getController(req, res, null));

export default router;
