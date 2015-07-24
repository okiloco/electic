
Ext.define("MyApp.view.login.Login",{
    extend: "Ext.Panel",
    alias:'widget.login',
    requires: [
        "MyApp.view.login.LoginController",
        "MyApp.view.login.LoginModel"
    ],

    controller: "login-login",
    viewModel: {
        type: "login-login"
    },

    html: "Hello, World!!"
});
