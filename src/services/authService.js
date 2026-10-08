const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (data) => {
  if (!data) {
    throw new Error('Nenhum dado foi enviado no corpo da requisição');
  }

  const { name, email, password } = data;
  
  if (!name || !email || !password) {
    throw new Error('Preencha todos os campos obrigatórios: name, email e password');
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error('E-mail já cadastrado');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return { id: user._id, name: user.name, email: user.email };
};

const loginUser = async (data) => {
  if (!data) {
    throw new Error('Nenhum dado foi enviado na requisição');
  }

  const { email, password } = data;

  if (!email || !password) {
    throw new Error('Por favor, envie o email e a password');
  }

  const user = await User.findOne({ email });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Credenciais inválidas');
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return { token, user: { id: user._id, name: user.name, email: user.email } };
};

module.exports = { registerUser, loginUser };