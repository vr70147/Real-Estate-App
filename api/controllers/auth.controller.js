import bcrypt from 'bcryptjs';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPass = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPass,
    },
  });

  console.log(newUser);
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
