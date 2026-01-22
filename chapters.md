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
