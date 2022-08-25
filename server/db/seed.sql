CREATE TABLE "Users" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "email" varchar UNIQUE,
  "password" varchar,
  "createdAt" timestamp,
);


CREATE TABLE "Videos" (
  "id" int PRIMARY KEY,
  "year" varchar,
  "month" varchar,
  "holiday" varchar,
  "main" varchar,
  "others" varchar,
);
