class Controller {
  constructor(validator, accessor) {
    this.validator = validator;
    this.accessor = accessor;
  }

  // Methods

  get = async (req, res, variant) => {
    // Access data
    const { isSuccess, result, message: accessorMessage } = await this.accessor.read(req, variant);
    if (!isSuccess) return res.status(404).json({ message: accessorMessage });

    // Response to request
    res.status(200).json(result);
  };

  post = async (req, res) => {
    // Validate request body
    const { isValid, message: validatorMessage } = this.validator.post(req.body);
    if (!isValid) return res.status(404).json({ message: validatorMessage });

    // Access data
    const { isSuccess, result, message: accessorMessage } = await this.accessor.create(req);
    if (!isSuccess) return res.status(400).json({ message: accessorMessage });

    // Response to request
    res.status(201).json(result);
  };

  put = async (req, res) => {
    // Validate request
    const { isValid, message: validatorMessage } = this.validator.put(req.body);
    if (!isValid) return res.status(404).json({ message: validatorMessage });

    // Access data
    const { isSuccess, result, message: accessorMessage } = await this.accessor.update(req);
    if (!isSuccess) return res.status(400).json({ message: accessorMessage });

    // Response to request
    res.status(200).json(result);
  };

  delete = async (req, res) => {
    // Access data
    const { isSuccess, result, message: accessorMessage } = await this.accessor.delete(req);
    if (!isSuccess) return res.status(400).json({ message: accessorMessage });

    // Response to request
    res.status(204).json({ message: accessorMessage });
  };
}

export default Controller;
