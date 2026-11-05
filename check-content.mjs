import assert from 'node:assert/strict';
import fs from 'node:fs';
import {sources,nodes,edges,chapters,media} from './public/data.js';
const ids=new Set(nodes.map(x=>x.id)), refs=new Set(sources.map(x=>x.id)), recordings=new Set(media.map(x=>x.id));
assert.equal(ids.size,nodes.length);
for(const e of edges){assert(ids.has(e.a)&&ids.has(e.b));assert(refs.has(e.source));assert(e.label.en&&e.label.es);}
for(const n of nodes){assert(n.text.en&&n.text.es);for(const s of n.sources)assert(refs.has(s));}
for(const c of chapters){assert(c.title.en&&c.title.es&&c.lead.en&&c.lead.es);assert(c.paras.every(p=>p.en&&p.es));assert(c.related.every(id=>ids.has(id)));assert(!c.media||recordings.has(c.media));assert(c.sources.every(id=>refs.has(id)));}
for(const match of JSON.stringify([nodes,chapters,media]).matchAll(/\[\[([\w-]+)\|/g))assert(ids.has(match[1]));
for(const m of media)assert(fs.existsSync('public/'+m.image));
assert(!/Lamb of God|Castañeda|Palaces Burn/.test(JSON.stringify([sources,nodes,edges,chapters])+fs.readFileSync('research/RESEARCH.md','utf8')));
assert(edges.filter(e=>e.a==='rutan'||e.b==='rutan').length>=8);
for(const n of nodes){assert(n.image&&fs.existsSync('public/'+n.image));assert(n.caption.en&&n.caption.es);assert(refs.has(n.imageSource));}
for(const c of chapters)if(c.visual){assert(fs.existsSync('public/'+c.visual.image));assert(refs.has(c.visual.source));}
for(const m of media)if(m.guide){assert(m.guide.text.en&&m.guide.text.es);assert(m.guide.sources.every(id=>refs.has(id)));assert(!m.guide.compare||recordings.has(m.guide.compare));}
for(const c of chapters){assert((c.branches||[]).every(id=>chapters.some(x=>x.id===id&&x.optional)));assert((c.extraMedia||[]).every(id=>recordings.has(id)));}
console.log('Passed: bilingual content, inline links, relationships, source IDs, media assets, removed branch, illustrated entries and expanded Rutan connections.');
