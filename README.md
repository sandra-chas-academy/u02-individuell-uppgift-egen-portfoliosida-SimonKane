## LÄNK TILL NETLIFY: https://u02simonkane.netlify.app

# Projekbeskrivning

Jag har valt att börja om på en ny sida istället för att vidareutveckla från våran u01-skiss vi gick efter. Den är väldigt basic och innehåller ungefär samma form av flikar med lite annorlunda styling och struktur. Det finns en hel del javascript implementerat och massor av HTML som både genereras och manipuleras via JS. Sidan är responsiv med 2st brytpunkter. På grund av tidsbrist så har jag inte prioriterat styling, SEO, prestanda eller sett det som en portfolio att använda privat i framtiden. Utan jag har valt att bygga sidan baserat på de punkter som stod i uppgiftsbeskrivningen och sett till att den funktionalitet som efterfrågas finns. Jag har som interaktiva Javascript-moment dels en hover-knapp över mina nav-ikoner. Samt så har varje projectkort ett click-event som tar användaren till respektive repository på github. Min text på startsidan generas med en funktion som får den att skrivas ut en bokstav i taget. Sen är även själva Navbarens funktionalitet skriven i javascript. Det finns en loadingscreen som dyker upp om API-call från github skulle vara långsam. Den är dynamiskt renderad i JS men helt och hållet gjort och stylad i CSS.

## Styrkor och brister

Styrkor i min sida är att den är clean och att jag själv kunde implementera den eftersträvade funktionaliteten på ett enkelt sätt.

### Styrkor

Stor del i det jag gjort på min github är via andra i gruppen och då som "collaborator". Detta gjorde att jag inte via en enkel API-call kunde nå dessa utan en TOKEN. Denna TOKEN gjorde så jag inte kunde pusha upp den till classroom-branchen. Om jag lyckades kringå den "secretinställningen" som det flaggades för i terminalen. Så när man testade sidan sen så ufördes inte API-anropet. Och därför genererades inte mina saker på sidan. Så jag fick lägga in så mycket som jag hann på min egen sida och sedan använda mig av enkel API-URL för att komma åt dom. Så inte så mycket som jag ville genererades på min sida. Men principen är densamma.

Bristerna är också helt enkelt att jag hade en annan vision och att jag borde ha spenderat mer tid på att uppnå ett resultat som jag själv är nöjd med när det kommer till styling. Men pga tidsbrist och händelser blev det så att jag fick skala ner min önskan och göra sidan efter behov och krav istället.

# Frågor

## Vad kan man utveckla m.h.a av Javascript inom frontend?

Man kan göra sidan mer dynamisk och implementera mer interaktivitet. Man kan på ett enkelt sätt lyssna efter events på sidan så som "click", "scroll", "mouseover" med många fler för att sedan kontrollera och styra vad som ska hända och hur sidan ska ändras baserat på eventsen. Det är också använbart om man ska göra sidor mer flytande eller hålla på med animationer. Man kan uppdatera sidan på villkor som man själv skriver. Vilket kan va användbart vi datahantering eller om användaren använder sig av en chatfunktion eller helt enkelt ändrar något på sidan. Man kan hämta data via API:er för att sedan presentera på sin sida efter behag. Man kan alltså använda den data som kommer från en backend för att visa och presentera på sin front end-del.

### Vad är JSON och hur används det inom frontend?

JSON står för "JavaScript Object Notation". Det är sättet informationen från api-calls eller back end ofta skickas i till frontend för att sedan konverteras och användas inom frontend. Det är i princip ett javascript-object med nyckel och värde-par. Formatet gör att informationen som skickas blir "lättare" och inte lika prestandakrävande. Det är alltså sättet man kommunicerar med en server. Antingen via att man skickar användardata till den eller om man får data från servern via API-anrop.

### Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

HTTP står för "Hypertext Transfer Protocol". Det är ett sätt att komminucera med en server, eller vilka regler som ska förhållas till när det komminuceras. Man kan använda HTTP för att prata med servern via exempelvis olika metoder som gör att man kan hämta, skapa ny, radera eller uppdatera data via "GET", "POST", "DELETE", "PUT". Dessa är bra att veta om man komminucerar med en server oc här metoder som ska användas när man gör olika API-anrop beroende på vad man vill göra. API-anropet svarar också med olika svarskoder som kan användas vid exempelvis felsökning eller om man ska presentera att allt gick bra vid anropet från klienten. Ett api-anrop görs ofta med en URL (dit man vill göra anropet), en metod (GET,PUT,DELETE osv beroende på vad man vill göra), header (används för exempelvis autentisering) och eventuellt Body (om man vill skicka data från användaren till servern). Servern svarar oftast med liknande: header (data om svaret), en statuskod (olika beroende på serverfel eller "not found" och liknande) och body (det är alltså informationen som begärdes). Det är som frontendutvecklare viktigt att ha koll på protokollet då det används väldigt mycket och ´det är viktigt att använda rätt sak på rätt plats. Samt så tror jag till största del att det hjälper att ha koll då vid eventuella fel så kan man använda sig av felkoderna (statuskoderna) för att snabbt identifiera vad som är fel. Samt så underlättar det för att utveckla en säker och trygg websida/app.
