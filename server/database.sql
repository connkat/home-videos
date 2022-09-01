CREATE DATABASE IF NOT EXISTS `users`;
CREATE TABLE user(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
);

CREATE DATABASE IF NOT EXISTS `videos`;
CREATE TABLE todo(
    id SERIAL PRIMARY KEY,
    year NUMBER,
    month VARCHAR(3),
    day NUMBER,
    person VARCHAR(255),
    videolink VARCHAR(255),
    description VARCHAR(255),
    others VARCHAR(255),
    holiday VARCHAR(255),
    );