// Route for user login
const loginUser = async (req, res) => {
  res.json({ msg: "login working" });
}

// Route for user registration
const registerUser = async (req, res) => {
  res.json({ msg: "register working" });
}

// Route for admin login
const adminLogin = async (req, res) => {
  res.json({ msg: "admin login working" });
}

export { loginUser, registerUser, adminLogin };
