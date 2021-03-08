import axios from 'axios';

export const deleteUser = async (email, next) => {
  try {
    await axios.delete('/api/user', { data: { email } });
  } catch (err) {
    console.log(err);
  }

  next();
};

export const addUser = async (data, next) => {
  try {
    await axios.post('/api/user', data);
  } catch (err) {
    console.log(err);
  }

  next();
};