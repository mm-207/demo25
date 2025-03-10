import TemplateManager from "../modules/templateManager.mjs";
const templateFile = "loginView.html";

const template = TemplateManager.fetchTemplate(templateFile);
const loginView = TemplateManager.cloneTemplate(template, document.body);

loginView.getElementById("button").onclick = (evt) => {
    console.log("Yesss");
}

LoginViewController = {
    view: loginView
};


export default LoginViewController