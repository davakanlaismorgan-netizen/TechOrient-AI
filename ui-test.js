// npm i jsdom && node ui-test.js — parcours complet de l'interface (jsdom)
const {JSDOM}=require('jsdom'),fs=require('fs');let f=0;const t=(n,c)=>{console.log((c?'OK  ':'FAIL ')+n);if(!c)f++};
const dom=new JSDOM(fs.readFileSync(__dirname+'/index.html','utf8'),{runScripts:'dangerously',resources:'usable',url:'file://'+__dirname+'/index.html'});
dom.window.addEventListener('load',()=>{const w=dom.window,x=s=>w.eval(s),H=()=>w.document.getElementById('app').innerHTML;
 t('accueil',H().includes('Commencer'));
 for(let i=1;i<=4;i++){x(`go(${i})`);t('étape '+i+' affichée',H().includes('<select'))}
 x("'data stats ml ai apps web mobile soft auto logic net srv os sec'.split(' ').forEach(k=>set('interest',k,2));set('interest','web',5);set('interest','ui',4);set('interest','apps',4);set('tech','html',3);set('prof','proj',1)");
 x('go(STEPS.length)');const h=H();
 t('rapport avec cartes, comparaison, plan, retours, catalogue',h.includes('Ton rapport')&&h.includes('Comparaison')&&h.includes("Plan d'apprentissage")&&h.includes('pertinentes')&&h.includes('Catalogue complet'));
 x("A.interest={};A.motiv={};set('interest','ai',5);set('motiv','prog',1);clarDone=false;results()");
 t('étape de clarification',H().includes('Quelques précisions'));
 x("CL.ai='y';applyClar()");t('clarification appliquée',H().includes('Ton rapport')&&x('A.motiv.prog')===3);
 x("A.interest={};A.motiv={};clarDone=false;results()");t('profil vide : exploratoire',H().includes('exploratoire'));
 console.log(f?f+' échec(s)':'Interface OK');process.exit(f?1:0)});
