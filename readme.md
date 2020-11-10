#  Javascript Challenge : "Data Visualisation"

- repository : `js-datavisualisation-challenge`  
- mode: `solo`  
- type: `consolidation challenge`  
- duration: `5 days`  
- author: `Alexandre Plennevaux`  

## Objectives
This consolidation challenge will help you assess your ability to solve a problem inspired from real-life situations using your new javascript muscles involving the following know-hows :

- **DOM** manipulation
- **AJAX**/**FETCH** request
- Using **Third-party libraries**
- **problem-solving** : design a logical solution to implement the expected result
- Debugging using the console
- Understand the notion of **"separation of concerns"**

![Droid](js-1.gif)

## Your mission

You work in the Multimedia department of one of the European Union institutions. This morning, Johnny Hasnoclew, your Project Manager, sends you on a mission: one of the in-house journalists has published a new article on the institution's website. The article in question is already integrated with an **html** / **css** / **Javascript file**.

He asks you to make it more *rich*, more *interactive*, more... *sexy* (The use of that specific adjective indicates that Johnny certainly worked in advertising before, the poor guy).

That's exactly what you're going to do, by adding two **interactive data visualisation graphics** using javascript.  These graphs will be interactive in the sense that the user can manipulate the graph, such as filtering data, or reveal detailed data when the mouse hovers over it. You are free to design the interaction in your project.

### 1. Inline data (data in the document)
In this html file, you will find two data tables. Use JavaScript to traverse the DOM to insert right above each of these tables a representation of its data in the form of an interactive graph.

If javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears between the title and the table.

### 2. Remote data, in real-time, via ajax
There are data sitting at this URL :  [https://canvasjs.com/services/data/datapoints.php](https://canvasjs.com/services/data/datapoints.php)

Retrieve the data via Ajax, and use it to insert a graph that refreshes every second, just below the main title (`h1`) of the article.

Don't hesitate to adapt the code provided in this tutorial: [Live Updating Charts from JSON API & AJAX](https://canvasjs.com/docs/charts/how-to/live-updating-javascript-charts-json-api-ajax/), but adapt it to this third-party library: [chart.js](https://www.chartjs.org/) or [ToastUi-Chart](https://ui.toast.com/tui-chart/), because this tutorial uses another (not-free) library (canvasJS).

**Again**: if javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears.


## How will we do this?

1. Use a javascript library that makes it easier to do this instead of using just "Vanilla Javascript" (= using javascript without libraries).
If you had never coded in javascript before BeCode, use [chart.js](https://www.chartjs.org/) or [ToastUi-Chart](https://ui.toast.com/tui-chart/).
If you already had a good knowledge of Javascript before you switched to BeCode, you can directly use the [D3.js - Data-Driven Documents](https://d3js.org/) library, which is more complex but offers many possibilities.
2. Get trained in their use.
3. Attack the problem by looking for a good logical path. Break it down into **small problems**, into **progressive** steps. Commit as you move forward. First the DOM, access the right place, then retrieve the data, then generate the graph. Something like that 😉
4. A method of thinking: *Reverse-engineering* of your objective: start at the end and go up the thread of dependencies to the starting point. It gives something like this:

> - To have a graph, you need data. So I have to get them back.  
> - Where is this data ?   
> - To have a graph I have to find the right place in the DOM, how can I do that?  
> - To get a graph I will use *this* library of *data visualization*. How does it work?  
> ...  

---
## Constraints
- You can't edit the html file.
- You have the choice of the type of graphics. Considers the most relevant based on the data and what story they can "tell".
- The choice of the javascript library is limited to the 2 libraries offered (there are many others, but these are references and are very popular)
---

## Help each other (to a certain extend)

You can help each other under these two conditions:

- You first **searched alone** and **read this** ([How to ask the help of a senior developer 🥇](https://stackoverflow.com/help/how-to-ask))
- The person helping **does not provide a ready-made code** and **does not code for the other**. The objective remains to learn, not to solve. The result is less important than the path. Helps by asking questions, trying to get the other person to find the answer on their own.

## Evaluation
The evaluation method chosen is a **self-evaluation** based on the following indicators:

#### 1. handling of the DOM:

- [ ] I was able to find the right selector to do it.
- [ ] I was able to inject the graph in the right place on the page via javascript.
- [ ] I was able to retrieve the html data in a format adapted to my javascript code.

### 2. Request ajax/fetch:
- [ ] I was able to receive the answer from the remote server in json.
- [ ] Then, I was able to build a callback function to process this data.

### 3. Use of **third party libraries**:
- [ ] I was able to integrate the third-party library into my application.
- [ ] I used the documentation provided by the library.
- [ ] I was able to generate the 2 inline data graphs.
- [ ] I was able to generate the "remote data" graph.

### 4. Problem-solving:

- [ ] Syntactic rigor: I was able to translate the processes I imagined into javascript syntax.
- [ ] Logical thinking: Through iterations and trial and error, I was able to find a logical path that works to address the issues raised by the client's request. Specifically:
  - [ ] I was able to generate the 2 inline data graphs.
	- [ ]  I was able to generate the "remote data" graph.
  - [ ]  I was able to build a callback function to process remote data (received via ajax).
	- [ ]  I was able to make the realtime graph refresh in real time.
	- [ ]  I was able to display the detailed data when I hover the mouse.

### 5. Debugging:

  - [ ]  I use the console to understand what is happening and compare what I am trying to program with what the machine is doing.

### 6. Separation of concerns:

 - [ ]  If I disable javascript, the user experience is satisfactory, the user has access to data and content
 - [ ]  If I enable javascript, the tables are enhanced with an interactive graph.

 ## Good luck !

![](js-2.gif)



<!-- Votre mission
Vous travaillez au sein du département Multimédia d'une des institutions de l'Union européenne. Ce matin, Johnny Hasnoclew, votre chef de projet, vous envoie en mission: l'un des journalistes internes a publié un nouvel article sur le site internet de l'institution. L'article en question est déjà intégré à un fichier html / css / Javascript .

Il vous demande de le rendre plus riche , plus interactif , plus ... sexy (L'utilisation de cet adjectif spécifique indique que Johnny a certainement travaillé dans la publicité avant, le pauvre type).

C'est exactement ce que vous allez faire, en ajoutant deux graphiques de visualisation de données interactifs à l' aide de javascript. Ces graphiques seront interactifs dans le sens où l'utilisateur peut manipuler le graphique, comme filtrer les données, ou révéler des données détaillées lorsque la souris le survole. Vous êtes libre de concevoir l'interaction dans votre projet.

1. Données en ligne (données dans le document)
Dans ce fichier html, vous trouverez deux tableaux de données. Utilisez JavaScript pour parcourir le DOM pour insérer juste au-dessus de chacune de ces tables une représentation de ses données sous la forme d'un graphe interactif.

Si javascript est désactivé, le graphique n'apparaît pas. Si javascript est activé, le graphique apparaît entre le titre et le tableau.

2. Données à distance, en temps réel, via ajax
Il y a des données à cette URL: https://canvasjs.com/services/data/datapoints.php

Récupérez les données via Ajax et utilisez-les pour insérer un graphique qui s'actualise toutes les secondes, juste en dessous du titre principal ( h1) de l'article.

N'hésitez pas à adapter le code fourni dans ce tutoriel: Live Updating Charts from JSON API & AJAX , mais adaptez-le à cette bibliothèque tierce: chart.js ou ToastUi-Chart , car ce tutoriel en utilise un autre (non gratuit) bibliothèque (canvasJS).

Encore une fois : si javascript est désactivé, le graphique n'apparaît pas. Si javascript est activé, le graphique apparaît.

Comment allons-nous faire cela?
Utilisez une bibliothèque javascript qui facilite la tâche au lieu d'utiliser uniquement "Vanilla Javascript" (= utiliser javascript sans bibliothèques). Si vous n'aviez jamais codé en javascript avant BeCode, utilisez chart.js ou ToastUi-Chart . Si vous aviez déjà une bonne connaissance de Javascript avant de passer à BeCode, vous pouvez directement utiliser la bibliothèque D3.js - Data-Driven Documents , qui est plus complexe mais offre de nombreuses possibilités.
Soyez formé à leur utilisation.
Attaquez le problème en recherchant un bon chemin logique. Décomposez-le en petits problèmes , en étapes progressives . Engagez-vous à mesure que vous avancez. D'abord le DOM, accédez au bon endroit, puis récupérez les données, puis générez le graphe. Quelque chose comme ca😉
Une méthode de réflexion: La rétro-ingénierie de votre objectif: commencez par la fin et remontez le fil des dépendances jusqu'au point de départ. Cela donne quelque chose comme ça:
Pour avoir un graphique, vous avez besoin de données. Je dois donc les récupérer.
Où sont ces données?
Pour avoir un graphique, je dois trouver le bon endroit dans le DOM, comment puis-je faire cela?
Pour obtenir un graphique, j'utiliserai cette bibliothèque de visualisation de données . Comment ça marche?
...
Contraintes
Vous ne pouvez pas modifier le fichier html.
Vous avez le choix du type de graphisme. Considère le plus pertinent en fonction des données et de l'histoire qu'ils peuvent «raconter».
Le choix de la librairie javascript est limité aux 2 librairies proposées (il en existe bien d'autres, mais ce sont des références et sont très appréciées)
S'entraider (dans une certaine mesure)
Vous pouvez vous entraider dans ces deux conditions:

Vous avez d'abord cherché seul et lu ceci ( Comment demander l'aide d'un développeur senior🥇)
La personne aidant ne fournit pas de code prêt à l'emploi et ne code pas pour l'autre . L'objectif reste d'apprendre, non de résoudre. Le résultat est moins important que le chemin. Aide en posant des questions, en essayant d'amener l'autre personne à trouver la réponse par elle-même.
Évaluation
La méthode d'évaluation choisie est une auto-évaluation basée sur les indicateurs suivants:

1. manipulation du DOM:
 J'ai pu trouver le bon sélecteur pour le faire.
 J'ai pu injecter le graphique au bon endroit sur la page via javascript.
 J'ai pu récupérer les données html dans un format adapté à mon code javascript.
2. Demandez ajax / fetch:
 J'ai pu recevoir la réponse du serveur distant dans json.
 Ensuite, j'ai pu créer une fonction de rappel pour traiter ces données.
3. Utilisation de bibliothèques tierces :
 J'ai pu intégrer la bibliothèque tierce dans mon application.
 J'ai utilisé la documentation fournie par la bibliothèque.
 J'ai pu générer les 2 graphiques de données en ligne.
 J'ai pu générer le graphique "données distantes".
4. Résolution de problèmes:
 Rigueur syntaxique: j'ai pu traduire les processus que j'imaginais en syntaxe javascript.
Pensée logique: grâce à des itérations et des essais et erreurs, j'ai pu trouver un chemin logique qui fonctionne pour résoudre les problèmes soulevés par la demande du client. Plus précisément:
 J'ai pu générer les 2 graphiques de données en ligne.
 J'ai pu générer le graphique "données distantes".
 J'ai pu créer une fonction de rappel pour traiter les données distantes (reçues via ajax).
 J'ai pu actualiser le graphique en temps réel en temps réel.
 J'ai pu afficher les données détaillées en survolant la souris.
5. Débogage:
 J'utilise la console pour comprendre ce qui se passe et comparer ce que j'essaie de programmer avec ce que fait la machine.
6. Séparation des préoccupations:
 Si je désactive javascript, l'expérience utilisateur est satisfaisante, l'utilisateur a accès aux données et au contenu
 Si j'active javascript, les tableaux sont améliorés avec un graphique interactif.
Bonne chance ! -->