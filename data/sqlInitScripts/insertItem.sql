INSERT INTO "public"."Items"("data", "connections") VALUES($1, $2) RETURNING "id", "data", "connections";
