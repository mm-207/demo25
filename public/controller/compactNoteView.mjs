import TemplateManager from "../modules/templateManager.mjs";
const templateFile = "/view/loginView.html";

const template = await TemplateManager.fetchTemplate(templateFile);
//const loginView = TemplateManager.cloneTemplate(template, document.body,);

function createNewNoteSummary(id, name, target) {

    const noteView = TemplateManager.cloneTemplate(template, target); // Isteden for at cloneTemplate legger til i document body så skal den bare levere tilbake et element.
    noteView.queryElement("#open-note").setAttribute("data-note-id", id);

    noteView.queryElement("#open-note").onclick = (e) => {
        // åpne notat
    }

    return noteView;

}




export default createNewNoteSummary