function uuid() {
    return new Date().getMilliseconds() + Math.floor(Math.random() * 999999999)
}

document.addEventListener("DOMContentLoaded", function () {
    Validator({
        form: "#form-1",
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        onSubmit: function (data) {
            console.log(data)
            let listUsers = JSON.parse(localStorage.getItem("listUsers")) || []
            let flag = true;

            for (let i = 0; i < listUsers.length; i++) {
                //kiểm tra email user đăng ký đã tồn tại chưa
                if(listUsers[i].email == data.email) {
                    flag = false;
                    break;
                }
            }
            //email user đăng ký chưa tồn tại => cho đăng ký
            if(flag) {
                data.idUser = uuid()
                data.cartUser = []
                listUsers.push(data)
                localStorage.setItem("listUsers", JSON.stringify(listUsers))
                showSuccessRegisterToast()
                /*function changeToLoginPage() {
                    window.location.href = "login.html"
                }

                setTimeout(changeToLoginPage, 1000)*/
            }
        }
    })
})