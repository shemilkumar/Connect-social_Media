function logout() {
  localStorage.removeItem("userID");
  localStorage.removeItem("token");
  localStorage.removeItem("username");
}

export default logout;
