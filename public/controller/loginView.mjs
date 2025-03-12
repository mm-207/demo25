import TemplateManager from "../modules/templateManager.mjs";
const templateFile = "/view/loginView.html";

console.log("??")

const template = await TemplateManager.fetchTemplate(templateFile);
const loginView = TemplateManager.cloneTemplate(template, document.body);

console.log(loginView);

loginView.getElementById("button").onclick = (evt) => {
    console.log("Yesss");
}

LoginViewController = {
    view: loginView
};


export default LoginViewController