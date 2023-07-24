class Controller {
  constructor(validator, accessor) {
    this.validator = validator;
    this.accessor = accessor;
  }

  // Methods

  get = async (req, res, variant, ids) => {
    // Validate request
    const { isValid, message: validatorMessage } = this.validator.get(ids);
    if (!isValid) return res.status(404).json({ message: validatorMessage });

    // Access data
    const { isSuccess, result, message: accessorMessage } = await this.accessor.read(variant, ids);
    if (!isSuccess) return res.status(404).json({ message: accessorMessage });

    // Response to request
    res.status(200).json(result);
  };

  post = async (req, res) => {
    const record = req.body;

    // Validate request
    const { isValid, message: validatorMessage } = this.validator.post(record);
    if (!isValid) return res.status(404).json({ message: validatorMessage });

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
    const { isValid, message: validatorMessage } = this.validator.put({ id, record });
    if (!isValid) return res.status(404).json({ message: validatorMessage });

    // Access data
    const { isSuccess, result, message: accessorMessage } = await this.accessor.update(record, id);
    if (!isSuccess) return res.status(400).json({ message: accessorMessage });

    // Response to request
    res.status(200).json(result);
  };

  delete = async (req, res) => {
    const id = req.params.id;

    // Validate request
    const { isValid, message: validatorMessage } = this.validator.delete(id);
    if (!isValid) return res.status(404).json({ message: validatorMessage });

    // Access data
    const { isSuccess, result, message: accessorMessage } = await this.accessor.delete(id);
    if (!isSuccess) return res.status(400).json({ message: accessorMessage });

    // Response to request
    res.status(204).json({ message: accessorMessage });
  };
}

export default Controller;
