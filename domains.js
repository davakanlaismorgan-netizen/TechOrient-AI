// Catalogue : id|nom|famille|intérêts (clé+poids)|technos|prog math design sys comm|projet découverte
(function(){
const R=`da|Data Analysis|Données|data3 stats2 dash3 explain2 biz2|sql bi py|3 3 1 0 3|Analyser un jeu de données et présenter 3 conclusions
bi|Business Intelligence|Données|dash3 data2 biz3 explain2 db1|sql bi|2 2 2 0 4|Créer un tableau de bord de ventes
ds|Data Science|Données|stats3 data3 ml2 logic1|py sql ml|4 5 1 0 3|Prédire un résultat sur un jeu de données public
ml|Machine Learning|Données|ml3 stats2 ai2 data2|py ml|5 5 0 0 2|Entraîner un classifieur simple et mesurer ses erreurs
genai|Intelligence artificielle générative|Données|ai3 ml2 apps2 auto1|py js|4 3 1 0 3|Construire un petit assistant de résumé de texte
dl|Deep Learning|Données|ml3 ai3 stats2 perf1|py ml|5 5 0 1 1|Classer des images avec un petit réseau
de|Data Engineering|Données|db3 data2 auto2 perf2 arch1|sql py cloud|5 3 0 2 2|Pipeline : CSV vers base SQL nettoyée
bd|Big Data|Données|data2 perf3 arch2 db2|py sql cloud|5 3 0 3 1|Traiter un gros fichier par blocs et mesurer le temps
dba|Administration de bases de données|Données|db3 perf2 srv2 sec1|sql linux|3 2 0 3 2|Installer une base et planifier une sauvegarde
ae|Analytics Engineering|Données|data2 db3 dash1 auto1 biz1|sql git|4 3 0 1 3|Modéliser des tables propres pour un tableau de bord
fe|Développement web frontend|Développement|web3 ui2 ux2 apps1|html js git|4 1 4 0 3|Construire une page interactive responsive
be|Développement web backend|Développement|web2 db2 arch1 apps1 logic2|js sql py|5 2 0 1 2|Créer une API de liste de tâches
fs|Développement web full-stack|Développement|web3 apps2 db2 ui1|html js sql git|5 2 2 0 3|Mini-application complète avec base de données
mob|Développement mobile|Développement|mobile3 apps2 ui1 ux1|mob java js|5 1 3 0 2|Application mobile d'une seule fonction
soft|Développement logiciel|Développement|soft3 apps2 logic2 arch1 test1|c java py|5 2 1 1 2|Petit logiciel en ligne de commande
game|Développement de jeux vidéo|Développement|game3 logic2 perf2 ui1|c js|5 3 3 1 2|Jeu 2D simple (type Pong)
api|Développement d'API et de services|Développement|apps2 arch2 db1 web1 auto1 perf1|js py sql|5 2 0 1 2|API documentée avec 3 routes
arch|Architecture logicielle|Développement|arch3 soft2 perf2 logic1 biz1|java py|4 2 1 1 4|Schéma d'architecture d'une application existante
qa|Assurance qualité et tests|Développement|test3 logic2 auto2 explain1|js py|3 1 0 0 3|Écrire des tests pour une petite fonction
auto|Automatisation et scripting|Développement|auto3 logic2 os1 test1|py linux|4 1 0 2 2|Script qui range automatiquement des fichiers
net|Réseaux informatiques|Infrastructures|net3 srv2 os1 hw1 sec1|net linux|1 1 0 4 2|Simuler un petit réseau local
tel|Télécommunications|Infrastructures|net2 hw3 perf1|net|1 3 0 4 2|Schématiser une chaîne de transmission radio
sa|Administration systèmes|Infrastructures|srv3 os3 net1 auto1|linux|2 1 0 4 2|Monter un serveur de test en machine virtuelle
cloud|Cloud Computing|Infrastructures|srv2 arch2 auto2 perf1|cloud linux|3 1 0 4 2|Héberger un site statique sur une offre gratuite
devops|DevOps|Infrastructures|auto3 srv2 os1 test1 perf1|docker linux git|4 1 0 4 2|Automatiser le test d'un projet à chaque commit
sre|Site Reliability Engineering|Infrastructures|perf3 srv2 auto2 test1|linux docker cloud|4 2 0 4 2|Surveiller un petit service et simuler une panne
virt|Virtualisation et conteneurisation|Infrastructures|srv3 os2 net1 auto1|docker linux|2 1 0 4 1|Conteneuriser une application simple
lin|Administration Linux|Infrastructures|os3 srv3 auto2|linux|2 1 0 4 1|Gérer utilisateurs et droits sur une VM Linux
secdef|Cybersécurité défensive|Cybersécurité|sec3 net2 os2 logic1|sec net linux|3 2 0 4 2|Analyser les journaux d'une machine de laboratoire
pentest|Tests d'intrusion autorisés|Cybersécurité|vuln3 sec2 net2 logic2|sec net linux|3 2 0 3 2|Exercice sur plateforme d'entraînement légale (CTF)
netsec|Sécurité des réseaux|Cybersécurité|sec3 net3|net sec|2 2 0 4 2|Configurer un pare-feu sur un réseau simulé
appsec|Sécurité des applications|Cybersécurité|vuln3 sec2 soft1 web1 test1|sec js|4 2 0 2 2|Corriger les failles d'une application volontairement vulnérable
cloudsec|Sécurité Cloud|Cybersécurité|sec3 srv2 net1|cloud sec|3 1 0 4 2|Revoir les permissions d'un compte cloud de test
grc|Gouvernance, risques et conformité|Cybersécurité|sec2 biz3 explain2|sec|0 1 0 1 5|Rédiger une analyse de risques pour une petite structure
dfir|Investigation numérique et analyse de malwares|Cybersécurité|vuln2 sec2 os3 logic2|sec linux|3 2 0 3 2|Analyser une image disque d'exercice
iot|Internet des objets|Matériel|iot3 hw3 net1 auto1|py c|3 2 0 4 2|Simuler un capteur de température
emb|Systèmes embarqués|Matériel|hw3 iot2 perf2 os1|c|5 3 0 5 1|Faire clignoter une LED (simulateur)
rob|Robotique|Matériel|robot3 hw3 logic2 ai1|py c|4 4 0 5 2|Robot virtuel qui évite des obstacles
ind|Informatique industrielle|Matériel|hw3 auto2 iot1 robot1|c|3 2 0 5 2|Simuler une chaîne automatisée simple
hpc|Calcul haute performance|Matériel|perf3 stats2 arch1|c py|5 5 0 3 1|Paralléliser un calcul et comparer les temps
cv|Vision par ordinateur et graphique|Matériel|ml2 ai2 game1 stats1 perf1|py c ml|5 5 3 1 1|Détecter des contours dans une image
uiux|UI/UX Design|Design et SI|ui3 ux3 explain1|ui html|0 1 5 0 4|Maquette testée avec un utilisateur réel
pd|Product Design numérique|Design et SI|ux3 biz2 explain2 ui1|ui|0 1 4 0 5|Cadrer un problème utilisateur en une page
cons|Conseil technologique|Design et SI|biz3 explain3 arch1 data1|-|1 1 1 1 5|Recommander un outil à une petite entreprise
isg|Informatique de gestion et SI|Design et SI|biz3 db2 apps1 explain1 dash1|sql java|3 1 1 1 4|Concevoir un outil de gestion de stock
erp|ERP et intégration de systèmes|Design et SI|biz3 db1 arch1 apps1 explain1|sql|2 1 0 1 4|Cartographier les flux d'une PME
a11y|Accessibilité numérique|Design et SI|ux3 ui2 web2 test1|html ui|3 0 4 0 4|Auditer l'accessibilité d'une page web`;
const DOMAINS=R.split('\n').map(l=>{const f=l.split('|'),i={};
 for(const m of f[3].matchAll(/([a-z]+)(\d)/g))i[m[1]]=+m[2];
 const v=f[5].split(' ').map(Number);
 return{id:f[0],name:f[1],family:f[2],i,t:f[4]==='-'?[]:f[4].split(' '),p:v[0],m:v[1],d:v[2],s:v[3],c:v[4],project:f[6]};});
const DET=`da|Analyste de données;Analyste reporting|Excel, notions de statistiques|1|ds:moins de modélisation, plus d'interprétation et de communication
bi|Analyste BI;Consultant décisionnel|Excel, SQL de base|1|da:plus orienté pilotage et tableaux de bord récurrents
ds|Data scientist;Analyste quantitatif|Python, statistiques, algèbre|3|da:modélise et prédit au lieu de seulement décrire
ml|Ingénieur machine learning;Data scientist|Python, algèbre linéaire, probabilités|3|ds:industrialise des modèles, plus de code et de maths
genai|Ingénieur IA appliquée;Développeur d'assistants|Python ou JavaScript, API|2|ml:intègre des modèles existants plutôt que de les entraîner
dl|Ingénieur deep learning;Chercheur en IA|Python, maths avancées, bases du ML|3|ml:réseaux de neurones et calcul lourd
de|Ingénieur données;Développeur ETL|SQL, Python, bases de données|2|ds:construit les flux de données, ne les modélise pas
bd|Ingénieur Big Data;Ingénieur plateforme données|SQL, Linux, notions de calcul distribué|3|de:volumes massifs et calcul distribué
dba|Administrateur de bases de données;Ingénieur BD|SQL, Linux|2|de:exploite et protège les bases plutôt que d'alimenter des flux
ae|Analytics engineer;Analyste senior|SQL solide, Git|2|bi:prépare les données modélisées que les analystes utilisent
fe|Développeur frontend;Intégrateur web|HTML, CSS, JavaScript|1|be:côté visible, dans le navigateur
be|Développeur backend;Ingénieur API|Un langage, SQL, HTTP|2|fe:logique serveur et données, pas l'interface
fs|Développeur full-stack;Développeur web freelance|HTML/CSS, JavaScript, SQL|2|fe:couvre frontend et backend, avec moins de profondeur sur chacun
mob|Développeur mobile;Développeur Flutter|Un langage, notions d'interface|2|fe:contraintes des téléphones et des magasins d'applications
soft|Ingénieur logiciel;Développeur applicatif|Algorithmique, un langage compilé|2|arch:écrit le logiciel, sans décider de la structure globale
game|Développeur de jeux;Programmeur gameplay|Algorithmique, maths de base|3|soft:temps réel, graphisme et physique
api|Développeur d'API;Ingénieur intégration|HTTP, JSON, un langage|2|be:conçoit des services destinés à d'autres programmes
arch|Architecte logiciel;Tech lead|Expérience de projets, patrons de conception|3|soft:décide de la structure plutôt que d'écrire chaque module
qa|Testeur QA;Ingénieur automatisation de tests|Logique, notions de code|1|devops:vérifie le produit, ne gère pas l'infrastructure
auto|Ingénieur scripting;Développeur d'outils internes|Python ou shell, Linux|1|devops:automatise des tâches, pas toute la chaîne de livraison
net|Technicien réseau;Administrateur réseau|Modèle TCP/IP, adressage|2|netsec:fait fonctionner le réseau, pas sa protection
tel|Ingénieur télécoms;Technicien radio|Physique du signal, réseaux|3|net:transmission et infrastructures d'opérateurs
sa|Administrateur systèmes;Technicien support avancé|Linux ou Windows Server, réseaux|2|devops:maintient des serveurs, avec moins d'automatisation
cloud|Ingénieur cloud;Architecte cloud junior|Linux, réseaux, un fournisseur cloud|2|sa:infrastructure louée et pilotée par API
devops|Ingénieur DevOps;Ingénieur plateforme|Linux, Git, scripting|3|sa:automatise livraison et exploitation, plus de code
sre|Ingénieur fiabilité (SRE);Ingénieur exploitation|Linux, scripting, supervision|3|devops:cible la disponibilité et la gestion des incidents
virt|Administrateur virtualisation;Ingénieur conteneurs|Linux, réseaux|2|devops:isole et déploie, sans toute la chaîne de livraison
lin|Administrateur Linux;Ingénieur systèmes|Ligne de commande|2|sa:expertise Linux approfondie plutôt que multi-systèmes
secdef|Analyste SOC;Ingénieur sécurité|Réseaux, systèmes, notions de sécurité|2|pentest:détecte et répond plutôt qu'attaquer pour tester
pentest|Pentester;Auditeur sécurité|Réseaux, Linux, web, cadre légal strict|3|secdef:teste les défenses avec autorisation écrite
netsec|Ingénieur sécurité réseau;Administrateur pare-feu|Réseaux solides|2|secdef:protège le périmètre et les flux réseau
appsec|Ingénieur sécurité applicative;Chasseur de bugs|Développement web, HTTP|3|pentest:vise le code et les applications
cloudsec|Ingénieur sécurité cloud;Auditeur cloud|Cloud, réseaux, sécurité|3|netsec:sécurise des ressources cloud et leurs permissions
grc|Analyste conformité;Responsable risques SI|Notions de sécurité, rédaction|1|secdef:cadre, politiques et audits plutôt que technique
dfir|Analyste forensique;Analyste de malwares|Systèmes, réseaux, rigueur|3|secdef:enquête après un incident
iot|Développeur IoT;Technicien objets connectés|Programmation de base, électronique simple|2|emb:connecte et fait communiquer, moins bas niveau
emb|Ingénieur embarqué;Développeur firmware|C, électronique|3|iot:programme les composants au plus près du matériel
rob|Ingénieur robotique;Technicien robot|Programmation, maths, électronique|3|emb:ajoute mouvement, capteurs et contrôle
ind|Technicien automaticien;Ingénieur informatique industrielle|Électronique, automatismes|2|emb:pilote des processus industriels
hpc|Ingénieur calcul scientifique;Ingénieur performance|C ou Python, algèbre, parallélisme|3|bd:optimise le calcul plutôt que le volume de données
cv|Ingénieur vision;Développeur graphique|Python ou C++, maths, images|3|dl:traite images et rendu, avec ou sans réseaux de neurones
uiux|Designer UI/UX;Chercheur utilisateur|Observation, outils de maquette|1|pd:conçoit écrans et parcours plutôt que la stratégie produit
pd|Product designer;Product manager junior|Notions d'UX, communication|2|uiux:cadre le problème et la valeur, pas seulement l'interface
cons|Consultant IT;Business analyst|Communication, vision d'ensemble|2|isg:conseille sur les choix plutôt que d'implémenter
isg|Analyste de gestion;Chef de projet SI|Bases de données, processus métier|1|erp:conçoit des outils de gestion sur mesure
erp|Consultant ERP;Intégrateur de systèmes|Processus métier, SQL|2|isg:paramètre et intègre des progiciels existants
a11y|Spécialiste accessibilité;Intégrateur web|HTML sémantique, notions WCAG|2|fe:veille à ce que tout le monde puisse utiliser l'interface`;
DET.split('\n').forEach(l=>{const f=l.split('|'),d=DOMAINS.find(x=>x.id===f[0]);d.jobs=f[1].split(';');d.prereq=f[2];d.level=+f[3];const n=f[4].indexOf(':');d.near=f[4].slice(0,n);d.diff=f[4].slice(n+1);});
const DT=`da|Décrire et interpréter des données pour éclairer des décisions|nettoyage de données;statistiques descriptives;visualisation|Tableau de bord d'une activité locale avec recommandations chiffrées
bi|Transformer les données d'une organisation en indicateurs de pilotage|indicateurs (KPI);modèle de données;tableaux de bord|Tableau de bord de suivi des ventes d'une boutique réelle
ds|Modéliser et prédire à partir de données|probabilités;statistiques inférentielles;modèles simples|Étude prédictive complète avec méthode et limites expliquées
ml|Entraîner et évaluer des modèles qui apprennent des données|algèbre linéaire;sur-apprentissage;évaluation de modèles|Comparatif de 3 modèles sur un problème réel avec rapport
genai|Intégrer des modèles génératifs dans des applications utiles|principes des modèles de langage;consignes (prompts);évaluation des réponses|Assistant spécialisé sur un domaine local avec évaluation des erreurs
dl|Concevoir et entraîner des réseaux de neurones|calcul matriciel;rétropropagation;données d'entraînement|Classifieur d'images sur un jeu de données local documenté
de|Collecter, transformer et livrer des données fiables|SQL avancé;ETL;qualité des données|Pipeline automatisé publié avec journal d'exécution
bd|Traiter des volumes de données trop grands pour une seule machine|calcul distribué;partitionnement;optimisation|Traitement d'un gros jeu de données avec mesures de performance
dba|Garantir performance, sécurité et disponibilité des bases|modèle relationnel;index;sauvegarde et restauration|Base documentée avec plan de sauvegarde testé
ae|Structurer des données propres et documentées pour l'analyse|modélisation en tables;SQL propre;tests de données|Modèle de données documenté alimentant un tableau de bord
fe|Construire ce que l'utilisateur voit et manipule dans le navigateur|HTML sémantique;CSS responsive;JavaScript du DOM|Site responsive publié avec interactions et accessibilité de base
be|Construire la logique serveur, les données et la sécurité côté serveur|HTTP;bases de données;authentification|API avec base de données, authentification et documentation
fs|Livrer une application complète, de l'interface à la base|frontend;backend;déploiement|Application complète publiée répondant à un besoin réel
mob|Créer des applications pour téléphones|cycle de vie d'une appli;interfaces tactiles;stockage local|Application mobile utile hors connexion, publiée en test
soft|Concevoir et écrire des logiciels fiables|algorithmique;structures de données;tests|Logiciel documenté avec tests et dépôt Git propre
game|Créer des expériences jouables en temps réel|boucle de jeu;collisions;gestion des entrées|Jeu complet de quelques niveaux publié
api|Exposer des fonctions à d'autres programmes|HTTP et JSON;conception de routes;versionnage|API publique documentée avec exemples d'usage
arch|Décider de la structure technique d'un système|modularité;compromis techniques;documentation d'architecture|Dossier d'architecture d'un projet réel avec schémas et choix justifiés
qa|Prévenir et détecter les défauts avant les utilisateurs|cas de test;tests automatisés;rapport de bug|Suite de tests automatisés sur un projet open source
auto|Supprimer le travail manuel répétitif par du code|scripts;planification de tâches;gestion d'erreurs|Outil d'automatisation utilisé pour une vraie tâche, avec guide
net|Concevoir et exploiter les réseaux|modèle TCP/IP;adressage et routage;diagnostic|Réseau d'entreprise simulé avec schéma et tests
tel|Faire circuler l'information sur de longues distances|signaux;modulation;architecture d'opérateur|Étude comparée de deux technologies de transmission
sa|Maintenir serveurs et services en fonctionnement|installation de serveurs;comptes et droits;supervision|Serveur de test documenté avec sauvegarde et supervision
cloud|Exploiter des ressources informatiques louées à la demande|modèles IaaS et PaaS;réseau virtuel;coûts|Application déployée sur le cloud avec budget maîtrisé
devops|Relier développement et exploitation par l'automatisation|intégration continue;conteneurs;infrastructure décrite en code|Chaîne de livraison automatique d'une application publiée
sre|Garantir la fiabilité de services en production|indicateurs de service;supervision;gestion d'incident|Tableau de supervision avec exercice de panne documenté
virt|Isoler et déployer des applications avec conteneurs et machines virtuelles|machines virtuelles;conteneurs;images|Application conteneurisée avec déploiement reproductible
lin|Administrer des systèmes Linux en profondeur|ligne de commande;droits;services système|Serveur Linux durci avec scripts d'administration
secdef|Détecter et contenir les menaces|journaux;indicateurs de compromission;hygiène de sécurité|Analyse d'incident simulée avec rapport et recommandations
pentest|Évaluer la sécurité d'un système avec autorisation|cadre légal;méthodologie d'audit;rédaction de rapport|Rapport d'audit d'une plateforme d'entraînement légale
netsec|Protéger les flux et le périmètre du réseau|pare-feu;segmentation;VPN|Réseau simulé sécurisé avec règles de filtrage documentées
appsec|Empêcher les failles dans le code et les applications|failles web courantes;authentification;revue de code|Correction documentée d'une application volontairement vulnérable
cloudsec|Sécuriser identités, accès et données dans le cloud|gestion des identités;chiffrement;configuration sûre|Audit de configuration d'un compte cloud de test
grc|Cadrer risques, règles et conformité|analyse de risques;politiques de sécurité;audit|Politique de sécurité et analyse de risques d'une petite structure
dfir|Comprendre ce qui s'est passé après un incident|preuves numériques;analyse de journaux;chaîne de conservation|Rapport d'investigation sur une image disque d'exercice
iot|Relier objets physiques et logiciels|capteurs;protocoles de communication;microcontrôleurs|Station de mesure connectée avec tableau de bord
emb|Programmer des composants au plus près du matériel|électronique de base;langage C;interruptions|Montage embarqué documenté avec schéma et code
rob|Faire percevoir et agir des machines|capteurs et actionneurs;cinématique;contrôle|Robot (réel ou simulé) accomplissant une tâche mesurée
ind|Piloter des processus industriels|automates;capteurs industriels;sécurité des procédés|Simulation d'une ligne automatisée documentée
hpc|Accélérer de gros calculs scientifiques|complexité algorithmique;parallélisme;mesure de performance|Calcul parallélisé avec analyse du gain de temps
cv|Faire comprendre des images aux ordinateurs|traitement d'image;géométrie;apprentissage sur images|Application de détection ou de rendu avec démonstration
uiux|Concevoir des parcours et des interfaces utilisables|recherche utilisateur;maquettes;tests d'usage|Étude de cas complète : recherche, maquettes, test, itérations
pd|Définir quel produit numérique construire et pourquoi|besoins utilisateurs;priorisation;mesure de succès|Dossier produit d'une idée locale testée auprès d'utilisateurs
cons|Aider une organisation à choisir et réussir ses solutions techniques|analyse de besoin;comparaison de solutions;communication|Étude de cas d'un outil recommandé à une petite entreprise
isg|Concevoir les outils de gestion d'une organisation|processus métier;modélisation de données;spécifications|Application de gestion de stock ou de clients pour un cas réel
erp|Paramétrer et connecter les logiciels de gestion d'une entreprise|processus d'entreprise;paramétrage;intégration de données|Cartographie et paramétrage d'un ERP libre sur un cas simulé
a11y|Rendre le numérique utilisable par tous|normes WCAG;lecteurs d'écran;navigation clavier|Audit et correction de l'accessibilité d'un site existant`;
DT.split('\n').forEach(l=>{const f=l.split('|'),d=DOMAINS.find(x=>x.id===f[0]);d.desc=f[1];d.fund=f[2].split(';');d.port=f[3];});
if(typeof module!=='undefined')module.exports=DOMAINS;else window.DOMAINS=DOMAINS;
})();
