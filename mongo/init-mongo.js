db.createUser({
  user: "admin",
  pwd: "password123",
  roles: [{ role: "userAdminAnyDatabase", db: "mongodb" }],
});
