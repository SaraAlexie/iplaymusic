# Saras projektdokumentation
Netlify: https://iplaymusicsann.netlify.app

## Npm pakkker:
@reach/router, @emotion/styled, @emotion/react, axios, querystring (til login), netlify-cli -D, react-icons, get-google-fonts, react-audio-player, react-lazyload, react-h5-audio-player

## Arbejdsprocess:
Oprettet kanban-board, med kolonnerne backlog, in progress, issues og DONE. Oprettet issues med de mere basale layout opgaver.
Startet med at kode layout på login-siden. Eneste egentlige login-funktion er "log in with spotify", resten er pynt.
Farver er blevet oprettet i deres eget component. Jeg ved godt det generelt ikke er smart at kalde farverne "lightgreen" og "darkgreen", men jeg har gjort det alligevel, da jeg ved der ikke kommer en kunde på et tidspunkt og siger det skal ændres.

Efter jeg havde lavet meget af stylingen på de første par sider, lavede jeg en menu og en footer, som går igen på alle siderne. Footeren er blevet sat ind i App.js, men har fået en useLocation function, så den ikke bliver vist på login-siden.

Herefter fokuserede jeg på at få fetchet de rigtige data på de rigtige sider. Jeg oprettede alle de sider, som der skulle være i projektet og sørgede for, at der blev linket til de rigtige sider og sendt props afsted. Herefter udskrev jeg data på siderne.

Prøvede at få react-audio-player til at virke, men det giver problemer. Nu prøver jeg react-h5-audio-player i stedet. Nu virker det, men det er nok fordi jeg flyttede mine lydviler fra src til public.

For at integrere lazyload på featured-siden, downloadede jeg npm pakken react-lazyload og fulgte instrukserne.

Lavede en dynamisk titel i menuen vha. props.

Jeg fik lavet en kopieret svg fra Adobe XD, så baggrunden på Playlist ser rigtig ud. Det er ikke en optimal løsning, men den er god nok for nu. Alt den styling som mangler på siderne er det, som der bliver fokuseret på her til sidst. 
Som det allersidste lavede jeg en function i et component, som indsætter spilletiden på hvert nummer.