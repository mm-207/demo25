import LoginViewController from "./controller/loginView.mjs"

console.log("????")

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
}

console.log(LoginViewController);

document.body.append(LoginViewController.view);