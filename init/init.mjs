
import { console } from "inspector";
import { Node, Tree, saveTree } from "../data/tree.mjs"
import fs from "fs/promises"

//#region DUMMY data --------------------

let treeData = await fs.readFile("./init/dummy/tree1.json");
console.log(treeData);



//#endregion


// Start server ----------
const server = await import("../server.mjs")