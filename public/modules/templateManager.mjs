const TemplateManager = {};

TemplateManager.fetchTemplate = async (path) => {

    // Laster inn extern template
    let rawTemplate = await (await fetch(path)).text();
    // Et hack for å gjøre det enklere å laste templates dynamisk. 
    let div = document.createElement("div");
    div.innerHTML = rawTemplate;
    let template = div.firstChild;
    return template;

}

TemplateManager.cloneTemplate = (template, target, data = {}) => {
    const clone = template.content.cloneNode(true);
    let html = clone.innerHTML;

    for (let key of Object.keys(data)) {
        html = html.replaceAll(RegExp(`/\{\{${key}\}\}/gm`, data[key]));
    }

    clone.innerHTML = html;
    target.appendChild(clone);
    return clone;
}


export default TemplateManager