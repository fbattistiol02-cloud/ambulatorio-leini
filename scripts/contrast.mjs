// Contrast checks for the active concept palette; exits nonzero below WCAG AA.
const lum = hex => {
 const rgb=hex.replace('#','').match(/../g).map(x=>parseInt(x,16)/255).map(v=>v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4);
 return 0.2126*rgb[0]+0.7152*rgb[1]+0.0722*rgb[2];
};
const ratio=(a,b)=>{const [hi,lo]=[lum(a),lum(b)].sort((a,b)=>b-a);return(hi+0.05)/(lo+0.05);};
const c={paper:'#f5f1e9',paper2:'#ebe6dc',mist:'#e8ebe1',ink:'#252b27',inkSoft:'#5e645d',olive:'#535f48',hazelDeep:'#8d4f36',night:'#29352e',white:'#ffffff',light:'#c2cbbc',accent:'#d4b89a'};
const pairs=[['ink','paper'],['inkSoft','paper'],['inkSoft','paper2'],['inkSoft','mist'],['olive','paper'],['white','olive'],['hazelDeep','paper'],['paper','night'],['light','night'],['accent','night']];
let failed=false;
for(const [f,b] of pairs){const r=ratio(c[f],c[b]);console.log(`${f} / ${b}: ${r.toFixed(2)} ${r>=4.5?'PASS':'FAIL'}`);if(r<4.5)failed=true;}
if(failed)process.exitCode=1;
