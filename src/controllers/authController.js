const authService = require("../services/authService");

async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Dados obrigatórios" });
    }

    const user = await authService.register({ name, email, password });

    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Dados obrigatórios" });
    }

    const result = await authService.login({ email, password });

    return res.json(result);
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
}

module.exports = {
  register,
  login
};
