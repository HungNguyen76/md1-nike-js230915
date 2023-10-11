function uuid() {
    return new Date().getMilliseconds() + Math.floor(Math.random() * 999999999)
}

let listUsers = JSON.parse(localStorage.getItem("listUsers")) || []

console.log("listUsers: ", listUsers)
/*listUsers.push({
    idUser: uuid(),
    email: "admin@gmail.com",
    password: "123456",
    password_confirmation: "123456",
    cartUser: [],
    isAdmin: true
})*/
localStorage.setItem("listUsers", JSON.stringify(listUsers))
