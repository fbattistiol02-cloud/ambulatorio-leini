import { readFileSync } from 'node:fs';
const css = readFileSync(new URL('../src/app/globals.css', import.meta.url), 'utf8') + readFileSync(new URL('../src/app/editorial.css', import.meta.url), 'utf8');
const tokens = Object.fromEntries([...css.matchAll(/--([\w-]+):\s*(#[\da-f]{3,6})\s*;/gi)].map(([,name,value])=>[name,value.length===4?"#"+[...value.slice(1)].map(v=>v+v).join(""):value]));
const c={...tokens,photoText:'#405a6b',photoBlue:'#dce5ed',photoWarm:'#e8e6e0',nightText:'#c4d2de',nightLabel:'#b9cfe1',nightLink:'#d0dfed',controlStroke:'#657e92'};
const lum=h=>h.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
const pairs=[['ink','paper'],['muted','paper'],['muted','pale'],['white','blue'],['blue','paper'],['ink','accent'],['white','navy'],['nightText','navy'],['nightLabel','navy'],['nightLink','navy'],['photoText','photoBlue'],['photoText','photoWarm'],['controlStroke','paper',3],['controlStroke','pale',3]];
for (const tint of ['medicine-tint','diagnostic-tint','surgery-tint','laparoscopy-tint']) { pairs.push(['ink',tint],['muted',tint],['blue',tint]); }
let failed=false;for(const[f,b,threshold=4.5]of pairs){if(!c[f]||!c[b])throw new Error(`Colore mancante: ${f}/${b}`);const[hi,lo]=[lum(c[f]),lum(c[b])].sort((a,b)=>b-a);const ratio=(hi+.05)/(lo+.05);console.log(`${f}/${b}: ${ratio.toFixed(2)} ${ratio>=threshold?'PASS':'FAIL'}`);if(ratio<threshold)failed=true;}if(failed)process.exitCode=1;
