import RecordStoreAbstractInterface from "./recordStoreInterface.mjs";
import DbManager from "./db.mjs";


class ItemStore extends RecordStoreAbstractInterface {

    create(item) {
        DbManager.create(`INSERT INTO "public"."Items"("data", "connections") VALUES($1, $2) RETURNING "id", "data", "connections";`, item.)
    }

}


export default ItemStore