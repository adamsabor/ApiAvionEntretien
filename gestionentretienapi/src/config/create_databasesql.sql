CREATE DATABASE IF NOT EXISTS gestion_entretien;

USE gestion_entretien;

CREATE TABLE aeronefs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    numero_serie VARCHAR(50) NOT NULL
);