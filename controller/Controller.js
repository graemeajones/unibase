import joi from 'joi';

const reportErrors = (error) => error.details.map((detail) => detail.message);
const idSchema = joi.number().integer().min(1);
const mutableFields = ['ModuleName', 'ModuleCode', 'ModuleLevel', 'ModuleYearID', 'ModuleLeaderID', 'ModuleImageURL'];
const recordSchema = joi.object({
  ModuleID: joi.number().integer(), 
  ModuleName: joi.string().min(8), 
  ModuleCode: joi.string().regex(/^\D{2}\d{4}$/, 'module code'),
  ModuleLevel: joi.number().integer().min(3).max(7), 
  ModuleYearID: joi.number().integer(),
  ModuleLeaderID: joi.number().integer(),
  ModuleImageURL: joi.string().uri()
}).required().unknown(true);


class Controller {

  constructor(accessor) {
    this.accessor = accessor;
  }

  // Methods
  
  get = async (req, res, variant) => {
    const id = req.params.id;

    // Validate request
    const { error } = idSchema.validate(id);
    if (error) return res.status(404).json({ message: reportErrors(error) });

    // Access data
    const { isSuccess, result, message: accessorMessage } = await this.accessor.read(id, variant);
    if (!isSuccess) return res.status(404).json({ message: accessorMessage });
    
    // Response to request
    res.status(200).json(result);
  };

  post = async (req, res) => {
    const record = req.body;
    
    // Validate request
    const postSchema = recordSchema.and(...mutableFields);
    const { error } = postSchema.validate(record, {abortEarly: false});
    if (error) return res.status(404).json({ message: reportErrors(error) });

    // Access data
    const { isSuccess, result, message: accessorMessage } = await this.accessor.create(record);
    if (!isSuccess) return res.status(400).json({ message: accessorMessage });
    
    // Response to request
    res.status(201).json(result);
  };
 
  put = async (req, res) => {
    const id = req.params.id;
    const record = req.body;

    // Validate request
    const putSchema = joi.object({
      id: idSchema.required(),
      record: recordSchema.or(...mutableFields)
    });
    const { error } = putSchema.validate({ id, record }, {abortEarly: false});
    if (error) return res.status(404).json({ message: reportErrors(error) });

    // Access data
    const { isSuccess, result, message: accessorMessage } = await this.accessor.update(record, id);
    if (!isSuccess) return res.status(400).json({ message: accessorMessage });
    
    // Response to request
    res.status(200).json(result);
  };

  delete = async (req, res) => {
    const id = req.params.id;

    // Validate request
    const deleteSchema = idSchema.required();
    const { error } = deleteSchema.validate(id, {abortEarly: false});
    if (error) return res.status(404).json({ message: reportErrors(error) });

    // Access data
    const { isSuccess, result, message: accessorMessage } = await this.accessor.delete(id);
    if (!isSuccess) return res.status(400).json({ message: accessorMessage });
    
    // Response to request
    res.status(204).json({ message: accessorMessage });
  };

}

export default Controller;
