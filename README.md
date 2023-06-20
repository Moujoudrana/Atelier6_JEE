        JEE-Activite-6
Le but de cette activite est de reprendre l'exemple de la démo pour maitriser les concepts fondamentaux de Angular.

Travail à faire
  Créer un projet Angular avec la commande ng new my-angular-project.
  Créer une barre de navigation sur le composant App.
  Créer le modele 'Product' avec les champs suivants:
      id de type number,
      name de type String,
      price de type number,
      checked de type boolean.
  Définir le fichier 'data/db.json' pour le stockage des données.
  Créer les composants suivants :
      Home => ng g c home,
      new-product => ng g c new-product,
      products => ng g c products.
  Créer le service 'services/product' => ng g s services/product.
  Définir quelques opérations de gestion des produits :
  Consulter tous les produits avec pagination,
  Chercher des produits avec un mot clé,
  Ajouter un produit,
  Supprimer un produit,
  La possibilité de changer la valeur booleanne de l'attribut 'checked' avec un bouton.


# FirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
