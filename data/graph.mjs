import ItemStore from "./graphRecordStore.mjs";

const storageHandler = new ItemStore();

class Node {

    constructor(id = null, data, edges) {
        this.id = id;
        this.data = data;
        this.edges = edges || [];
    }

    async create() {
        const item = await storageHandler.create(this);
        this.id = item.id;
        this.data = item.data;
        this.edges = item.edges;
        return this;
    }

    async read() {
        const item = await storageHandler.read(this);
        this.id = item.id;
        this.data = item.data;
        this.edges = item.edges;
        return this;
    }


    async update() {
        const item = await storageHandler.update(this);
        this.id = item.id;
        this.data = item.data;
        this.edges = item.edges;
        return this;
    }

    async purge() {
        await storageHandler.purge(this);
        return null;
    }


}


