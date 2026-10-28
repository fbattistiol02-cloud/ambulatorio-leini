"""Verifica i requisiti del cliente sull'HTML prodotto dalla build, senza dipendenze."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json
import re

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.links=[]; self.ids=[]; self.headings=[]; self.images=[]; self.text=[]; self.hidden=0; self.heading=None; self.summary=0; self.robots=''; self.forms=0; self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='br' and self.heading: self.heading[1]+=' '
        if tag in ['script','style']: self.hidden+=1
        if a.get('id'): self.ids.append(a['id'])
        if tag=='a': self.links.append(a.get('href',''))
        if tag=='img': self.images.append(a)
        if tag=='form': self.forms+=1
        if tag=='summary' and 'aria-label' not in a: self.summary+=1
        if tag=='meta' and a.get('name')=='robots': self.robots=a.get('content','')
        if tag in ['h1','h2','h3']: self.heading=[tag,'']
    def handle_data(self,text):
        if not self.hidden:
            self.text.append(text)
            if self.heading: self.heading[1]+=text
    def handle_endtag(self,tag):
        if tag in ['script','style']: self.hidden-=1
        if self.heading and tag==self.heading[0]: self.headings.append(self.heading); self.heading=None

routes=['/','/ambulatorio','/prestazioni','/equipe','/chirurgia-laparoscopica','/contatti','/privacy']
raw={route:Path('.next/server/app/'+('index' if route=='/' else route[1:])+'.html').read_text() for route in routes}
pages={route:Page(text) for route,text in raw.items()}
for route,p in pages.items():
    assert len([h for h in p.headings if h[0]=='h1'])==1,route
    assert len(p.ids)==len(set(p.ids)),f'Duplicate ids: {route}'
    assert 'noindex' in p.robots,route
    assert not p.forms,route
    assert all('alt' in i for i in p.images),route
    text=' '.join(p.text)
    assert not re.search(r'provvisor|due medici|due veterinari|Altre competenze|Prenota online',text,re.I),route
    assert 'tel:+390119981469' in p.links,route
    for link in p.links:
        parsed=urlsplit(link)
        if parsed.scheme or parsed.netloc: continue
        path=parsed.path or route
        assert path in pages,f'Missing route {link} on {route}'
        if parsed.fragment: assert unquote(parsed.fragment) in pages[path].ids,f'Missing anchor {link}'
    print(f'PASS {route}: H1, ids, links, alt, noindex, no forms, no obsolete copy')
home=pages['/']; services=pages['/prestazioni']; team=pages['/equipe']
assert home.headings[0]==['h1','Il tuo veterinario di fiducia a Leinì dal 2009']
expected=['Visita e medicina','Diagnostica','Chirurgia e ricovero','Chirurgia laparoscopica']
assert [h[1] for h in services.headings if h[0]=='h2'][:4]==expected
homehead=[h[1].strip('.') for h in home.headings]
assert [homehead.index(x) for x in expected]==sorted(homehead.index(x) for x in expected)
for route in ['/','/contatti']:
 p=pages[route];text=' '.join(p.text)
 assert p.summary==7
 assert all(x in text for x in ['09:30–12:30','16:00–19:30','Sabato'])
 assert 'tel:+393476401966' in p.links and 'mailto:av.leini@libero.it' in p.links
 assert any('google.com/maps/search/?api=1&query=' in x and '10040' in x for x in p.links)
assert 'patients-title' not in home.ids
assert 'https://www.instagram.com/ambu.vet.leini/' in home.links
text=' '.join(team.text)
assert all(x in text for x in ['2007','2015','gennaio 2009','GPCert in oftalmologia','GPCert Derm','Cáceres','ciclismo','trekking'])
assert 'qualification' not in raw['/equipe']
areas=['Medicina interna','Dermatologia','Pronto soccorso','Citologia','Medicina degli animali non convenzionali']
assert all(f'<li>{area}</li>' in raw['/equipe'] for area in areas)
for text in raw.values():
 data=json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>',text,re.S).group(1))
 hours=data['openingHoursSpecification']
 assert [(h['opens'],h['closes']) for h in hours]==[('09:30','12:30'),('16:00','19:30'),('09:30','12:30')]
 assert hours[2]['dayOfWeek']=='Saturday'
 assert data['address']['postalCode']=='10040'
assert not Path('.next/server/app/qa-gallery.html').exists()
assert not re.search(r'<video\b',raw['/chirurgia-laparoscopica'])
print('PASS headline, service order, 7 FAQs, confirmed hours/schema, contacts, biographies, Instagram, hidden gallery/video and no QA route')
