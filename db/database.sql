CREATE DATABASE IF NOT EXISTS ximer;
USE ximer;

create table if not exists `ximer`.`user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `active` bool NOT NULL default TRUE,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

insert into user values (null, 'erick', 'erick2001', 'bwimpey0@google.co.jp', '2001-12-12', true, '2001-12-13', '2001-12-13');



