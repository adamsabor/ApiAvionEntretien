---
title: Sabor Adam

---

# Sabor Adam

# Étape 1 : Note de Conception d'Architecture pour le Service API Gestion Vols

## 1.1 Modèle Conceptuel/Physique de Données

### Modèle Conceptuel
L'API doit permettre de gérer des avions et des techniciens réalisant des entretiens sur ces avions. Voici un modèle conceptuel de base :

- **Avion**
  - immatriculation (Clé primaire)
  - marque
  - modèle
  - heuresDeVol

- **Technicien**
  - id (Clé primaire)
  - nom
  - spécialité

### Modèle Physique
Ce modèle peut être traduit en tables SQL pour MariaDB comme suit :

```sql
CREATE TABLE Avion (
    immatriculation VARCHAR(10) NOT NULL PRIMARY KEY,
    marque VARCHAR(50),
    modele VARCHAR(50),
    heuresDeVol INT
);

CREATE TABLE Technicien (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    specialite VARCHAR(50)
);
```

## 1.2 Liste des Endpoints
Voici la liste des endpoints à implémenter pour l'API :

### Avion
- **GET** `/avions` : Récupérer la liste de tous les avions.
- **GET** `/avions/:immatriculation` : Récupérer les détails d'un avion par son immatriculation.
- **POST** `/avions` : Ajouter un nouvel avion.
- **PUT** `/avions/:immatriculation` : Mettre à jour les informations d'un avion.
- **DELETE** `/avions/:immatriculation` : Supprimer un avion.

### Technicien
- **GET** `/techniciens` : Récupérer la liste des techniciens.
- **GET** `/techniciens/:id` : Récupérer les détails d'un technicien par son ID.
- **POST** `/techniciens` : Ajouter un nouveau technicien.
- **PUT** `/techniciens/:id` : Mettre à jour les informations d'un technicien.
- **DELETE** `/techniciens/:id` : Supprimer un technicien.

## 1.3 Liste des Erreurs Possibles
Pour chaque requête, il est important de gérer les erreurs possibles :

- **400 Bad Request** : Lorsque les données envoyées ne sont pas valides.
- **404 Not Found** : Lorsque l'entité (avion ou technicien) n'est pas trouvée.
- **500 Internal Server Error** : Pour toutes les erreurs serveur non prévues.