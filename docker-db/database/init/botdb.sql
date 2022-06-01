create table if not exists authors
(
    id        int auto_increment
        primary key,
    firstname varchar(30) null,
    lastname  varchar(30) null
);

create table if not exists genres
(
    id          int auto_increment
        primary key,
    name        varchar(30) null,
    description text        null
);

create table if not exists styles
(
    id          int auto_increment
        primary key,
    name        varchar(30) null,
    description text        null
);

create table if not exists books
(
    id          int auto_increment
        primary key,
    name        varchar(30) null,
    description text        null,
    author      int         null,
    genre       int         null,
    style       int         null,
    pages       int         null,
    constraint books_authors_id_fk
        foreign key (author) references authors (id)
            on update cascade,
    constraint books_genres_id_fk
        foreign key (genre) references genres (id)
            on update cascade,
    constraint books_styles_id_fk
        foreign key (style) references styles (id)
            on update cascade
);


