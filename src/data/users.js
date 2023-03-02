const users = [];

const addUser = (username, password) => {
  const user = { username, password };
  users.push(user);
};

export { addUser, users };
