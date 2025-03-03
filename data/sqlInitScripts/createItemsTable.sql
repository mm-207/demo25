CREATE TABLE "public"."Items" (
    "id" integer GENERATED ALWAYS AS IDENTITY,
    "data" text,
    "connections" text,
    PRIMARY KEY ("id")
);
