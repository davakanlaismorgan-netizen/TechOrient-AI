// Moteur déterministe, sans DOM. Réponses : {interest:{clé:1-5}, tech:{clé:0-4}, motiv:{math,prog,docs,persist:1-5}, goal:{code,hw,vis,com:1-5}}
// Une réponse absente est EXCLUE du calcul (jamais traitée comme 0).
(function(){
const VERSION='0.1';
const WEIGHTS={I:.5,M:.2,G:.2,T:.1}; // la technique pèse peu : un débutant n'est pas pénalisé
const mean=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:null;
const ok=v=>typeof v==='number'&&!isNaN(v);
// Objectifs : simple départage (+0,05 si le domaine correspond au statut visé ; -0,03 si <3 h/semaine et domaine avancé)
const FREE=['fe','be','fs','mob','da','bi','ds','genai','api','uiux','a11y','auto','game'];
const AV={ecrire:['soft','apps','web'],analyser:['data','stats','dash'],interfaces:['ui','ux'],infra:['srv','net','os'],pannes:['os','srv','net'],recherche:['stats','ml','vuln'],modeles:['ml','stats'],auto:['auto'],physique:['hw','iot','robot'],communiquer:['explain','biz'],clients:['biz'],tester:['test']};
const STAT={1:FREE,2:FREE.concat(['pd','cons']),3:['ml','dl','ds','hpc','cv','rob'],4:['cons','pd','grc','isg','erp','bi']};
function scoreDomain(d,a){
 let tot=0,got=0,s=0,hi=[];
 for(const k in d.i){tot+=d.i[k];const v=a.interest&&a.interest[k];
  if(ok(v)){const n=(v-1)/4;got+=d.i[k];s+=n*d.i[k];if(v>=4)hi.push([k,d.i[k]*n])}}
 const I=got?s/got:null,cov=got/tot;
 const ts=d.t.filter(k=>ok(a.tech&&a.tech[k]));
 const pj=(a.prof||{}).proj,eff=k=>pj===0?Math.min(a.tech[k],2):a.tech[k]; // niveau déclaré >2 sans projet réalisé : plafonné (autoévaluation non prouvée)
 const T=ts.length?mean(ts.map(k=>eff(k)/4)):null;
 const have=ts.filter(k=>a.tech[k]>=1),learn=d.t.filter(k=>!(a.tech&&a.tech[k]>=2));
 const m=a.motiv||{},mi=[[m.math,d.m],[m.prog,d.p],[m.docs,1],[m.persist,1]].filter(x=>ok(x[0])&&x[1]>0);
 const mw=mi.reduce((x,y)=>x+y[1],0);
 const M=mw?mi.reduce((x,y)=>x+(y[0]-1)/4*y[1],0)/mw:null;
 const g=a.goal||{},gd=[[g.code,d.p],[g.hw,d.s],[g.vis,d.d],[g.com,d.c]].filter(x=>ok(x[0])).map(x=>Math.abs((x[0]-1)/4-x[1]/5));
 const G=gd.length?1-mean(gd):null;
 const dims={I,T,M,G};let ws=0,fs=0;
 for(const k in dims)if(dims[k]!==null){ws+=WEIGHTS[k];fs+=WEIGHTS[k]*dims[k]}
 let fin=I===null?null:fs/ws;const pf=a.prof||{};
 if(fin!==null){if(pf.stat!=null&&(STAT[pf.stat]||[]).includes(d.id))fin+=.05;if(pf.time===0&&d.level===3)fin-=.03;let tw=0,dl=0;for(const k in d.i)tw+=d.i[k];
 for(const x in a.like||{}){const ks=AV[x];if(ks)dl+=(a.like[x]===1?.04:a.like[x]===3?-.08:0)*ks.reduce((s,k)=>s+(d.i[k]||0),0)/tw}
 fin+=Math.max(-.12,Math.min(.08,dl)); // activités aimées (+) ou à éviter (-), plafonné
 const jb=String(pf.job||'').toLowerCase().trim();
 if(jb.length>=3&&(d.name+' '+(d.jobs||[]).join(' ')).toLowerCase().includes(jb))fin+=.03; // métier envisagé : départage
 fin=Math.max(0,Math.min(1,fin))}
 const final=fin;
 hi.sort((x,y)=>y[1]-x[1]);
 return{id:d.id,name:d.name,family:d.family,final,...dims,cov,provisional:cov<.5,hi:hi.map(x=>x[0]),have,learn};
}
function recommend(domains,a){
 const all=domains.map(d=>scoreDomain(d,a));
 const ranked=all.filter(x=>x.final!==null).sort((x,y)=>y.final-x.final||x.id.localeCompare(y.id));
 const nInt=Object.values(a.interest||{}).filter(ok).length;
 const exploratory=nInt<8||!ranked.length||(ranked[0].final-ranked[Math.min(9,ranked.length-1)].final<.08);
 const top=ranked.length?ranked[0].final:0,fam={},picks=[];
 for(const r of ranked){ // seuil absolu + écart au meilleur + max 3 par famille (diversité)
  if(picks.length>=10||r.final<.5||r.final<top-.2)continue;
  if((fam[r.family]||0)>=3)continue;fam[r.family]=(fam[r.family]||0)+1;picks.push(r);}
 return{version:VERSION,contradictions:contradictions(a),all:ranked,picks:exploratory?[]:picks,exploratory,answeredInterests:nInt};
}
function contradictions(a){const i=a.interest||{},m=a.motiv||{},g=a.goal||{},c=[];
 if(Math.max(i.ai||0,i.ml||0)>=4&&m.prog<=2)c.push({id:"ai",text:"Tu aimes l'IA mais tu as peu envie d'apprendre la programmation : l'IA en demande beaucoup."});
 if(Math.max(i.sec||0,i.vuln||0)>=4&&i.net<=2&&i.os<=2)c.push({id:"sec",text:"Tu es attiré par la cybersécurité mais peu par les réseaux et les systèmes, qui en sont la base."});
 if(Math.max(i.ui||0,i.ux||0)>=4&&g.vis<=2)c.push({id:"ui",text:"Tu aimes les interfaces mais tu veux éviter la conception visuelle."});
 return c;}
const rnd5=x=>Math.round(x*20)*5; // pas de fausse précision
function explain(r,d,labels,techNames){
 const L=k=>labels[k]||k,out=[];
 out.push(r.hi.length?`Tu as exprimé un fort intérêt pour : ${r.hi.slice(0,3).map(L).join(', ')}.`:`Tes intérêts pour ce domaine sont modérés ; il reste une piste à explorer.`);
 out.push(r.have.length?`Tu déclares des notions en : ${r.have.map(k=>techNames[k]||k).join(', ')}.`:`Tu n'as déclaré aucune technologie liée : ce n'est pas un obstacle pour le découvrir.`);
 if(r.learn.length)out.push(`À découvrir progressivement : ${r.learn.slice(0,3).map(k=>techNames[k]||k).join(', ')}.`);
 if(r.provisional)out.push('Score provisoire : peu de tes réponses concernent ce domaine.');
 return out.join(' ');
}
const API={recommend,scoreDomain,explain,rnd5,WEIGHTS,VERSION};
if(typeof module!=='undefined')module.exports=API;else window.TO=API;
})();
