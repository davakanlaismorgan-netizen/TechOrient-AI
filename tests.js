// node tests.js  — vérifie des propriétés, pas des classements imposés
const D=require('./domains.js'),E=require('./recommendation.js');
let f=0;const t=(n,c)=>{console.log((c?'OK  ':'FAIL ')+n);if(!c)f++};
const prof=(i,tech={},extra={})=>({interest:i,tech,motiv:{math:3,prog:3,docs:3,persist:3},goal:{code:3,hw:3,vis:3,com:3},...extra});
const base={};for(const k of 'data stats ml ai apps web mobile soft auto logic net srv os sec vuln db dash ui ux iot robot game perf test hw arch biz explain'.split(' '))base[k]=2;
const topIds=(a,n=5)=>E.recommend(D,a).all.slice(0,n).map(x=>x.id);
t('47 domaines',D.length===47&&new Set(D.map(d=>d.id)).size===47);
const data=prof({...base,data:5,stats:5,dash:5});
t('profil données -> da/ds/bi dans le top 5',['da','ds','bi'].some(x=>topIds(data).includes(x)));
const web=prof({...base,web:5,ui:4,apps:4});
t('profil web -> fe/fs dans le top 5',['fe','fs'].some(x=>topIds(web).includes(x)));
const sec=prof({...base,sec:5,vuln:5,net:4});
t('profil sécurité -> domaine Cybersécurité dans le top 3',E.recommend(D,sec).all.slice(0,3).some(x=>x.family==='Cybersécurité'));
t('modifier les intérêts change le classement',topIds(data)[0]!==topIds(web)[0]);
t('Python seul n\'impose pas un domaine',E.recommend(D,prof({...base,hw:5,iot:5},{py:4})).all[0].id!=='ds');
const beg=prof({...base,web:5,ui:5},{});
t('débutant sans technos : classement et score non nuls',E.recommend(D,beg).all[0].final>.5);
t('intérêt élevé + faible maîtrise reste bien classé',E.recommend(D,prof({...base,sec:5,vuln:5},{sec:0})).all.slice(0,5).some(x=>x.family==='Cybersécurité'));
const empty=E.recommend(D,{interest:{}});
t('réponses manquantes : aucun score fabriqué',empty.all.length===0&&empty.exploratory&&empty.picks.length===0);
const part=E.scoreDomain(D[0],{interest:{data:5}});
t('technique non renseignée = null (pas 0)',part.T===null&&part.M===null&&part.I===1);
t('profil indifférent -> exploratoire',E.recommend(D,prof(Object.fromEntries(Object.keys(base).map(k=>[k,3])))).exploratory);
t('stabilité',JSON.stringify(E.recommend(D,data))===JSON.stringify(E.recommend(D,data)));
const div=E.recommend(D,prof({...base,data:5,stats:5,dash:5,ml:5,ai:5,db:5,biz:5}));
const fam={};div.picks.forEach(p=>fam[p.family]=(fam[p.family]||0)+1);
t('max 3 recommandations par famille',Object.values(fam).every(n=>n<=3));
t('explication sans technos inventées',!E.explain(E.scoreDomain(D[0],beg),D[0],{},{}).includes('Tu déclares'));
t('fiches complètes (métiers, prérequis, voisin existant)',D.every(d=>d.jobs.length>=2&&d.prereq&&d.level>=1&&D.some(x=>x.id===d.near)&&d.diff));
t('contradiction IA sans programmation détectée',E.recommend(D,prof({...base,ai:5},{},{motiv:{prog:1}})).contradictions.length===1);
t('contradiction cybersécurité sans réseaux détectée',E.recommend(D,prof({...base,sec:5,net:1,os:1})).contradictions.length===1);
t('pas de contradiction sur un profil cohérent',E.recommend(D,data).contradictions.length===0);
const hi=(r,ids,n)=>r.all.slice(0,n).some(x=>ids.includes(x.id));
const P=[
['2 IA débutant en programmation',prof({...base,ai:5,ml:5,data:4},{},{motiv:{math:3,prog:1,docs:3,persist:3}}),r=>hi(r,['genai','ml','ds','dl'],5)&&r.contradictions.length>0],
['4 mobile',prof({...base,mobile:5,apps:5,ui:3}),r=>hi(r,['mob'],3)],
['6 réseaux',prof({...base,net:5,srv:4,os:3}),r=>hi(r,['net','netsec','sa'],5)],
['7 cloud/DevOps',prof({...base,auto:5,srv:5,perf:4,test:3}),r=>hi(r,['devops','cloud','sre'],5)],
['8 design/UX',prof({...base,ui:5,ux:5,explain:3}),r=>hi(r,['uiux','pd','a11y'],3)],
['9 robotique/embarqué',prof({...base,robot:5,hw:5,iot:5}),r=>hi(r,['rob','emb','iot'],3)],
['10 bases de données',prof({...base,db:5,perf:3}),r=>hi(r,['dba','de','ae'],5)],
['11 intérêts variés',prof(Object.fromEntries(Object.keys(base).map((k,i)=>[k,3+(i%3===0?1:0)]))),r=>r.exploratory||new Set(r.picks.map(p=>p.family)).size>=2],
['12 débutant',prof({...base,web:4}),r=>r.all[0].final>0&&r.all[0].final<=1],
['13 compétent mais désintéressé des données',prof({...base,data:1,stats:1,ml:1,dash:1},{py:4,sql:4,ml:4,bi:4}),r=>!hi(r,['ds','da','ml'],3)],
['14 motivé sans prérequis',prof({...base,sec:5,vuln:5,net:5},{sec:0,net:0,linux:0}),r=>hi(r,['secdef','pentest','netsec','appsec'],5)&&r.all[0].final>.5],
['15 contradictoire',prof({...base,ai:5},{},{motiv:{prog:1}}),r=>r.contradictions.length>0],
['16 peu de réponses',{interest:{data:5,web:4,sec:3}},r=>r.exploratory&&r.picks.length===0],
['17 sans préférence',prof(Object.fromEntries(Object.keys(base).map(k=>[k,3]))),r=>r.exploratory]];
for(const[n,a,c]of P){const r=E.recommend(D,a);t('profil '+n,c(r)&&r.all.every(x=>x.final>=0&&x.final<=1)&&!(r.all.length>20&&r.all.every(x=>x.final>.9))&&JSON.stringify(r)===JSON.stringify(E.recommend(D,a)))}
const fe=D.find(d=>d.id==='fe'),s0=E.scoreDomain(fe,data).final,s1=E.scoreDomain(fe,{...data,prof:{stat:1}}).final;
t('le statut visé ne sert que de départage (+0,05 max)',s1-s0>0&&s1-s0<=.0501);
t('fiches : description, 3 notions, projet de portfolio',D.every(d=>d.desc&&d.fund.length===3&&d.port));
const dsd=D.find(d=>d.id==='ds');
t('activités à éviter : score en baisse (plafonné)',E.scoreDomain(fe,{...data,like:{interfaces:3,ecrire:3}}).final<s0&&s0-E.scoreDomain(fe,{...data,like:{interfaces:3,ecrire:3,infra:3,analyser:3,auto:3}}).final<=.1201);
t('niveau 4 sans projet plafonné à 2',E.scoreDomain(dsd,{interest:{data:5},tech:{py:4,sql:4},prof:{proj:0}}).T===.5&&E.scoreDomain(dsd,{interest:{data:5},tech:{py:4,sql:4},prof:{proj:2}}).T===1);
t('métier envisagé : départage +0,03 max',(()=>{const x=E.scoreDomain(dsd,{...data,prof:{job:'data scientist'}}).final-E.scoreDomain(dsd,data).final;return x>0&&x<=.0301})());
t('poids modifiables sans reconstruire',(()=>{const o=E.WEIGHTS.T,b=E.scoreDomain(dsd,{...data,tech:{py:4}}).final;E.WEIGHTS.T=0;const c=E.scoreDomain(dsd,{...data,tech:{py:4}}).final;E.WEIGHTS.T=o;return b!==c})());
console.log(f?`${f} échec(s)`:'Tous les tests passent');process.exit(f?1:0);
