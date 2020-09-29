const User = require('../models/User');

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ msg: 'User not found' });

    if (!(await user.checkPassword(password))) return res.status(401).json({ msg: 'Password does not match' });

    const { id, name, role } = user;

    return res.status(200).json({
      user: { id, name, role },
      token: user.generateToken(),
    });
  }
}

module.exports = new AuthController();
