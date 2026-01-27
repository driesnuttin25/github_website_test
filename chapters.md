# Course: Computer Graphics [computer-graphics]

## Chapter: Introductie Computer Graphics [cg-intro]

Q: Wat is computer graphics?
A: Computer graphics is de wetenschap en kunst van visuele communicatie via een computerdisplay en interactieapparaten.

---
Q: Wat zijn de belangrijkste doelen van computer graphics?
A:
- Visuele communicatie
- Visualisatie van data
- Interactie met de gebruiker
- Opbouw van virtuele omgevingen

---
Q: Waarom is computer graphics nog relevant ondanks generative AI?
A:
- Volledige controle over wat er getoond wordt
- Visualisatie van “echte” en meetbare data
- Integratie in interactieve 3D-omgevingen
- Reproduceerbare en deterministische resultaten

---
Q: Noem belangrijke mijlpalen uit de vroege geschiedenis van computer graphics (jaren 1950–1960).
A:
- Grafische weergaven met oscilloscopen
- Eerste videospel: *Tennis for Two*
- Tekenprogramma *Sketchpad*
- Eerste gebruik van de term “Computer Graphics” (William Fetter, Boeing)
- Bézier-curves
- Eerste computeranimatiefilms
- Head-Mounted Displays (HMD)

---
Q: Wat was de rol van de University of Utah in de ontwikkeling van computer graphics?
A:
- Onderzoeksgroep rond Ivan Sutherland en David C. Evans
- Ontwikkeling van fundamentele 3D-concepten
- Bijdragen aan ray tracing (Arthur Appel)

---
Q: Wat is SIGGRAPH en waarom is het belangrijk?
A: SIGGRAPH is een ACM-conferentie (sinds 1969) die een centrale rol speelt in onderzoek en ontwikkeling binnen computer graphics.

---
Q: Welke technologische evoluties kwamen op vanaf de jaren 1980?
A:
- Opkomst van PC’s, CPU’s en GPU’s
- Shaders
- Silicon Graphics workstations
- Videogames en realtime rendering
- Chroma keying

---
Q: Welke belangrijke graphics-API’s en technologieën ontstonden later?
A:
- OpenGL (1992)
- Nvidia GeForce 256 (1999)
- OpenGL ES
- GPGPU
- Physically Based Rendering (PBR)
- Vulkan en Metal

---
Q: Wat is de grafische pijplijn (graphics pipeline)?
A: Een reeks stappen die geometrische data omzet naar pixels op het scherm, van vertices tot fragmenten in de framebuffer.

---
Q: Geef voorbeelden van toepassingen van computer graphics.
A:
- Grafieken en datavisualisatie
- CAD (Computer-Aided Design)
- Virtuele en augmented realiteit
- Kunst, animatie en videogames
- Beeldverwerking
- Grafische gebruikersinterfaces (GUI’s)




## Chapter: Interactie en Geometrische Primitieven [cg-interactie-primitieven]

Q: Welke drie grote onderdelen komen aan bod in dit hoofdstuk?
A:
- Interactie (invoer)
- Animatie
- Geometrische primitieven

---
Q: Wat is een attribute-variabele in GLSL?
A: Een attribute-variabele bevat per-vertex data (zoals positie) en wordt gebruikt in de vertex shader.

---
Q: Wat is een uniform-variabele in GLSL?
A: Een uniform-variabele is een globale variabele die dezelfde waarde heeft voor alle vertices en fragments.

---
Q: Wat is het verschil tussen attribute en uniform variabelen?
A:
- Attribute: per vertex verschillend
- Uniform: voor alle vertices gelijk
- Attribute → typisch positie, normaalvector
- Uniform → typisch kleur, transformaties

---
Q: Hoe geef je een attribute-variabele door van JavaScript naar de vertex shader?
A:
1. Attribuut declareren in shader
2. Locatie opvragen met `gl.getAttribLocation`
3. Waarde instellen met `gl.vertexAttrib*f`

---
Q: Welke functies bestaan er om attribute-waarden door te geven?
A:
- `gl.vertexAttrib1f`
- `gl.vertexAttrib2f`
- `gl.vertexAttrib3f`
- `gl.vertexAttrib4f`
- Vectorversies: `gl.vertexAttrib*fv`

---
Q: Hoe wordt een uniform-variabele doorgegeven van JavaScript naar de shader?
A:
1. Uniform declareren in shader
2. Locatie opvragen met `gl.getUniformLocation`
3. Waarde instellen met `gl.uniform*f`

---
Q: Welke functies bestaan er om uniform-waarden door te geven?
A:
- `gl.uniform1f`
- `gl.uniform2f`
- `gl.uniform3f`
- `gl.uniform4f`

---
Q: Wat betekent de naamgeving van WebGL-functies zoals gl.vertexAttrib3fv?
A:
- 3 → aantal componenten
- f → float
- v → vector als argument

---
Q: Wat is een event handler?
A: Een functie die bepaalt wat er gebeurt wanneer een specifieke gebeurtenis (event) plaatsvindt.

---
Q: Wat is een callback-functie?
A: Een functie die automatisch wordt aangeroepen wanneer een event optreedt.

---
Q: Geef voorbeelden van invoer-events in WebGL.
A:
- `document.onkeydown`
- `canvas.onmousedown`
- `canvas.onmouseup`
- `canvas.onmousemove`

---
Q: Waarom worden vaak anonieme functies gebruikt bij event handlers?
A: Om extra parameters door te geven zonder globale variabelen te gebruiken.

---
Q: Waarom is coördinatenconversie nodig bij muisklikken?
A:
- Muisevents werken in pixelcoördinaten
- WebGL gebruikt genormaliseerde coördinaten tussen -1 en 1
- Conversie is nodig om correcte posities te bekomen

---
Q: Wat zijn genormaliseerde WebGL-coördinaten?
A:
- x en y liggen tussen -1 en 1
- (0,0) ligt in het midden van het canvas

---
Q: Wat is animatie in computer graphics?
A: Het tonen van opeenvolgende beelden in de tijd om beweging te simuleren.

---
Q: Welke functie wordt gebruikt voor animaties in WebGL?
A: `requestAnimationFrame()`

---
Q: Waarom is requestAnimationFrame beter dan setInterval?
A:
- Gesynchroniseerd met schermverversing
- Efficiënter
- Minder CPU-belasting

---
Q: Hoe wordt tijdsafhankelijke animatie gerealiseerd?
A:
- Tijd meten met `Date.now()`
- Rotatie/verplaatsing schalen met verstreken tijd
- Onafhankelijk van framerate

---
Q: Wat zijn geometrische primitieven?
A: De basisvormen waaruit alle geometrie is opgebouwd.

---
Q: Waarom zijn buffer objects nodig?
A: Om meerdere vertices efficiënt van JavaScript naar de GPU te sturen.

---
Q: Wat is een buffer object?
A: Een geheugenbuffer op de GPU waarin vertexdata wordt opgeslagen.

---
Q: Geef de vijf stappen om een buffer object te gebruiken.
A:
1. Buffer object aanmaken (`gl.createBuffer`)
2. Buffer binden (`gl.bindBuffer`)
3. Data schrijven (`gl.bufferData`)
4. Buffer koppelen aan attribute (`gl.vertexAttribPointer`)
5. Attribute activeren (`gl.enableVertexAttribArray`)

---
Q: Welke functie wordt gebruikt om te tekenen met buffer objects?
A: `gl.drawArrays()`

---
Q: Welke tekenmodi ondersteunt gl.drawArrays?
A:
- `gl.POINTS`
- `gl.LINES`
- `gl.LINE_STRIP`
- `gl.LINE_LOOP`
- `gl.TRIANGLES`
- `gl.TRIANGLE_STRIP`
- `gl.TRIANGLE_FAN`

---
Q: Wat is het verschil tussen gl.TRIANGLES en gl.TRIANGLE_STRIP?
A:
- TRIANGLES: elke 3 vertices vormen een losse driehoek
- TRIANGLE_STRIP: elke nieuwe vertex vormt een nieuwe driehoek met de vorige twee


## Chapter: 2D Visualisatie en Geometrische Transformaties [cg-2d-transf]

Q: Wat is het doel van 2D visualisatie in computer graphics?
A: Het weergeven en manipuleren van 2D-geometrie via een programmeerbare grafische pijplijn.

---
Q: Waarom is de 2D grafische pijplijn zeer flexibel?
A:
- De pijplijn is volledig programmeerbaar via shaders
- Alle transformaties worden expliciet door de programmeur gedefinieerd

---
Q: Wat is het nadeel van een programmeerbare grafische pijplijn?
A: Alles moet zelf geprogrammeerd worden, er zijn geen vaste standaardtransformaties.

---
Q: Welke geometrische transformaties bestaan er in 2D?
A:
- Translatie
- Rotatie
- Schaling

---
Q: Wat doet een translatie in 2D?
A: Verplaatst een punt over een vaste afstand in x- en y-richting.

---
Q: Geef de wiskundige definitie van een 2D-translatie.
A:
x′ = x + tₓ  
y′ = y + tᵧ

---
Q: Wat doet een rotatie in 2D?
A: Draait een punt over een bepaalde hoek rond een vast draaipunt (meestal de oorsprong).

---
Q: Geef de formules voor een 2D-rotatie rond de oorsprong.
A:
x′ = x cosθ − y sinθ  
y′ = x sinθ + y cosθ

---
Q: Wat doet schaling in 2D?
A: Vergroot of verkleint een object langs de x- en y-as.

---
Q: Geef de formules voor 2D-schaling.
A:
x′ = sₓ · x  
y′ = sᵧ · y

---
Q: Waarom gebruiken we matrixnotatie voor transformaties?
A:
- Compacte voorstelling
- Makkelijk combineerbaar
- Efficiënt uitvoerbaar op de GPU

---
Q: Hoe wordt een algemene 2D-transformatie geschreven in matrixvorm?
A:  
P′ = A · P + B

---
Q: Waarom zijn homogene coördinaten nodig?
A:
- Translatie kan niet met een 2×2-matrix
- Door een extra dimensie toe te voegen kunnen alle transformaties met matrices gebeuren

---
Q: Wat is homogeniseren?
A:  
Het omzetten van (x, y) → (w·x, w·y, w)

---
Q: Wat is projecteren bij homogene coördinaten?
A:  
Het omzetten van (xʰ, yʰ, w) → (xʰ / w, yʰ / w)

---
Q: Hoe ziet een 2D-translatie eruit in homogene matrixvorm?
A:
| 1  0  tₓ |  
| 0  1  tᵧ |  
| 0  0  1  |

---
Q: Hoe ziet een 2D-rotatiematrix (homogeen) eruit?
A:
| cosθ  −sinθ  0 |  
| sinθ   cosθ  0 |  
|  0       0    1 |

---
Q: Hoe ziet een 2D-schalingsmatrix (homogeen) eruit?
A:
| sₓ  0   0 |  
| 0   sᵧ  0 |  
| 0   0   1 |

---
Q: Wat is een samengestelde transformatie?
A: Een opeenvolging van meerdere transformaties die samen één matrix vormen.

---
Q: Waarom is de volgorde van transformaties belangrijk?
A: Matrixvermenigvuldiging is niet-commutatief; een andere volgorde geeft een ander resultaat.

---
Q: Hoe voer je een rotatie rond een willekeurig punt uit?
A:
1. Transleer naar oorsprong
2. Roteer
3. Transleer terug

---
Q: Waar gebeurt de transformatie in WebGL?
A: In de vertex shader.

---
Q: Hoe wordt een transformatiematrix doorgegeven aan de shader?
A:
- Als `uniform mat4`
- Via `gl.uniformMatrix4fv`

---
Q: Waarom gebruikt WebGL column-major matrices?
A: Omdat dit overeenkomt met de interne GPU-representatie.

---
Q: Wat is cuon-matrix.js?
A: Een hulplibrary die vaak gebruikte matrixoperaties bundelt.

---
Q: Geef voorbeelden van functies uit cuon-matrix.js.
A:
- setIdentity()
- setTranslate(x,y,z)
- setRotate(angle,x,y,z)
- setScale(x,y,z)
- translate(x,y,z)
- rotate(angle,x,y,z)
- scale(x,y,z)

---
Q: Wat is het verschil tussen setRotate en rotate?
A:
- setRotate: vervangt de matrix
- rotate: vermenigvuldigt met de bestaande matrix

## Chapter: 3D Transformaties en 3D Visualisatie [cg-3d-transf-vis]

Q: Welke twee grote onderwerpen worden behandeld in dit hoofdstuk?
A:
- Geometrische transformaties in 3D
- Visualisatie en projectie in 3D

---
Q: Welke coördinaten worden gebruikt voor 3D-transformaties?
A: Homogene coördinaten (x, y, z, 1).

---
Q: Waarom worden homogene coördinaten gebruikt in 3D?
A:
- Translatie kan niet met een 3×3-matrix
- Alle transformaties kunnen met één 4×4-matrix gecombineerd worden

---
Q: Wat is de algemene vorm van een 3D-transformatie?
A:  
P′ = M · P, met M een 4×4-matrix.

---
Q: Geef de matrixvorm van een 3D-translatie.
A:
| 1  0  0  tₓ |  
| 0  1  0  tᵧ |  
| 0  0  1  t_z |  
| 0  0  0  1  |

---
Q: Geef de matrixvorm van 3D-schaling.
A:
| sₓ  0   0   0 |  
| 0   sᵧ  0   0 |  
| 0   0   s_z 0 |  
| 0   0   0   1 |

---
Q: Rond welke assen kan een rotatie in 3D gebeuren?
A:
- x-as
- y-as
- z-as

---
Q: Wat is belangrijk bij 3D-rotaties?
A:
- Rotaties rond verschillende assen zijn niet commutatief
- De volgorde van rotaties beïnvloedt het resultaat

---
Q: Wat wordt bedoeld met visualisatie in 3D?
A: Het projecteren van 3D-geometrie op een 2D-vlak (het scherm).

---
Q: Welke twee hoofdtypes van projectie bestaan er?
A:
- Parallelle projectie
- Perspectiefprojectie

---
Q: Wat is orthografische projectie?
A:
- Projectielijnen zijn evenwijdig
- Geen perspectiefvervorming
- Afmetingen blijven behouden

---
Q: Wat is axonometrische projectie?
A:
- Projectievlak snijdt de hoofdassen onder bepaalde hoeken
- Alle assen blijven zichtbaar

---
Q: Welke types axonometrie bestaan er?
A:
- Isometrie (alle assen gelijk verkort)
- Dimetrie (twee assen gelijk)
- Trimetrie (alle assen verschillend)

---
Q: Wat is scheve projectie?
A:
- Projectielijnen staan niet loodrecht op het projectievlak

---
Q: Welke twee vormen van scheve projectie bestaan er?
A:
- Kabinetprojectie
- Ruiterprojectie

---
Q: Wat is perspectiefprojectie?
A:
- Projectielijnen komen samen in één of meerdere vluchtpunten
- Objecten verder weg lijken kleiner

---
Q: Welke perspectiefprojecties bestaan er?
A:
- Eénpuntsperspectief
- Tweepuntsperspectief
- Driepuntsperspectief

---
Q: Wat is de volledige 3D-visualisatiepijplijn?
A:
- Modeltransformatie
- Viewtransformatie
- Projectietransformatie
- Normalisatie en clipping
- Viewporttransformatie

---
Q: Wat is de model matrix?
A: De matrix die objecttransformaties uitvoert in wereldcoördinaten.

---
Q: Wat is de view matrix?
A: De matrix die de positie en oriëntatie van de camera bepaalt.

---
Q: Wat is de projectiematrix?
A: De matrix die het kijkvolume projecteert naar genormaliseerde coördinaten.

---
Q: In welke volgorde worden transformaties toegepast?
A:
projectie · view · model · vertex

---
Q: Wat is een model-view-matrix?
A:
- Combinatie van view matrix en model matrix
- Efficiënter voor GPU-berekeningen

---
Q: Wat is het standaard kijkpunt in WebGL?
A:
- Oogpositie: (0,0,0)
- Kijkrichting: −Z
- Up-richting: +Y

---
Q: Welke drie parameters bepalen de camera?
A:
- Oogpositie (eye)
- Kijkpunt (at)
- Up-richting (up)

---
Q: Welke functie wordt gebruikt om de view matrix te definiëren?
A:
Matrix4.setLookAt(eyeX, eyeY, eyeZ, atX, atY, atZ, upX, upY, upZ)

---
Q: Wat is het kijkvolume?
A:
Het volume waarin objecten zichtbaar zijn voor de camera.

---
Q: Welke kijkvolumes bestaan er?
A:
- Box (orthografische projectie)
- Afgeknotte piramide (perspectiefprojectie)

---
Q: Wat zijn near en far clipping planes?
A:
- Grenzen van het zichtbare volume
- Objecten buiten deze grenzen worden niet getoond

---
Q: Hoe definieer je een orthografisch kijkvolume in WebGL?
A:
Matrix4.setOrtho(left, right, bottom, top, near, far)

---
Q: Hoe definieer je een perspectiefkijkvolume in WebGL?
A:
Matrix4.setPerspective(fov, aspect, near, far)

---
Q: Wat is normalisatie?
A:
Het omzetten van het kijkvolume naar genormaliseerde coördinaten [-1, 1].

---
Q: Wat is clipping?
A:
Het verwijderen van geometrie buiten het kijkvolume.

---
Q: Wat is de viewporttransformatie?
A:
De omzetting van genormaliseerde coördinaten naar schermcoördinaten.

---
Q: Wat is depth testing?
A:
Een techniek om te bepalen welk object zichtbaar is op basis van diepte.

---
Q: Hoe activeer je depth testing in WebGL?
A:
gl.enable(gl.DEPTH_TEST)

---
Q: Wat is de depth buffer (z-buffer)?
A:
Een buffer die per pixel de dichtstbijzijnde diepte bijhoudt.

---
Q: Wat is Z-fighting?
A:
Flikkeren door objecten met bijna gelijke dieptewaarden.

---
Q: Hoe kan Z-fighting worden verminderd?
A:
- polygon offset gebruiken
- gl.enable(gl.POLYGON_OFFSET_FILL)

---
Q: Wanneer gebruik je gl.drawElements in plaats van gl.drawArrays?
A:
Bij complexe objecten met gedeelde vertices, via indexbuffers.


## Chapter: Belichting [cg-lighting]

Q: Wat bestudeert belichting in computer graphics?
A: Hoe licht van lichtbronnen interageert met oppervlakken en hoe dit resulteert in waargenomen kleuren.

---
Q: Wat is het verschil tussen shading en shadowing?
A:
- Shading: kleurvariatie op een oppervlak door belichting
- Shadowing: schaduwen die objecten op andere objecten werpen

---
Q: Waarom worden vereenvoudigde belichtingsmodellen gebruikt?
A:
- Fysisch exacte modellen zijn te complex
- Realtime rendering vereist efficiënte berekeningen

---
Q: Welke types lichtbronnen worden onderscheiden?
A:
- Puntbron
- Lichtbron op oneindig (directionele bron)
- Achtergrondbelichting (ambient light)

---
Q: Wat is een puntlichtbron?
A:
- Licht vertrekt radiaal vanuit één punt
- Goed model voor kleine lichtbronnen dichtbij de scène

---
Q: Wat is een lichtbron op oneindig?
A:
- Alle lichtstralen zijn evenwijdig
- Goed model voor lichtbronnen ver weg (bv. zon)

---
Q: Wat is achtergrondbelichting (ambient light)?
A:
- Homogene belichting
- Onafhankelijk van richting en positie

---
Q: Wat kan er met invallend licht gebeuren op een oppervlak?
A:
- Weerkaatsing (diffuus of speculair)
- Absorptie
- Doorgelating (transparantie)

---
Q: Wat is de normaalvector n?
A: Een vector loodrecht op het oppervlak, die enkel een richting heeft.

---
Q: Welke vectors zijn belangrijk bij belichting?
A:
- Normaalvector n
- Lichtvector l
- Gereflecteerde vector r
- View vector v

---
Q: Wat is de invalshoek θ?
A: De hoek tussen de lichtvector l en de normaalvector n.

---
Q: Wat is de kijkhoek φ?
A: De hoek tussen de gereflecteerde vector r en de view vector v.

---
Q: Hoeveel normaalvectoren heeft een oppervlak?
A:
- Twee: één voor de voorkant en één voor de achterkant

---
Q: Welke transformaties beïnvloeden de normaalvector?
A:
- Translatie: nee
- Rotatie: ja
- Schaling: ja

---
Q: Hoe wordt een normaalvector correct getransformeerd?
A:
Door vermenigvuldiging met de inverse transpose van de modelmatrix.

---
Q: Wat is diffuse reflectie?
A:
- Licht wordt gelijkmatig in alle richtingen verstrooid
- Afhankelijk van cos(θ)

---
Q: Geef de diffuse reflectieformule (vectorieel).
A:
oppervlaktekleur = lichtkleur × basiskleur × ⟨l, n⟩

---
Q: Wat is de diffuse reflectiecoëfficiënt?
A:
kd — bepaalt hoeveel diffuus licht wordt gereflecteerd (per kleur).

---
Q: Wat is speculaire reflectie?
A:
- Licht wordt in één dominante richting gereflecteerd
- Zorgt voor glans (highlights)

---
Q: Welke parameters horen bij speculaire reflectie?
A:
- ks: speculaire reflectiecoëfficiënt
- ns: shininess-exponent

---
Q: Wat bepaalt de shininess-exponent ns?
A:
- Hoge ns: scherpe glans
- Lage ns: brede glans

---
Q: Wat is ambient reflectie?
A:
- Reflectie van achtergrondbelichting
- Onafhankelijk van kijk- en lichtrichting

---
Q: Wat is de ambient reflectieformule?
A:
oppervlaktekleur = lichtkleur × basiskleur

---
Q: Uit welke componenten bestaat het klassieke belichtingsmodel?
A:
- Ambient
- Diffuse
- Specular

---
Q: Wat is Phong reflectiemodel?
A:
Een empirisch model dat ambient, diffuse en speculaire reflectie combineert.

---
Q: Wat is flat shading?
A:
- Eén normaalvector per vlak
- Eén kleur per vlak
- Zeer efficiënt maar hoekig resultaat

---
Q: Wat is Gouraud shading?
A:
- Belichting per vertex
- Intensiteiten worden geïnterpoleerd over het vlak

---
Q: Wat is een nadeel van Gouraud shading?
A:
Speculaire highlights kunnen verloren gaan tussen vertices.

---
Q: Wat is Phong shading?
A:
- Normaalvectoren worden geïnterpoleerd
- Belichting wordt per fragment berekend

---
Q: Wat is het voordeel van Phong shading?
A:
- Realistischere belichting
- Correcte speculaire highlights

---
Q: Waar gebeurt de belichtingsberekening bij Phong shading?
A:
In de fragment shader.

---
Q: Welke shader gebruikt men typisch voor Gouraud shading?
A:
Vertex shader (belichting per vertex).

---
Q: Welke buffers/variabelen zijn cruciaal voor belichting in shaders?
A:
- Normaalvectoren
- Lichtpositie of lichtrichting
- ModelMatrix en NormalMatrix
- Varying variabelen voor interpolatie


## Chapter: Kleur en Textuur [cg-color-texture]

Q: Waarom is kleur moeilijk eenduidig te definiëren?
A:
- Taal heeft slechts een beperkte set kleurwoorden
- Kleur is een perceptueel fenomeen
- Kleur kan beschreven worden als een combinatie van basiskleuren

---
Q: Welke kleurmodellen worden vaak gebruikt?
A:
- RGB
- CMYK
- YUV
- Geïndexeerde kleuren

---
Q: Wat is het RGB-kleurmodel?
A:
Een kleurmodel waarbij kleuren worden opgebouwd als een gewogen combinatie van rood, groen en blauw.

---
Q: Hoe wordt kleur typisch doorgegeven in WebGL?
A:
- Via attribute-variabelen (per vertex)
- Eventueel gecombineerd in een interleaved buffer
- Doorgegeven van vertex shader naar fragment shader via varying variabelen

---
Q: Wat is een varying-variabele?
A:
Een variabele die data doorgeeft van de vertex shader naar de fragment shader en automatisch geïnterpoleerd wordt.

---
Q: Wat betekent interpolatie van varying-variabelen?
A:
Tussenliggende waarden worden lineair berekend voor elk fragment tijdens rasterisatie.

---
Q: Waarom gebeurt kleurinterpolatie automatisch?
A:
Om vloeiende kleurovergangen te verkrijgen zonder expliciete berekeningen per fragment.

---
Q: Wat is rasterisatie?
A:
Het proces waarbij geometrische primitieven worden omgezet in fragmenten.

---
Q: Hoe vaak wordt de fragment shader uitgevoerd?
A:
Eén keer per fragment.

---
Q: Wat is gl_FragCoord?
A:
Een ingebouwde variabele die de fragmentcoördinaten bevat in canvascoördinaten.

---
Q: Wat is textuurmapping?
A:
Het afbeelden van een 2D-afbeelding op een geometrisch oppervlak.

---
Q: Wat zijn texels?
A:
Texture elements: de individuele pixels van een textuurafbeelding.

---
Q: Waarom wordt textuurmapping gebruikt?
A:
- Moeilijk uitbreidbaar om complexe kleuren via interpolatie te doen
- Texturen laten gedetailleerde oppervlakken toe

---
Q: Wat zijn textuurcoördinaten?
A:
- 2D-coördinaten (s, t)
- (0,0) linksonder, (1,1) rechtsboven
- Onafhankelijk van afbeeldingsgrootte

---
Q: Hoe gebeurt textuurmapping conceptueel?
A:
Door vast te leggen welke textuurcoördinaten overeenkomen met welke vertices.

---
Q: Wat zijn de 5 stappen van textuurmapping in WebGL?
A:
1. Textuurcoördinaten doorgeven aan vertex shader en fragment shader
2. Textuur toepassen in fragment shader
3. Textuurcoördinaten definiëren in buffers
4. Afbeelding laden via de browser
5. Textuur configureren en binden in WebGL

---
Q: Welke shader-variabelen zijn nodig voor textuurmapping?
A:
- attribute vec2 a_TexCoord
- varying vec2 v_TexCoord
- uniform sampler2D u_Sampler

---
Q: Waar wordt de textuur effectief toegepast?
A:
In de fragment shader via texture2D().

---
Q: Wat doet texture2D(sampler, coord)?
A:
Haalt de texelkleur op uit de textuur op basis van textuurcoördinaten.

---
Q: Wat is een sampler2D?
A:
Een uniform-variabele die verwijst naar een 2D-textuur in de fragment shader.

---
Q: Waarom wordt gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1) gebruikt?
A:
Omdat afbeeldingscoördinaten en WebGL-textuurcoördinaten een omgekeerde y-as hebben.

---
Q: Wat betekent dat texturen asynchroon geladen worden?
A:
- Laden gebeurt onafhankelijk van het programma
- De volgorde van laden is niet voorspelbaar
- Callbacks zijn nodig

---
Q: Wat doet gl.activeTexture()?
A:
Activeert een texture unit voordat een textuur gebruikt kan worden.

---
Q: Wat doet gl.bindTexture()?
A:
Verbindt een textuurobject aan een target (bv. gl.TEXTURE_2D).

---
Q: Wat doet gl.texParameteri()?
A:
Stelt parameters in voor filtering en wrapping van texturen.

---
Q: Wat is texture wrapping?
A:
Bepaalt wat er gebeurt als textuurcoördinaten buiten [0,1] vallen.

---
Q: Welke wrapping-modes bestaan er?
A:
- gl.REPEAT
- gl.MIRRORED_REPEAT
- gl.CLAMP_TO_EDGE

---
Q: Waarvoor dient gl.REPEAT?
A:
Herhaalt de textuur periodiek.

---
Q: Waarvoor dient gl.MIRRORED_REPEAT?
A:
Herhaalt de textuur gespiegeld.

---
Q: Waarvoor dient gl.CLAMP_TO_EDGE?
A:
Rekt de randpixels uit tot aan de rand.

---
Q: Wat is texture filtering?
A:
De manier waarop texels gesampled worden bij vergroten of verkleinen.

---
Q: Welke filtermodi bestaan er?
A:
- gl.NEAREST
- gl.LINEAR

---
Q: Wat is het verschil tussen gl.NEAREST en gl.LINEAR?
A:
- NEAREST: blokkerig, snel
- LINEAR: vloeiender, iets duurder

---
Q: Wat is het voordeel van meerdere texturen?
A:
Combineren van details, bv. kleur × patroon × schaduw.

---
Q: Hoe combineer je meerdere texturen?
A:
Door meerdere samplers te gebruiken in de fragment shader.


## Chapter: Advanced WebGL [cg-advanced-webgl]

Q: Wat wordt bedoeld met hiërarchische objecten?
A:
Objecten die bestaan uit meerdere onderdelen die onderling afhankelijk zijn en samen bewegen volgens een hiërarchische structuur.

---
Q: Waarom worden objecten hiërarchisch opgebouwd?
A:
- Consistente beweging van onderdelen
- Realistische animaties (bv. robotarmen)
- Makkelijker beheer van complexe modellen

---
Q: Geef een typisch voorbeeld van een hiërarchisch object.
A:
Een robotarm met meerdere segmenten en gewrichten.

---
Q: Wat is het basisidee achter hiërarchische transformaties?
A:
Onderliggende objecten erven de transformaties van hun “ouder”-object.

---
Q: Hoe wordt een hiërarchisch object opgebouwd met matrices?
A:
Door de model matrix stap voor stap aan te passen en tussentijdse resultaten te bewaren.

---
Q: Waarom zijn pushMatrix() en popMatrix() nodig?
A:
- pushMatrix(): huidige matrix opslaan bij een vertakking
- popMatrix(): vorige matrix herstellen na het tekenen van een onderdeel

---
Q: Wat gebeurt er als je geen push/pop gebruikt?
A:
Transformaties stapelen zich ongewenst op en beïnvloeden andere onderdelen foutief.

---
Q: Wat is mist (fog) in computer graphics?
A:
Een techniek waarbij objecten verder van de camera geleidelijk vervagen naar een achtergrondkleur.

---
Q: Wat is het doel van fog?
A:
- Dieptegevoel versterken
- Realisme verhogen
- Verbergen van verre details

---
Q: Wat is de fog factor?
A:
Een waarde f tussen 0 en 1 die bepaalt hoeveel het object zichtbaar is.

---
Q: Wat betekent de waarde van de fog factor?
A:
- f = 1 → object volledig zichtbaar
- f = 0 → object volledig onzichtbaar (volledig mistkleur)

---
Q: Waar wordt fog berekend?
A:
In de fragment shader.

---
Q: Welke grootheid bepaalt de hoeveelheid fog?
A:
De afstand tussen het fragment en het oogpunt (camera).

---
Q: Hoe wordt de uiteindelijke kleur bij fog berekend?
A:
Door een menging (interpolatie) tussen objectkleur en mistkleur.

---
Q: Wat is alpha blending?
A:
Een techniek om kleuren van overlappende objecten te mengen op basis van transparantie.

---
Q: Is alpha blending standaard actief in WebGL?
A:
Nee, blending moet expliciet geactiveerd worden.

---
Q: Hoe activeer je blending in WebGL?
A:
gl.enable(gl.BLEND)

---
Q: Wat doet gl.blendFunc(sFactor, dFactor)?
A:
Bepaalt hoe bronkleur en bestemmingskleur gemengd worden.

---
Q: Geef de algemene blendingformule.
A:
kleur = sFactor × bronkleur + dFactor × bestemmingskleur

---
Q: Wat is een typische blending-instelling voor transparantie?
A:
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

---
Q: Wat is de bronkleur?
A:
De kleur van het object dat momenteel getekend wordt.

---
Q: Wat is de bestemmingskleur?
A:
De kleur die al in de framebuffer aanwezig is.

---
Q: Wat is het probleem met blending en depth testing?
A:
Depth testing kan transparante objecten verkeerd afsnijden.

---
Q: Hoe ga je correct om met transparante objecten?
A:
- Eerst alle niet-transparante objecten tekenen
- Depth buffer read-only maken
- Transparante objecten tekenen van achter naar voor

---
Q: Wat is shadow mapping?
A:
Een techniek om schaduwen te berekenen via een extra renderstap vanuit de lichtbron.

---
Q: Wat is het kernidee achter shadow mapping?
A:
Vergelijken of een fragment zichtbaar is vanuit de lichtbron.

---
Q: Wat is een shadow map?
A:
Een textuur die afstanden van objecten tot de lichtbron opslaat.

---
Q: Wat zijn de twee stappen bij shadow mapping?
A:
1. Renderen vanuit de lichtbron en afstanden opslaan
2. Renderen vanuit de camera en vergelijken met shadow map

---
Q: Wanneer ligt een fragment in de schaduw?
A:
Als de afstand tot de lichtbron groter is dan de opgeslagen afstand in de shadow map.

---
Q: Hoeveel shaders zijn nodig bij shadow mapping?
A:
Twee vertex shaders en twee fragment shaders.

---
Q: Waarom is shadow mapping computationeel zwaar?
A:
Omdat de scène meerdere keren gerenderd moet worden.


## Chapter: Geometric Models [cg-geometric-models]

Q: Wat is het basisidee achter geometrische modellen in computer graphics?
A:
Complexe objecten worden voorgesteld als een verzameling eenvoudige geometrische primitieve vormen, meestal driehoeken.

---
Q: Waarom worden driehoeken gebruikt als basis voor rendering?
A:
- Driehoeken zijn het eenvoudigste 2D-oppervlak
- Elke 2D- of 3D-vorm kan worden opgesplitst in driehoeken
- Grafische hardware is geoptimaliseerd voor driehoeken

---
Q: Wat is tessellatie?
A:
Het opdelen van een oppervlak of vorm in een netwerk van driehoeken.

---
Q: Wat is een triangle mesh?
A:
Een verzameling vertices en driehoeken die samen een 3D-oppervlak beschrijven.

---
Q: Waarom is handmatig definiëren van meshes niet schaalbaar?
A:
Omdat complexe objecten duizenden tot miljoenen driehoeken bevatten.

---
Q: Wat betekent het begrip “triangles as abstraction layer”?
A:
De renderer hoeft niet te weten hoe de geometrie is gemaakt, enkel dat ze uit driehoeken bestaat.

---
Q: Welke zes grote bronnen van driehoeken worden onderscheiden?
A:
1. Polygon modeling  
2. Curved surface modeling  
3. Digital sculpting  
4. Procedural modeling  
5. CAD solid modeling  
6. Data-driven generative models

---
Q: Wat is polygon modeling?
A:
Het manueel creëren en bewerken van polygonen in een interactieve 3D-editor.

---
Q: Wat is een voordeel van polygon modeling?
A:
Zeer flexibel en controleerbaar.

---
Q: Wat is een nadeel van polygon modeling?
A:
Resultaten ogen vaak hoekig en minder geschikt voor gladde vormen.

---
Q: Wat is curved surface modeling?
A:
Het modelleren van gladde oppervlakken via wiskundige krommen en splines.

---
Q: Wat zijn splines?
A:
Wiskundige krommen die gladde vormen beschrijven, historisch geïnspireerd op fysieke buiglatten.

---
Q: Waar worden splines vaak gebruikt?
A:
- Lettertypes
- SVG en vectorgraphics
- Gladde industriële vormen

---
Q: Wat is digital sculpting?
A:
Het boetseren van digitale modellen alsof het klei is, typisch met hoge resolutie.

---
Q: Geef een voorbeeld van digital sculpting software.
A:
ZBrush.

---
Q: Wat is procedural modeling?
A:
Het genereren van geometrie via algoritmen of programma’s.

---
Q: Wat is een belangrijk voordeel van procedural modeling?
A:
- Compacte beschrijving
- Grote variatie met weinig parameters

---
Q: Wat zijn L-systems?
A:
Herschrijfsystemen die via regels steeds complexere structuren genereren.

---
Q: Waarvoor worden L-systems vaak gebruikt?
A:
Het modelleren van planten, bomen en natuurlijke structuren.

---
Q: Wat is het verschil tussen deterministische en stochastische L-systems?
A:
- Deterministisch: altijd hetzelfde resultaat
- Stochastisch: regels bevatten toeval

---
Q: Wat zijn shape grammars?
A:
Procedurale regels die rechtstreeks op vormen werken in plaats van op symbolen.

---
Q: Waar worden shape grammars vaak toegepast?
A:
Stedelijke en architecturale modellen.

---
Q: Wat is procedural noise?
A:
Gestructureerde willekeur gebruikt om natuurlijke variatie te simuleren.

---
Q: Wat is het verschil tussen white noise en Perlin noise?
A:
- White noise: geen correlatie tussen pixels
- Perlin noise: vloeiende, gecorreleerde variatie

---
Q: Waarvoor wordt Perlin noise vaak gebruikt?
A:
- Terreinen
- Wolken
- Texturen
- Natuurlijke oppervlakken

---
Q: Wat is CAD solid modeling?
A:
Modelleren van fysisch realiseerbare vaste objecten voor engineering.

---
Q: Wat is Constructive Solid Geometry (CSG)?
A:
Het combineren van volumes via booleaanse operaties.

---
Q: Welke booleaanse operaties worden gebruikt in CSG?
A:
- Unie (∪)
- Doorsnede (∩)
- Verschil (−)

---
Q: Wat zijn data-driven generative models?
A:
Modellen die geometrie genereren door te leren uit bestaande voorbeelden.

---
Q: Wat is een OBJ-bestand?
A:
Een eenvoudig tekstformaat om driehoekige meshes op te slaan.

---
Q: Welke elementen bevat een OBJ-bestand?
A:
- Vertexposities (v)
- Normaalvectoren (vn)
- Faces (f)
- Optioneel materiaalinformatie (mtl)

---
Q: Waarom worden OBJ-bestanden vaak gebruikt?
A:
- Simpel formaat
- Breed ondersteund
- Makkelijk te parseren

---
Q: Wat wordt bedoeld met fotorealisme?
A:
Beelden die nauwelijks te onderscheiden zijn van echte foto’s.

---
Q: Wat is de uncanny valley?
A:
Het fenomeen waarbij bijna-realistische virtuele personages als onaangenaam worden ervaren.

---
Q: Noem manieren om meer realisme te bereiken.
A:
- Betere geometrie (3D scanning)
- Betere materialen (gemeten BRDFs)
- Realistischere belichting (image-based lighting)
- Betere animatie (motion capture, fysica)

---
Q: Wat is image-based lighting?
A:
Het belichten van een scène met een omgevingstekstuur die echte lichtinformatie bevat.

---
Q: Wat is motion capture?
A:
Het opnemen van bewegingen van echte acteurs en toepassen op digitale modellen.

---
Q: Wat is physics-based animation?
A:
Animatie gebaseerd op natuurkundige simulaties in plaats van keyframes.


## Chapter: Raytracing [cg-raytracing]

Q: Wat is het centrale probleem dat raytracing oplost?
A:
Voor elke pixel bepalen welk punt in de 3D-scène zichtbaar is en welke kleur dat punt heeft.

---
Q: Hoe wordt raytracing intuïtief uitgelegd?
A:
Als boogschieten: vanuit de camera schiet je een pijl (ray) door het midden van een pixel en kijkt waar die als eerste een object raakt.

---
Q: Wat is een ray (straal) wiskundig?
A:
Een halfrechte beschreven door:
P(t) = P + t·d  
waar P het startpunt is, d de richting en t ≥ 0.

---
Q: Wat zijn de twee hoofdtypes rays in raytracing?
A:
- Primary rays: van de camera naar de scène
- Secondary rays: vertrekken van een snijpunt in de scène

---
Q: Wat bepalen primary rays?
A:
Welke objecten zichtbaar zijn in elk pixel (visibility).

---
Q: Waarvoor worden secondary rays gebruikt?
A:
Voor geavanceerde belichtingseffecten zoals:
- schaduwen
- reflecties
- transparantie

---
Q: Wat is het virtuele view plane bij raytracing?
A:
Een denkbeeldig vlak vóór de camera dat in pixels is opgedeeld en waar de rays doorheen gestuurd worden.

---
Q: Wat is de near plane in raytracing?
A:
Een vlak dat bepaalt vanaf welke afstand objecten zichtbaar zijn; alles vóór dit vlak wordt niet gerenderd.

---
Q: Wat zijn de twee deelproblemen van rendering?
A:
1. Welk object is zichtbaar achter een pixel?
2. Welke kleur heeft dat objectpunt?

---
Q: Wat is ray–object intersection?
A:
Het berekenen van de snijpunten tussen een ray en objecten in de scène.

---
Q: Welke objecten worden eerst gebruikt voor intersecties?
A:
Impliciete objecten zoals:
- vlakken
- sferen
- cilinders

---
Q: Wat is een impliciet object?
A:
Een object dat beschreven wordt door een vergelijking f(Q) = 0, waarbij Q een punt op het oppervlak is.

---
Q: Geef een voorbeeld van een impliciete vergelijking van een sfeer.
A:
f(x, y, z) = x² + y² + z² − R² = 0

---
Q: Hoe bepaal je een ray–object intersectie bij impliciete objecten?
A:
Door de rayvergelijking P + t·d in de impliciete vergelijking te substitueren en t op te lossen.

---
Q: Wat betekent de discriminant bij een kwadratische vergelijking?
A:
- D < 0: geen intersectie
- D = 0: raakpunt (tangent)
- D > 0: twee snijpunten

---
Q: Welke t-waarde kies je bij meerdere snijpunten?
A:
De kleinste niet-negatieve t (dichtst bij de camera).

---
Q: Waarom wordt vaak t > 1 genomen?
A:
Omdat t = 1 overeenkomt met de near plane.

---
Q: Waarom is intersectie met getransformeerde objecten moeilijk?
A:
Omdat transformaties impliciete vormen kunnen vervormen (bv. een sfeer wordt een ellipsoïde).

---
Q: Hoe los je ray–object intersecties op voor getransformeerde objecten?
A:
Door de ray te transformeren naar object space en daar de intersectie te berekenen.

---
Q: Waarom mag de rayrichting niet genormaliseerd worden bij object space intersecties?
A:
Omdat normalisatie de relatie tussen t in object space en world space zou verstoren.

---
Q: Hoe wordt de normaalvector op een impliciet oppervlak berekend?
A:
Met de gradiënt van de impliciete functie:
n = ∇f(x, y, z)

---
Q: Geef de normaalvector van een sfeer.
A:
n = (2x, 2y, 2z), daarna genormaliseerd.

---
Q: Waarom kan je normaalvectoren niet met de modelmatrix transformeren?
A:
Omdat schaling de loodrechte eigenschap van normaalvectoren zou breken.

---
Q: Hoe transformeer je normaalvectoren correct naar world space?
A:
Met de inverse transpose van de 3×3 bovenzijde van de modelmatrix.

---
Q: Welke belichtingsmethode wordt typisch gebruikt in raytracing?
A:
Het Phong belichtingsmodel.

---
Q: Welke effecten worden niet door klassiek Phong-model gedekt?
A:
- Schaduwen
- Reflecties
- Transparantie

---
Q: Hoe worden schaduwen berekend in raytracing?
A:
Door vanaf het snijpunt een shadow ray naar elke lichtbron te sturen.

---
Q: Wanneer draagt een lichtbron bij aan de belichting?
A:
Als de shadow ray de lichtbron bereikt zonder een ander object te raken.

---
Q: Wat is self-shadowing?
A:
Een artefact waarbij een shadow ray het startoppervlak zelf raakt.

---
Q: Hoe vermijd je self-shadowing?
A:
Door een kleine offset ε toe te voegen aan het startpunt van de shadow ray.

---
Q: Wat is recursive raytracing?
A:
Het herhaald afvuren van rays voor reflectie en transmissie.

---
Q: Welke secondary rays bestaan er bij recursive raytracing?
A:
- Shadow rays
- Reflection rays
- Refraction (transmission) rays

---
Q: Wat bepaalt wanneer de recursie stopt?
A:
- Maximale recursiediepte
- Verwaarloosbare bijdrage aan de kleur

---
Q: Wat is het verschil tussen ray casting en ray tracing?
A:
- Ray casting: enkel primary rays
- Ray tracing: volledige recursieve aanpak

---
Q: Wat is supersampling?
A:
Meerdere rays per pixel afvuren en de resultaten middelen om aliasing te verminderen.

---
Q: Wat is het voordeel van stochastic sampling?
A:
Snellere convergentie naar het correcte resultaat dan regelmatige sampling.

---
Q: Wat is het doel van de volledige raytracing pipeline?
A:
Van rays genereren → intersecties → belichting → secondary rays → pixels samenstellen.

## Chapter: Guest Lecture – Advanced Lighting & Shading [cg-guest-advanced-lighting]

Q: Wat is een BRDF?
A:
Een BRDF (Bidirectional Reflectance Distribution Function) beschrijft hoe licht wordt gereflecteerd op een punt van een oppervlak, afhankelijk van licht- en kijkrichting.

---
Q: Welke vectoren zijn typisch input voor een BRDF?
A:
- Normaalvector (N)
- Lichtvector (L)
- View- of cameravector (V)
- Soms een halfvector (H)

---
Q: Wat beschrijft Lambert-belichting?
A:
Diffuse reflectie waarbij licht gelijkmatig in alle richtingen wordt verstrooid, afhankelijk van de hoek tussen normaal en lichtvector.

---
Q: Geef de Lambert-formule.
A:
lambert = max(dot(N, L), 0)

---
Q: Wat beschrijft Phong speculaire belichting?
A:
Het nabootsen van glans door reflectie van licht richting de kijker.

---
Q: Welke vector wordt gebruikt bij Phong specular?
A:
De gereflecteerde vector R.

---
Q: Wat is Blinn-Phong specular?
A:
Een variant van Phong waarbij de halfvector H wordt gebruikt in plaats van de reflectievector.

---
Q: Wat is de halfvector H?
A:
H = normalize(L + V)

---
Q: Waarom wordt Blinn-Phong vaak gebruikt?
A:
- Goedkoper dan klassieke Phong
- Geeft stabielere en realistischere highlights
- Werd gebruikt in fixed-function pipelines

---
Q: Wat is gamma-correctie?
A:
Het omzetten tussen lineaire kleurwaarden en gamma-kleurwaarden om correcte belichting te verkrijgen op beeldschermen.

---
Q: In welke kleurruimte moet belichting gebeuren?
A:
In lineaire kleurruimte.

---
Q: Waarom is gamma-correctie nodig?
A:
Omdat schermen niet lineair licht weergeven, wat anders leidt tot foutieve belichting.

---
Q: Wat is het idee achter physically based rendering (PBR)?
A:
Belichtingsmodellen gebruiken die fysisch plausibel zijn en energie behouden.

---
Q: Wat betekent “energy conserving” in PBR?
A:
Een materiaal kan nooit meer licht uitstralen dan het ontvangt.

---
Q: Wat is het Fresnel-effect?
A:
De hoeveelheid speculaire reflectie hangt af van de kijkhoek en lichtinvalshoek.

---
Q: Wat gebeurt er met speculaire reflectie bij een schuine kijkhoek?
A:
De speculaire reflectie neemt toe.

---
Q: Wat is base reflectance?
A:
De minimale hoeveelheid speculaire reflectie van een materiaal bij loodrechte inval.

---
Q: Wat is het verschil tussen metalen en niet-metalen materialen?
A:
- Metalen: bijna volledig speculair
- Niet-metalen (di-electrics): gedeeltelijk speculair met Fresnel-afhankelijk gedrag

---
Q: Waarom worden meerdere lichtbronnen gebruikt?
A:
Omdat echte scènes vrijwel nooit door slechts één lichtbron worden belicht.

---
Q: Wat zijn twee manieren om meerdere lichten te implementeren?
A:
- Single-pass rendering met meerdere lichten in één shader
- Multi-pass rendering met blending

---
Q: Wat is image-based lighting (IBL)?
A:
Een techniek waarbij de omgeving wordt gebruikt als lichtbron via environment maps.

---
Q: Welke twee componenten heeft IBL?
A:
- Diffuse IBL
- Specular IBL

---
Q: Wat is het voordeel van image-based lighting?
A:
Realistische globale belichting zonder expliciete plaatsing van vele lichtbronnen.

---
Q: Waarom is specular IBL duur om realtime te berekenen?
A:
Omdat het veel samples van de environment map vereist.

---
Q: Hoe wordt dit probleem opgelost in de praktijk?
A:
Door vooraf geblurde environment maps te gebruiken en mipmapping toe te passen.

---
Q: Wat is shadow mapping?
A:
Een techniek waarbij de scène vanuit de lichtbron wordt gerenderd om schaduwen te bepalen.

---
Q: Wat is het basisidee van shadow mapping?
A:
Vergelijken of een punt verder van de lichtbron ligt dan het dichtstbijzijnde object dat de lichtbron “ziet”.


## Chapter: Examen Vragen Vorig Jaar (2023–2024) [cg-exam-2023]

### LABOGEDEELTE

Q: Leg de argumenten van gluPerspective uit. Welke twee projectietypes hebben we nog gezien?
A:
gluPerspective(fov, aspect, near, far):
- fov: field of view, de kijkhoek in graden
- aspect: breedte/hoogte verhouding van het beeld
- near: dichtstbijzijnde zichtbare afstand
- far: verste zichtbare afstand  
Andere projectietypes:
- Orthografische projectie
- Perspectiefprojectie

---
Q: Wat is de viewport en waarvoor dient deze?
A:
De viewport bepaalt welk deel van het venster gebruikt wordt om genormaliseerde device coördinaten om te zetten naar schermcoördinaten.

---
Q: Geef en leg vier argumenten van een lichtbron uit.
A:
- Positie: waar de lichtbron zich bevindt
- Kleur/intensiteit: sterkte en kleur van het licht
- Richting: richting waarin het licht schijnt (bij spot/directional)
- Type licht: punt-, directioneel of spotlicht

---
Q: Geef drie types lichtbronnen en zeg welke het best gebruikt wordt voor schaduwen.
A:
- Puntlicht
- Directioneel licht
- Spotlicht  
Voor schaduwen wordt meestal directioneel of puntlicht gebruikt, afhankelijk van de scène.

---
Q: Wat moet je aanpassen bij gluPerspective om objecten gecentreerd in beeld te krijgen?
A:
De camera correct positioneren via de view matrix (bijvoorbeeld met gluLookAt of lookAt-equivalent), zodat het object zich in het midden van het kijkvolume bevindt.

---
Q: Welke twee matrix modes bestaan er en waarvoor gebruiken we ze?
A:
- GL_PROJECTION: voor projectie-instellingen (perspectief of orthografisch)
- GL_MODELVIEW: voor model- en cameratransformaties

---
Q: Waarvoor dient glutSwapBuffers()?
A:
Het wisselt de back buffer met de front buffer bij double buffering om flikkering te vermijden.

---
Q: Wat doet glutPostRedisplay()?
A:
Het vraagt aan OpenGL om de scène opnieuw te renderen bij de volgende iteratie van de renderloop.

---
Q: Waarvoor dient enable(GL_DEPTH_TEST)?
A:
Om diepte-informatie te gebruiken zodat enkel het dichtstbijzijnde object per pixel zichtbaar is.

---
Q: Wat is het verschil tussen smooth shading en flat shading?
A:
- Flat shading: één normaal per vlak, één kleur per vlak
- Smooth shading: interpolatie van normaalvectoren over het oppervlak voor vloeiende belichting

---

### THEORIEGEDEELTE

Q: Leg uit hoe schaduw werkt in computer graphics.
A:
Een punt ligt in de schaduw van een lichtbron als er een ander object tussen dat punt en de lichtbron ligt. Dit wordt vaak berekend via shadow mapping of shadow rays.

---
Q: Wat doet een fragment shader?
A:
De fragment shader berekent de uiteindelijke kleur van elk fragment op basis van belichting, texturen en andere effecten.

---
Q: Wat is procedural modeling?
A:
Procedural modeling is het genereren van geometrie via algoritmen in plaats van manueel modelleren, vaak gestuurd door parameters.

---
Q: Wat is image-based lighting (IBL)?
A:
Image-based lighting gebruikt een omgevingstekstuur (environment map) als lichtbron om realistische globale belichting en reflecties te simuleren.




# Course: Ingenieur en Economie [ingenieur-economie]

## Chapter: Jaarrekening & Analyse [jaarrekening]

Q: Wat is de jaarrekening en uit welke drie delen bestaat ze?
A:
De jaarrekening is het geheel aan financiële rapporten dat een onderneming opstelt om haar financiële situatie en prestaties te communiceren. Ze bestaat uit:
- **De balans**: een “foto” van de financiële positie op een bepaald moment
- **De resultatenrekening**: een “film” van kosten en opbrengsten over een periode
- **De toelichting**: extra achtergrond en detailinformatie die de cijfers in balans en resultatenrekening verduidelijkt

---
Q: Leg het verschil uit tussen de balans en de resultatenrekening met de analogie “foto” vs “film”.
A:
De **balans** is een momentopname (“foto”): ze toont wat de onderneming bezit en verschuldigd is op één specifiek tijdstip (bv. 31/12). De **resultatenrekening** is een periodeoverzicht (“film”): ze toont hoe de onderneming tijdens een periode (bv. boekjaar) tot winst of verlies kwam via opbrengsten en kosten. Daardoor kan je uit de balans alleen niet afleiden hoe het resultaat precies is samengesteld; daarvoor heb je de resultatenrekening nodig.

---
Q: Wat betekent het principe van “dubbel boekhouden” en waarom blijft de balans daardoor in evenwicht?
A:
Dubbel boekhouden betekent dat elke transactie **twee** effecten heeft (debet/credit), waardoor de boekhouding intern consistent blijft. In balans-termen blijft altijd gelden: **Totaal Actief = Totaal Passief**. Elke wijziging aan de ene kant heeft een overeenkomstige wijziging aan de andere kant (of een herschikking binnen dezelfde kant), zodat het evenwicht behouden blijft.

---
Q: Welke vier basistypes van balansimpact kan één transactie hebben?
A:
Binnen de context van de balans is de mogelijke impact van een transactie vierledig:
- **Actief stijgt & passief stijgt** (bv. lening ontvangen op bankrekening)
- **Actief stijgt & actief daalt** (bv. cash afhalen van bank: bank daalt, kas stijgt)
- **Passief stijgt & passief daalt** (bv. herfinanciering: kort schuld daalt, lang schuld stijgt)
- **Actief daalt & passief daalt** (bv. lening terugbetalen: bank daalt, schuld daalt)

---
Q: Wat zijn stakeholders en waarom is accounting voor hen relevant?
A:
Stakeholders zijn alle partijen die belang hebben bij de onderneming (bv. aandeelhouders, banken, leveranciers, personeel, overheid, klanten). Accounting is relevant omdat het systematisch informatie verzamelt en rapporteert zodat stakeholders onderbouwde beslissingen kunnen nemen, zoals: investeren, krediet verlenen, leveren op krediet, fiscale controle, enz.

---
Q: Definieer “accounting” in examengerichte termen.
A:
Accounting is het **systematisch verzamelen, verwerken, analyseren, samenvatten en rapporteren** van informatie over transacties en gebeurtenissen in ondernemingen, met als doel relevante informatie te verschaffen aan interne (management) en externe (stakeholders) gebruikers.

---
Q: Wat is het entiteitsprincipe en welke praktische implicatie heeft dit?
A:
Het entiteitsprincipe stelt dat de onderneming als een **afzonderlijke entiteit** wordt beschouwd, gescheiden van haar eigenaars. Praktisch betekent dit dat privétransacties van eigenaars niet vermengd mogen worden met ondernemingskosten/-opbrengsten; enkel transacties die tot de onderneming behoren komen in de boekhouding en jaarrekening.

---
Q: Wat is het toerekeningsprincipe (accrual accounting) en waarom is het cruciaal?
A:
Het toerekeningsprincipe zegt dat kosten en opbrengsten worden toegewezen aan de **periode waarop ze betrekking hebben**, onafhankelijk van het tijdstip van betaling/ontvangst. Het is cruciaal omdat het een realistischer beeld geeft van prestaties per periode en de basis vormt voor correcte winstbepaling.

---
Q: Wat is het realisatieprincipe?
A:
Het realisatieprincipe bepaalt dat opbrengsten worden erkend wanneer ze **gerealiseerd** zijn (de prestatie is geleverd) en wanneer inning voldoende zeker is, niet noodzakelijk wanneer cash ontvangen wordt. Dit voorkomt dat opbrengsten te vroeg of te laat in het resultaat worden opgenomen.

---
Q: Wat is het overeenstemmingsprincipe (matching) en hoe hangt het samen met winstbepaling?
A:
Het matchingprincipe stelt dat kosten zoveel mogelijk in dezelfde periode worden opgenomen als de opbrengsten die ze helpen realiseren. Hierdoor wordt winst per periode correct berekend als een “match” tussen gerealiseerde prestaties en de middelen die daarvoor verbruikt werden.

---
Q: Leg het verschil uit tussen opbrengsten, kosten, ontvangsten en uitgaven.
A:
- **Opbrengsten**: gerealiseerde prestaties in een periode (boekhoudkundig), los van cash-inning  
- **Kosten**: verbruikte middelen om opbrengsten te realiseren (boekhoudkundig), los van cash-betaling  
- **Ontvangsten**: effectief ontvangen cash in een periode  
- **Uitgaven**: effectief betaalde cash in een periode  
Belangrijk: **opbrengst ≠ ontvangst** en **kost ≠ uitgave** door timingverschillen en accruals.

---
Q: Wat is de algemene structuur van de balans (actief- en passiefzijde) en volgens welk principe worden posten gerangschikt?
A:
De balans bestaat uit:
- **Actief (aanwendingen van vermogen)**: bezittingen en rechten van de onderneming  
  Posten worden in beginsel gerangschikt volgens **toenemende liquiditeit** (hoe snel omzetbaar in geld).
- **Passief (bronnen van vermogen)**: eigen vermogen + schulden  
  Posten worden in beginsel gerangschikt volgens **toenemende opeisbaarheid** (hoe snel moet het betaald worden).

---
Q: Geef typische voorbeelden van posten aan de actiefzijde (met hoofdgroepen).
A:
- **Vaste activa**: immateriële vaste activa, materiële vaste activa (terreinen/gebouwen, machines, meubilair/rollend materieel), financiële vaste activa  
- **Vlottende activa**: voorraden (grondstoffen, goederen in bewerking, gereed product, handelsgoederen), vorderingen ≤ 1 jaar, geldbeleggingen, liquide middelen, overlopende rekeningen (actief)

---
Q: Geef typische voorbeelden van posten aan de passiefzijde (met hoofdgroepen).
A:
- **Eigen vermogen**: inbreng/kapitaal, reserves, overgedragen winst/verlies  
- **Schulden**: schulden > 1 jaar, schulden ≤ 1 jaar (handelsschulden, financiële schulden, schulden m.b.t. belastingen/bezoldigingen/sociale lasten), overlopende rekeningen (passief)

---
Q: Wat is de algemene structuur van de resultatenrekening (in logische volgorde)?
A:
De resultatenrekening bouwt het resultaat op in stappen:
1. **Bedrijfsopbrengsten** (o.a. omzet, andere bedrijfsopbrengsten)
2. **Bedrijfskosten** (o.a. aankopen/handelsgoederen, diensten & diverse goederen, bezoldigingen, afschrijvingen/voorzieningen, andere kosten)
→ **Bedrijfsresultaat**
3. **Financiële opbrengsten en kosten**
→ **Resultaat voor belasting**
4. **Belastingen op het resultaat**
→ **Resultaat van het boekjaar**

---
Q: Waarom kan je winst/verlies niet “gewoon rechtstreeks” in de balans plaatsen zonder resultatenrekening?
A:
De balans is een momentopname en toont niet hoe het resultaat is samengesteld. Zonder resultatenrekening ontbreekt inzicht in welke opbrengsten en kosten het resultaat hebben veroorzaakt. De resultatenrekening is noodzakelijk om het resultaat over een periode te verklaren en te analyseren.

---
Q: Wat is het doel van eindejaarsverrichtingen en met welk principe hangt dit samen?
A:
Eindejaarsverrichtingen zorgen ervoor dat kosten en opbrengsten correct aan de juiste periode worden toegewezen en dat balansposten correct gewaardeerd zijn op afsluitdatum. Dit hangt vooral samen met het **toerekeningsprincipe** en het **overeenstemmingsprincipe (matching)**.

---
Q: Leg uit waarom voorraadwijzigingen geboekt worden en wat het effect is op resultatenrekening én balans.
A:
Voorraadwijzigingen worden geboekt omdat aankopen tijdens het jaar niet noodzakelijk gelijk zijn aan verkochte goederen in datzelfde jaar. Via de voorraadcorrectie wordt de kost van verkochte goederen correct gematcht met de gerealiseerde verkopen. Effect:
- **Resultatenrekening**: kosten worden aangepast (COGS correct)
- **Balans**: voorraadpost wordt verhoogd of verlaagd tot de correcte eindvoorraad

---
Q: Wat zijn afschrijvingen en waarom zijn ze geen kasstromen?
A:
Afschrijvingen zijn een boekhoudkundige techniek waarbij de aanschafwaarde van een vast actief met beperkte levensduur gespreid als kost wordt opgenomen over meerdere boekjaren, in lijn met het matchingprincipe. Ze zijn **geen kasstromen** omdat de cash-uitgave bij aankoop plaatsvindt; de jaarlijkse afschrijving is een **niet-kaskost** die enkel het resultaat beïnvloedt.

---
Q: Wat zijn overlopende rekeningen en waarom zijn ze belangrijk voor het resultaat?
A:
Overlopende rekeningen zorgen ervoor dat kosten en opbrengsten in het juiste boekjaar terechtkomen ondanks timingverschillen in betaling/ontvangst.
- **Overlopende rekeningen (actief)**: vooruitbetaalde kosten / nog te ontvangen opbrengsten
- **Overlopende rekeningen (passief)**: te betalen kosten / ontvangen opbrengsten die op volgende periode slaan  
Ze zijn belangrijk omdat ze het resultaat corrigeren volgens accrual en matching.

---
Q: Wat betekent “contextuele analyse” en waarom is die noodzakelijk vóór cijferanalyse?
A:
Contextuele analyse is de voorbereidende fase waarbij je cijfers kadert met sector- en ondernemingsinformatie (sector, businessmodel, historiek, groepsstructuur, waarderingsregels, waarborgen…). Ze is noodzakelijk omdat dezelfde ratio of evolutie in verschillende sectoren/bedrijven een andere betekenis kan hebben; analyse zonder context leidt snel tot foute conclusies.

---
Q: Wat is horizontale analyse en wat is het doel ervan?
A:
Horizontale analyse is een tijdanalyse: je onderzoekt de evolutie van jaarrekeningposten doorheen de tijd (bv. via tijdindexen). Doel: trends en veranderingen detecteren, maar met voorzichtigheid (representativiteit basisjaar, vergelijkbaarheid, teken/negatieve cijfers).

---
Q: Wat is verticale analyse en wat is het doel ervan?
A:
Verticale analyse is een structuuranalyse: je drukt posten uit als percentage van een referentie (bv. balanstotaal voor balans, omzet voor resultatenrekening). Doel: inzicht krijgen in de samenstelling (gewicht) van activa/passiva en kostenstructuur binnen één jaar, en vergelijking mogelijk maken tussen ondernemingen/sectoren.

---
Q: Waarom wordt de jaarrekening “herwerkt” voor analyse en wat is het netto bedrijfskapitaal (NBK)?
A:
De wettelijke jaarrekening is niet altijd analysevriendelijk, daarom worden posten herschikt in analysecategorieën (bv. permanente financiering vs korte termijn). Het **netto bedrijfskapitaal (NBK)** is een buffermaatstaf die aangeeft in welke mate kortlopende verplichtingen gedekt zijn door vlottende middelen:
- **NBK = Beperkte vlottende activa – Vreemd vermogen op korte termijn**
of equivalent:
- **NBK = Permanent vermogen – Uitgebreide vaste activa**
Een positieve NBK wijst doorgaans op een gezondere korte-termijnstructuur.

---
Q: Wat is het verschil tussen “vlottend” en “vast” (activa) in één examenzin?
A:
Vlottende activa zijn activa die normaal binnen één jaar omgezet worden in cash (voorraad, vorderingen, cash), terwijl vaste activa bedoeld zijn om langdurig in de onderneming te blijven en opbrengsten over meerdere jaren te ondersteunen (gebouwen, machines).

---
Q: Wat is het verschil tussen “vreemd vermogen” en “eigen vermogen” in één examengerichte uitleg?
A:
**Eigen vermogen** is financiering door de eigenaars (kapitaal, reserves, overgedragen resultaat) en hoeft in principe niet terugbetaald te worden. **Vreemd vermogen** is financiering door derden (schulden) en moet terugbetaald worden volgens afgesproken voorwaarden; het creëert vaste verplichtingen (bv. interest en aflossing).


## Chapter: Kasstromenanalyse [kasstromen]

Q: Wat is het doel van kasstromenanalyse en waarom is dit anders dan het boekhoudkundig resultaat analyseren?
A:
Kasstromenanalyse heeft als doel inzicht te verwerven in de **effectieve inkomende en uitgaande kasstromen** (cash ontvangsten en cash uitgaven) en dus in de **verandering van de kaspositie** over een periode. Dit verschilt van het boekhoudkundig resultaat omdat dat resultaat beïnvloed wordt door **accruals** (toerekenings-, realisatie- en matchingprincipes) en dus niet-kaselementen kan bevatten (bv. afschrijvingen, overlopende posten).

---
Q: Leg uit wat bedoeld wordt met “resultaat ≠ kasstroom” en geef twee typische oorzaken.
A:
Resultaat ≠ kasstroom omdat winst/verlies boekhoudkundig wordt bepaald op basis van periodes en niet op basis van cashbewegingen. Twee typische oorzaken:
- **Niet-kaskosten/-opbrengsten** (bv. afschrijvingen, voorzieningen) beïnvloeden resultaat maar niet de cash.
- **Timingverschillen in werkkapitaal** (bv. klanten betalen later → vorderingen stijgen; leveranciers worden later betaald → schulden stijgen).

---
Q: Wat is de basisdefinitie van “kaspositie” in deze cursuscontext?
A:
De verandering in kaspositie wordt benaderd als:
- **Δ kaspositie = Δ geldbeleggingen + Δ liquide middelen**
Met andere woorden: je analyseert hoe de som van geldbeleggingen en cash (liquide middelen) evolueert over een periode.

---
Q: Welke drie categorieën van kasstromen worden traditioneel onderscheiden? Leg elk kort uit.
A:
- **Kasstromen uit operationele activiteiten**: cash uit de kernactiviteiten (verkopen, aankopen, lonen, belastingen…).
- **Kasstromen uit investeringsactiviteiten**: cash door aankoop/verkoop van investeringsgoederen (machines, gebouwen…).
- **Kasstromen uit financieringsactiviteiten**: cash door transacties met vermogensverschaffers (leningen aangaan/aflossen, kapitaalinbreng, dividenden…).

---
Q: Geef per categorie een typisch voorbeeld van een inkomende en een uitgaande kasstroom.
A:
- **Operationeel**: inkomend = ontvangsten van klanten; uitgaand = betaling leveranciers, lonen, belastingen.
- **Investeringen**: inkomend = verkoop machine; uitgaand = aankoop machine/gebouw.
- **Financiering**: inkomend = nieuwe lening of kapitaalinbreng; uitgaand = kapitaalaflossing lening of dividendbetaling.

---
Q: Wat is het verschil tussen de directe en indirecte methode voor kasstromenanalyse?
A:
- **Directe methode**: vertrekt van **effectieve ontvangsten en uitgaven** (cash in – cash uit) en berekent rechtstreeks de netto kasstroom per categorie.
- **Indirecte methode**: vertrekt van een **boekhoudkundig resultaat** en reconcilieert dit naar kasstroom via correcties voor niet-kaselementen en veranderingen in operationele balansposten (werkkapitaal).

---
Q: Waarom wordt de indirecte methode vaak gebruikt in oefeningen/examens?
A:
Omdat de indirecte methode rechtstreeks aansluit bij gegevens uit de jaarrekening: ze gebruikt het boekhoudkundig resultaat en corrigeert op basis van afschrijvingen en veranderingen in balansposten. Daardoor kan je kasstromen afleiden met informatie die vaak beschikbaar is, zonder elke individuele cashtransactie te reconstrueren.

---
Q: Beschrijf de indirecte methode in één examenzin.
A:
De indirecte methode vertrekt van het **resultaat van het boekjaar** en corrigeert dit voor **niet-kaselementen** en **wijzigingen in operationele vlottende activa en operationele schulden** om de kasstroom uit operationele activiteiten te bekomen.

---
Q: Welke types correcties horen typisch bij de indirecte methode (operationele kasstroom)?
A:
Typische correcties zijn:
- **+ niet-kaskosten** (afschrijvingen, waardeverminderingen, voorzieningen…)
- **− niet-kasopbrengsten** (waar relevant)
- **± veranderingen in operationele vlottende activa** (vorderingen, voorraden, overlopende activa)
- **± veranderingen in operationele schulden** (handelsschulden, belastingen/bezoldigingen/sociale lasten, overlopende passiva)
Daarnaast kunnen in het schema ook **kosten van schulden** (interest) als correctie voorkomen afhankelijk van het gebruikte startresultaat.

---
Q: Wat zijn “operationele vlottende activa” en geef voorbeelden.
A:
Operationele vlottende activa zijn kortlopende activa die rechtstreeks gelinkt zijn aan de bedrijfsvoering, zoals:
- **Handelsvorderingen**
- **Voorraden**
- **Overlopende rekeningen van het actief**
Ze representeren middelen die in de operatie “vastzitten” en dus cash kunnen binden.

---
Q: Wat zijn “operationele schulden” en geef voorbeelden.
A:
Operationele schulden zijn kortlopende verplichtingen die voortkomen uit de bedrijfsvoering, zoals:
- **Handelsschulden**
- **Schulden m.b.t. belastingen, bezoldigingen en sociale lasten**
- **Overlopende rekeningen van het passief**
Ze representeren financiering door de operatie (bv. later betalen aan leveranciers).

---
Q: Leg de werkkapitaal-denkregels uit voor de indirecte methode (activa vs schulden).
A:
- **Toename operationele activa** (bv. vorderingen ↑, voorraden ↑) betekent dat cash “vastzit” → **negatieve correctie** (aftrekken).
- **Afname operationele activa** betekent cash komt vrij → **positieve correctie** (optellen).
- **Toename operationele schulden** (bv. handelsschulden ↑) betekent later betalen → cash blijft beschikbaar → **positieve correctie** (optellen).
- **Afname operationele schulden** betekent afbetaling → cash weg → **negatieve correctie** (aftrekken).

---
Q: Waarom worden afschrijvingen terug opgeteld in de indirecte methode?
A:
Omdat afschrijvingen het boekhoudkundig resultaat verlagen zonder dat er een effectieve cash-uitgave tegenover staat in die periode. Het is een **niet-kaskost**; om van resultaat naar cash te gaan moet je dit effect neutraliseren door afschrijvingen terug op te tellen.

---
Q: Waar plaats je interestbetalingen en kapitaalaflossingen in kasstromenanalyse?
A:
In de cursuslogica:
- **Interestbetalingen** worden typisch beschouwd als onderdeel van de **operationele kasstromen** (kost van schulden).
- **Kapitaalaflossingen** behoren tot de **financieringskasstromen** (terugbetaling van principal).
Belangrijk is dat je interest en aflossing niet door elkaar haalt.

---
Q: Hoe bepaal je kasstroom uit investeringsactiviteiten via de indirecte benadering?
A:
Een vaak gebruikte benadering is:
- Start van de **toename/afname in vaste activa**
- Corrigeer voor **afschrijvingen en waardeverminderingen** (omdat die de boekwaarde beïnvloeden zonder cash)
Het doel is om de cash-impact van investeringen (aankopen/verkoop vaste activa) af te leiden.

---
Q: Hoe bepaal je kasstroom uit financieringsactiviteiten in de indirecte benadering?
A:
Je kijkt naar veranderingen in financieringsbronnen:
- **Toename in financiële schulden** (leningen) en/of **toename in inbreng** → positieve kasstromen
- **Kapitaalaflossingen** en andere uitgaande financieringsstromen → negatieve kasstromen
Daarnaast kan je corrigeren voor interest als die elders werd meegenomen.

---
Q: Wat is de relatie tussen kasstromenanalyse en liquiditeitsanalyse (ratio’s zoals current ratio/NBK)?
A:
Liquiditeitsratio’s geven een momentopname van de dekking van kortlopende verplichtingen, terwijl kasstromenanalyse verklaart **waarom** de cashpositie verandert en of de onderneming effectief cash genereert om verplichtingen te betalen. Een onderneming kan winstgevend lijken maar liquiditeitsproblemen hebben als operationele kasstromen zwak zijn (bv. vorderingen/voorraden stijgen).

---
Q: Waarom kan een winstgevend bedrijf toch in liquiditeitsproblemen komen?
A:
Omdat winst boekhoudkundig is en niet noodzakelijk cash betekent. Als bijvoorbeeld klanten later betalen (vorderingen ↑) of voorraad sterk toeneemt (voorraad ↑), kan cash wegvloeien ondanks een positief resultaat. Ook hoge investeringen of snelle schuldafbouw kunnen cash drukken.

---
Q: Wat is het verschil tussen “cash ontvangsten/uitgaven” en “opbrengsten/kosten” in de context van kasstromenanalyse?
A:
- **Cash ontvangsten/uitgaven** zijn echte geldbewegingen die de liquide middelen beïnvloeden.
- **Opbrengsten/kosten** zijn boekhoudkundige grootheden die aan periodes worden toegerekend en dus timingcorrecties kunnen bevatten (accruals). Kasstromenanalyse focust op de eerste, niet op de tweede.

---
Q: Geef een examengerichte uitleg van waarom kasstromenanalyse nuttig is voor besluitvorming.
A:
Kasstromenanalyse toont of een onderneming daadwerkelijk cash genereert uit haar kernactiviteiten, hoeveel cash ze investeert, en hoe ze zichzelf financiert. Dit is cruciaal voor beslissingen over solvabiliteit, betalingscapaciteit, investeringen, dividendbeleid en kredietwaardigheid, omdat cash uiteindelijk bepaalt of verplichtingen kunnen worden nagekomen.



## Chapter: Kost- en Management Accounting [kost-management]

Q: Wat is het doel van kost- en management accounting en hoe verschilt dit van financiële accounting?
A:
Kost- en management accounting heeft als doel **interne besluitvorming** te ondersteunen door relevante kosten- en opbrengstinformatie te leveren aan het management. In tegenstelling tot financiële accounting:
- is het **niet wettelijk vastgelegd**
- is het **toekomstgericht** i.p.v. historisch
- is het **context- en beslissingsafhankelijk**
- focust het niet op externe rapportering, maar op **planning, controle en besluitvorming**

---
Q: Wat wordt bedoeld met het begrip “kostenobject”?
A:
Een kostenobject is **datgene waarvoor men de kost wil bepalen**. Dit kan een product, dienst, project, afdeling, klant of activiteit zijn. Het gekozen kostenobject bepaalt hoe kosten geclassificeerd en toegewezen worden, en is dus cruciaal voor de analyse.

---
Q: Waarom is het kostenobject zo belangrijk bij kostenanalyse?
A:
Omdat **de classificatie van kosten (bv. direct vs indirect)** afhangt van het gekozen kostenobject. Eenzelfde kost kan direct zijn voor het ene kostenobject en indirect voor het andere, waardoor de analyse altijd contextafhankelijk is.

---
Q: Wat zijn directe kosten? Geef een examengerichte definitie.
A:
Directe kosten zijn kosten die **onmiddellijk en zonder verdeelsleutel** aan één specifiek kostenobject kunnen worden toegerekend. Ze zijn rechtstreeks traceerbaar naar het kostenobject waarvoor ze gemaakt worden.

---
Q: Wat zijn indirecte kosten (overheadkosten)? Geef een examengerichte definitie.
A:
Indirecte kosten zijn kosten die **niet rechtstreeks** aan één kostenobject kunnen worden toegerekend omdat ze meerdere kostenobjecten tegelijk ondersteunen. Ze moeten daarom eerst **gealloceerd worden via een verdeelsleutel**.

---
Q: Geef typische voorbeelden van directe en indirecte kosten.
A:
- **Directe kosten**: grondstoffen van een specifiek product, loon van een arbeider die enkel één product maakt  
- **Indirecte kosten**: huur van het gebouw, energiekosten van de productiehal, loon van de directie, afschrijvingen van machines die meerdere producten maken

---
Q: Leg uit waarom directe en indirecte kosten geen absolute begrippen zijn.
A:
Omdat de classificatie afhangt van het **kostenobject**. Een kost kan direct zijn ten opzichte van een afdeling, maar indirect ten opzichte van een individueel product. Er bestaan dus geen “van nature” directe of indirecte kosten.

---
Q: Wat is het verschil tussen vaste en variabele kosten?
A:
Het verschil heeft betrekking op **het gedrag van kosten bij wijziging van het activiteitenniveau**:
- **Variabele kosten** veranderen in totaal wanneer het volume verandert
- **Vaste kosten** blijven in totaal constant bij volume-wijzigingen (binnen het relevante interval)

---
Q: Geef een examengerichte definitie van variabele kosten.
A:
Variabele kosten zijn kosten die **proportioneel variëren met het activiteitenniveau**, waarbij de kost per eenheid constant blijft zolang de productie binnen het relevante interval blijft.

---
Q: Geef een examengerichte definitie van vaste kosten.
A:
Vaste kosten zijn kosten die **in totaal constant blijven** bij veranderingen in het activiteitenniveau, zolang men zich binnen het relevante interval bevindt, maar die per eenheid veranderen naargelang het volume.

---
Q: Wat wordt bedoeld met het “relevante interval” bij vaste kosten?
A:
Het relevante interval is het **activiteitsgebied waarin aannames over kostengedrag geldig blijven**. Buiten dit interval kunnen vaste kosten sprongsgewijs veranderen, bijvoorbeeld door de nood aan extra capaciteit (extra machine, extra gebouw).

---
Q: Waarom is het onderscheid tussen vaste en variabele kosten belangrijk voor managementbeslissingen?
A:
Omdat het management beslissingen neemt over productievolume, prijszetting en rendabiliteit. Deze beslissingen vereisen inzicht in:
- welke kosten meeveranderen met het volume
- welke kosten onafhankelijk zijn van het volume
Dit onderscheid ligt aan de basis van break-evenanalyse en contributiemarge.

---
Q: Wat is contributiemarge en waarom is dit een kernbegrip?
A:
De contributiemarge is het deel van de omzet dat overblijft na aftrek van de variabele kosten:
- **Contributiemarge = Omzet – Variabele kosten**
Ze geeft weer hoeveel een product of activiteit bijdraagt aan het dekken van vaste kosten en vervolgens aan de winst.

---
Q: Wat is de contributiemarge per eenheid?
A:
De contributiemarge per eenheid is:
- **CM per eenheid = Verkoopprijs per eenheid – Variabele kost per eenheid**
Deze maatstaf is essentieel voor beslissingen rond productievolume, prijszetting en productmix.

---
Q: Wat is het break-evenpunt (kritische afzet)?
A:
Het break-evenpunt is het activiteitenniveau waarbij:
- **Totale opbrengsten = Totale kosten**
en de winst dus gelijk is aan nul. Op dit punt zijn de vaste kosten exact gedekt door de contributiemarge.

---
Q: Geef de formule voor de kritische afzet en leg ze conceptueel uit.
A:
- **Kritische afzet = Vaste kosten / Contributiemarge per eenheid**
Conceptueel betekent dit dat men voldoende eenheden moet verkopen zodat de totale contributiemarge groot genoeg is om alle vaste kosten te dekken.

---
Q: Wat is de kritische omzet?
A:
De kritische omzet is de omzet die overeenkomt met het break-evenpunt en kan worden berekend als:
- **Kritische omzet = Kritische afzet × Verkoopprijs**
of via de contributiemargeratio.

---
Q: Wat is de contributiemargeratio en waarvoor wordt ze gebruikt?
A:
De contributiemargeratio is:
- **CM-ratio = Contributiemarge / Omzet**
Ze geeft aan welk percentage van de omzet beschikbaar is om vaste kosten te dekken en winst te genereren, en wordt vaak gebruikt bij omzet-gebaseerde analyses.

---
Q: Wat is de operationele hefboom en wat meet deze?
A:
De operationele hefboom meet hoe **gevoelig het bedrijfsresultaat is voor veranderingen in het verkoopvolume**. Ze weerspiegelt de verhouding tussen vaste en variabele kosten in de kostenstructuur.

---
Q: Wat is het effect van een hoge operationele hefboom?
A:
Een hoge operationele hefboom betekent:
- veel vaste kosten
- sterke winststijging bij volumetoename
- maar ook sterke winstdaling (of verlies) bij volumedaling  
Met andere woorden: **hoog potentieel, maar ook hoog risico**.

---
Q: Geef een conceptuele definitie van operationele hefboom.
A:
De operationele hefboom drukt uit in welke mate een kleine wijziging in het verkoopvolume leidt tot een relatief grotere wijziging in het bedrijfsresultaat, als gevolg van de aanwezigheid van vaste kosten.

---
Q: Waarom is kost- en management accounting per definitie contextafhankelijk?
A:
Omdat kosteninformatie wordt aangepast aan het **beslissingsdoel**, het gekozen kostenobject en de relevante tijdshorizon. Er bestaat geen “juiste” kost in absolute zin; enkel een **relevante kost** in functie van de beslissing.

---
Q: Wat is het verschil tussen relevante en irrelevante kosten in beslissingscontext?
A:
- **Relevante kosten**: kosten die veranderen als gevolg van de beslissing
- **Irrelevante kosten**: kosten die niet beïnvloed worden door de beslissing (bv. sunk costs)  
Management accounting focust uitsluitend op relevante kosten.

---
Q: Waarom zijn sunk costs niet relevant in management accounting?
A:
Sunk costs zijn kosten die reeds gemaakt zijn en niet meer kunnen worden teruggedraaid. Omdat ze **onafhankelijk zijn van toekomstige beslissingen**, mogen ze geen rol spelen in rationele besluitvorming.

---
Q: Geef een examengerichte samenvatting van het nut van kost- en management accounting.
A:
Kost- en management accounting ondersteunt het management bij het nemen van economische beslissingen door inzicht te geven in kostenstructuur, rendabiliteit, risico en volumeeffecten, en vormt zo een essentiële basis voor planning, controle en strategische keuzes.


## Chapter: Investeren & Tijdwaarde van Geld [investeren-tijdwaarde]

Q: Wat is het doel van investeringsanalyse binnen ingenieur en economie?
A:
Het doel van investeringsanalyse is beoordelen of een investeringsproject **waarde creëert voor de onderneming en haar aandeelhouders**, door toekomstige kasstromen te vergelijken met de initiële investering, rekening houdend met risico en tijdwaarde van geld.

---
Q: Waarom worden investeringsbeslissingen genomen op basis van kasstromen en niet op basis van boekhoudkundige winst?
A:
Omdat boekhoudkundige winst beïnvloed wordt door niet-kaselementen (zoals afschrijvingen en overlopende posten) en door toerekeningsregels. Kasstromen daarentegen geven de **reële geldstromen** weer die beschikbaar zijn voor investeerders en schuldeisers en zijn daarom de correcte basis voor investeringsbeslissingen.

---
Q: Leg het principe van de tijdwaarde van geld uit in één examengerichte zin.
A:
Het principe van de tijdwaarde van geld stelt dat **één euro vandaag meer waard is dan één euro in de toekomst**, omdat geld vandaag kan worden belegd, interest kan opbrengen en omdat toekomstige ontvangsten onzeker zijn.

---
Q: Wat is de toekomstige waarde (future value) en wat is de algemene formule?
A:
De toekomstige waarde is de waarde die een bedrag vandaag zal hebben op een toekomstig tijdstip wanneer het wordt gekapitaliseerd aan een bepaalde interestvoet:
- **FV = V₀ · (1 + r)ᵗ**

---
Q: Wat is de contante waarde (present value) en waarom is dit concept cruciaal?
A:
De contante waarde is de waarde **vandaag** van een bedrag dat men pas in de toekomst ontvangt. Dit concept is cruciaal omdat investeringsbeslissingen vereisen dat alle kasstromen naar **éénzelfde tijdstip (meestal t = 0)** worden herleid om ze correct te kunnen vergelijken.
- **PV = Vₜ / (1 + r)ᵗ**

---
Q: Hoe ga je om met meerdere kasstromen gespreid in de tijd bij investeringsanalyse?
A:
Elke kasstroom wordt **afzonderlijk verdisconteerd** naar het gekozen referentietijdstip (meestal vandaag), waarna alle contante waarden worden opgeteld. Enkel zo kan men de totale waarde van een project correct bepalen.

---
Q: Wat is een annuïteit en in welke context komt dit voor?
A:
Een annuïteit is een **eindige reeks gelijke kasstromen** die op regelmatige tijdstippen plaatsvinden (bv. jaarlijkse ontvangsten of betalingen). Annuïteiten komen typisch voor bij leningen, contracten en investeringsprojecten met stabiele jaarlijkse kasstromen.

---
Q: Wat is een perpetuïteit?
A:
Een perpetuïteit is een **oneindige reeks gelijke kasstromen**. De contante waarde ervan kan worden berekend als:
- **PV = C / r**
Perpetuïteiten komen vooral theoretisch voor, maar zijn conceptueel belangrijk.

---
Q: Wat is de netto actuele waarde (NAW of NPV)?
A:
De netto actuele waarde is het verschil tussen de som van de contante waarden van alle toekomstige kasstromen en de initiële investering:
- **NAW = Σ [CFₜ / (1 + r)ᵗ]**
Ze meet hoeveel waarde een project vandaag creëert of vernietigt.

---
Q: Wat is de beslissingsregel bij de netto actuele waarde?
A:
- **NAW ≥ 0** → investering creëert waarde → aanvaarden  
- **NAW < 0** → investering vernietigt waarde → verwerpen

---
Q: Wat stelt de verdisconteringsvoet r voor in investeringsanalyse?
A:
De verdisconteringsvoet r stelt het **minimaal vereiste rendement** voor van de vermogensverschaffers en weerspiegelt zowel de tijdsvoorkeur als het risico van het project. Dit wordt ook de **opportuniteitskost van kapitaal** genoemd.

---
Q: Wat wordt bedoeld met opportuniteitskost in de context van investeringen?
A:
De opportuniteitskost is het rendement dat investeerders zouden kunnen behalen door hun middelen in een **alternatieve investering met gelijkaardig risico** te plaatsen. Dit vormt de ondergrens voor het vereiste rendement van een project.

---
Q: Waarom speelt risico een rol in investeringsanalyse?
A:
Omdat toekomstige kasstromen onzeker zijn. Hoe groter het risico van een project, hoe hoger het vereiste rendement en dus hoe hoger de verdisconteringsvoet waarmee kasstromen worden geactualiseerd.

---
Q: Wat is WACC en waarom wordt deze gebruikt?
A:
WACC (Weighted Average Cost of Capital) is het **gewogen gemiddelde van de kosten van eigen en vreemd vermogen** en wordt gebruikt als verdisconteringsvoet wanneer een project gefinancierd wordt met een combinatie van beide. Het weerspiegelt het gemiddelde vereiste rendement van alle kapitaalverschaffers.

---
Q: Waarom worden financieringskasstromen niet opgenomen in de NAW-berekening?
A:
Omdat de kost van financiering reeds vervat zit in de verdisconteringsvoet (r of WACC). Het opnemen van financieringskasstromen zou leiden tot **dubbele telling**.

---
Q: Wat zijn relevante kasstromen in investeringsanalyse?
A:
Relevante kasstromen zijn **incrementele kasstromen** die uitsluitend optreden als gevolg van het investeringsproject en die verdwijnen wanneer het project niet wordt uitgevoerd.

---
Q: Wat zijn incrementele kasstromen?
A:
Incrementele kasstromen zijn kasstromen die **veranderen door de beslissing** om het project al dan niet uit te voeren. Enkel deze kasstromen zijn relevant voor investeringsanalyse.

---
Q: Wat zijn sunk costs en waarom zijn ze niet relevant?
A:
Sunk costs zijn kosten die reeds gemaakt zijn en niet meer kunnen worden teruggedraaid. Omdat ze onafhankelijk zijn van de investeringsbeslissing, mogen ze geen rol spelen in de evaluatie van projecten.

---
Q: Wat zijn opportuniteitskosten en geef een typisch voorbeeld.
A:
Opportuniteitskosten zijn kasstromen die men misloopt door een bepaald alternatief niet te kiezen. Bijvoorbeeld: het gebruik van een eigen gebouw voor een project impliceert het mislopen van een mogelijke verkoop- of huurinkomst, wat als kost moet worden meegenomen.

---
Q: Hoe ga je om met restwaarde van een investering in de analyse?
A:
De restwaarde wordt opgenomen als een **kasstroom op het einde van de looptijd**, waarbij rekening moet worden gehouden met eventuele belastingen op meer- of minderwaarde bij verkoop.

---
Q: Hoe moet inflatie consistent behandeld worden in investeringsanalyse?
A:
Men moet consistent werken:
- ofwel **reële kasstromen** verdisconteren met een **reële rente**
- ofwel **nominale kasstromen** verdisconteren met een **nominale rente**
Het mengen van beide leidt tot foute resultaten.

---
Q: Wat is de terugverdienperiode en waarom is dit een zwak investeringscriterium?
A:
De terugverdienperiode meet hoe snel de initiële investering wordt terugverdiend, maar:
- negeert de tijdwaarde van geld
- negeert kasstromen na de terugverdientijd  
Daarom is het een zwak criterium en ondergeschikt aan NAW.

---
Q: Geef een examengerichte samenvatting van investeringsanalyse.
A:
Investeringsanalyse beoordeelt projecten op basis van hun vermogen om waarde te creëren, door toekomstige incrementele kasstromen te actualiseren aan een risico-aangepaste verdisconteringsvoet en deze te vergelijken met de initiële investering, waarbij de netto actuele waarde het primaire beslissingscriterium is.


# Course: Communication Networks [communication-networks]

## Chapter: OSI vs Internet Model – Layer Mapping [osi-mapping]

Q: Waar situeert HTTP zich in het lagenmodel?
A:
- OSI-model: Applicatielaag (Layer 7)
- Internet (TCP/IP) model: Applicatielaag

---
Q: Waar situeert FTP zich in het lagenmodel?
A:
- OSI-model: Applicatielaag (Layer 7)
- Internet (TCP/IP) model: Applicatielaag

---
Q: Waar situeert SMTP (e-mail) zich in het lagenmodel?
A:
- OSI-model: Applicatielaag (Layer 7)
- Internet (TCP/IP) model: Applicatielaag

---
Q: Waar situeert DNS zich in het lagenmodel?
A:
- OSI-model: Applicatielaag (Layer 7)
- Internet (TCP/IP) model: Applicatielaag

---
Q: Waar situeert TCP zich in het lagenmodel?
A:
- OSI-model: Transportlaag (Layer 4)
- Internet (TCP/IP) model: Transportlaag

---
Q: Waar situeert UDP zich in het lagenmodel?
A:
- OSI-model: Transportlaag (Layer 4)
- Internet (TCP/IP) model: Transportlaag

---
Q: Waar situeert poortnummers (port numbers) zich?
A:
- OSI-model: Transportlaag (Layer 4)
- Internet (TCP/IP) model: Transportlaag

---
Q: Waar situeert IP (IPv4 / IPv6) zich in het lagenmodel?
A:
- OSI-model: Netwerklaag (Layer 3)
- Internet (TCP/IP) model: Netwerklaag

---
Q: Waar situeert ICMP zich in het lagenmodel?
A:
- OSI-model: Netwerklaag (Layer 3)
- Internet (TCP/IP) model: Netwerklaag

---
Q: Waar situeert routing zich (padbepaling)?
A:
- OSI-model: Netwerklaag (Layer 3)
- Internet (TCP/IP) model: Netwerklaag

---
Q: Waar situeert Ethernet zich in het lagenmodel?
A:
- OSI-model: Datalinklaag (Layer 2)
- Internet (TCP/IP) model: Linklaag

---
Q: Waar situeert WiFi (802.11) zich in het lagenmodel?
A:
- OSI-model: Datalinklaag (Layer 2) + Fysieke laag (Layer 1)
- Internet (TCP/IP) model: Linklaag

---
Q: Waar situeert MAC-adressering zich?
A:
- OSI-model: Datalinklaag (Layer 2)
- Internet (TCP/IP) model: Linklaag

---
Q: Waar situeert ARP zich?
A:
- OSI-model: Tussen Datalinklaag (Layer 2) en Netwerklaag (Layer 3)
- Internet (TCP/IP) model: Linklaag (interface met Netwerklaag)

---
Q: Waar situeert framing zich (frames maken)?
A:
- OSI-model: Datalinklaag (Layer 2)
- Internet (TCP/IP) model: Linklaag

---
Q: Waar situeert foutdetectie via CRC zich?
A:
- OSI-model: Datalinklaag (Layer 2)
- Internet (TCP/IP) model: Linklaag

---
Q: Waar situeert bits-overdracht (signalen) zich?
A:
- OSI-model: Fysieke laag (Layer 1)
- Internet (TCP/IP) model: Fysieke laag

---
Q: Waar situeert kabels, spanningen en frequenties zich?
A:
- OSI-model: Fysieke laag (Layer 1)
- Internet (TCP/IP) model: Fysieke laag

---
Q: Waar situeert de presentatie van data (compressie, encryptie) zich?
A:
- OSI-model: Presentatielaag (Layer 6)
- Internet (TCP/IP) model: Applicatielaag

---
Q: Waar situeert sessiebeheer zich (sessies openen/sluiten)?
A:
- OSI-model: Sessielaag (Layer 5)
- Internet (TCP/IP) model: Applicatielaag

---
Q: Waar situeert HTTPS zich in het lagenmodel?
A:
- OSI-model: Applicatielaag (Layer 7)
- Internet (TCP/IP) model: Applicatielaag

---
Q: Waar situeert TLS / SSL zich?
A:
- OSI-model: Presentatielaag (Layer 6)
- Internet (TCP/IP) model: Applicatielaag

---
Q: Waar situeert DHCP zich?
A:
- OSI-model: Applicatielaag (Layer 7)
- Internet (TCP/IP) model: Applicatielaag

---
Q: Waar situeert SNMP zich?
A:
- OSI-model: Applicatielaag (Layer 7)
- Internet (TCP/IP) model: Applicatielaag

---
Q: Waar situeert Telnet zich?
A:
- OSI-model: Applicatielaag (Layer 7)
- Internet (TCP/IP) model: Applicatielaag

---
Q: Waar situeert SSH zich?
A:
- OSI-model: Applicatielaag (Layer 7)
- Internet (TCP/IP) model: Applicatielaag

---
Q: Waar situeert RTP (Real-time Transport Protocol) zich?
A:
- OSI-model: Transportlaag (Layer 4)
- Internet (TCP/IP) model: Transportlaag

---
Q: Waar situeert QUIC zich?
A:
- OSI-model: Transportlaag (Layer 4)
- Internet (TCP/IP) model: Transportlaag

---
Q: Waar situeert IGMP zich?
A:
- OSI-model: Netwerklaag (Layer 3)
- Internet (TCP/IP) model: Netwerklaag

---
Q: Waar situeert OSPF zich?
A:
- OSI-model: Netwerklaag (Layer 3)
- Internet (TCP/IP) model: Netwerklaag

---
Q: Waar situeert RIP zich?
A:
- OSI-model: Netwerklaag (Layer 3)
- Internet (TCP/IP) model: Netwerklaag

---
Q: Waar situeert BGP zich?
A:
- OSI-model: Netwerklaag (Layer 3)
- Internet (TCP/IP) model: Applicatielaag

---
Q: Waar situeert NAT zich?
A:
- OSI-model: Netwerklaag (Layer 3)
- Internet (TCP/IP) model: Netwerklaag

---
Q: Waar situeert MPLS zich?
A:
- OSI-model: Tussen Datalinklaag (Layer 2) en Netwerklaag (Layer 3)
- Internet (TCP/IP) model: Tussen Linklaag en Netwerklaag

---
Q: Waar situeert PPP zich?
A:
- OSI-model: Datalinklaag (Layer 2)
- Internet (TCP/IP) model: Linklaag

---
Q: Waar situeert VLAN (802.1Q) zich?
A:
- OSI-model: Datalinklaag (Layer 2)
- Internet (TCP/IP) model: Linklaag

---
Q: Waar situeert STP (Spanning Tree Protocol) zich?
A:
- OSI-model: Datalinklaag (Layer 2)
- Internet (TCP/IP) model: Linklaag

---
Q: Waar situeert CSMA/CD zich?
A:
- OSI-model: Datalinklaag (Layer 2)
- Internet (TCP/IP) model: Linklaag

---
Q: Waar situeert CSMA/CA zich?
A:
- OSI-model: Datalinklaag (Layer 2)
- Internet (TCP/IP) model: Linklaag

---
Q: Waar situeert Bluetooth zich?
A:
- OSI-model: Fysieke laag (Layer 1) + Datalinklaag (Layer 2)
- Internet (TCP/IP) model: Linklaag

---
Q: Waar situeert LTE / 4G zich?
A:
- OSI-model: Fysieke laag (Layer 1) + Datalinklaag (Layer 2)
- Internet (TCP/IP) model: Linklaag

---
Q: Waar situeert een switch zich?
A:
- OSI-model: Datalinklaag (Layer 2)
- Internet (TCP/IP) model: Linklaag

---
Q: Waar situeert een router zich?
A:
- OSI-model: Netwerklaag (Layer 3)
- Internet (TCP/IP) model: Netwerklaag

---
Q: Waar situeert een hub zich?
A:
- OSI-model: Fysieke laag (Layer 1)
- Internet (TCP/IP) model: Fysieke laag

---
Q: Waar situeert packet forwarding zich?
A:
- OSI-model: Netwerklaag (Layer 3)
- Internet (TCP/IP) model: Netwerklaag

---
Q: Waar situeert congestion control zich?
A:
- OSI-model: Transportlaag (Layer 4)
- Internet (TCP/IP) model: Transportlaag

---
Q: Waar situeert flow control zich?
A:
- OSI-model: Transportlaag (Layer 4)
- Internet (TCP/IP) model: Transportlaag
