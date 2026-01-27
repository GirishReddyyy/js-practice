const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

console.log(user.name)
console.log(user.email)

user.lastLogin="2026-01-01"
user.role="admin"
delete user.isActive
console.log(Object.keys(user))