JEE-Activite-6
-
Le but de cette activite est de maitriser les concepts fondamentaux de Angular.

Travail à faire:
-
  1.Créer un projet Angular avec la commande ng new FirstApp.
  
  2.Créer une barre de navigation sur le composant App.
  
  3.Créer le modele 'Product' avec les champs suivants:
  
      id de type number,
      
      name de type String,
      
      price de type number,
      
      checked de type boolean.
      
  4.Définir le fichier 'data/db.json' pour le stockage des données.
  
  5.Créer les composants suivants :
  
      Home => ng g c home,

      new-product => ng g c new-product,
      
      products => ng g c products.
      
  6.Créer le service 'services/product' => ng g s services/product.
  
  7.Définir quelques opérations de gestion des produits :
  
      Consulter tous les produits avec pagination
      
      Chercher des produits avec un mot clé
      
      Ajouter un produit
      
      Supprimer un produit
      
      La possibilité de changer la valeur booleanne de l'attribut 'checked' avec un bouton.


![image](https://github.com/Moujoudrana/Atelier6_JEE/assets/93864104/4bd33de4-f1b5-4463-b4b3-572714b038fa)
Angular est un framework open-source développé par Google. Il est utilisé pour créer des applications web dynamiques et interactives. Angular est basé sur le langage TypeScript, qui est une extension de JavaScript.

Angular est largement utilisé pour développer des applications web d'entreprise, des applications de gestion, des tableaux de bord, des applications mobiles, etc. Il est apprécié pour sa performance, sa robustesse et sa capacité à créer des applications complexes et évolutives.

Parmi ses principales caractéristiques :
-
Composants : Angular utilise une architecture basée sur des composants. Les composants sont des éléments autonomes de l'application qui encapsulent à la fois le HTML, le CSS et le comportement de l'interface utilisateur. Ils permettent de créer une application modulaire et réutilisable.

Liaison de données : Angular propose une liaison de données bidirectionnelle entre les composants et les vues. Cela signifie que les modifications effectuées dans la vue sont reflétées dans les données du composant, et vice versa. Cela facilite la manipulation des données et maintient l'interface utilisateur synchronisée avec l'état de l'application.

Routage : Angular fournit un système de routage qui permet de gérer la navigation entre les différentes vues de l'application. Le routage permet de créer des liens profonds et des URL significatives pour chaque vue, facilitant ainsi la navigation et le partage de liens.

Services : Les services dans Angular sont des classes réutilisables qui fournissent des fonctionnalités spécifiques à travers l'application. Ils sont utilisés pour gérer la logique métier, l'accès aux données externes, les appels API, etc. Les services favorisent la séparation des préoccupations et permettent de créer une application plus modulaire.

Concernant le projet:
-
Ce projet a été généré avec Angular CLI version 16.0.1.

Installation :

    npm i bootstrap bootstrap-icon
    
    npm install -g json-server
    
Lancement du json-server sur le port 8089 :

    json-server -w data/db.json -p 8089


Le développement de cette application m'a permis d'acquérir une meilleure compréhension des concepts clés du framework, tels que les composants, les services et les routes.

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
