const User = require('../models/User');

class UserController {
  async create(req, res) {
    try {
      const userExists = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExists) return res.status(400).json({ error: 'User already exists.' });

      const { id, fullname, email } = await User.create(req.body);

      return res.status(201).json({ id, fullname, email });
    } catch (err) {
      return res.status(400).json({ err });
    }
  }
}

module.exports = new UserController();
