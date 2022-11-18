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
    date VARCHAR(255),
    year NUMBER,
    embedId VARCHAR(255),
    main VARCHAR(255),
    others VARCHAR(255),
    event VARCHAR(255),
    );