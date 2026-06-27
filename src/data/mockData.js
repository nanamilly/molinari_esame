/**
 * mockData.js
 * Dati simulati per il Museo d'Arte "Archivio Aperto"
 * Gli artisti e le mostre sono collegati tramite ID per consentire
 * la navigazione incrociata nell'applicazione.
 */

// ─── ARTISTI ───────────────────────────────────────────────────────────────────
export const artisti = [
  {
    id: 1,
    nome: 'Leonardo da Vinci',
    nazionalita: 'Italiano',
    correnteArtistica: 'Rinascimento',
    dataNascita: '15 Aprile 1452',
    dataMorte: '2 Maggio 1519',
    luogoNascita: 'Vinci, Toscana',
    foto: '/images/Leo.jpg',
    copertina: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1400&h=500&fit=crop&auto=format&q=80',
    biografia: `Leonardo di ser Piero da Vinci fu uno dei più grandi geni della storia dell'umanità: pittore, scultore, architetto, anatomista, ingegnere e filosofo naturale. Incarnazione perfetta dell'uomo rinascimentale, affrontò ogni disciplina con una curiosità insaziabile e un'acutezza intellettuale straordinaria. La sua produzione pittorica, seppur non vastissima, annovera opere fondamentali per la storia dell'arte occidentale. Con la Gioconda e l'Ultima Cena ridefinì i canoni della ritrattistica e della composizione narrativa. I suoi manoscritti, disseminati tra le biblioteche di mezza Europa, rivelano una mente che spaziava con disinvoltura dalla matematica all'ottica, dall'anatomia comparata all'idraulica.`,
    mostreIds: [5],
    opere: [
      {
        id: 101,
        titolo: 'La Gioconda',
        anno: '1503–1519',
        tecnica: 'Olio su tavola di pioppo',
        dimensioni: '77 × 53 cm',
        immagine: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=500&fit=crop&auto=format&q=80',
      },
      {
        id: 102,
        titolo: "L'Ultima Cena",
        anno: '1495–1498',
        tecnica: 'Tempera su intonaco',
        dimensioni: '460 × 880 cm',
        immagine: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?w=400&h=500&fit=crop&auto=format&q=80',
      },
      {
        id: 103,
        titolo: "L'Uomo Vitruviano",
        anno: '1490 circa',
        tecnica: 'Penna, inchiostro e acquerello su carta',
        dimensioni: '34 × 26 cm',
        immagine: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=500&fit=crop&auto=format&q=80',
      },
    ],
  },
  {
    id: 2,
    nome: 'Michelangelo Merisi da Caravaggio',
    nazionalita: 'Italiano',
    correnteArtistica: 'Barocco',
    dataNascita: '29 Settembre 1571',
    dataMorte: '18 Luglio 1610',
    luogoNascita: 'Milano (o Caravaggio), Lombardia',
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop&auto=format&q=80',
    copertina: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1400&h=500&fit=crop&auto=format&q=80',
    biografia: `Michelangelo Merisi, detto il Caravaggio dal nome del paese lombardo di origine, rivoluzionò la pittura europea del XVII secolo introducendo il naturalismo più radicale e un uso drammatico della luce — il cosiddetto tenebrismo — che influenzò generazioni di pittori in tutta Europa. La sua vita fu tanto tumultuosa quanto la sua arte: coinvolto in risse, processi e omicidi, visse da fuggitivo gli ultimi anni della sua breve esistenza. Ciononostante, la sua produzione pittorica è di una coerenza e di una potenza espressiva senza eguali, capace di unire la crudezza del vero con la grandiosità del sacro.`,
    mostreIds: [1],
    opere: [
      {
        id: 201,
        titolo: 'Giuditta e Oloferne',
        anno: '1598–1599',
        tecnica: 'Olio su tela',
        dimensioni: '145 × 195 cm',
        immagine: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=400&h=500&fit=crop&auto=format&q=80',
      },
      {
        id: 202,
        titolo: 'La Vocazione di San Matteo',
        anno: '1599–1600',
        tecnica: 'Olio su tela',
        dimensioni: '322 × 340 cm',
        immagine: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=400&h=500&fit=crop&auto=format&q=80',
      },
      {
        id: 203,
        titolo: 'Bacco',
        anno: '1596–1597',
        tecnica: 'Olio su tela',
        dimensioni: '95 × 85 cm',
        immagine: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=500&fit=crop&auto=format&q=80',
      },
    ],
  },
  {
    id: 3,
    nome: 'Artemisia Gentileschi',
    nazionalita: 'Italiana',
    correnteArtistica: 'Barocco',
    dataNascita: '8 Luglio 1593',
    dataMorte: '1656 circa',
    luogoNascita: 'Roma, Lazio',
    foto: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&h=600&fit=crop&auto=format&q=80',
    copertina: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1400&h=500&fit=crop&auto=format&q=80',
    biografia: `Artemisia Gentileschi fu la prima donna a essere ammessa all'Accademia di Arte del Disegno di Firenze e una delle poche pittrici del XVII secolo a ricevere riconoscimento universale mentre era ancora in vita. Formatasi nella bottega del padre Orazio, sviluppò uno stile personale fortemente influenzato dal naturalismo caravaggesco, caratterizzato da figure potenti, psicologie complesse e una straordinaria resa della fisicità. Le sue eroine — Giuditta, Ester, Lucrezia — non sono mai passive: sono donne che agiscono, decidono, resistono. Questa forza narrativa la rende un'artista di straordinaria modernità.`,
    mostreIds: [1],
    opere: [
      {
        id: 301,
        titolo: 'Giuditta e Oloferne',
        anno: '1614–1620',
        tecnica: 'Olio su tela',
        dimensioni: '199 × 162 cm',
        immagine: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=400&h=500&fit=crop&auto=format&q=80',
      },
      {
        id: 302,
        titolo: 'Autoritratto come Allegoria della Pittura',
        anno: '1638–1639',
        tecnica: 'Olio su tela',
        dimensioni: '98 × 75 cm',
        immagine: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&h=500&fit=crop&auto=format&q=80',
      },
    ],
  },
  {
    id: 4,
    nome: 'Giovanni Antonio Canal (Canaletto)',
    nazionalita: 'Italiano',
    correnteArtistica: 'Vedutismo',
    dataNascita: '28 Ottobre 1697',
    dataMorte: '19 Aprile 1768',
    luogoNascita: 'Venezia, Veneto',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&auto=format&q=80',
    copertina: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1400&h=500&fit=crop&auto=format&q=80',
    biografia: `Giovanni Antonio Canal, universalmente noto come Canaletto, è il più celebre vedutista veneziano del Settecento. Le sue vedute della Serenissima, realizzate con precisione quasi fotografica grazie all'uso della camera ottica, catturano la luce, l'architettura e la vita quotidiana della laguna con una fedeltà e un lirismo incomparabili. Tra il 1746 e il 1756 soggiornò in Inghilterra, dove ritrasse Londra e le ville nobiliari con lo stesso occhio scrupoloso riservato a Venezia. La sua opera esercitò un'influenza enorme sul paesaggismo europeo del XVIII e XIX secolo.`,
    mostreIds: [2],
    opere: [
      {
        id: 401,
        titolo: "Il Canal Grande verso Ca' Foscari",
        anno: '1725 circa',
        tecnica: 'Olio su tela',
        dimensioni: '141 × 152 cm',
        immagine: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=400&h=500&fit=crop&auto=format&q=80',
      },
      {
        id: 402,
        titolo: 'La Piazza San Marco',
        anno: '1730 circa',
        tecnica: 'Olio su tela',
        dimensioni: '141 × 204 cm',
        immagine: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=400&h=500&fit=crop&auto=format&q=80',
      },
      {
        id: 403,
        titolo: "Il Bucintoro al Molo nel giorno dell'Ascensione",
        anno: '1732 circa',
        tecnica: 'Olio su tela',
        dimensioni: '77 × 126 cm',
        immagine: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=400&h=500&fit=crop&auto=format&q=80',
      },
    ],
  },
  {
    id: 5,
    nome: 'Claude Monet',
    nazionalita: 'Francese',
    correnteArtistica: 'Impressionismo',
    dataNascita: '14 Novembre 1840',
    dataMorte: '5 Dicembre 1926',
    luogoNascita: 'Parigi, Francia',
    foto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=600&fit=crop&auto=format&q=80',
    copertina: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1400&h=500&fit=crop&auto=format&q=80',
    biografia: `Oscar-Claude Monet fu il fondatore e il più rappresentativo esponente del movimento impressionista. La sua carriera, durata quasi settant'anni, è segnata da un'evoluzione costante verso forme sempre più sintetiche e libere, in cui la luce diventa protagonista assoluta a scapito del contorno e del dettaglio. Il giardino di Giverny, creato e curato da lui stesso, fu il teatro delle sue ultime e più ambiziose ricerche pittoriche: le celeberrime Ninfee, composizioni di dimensioni monumentali in cui lo specchio d'acqua si fa universo cosmico, anticipano l'espressionismo astratto americano di mezzo secolo.`,
    mostreIds: [3],
    opere: [
      {
        id: 501,
        titolo: 'Ninfee',
        anno: '1906',
        tecnica: 'Olio su tela',
        dimensioni: '88 × 93 cm',
        immagine: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=500&fit=crop&auto=format&q=80',
      },
      {
        id: 502,
        titolo: 'Impression, soleil levant',
        anno: '1872',
        tecnica: 'Olio su tela',
        dimensioni: '48 × 63 cm',
        immagine: 'https://images.unsplash.com/photo-1457530378978-8bac673b8062?w=400&h=500&fit=crop&auto=format&q=80',
      },
      {
        id: 503,
        titolo: 'La Cattedrale di Rouen',
        anno: '1894',
        tecnica: 'Olio su tela',
        dimensioni: '100 × 65 cm',
        immagine: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400&h=500&fit=crop&auto=format&q=80',
      },
    ],
  },
  {
    id: 6,
    nome: 'Frida Kahlo',
    nazionalita: 'Messicana',
    correnteArtistica: 'Surrealismo',
    dataNascita: '6 Luglio 1907',
    dataMorte: '13 Luglio 1954',
    luogoNascita: 'Coyoacán, Città del Messico',
    foto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=600&fit=crop&auto=format&q=80',
    copertina: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1400&h=500&fit=crop&auto=format&q=80',
    biografia: `Magdalena Carmen Frida Kahlo Calderón trasformò il dolore fisico e psicologico — le conseguenze di un devastante incidente stradale, le gravidanze interrotte, il matrimonio tormentato con Diego Rivera — in un'arte di potenza viscerale e di rara bellezza. I suoi 143 dipinti, di cui 55 autoritratti, fondono simbolismo precolombiano, cattolicesimo popolare messicano e onirismo surrealista in un linguaggio assolutamente personale. André Breton la definì "surrealista", ma lei rifiutò l'etichetta: "Non dipingo sogni. Dipingo la mia realtà".`,
    mostreIds: [4],
    opere: [
      {
        id: 601,
        titolo: 'Le due Frida',
        anno: '1939',
        tecnica: 'Olio su tela',
        dimensioni: '174 × 173 cm',
        immagine: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&h=500&fit=crop&auto=format&q=80',
      },
      {
        id: 602,
        titolo: 'Autoritratto con collana di spine e colibrì',
        anno: '1940',
        tecnica: 'Olio su masonite',
        dimensioni: '63 × 49 cm',
        immagine: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=400&h=500&fit=crop&auto=format&q=80',
      },
    ],
  },
  {
    id: 7,
    nome: "Georgia O'Keeffe",
    nazionalita: 'Americana',
    correnteArtistica: 'Modernismo Americano',
    dataNascita: '15 Novembre 1887',
    dataMorte: '6 Marzo 1986',
    luogoNascita: 'Sun Prairie, Wisconsin, USA',
    foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop&auto=format&q=80',
    copertina: 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0?w=1400&h=500&fit=crop&auto=format&q=80',
    biografia: `Georgia Totto O'Keeffe, definita la "Madre del modernismo americano", sviluppò nel corso della sua lunga carriera un linguaggio pittorico di grande purezza formale, capace di cogliere l'essenza visiva degli oggetti naturali — fiori, ossa, paesaggi del New Mexico — in composizioni di straordinaria tensione astratta. Dopo la morte del marito, il fotografo Alfred Stieglitz, si ritirò definitivamente in New Mexico, nel ranch di Ghost Ranch, dove visse e lavorò fino ai novantasei anni. La sua vita e la sua arte incarnano l'ideale americano dell'individualismo radicale.`,
    mostreIds: [4],
    opere: [
      {
        id: 701,
        titolo: 'Calla Lily Turned Away',
        anno: '1923',
        tecnica: 'Olio su tela',
        dimensioni: '32 × 26 cm',
        immagine: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=500&fit=crop&auto=format&q=80',
      },
      {
        id: 702,
        titolo: 'Black Iris',
        anno: '1926',
        tecnica: 'Olio su tela',
        dimensioni: '91 × 76 cm',
        immagine: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=400&h=500&fit=crop&auto=format&q=80',
      },
      {
        id: 703,
        titolo: 'Sky Above Clouds IV',
        anno: '1965',
        tecnica: 'Olio su tela',
        dimensioni: '244 × 732 cm',
        immagine: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=500&fit=crop&auto=format&q=80',
      },
    ],
  },
  {
    id: 8,
    nome: 'Yayoi Kusama',
    nazionalita: 'Giapponese',
    correnteArtistica: 'Arte Contemporanea',
    dataNascita: '22 Marzo 1929',
    dataMorte: null,
    luogoNascita: 'Matsumoto, Nagano, Giappone',
    foto: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&h=600&fit=crop&auto=format&q=80',
    copertina: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1400&h=500&fit=crop&auto=format&q=80',
    biografia: `Yayoi Kusama è la più importante artista vivente al mondo per fatturato nel mercato dell'arte. Il suo lavoro — che spazia dalla pittura alla scultura, dall'installazione alla performance, fino alla letteratura — è dominato dalla ripetizione ossessiva di pattern a pois, che l'artista stessa descrive come il tentativo di esorcizzare le allucinazioni visive che la accompagnano fin dall'infanzia. Trasferitasi a New York negli anni '60, fu pioniera di istanze proto-pop e proto-minimaliste. Oggi vive e lavora a Tokyo, dove continua a produrre con inesauribile energia.`,
    mostreIds: [4],
    opere: [
      {
        id: 801,
        titolo: 'Infinity Mirror Room — Filled with the Brilliance of Life',
        anno: '2011',
        tecnica: 'Installazione, specchi, luci LED, acqua',
        dimensioni: 'Dimensioni variabili',
        immagine: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=400&h=500&fit=crop&auto=format&q=80',
      },
      {
        id: 802,
        titolo: 'Pumpkin (Yellow)',
        anno: '1994',
        tecnica: 'Acrilico su tela',
        dimensioni: '162 × 130 cm',
        immagine: 'https://images.unsplash.com/photo-1551361415-69c87624334f?w=400&h=500&fit=crop&auto=format&q=80',
      },
    ],
  },
]

// ─── MOSTRE ────────────────────────────────────────────────────────────────────
export const mostre = [
  {
    id: 1,
    titolo: 'Luce e Ombra: il Barocco Italiano',
    stato: 'in-corso', // 'in-corso' | 'archiviata' | 'in-arrivo'
    dataInizio: '2026-03-15',
    dataFine: '2026-09-30',
    luogo: 'Sala Principale, Piano Nobile',
    curatore: 'Prof.ssa Maria Rossi',
    cover: 'https://images.unsplash.com/photo-1577720643272-265f09367456?w=900&h=500&fit=crop&auto=format&q=80',
    descrizioneBreve:
      'Un viaggio nel cuore della pittura barocca attraverso le opere di due maestri del chiaroscuro.',
    descrizione: `Questa mostra esplora il dialogo visivo tra i due giganti del Barocco italiano: Michelangelo Merisi da Caravaggio e Artemisia Gentileschi. Attraverso una selezione accurata di opere provenienti da collezioni pubbliche e private internazionali, il percorso espositivo mette in luce la rivoluzione stilistica portata dal naturalismo caravaggesco e la potenza narrativa di Artemisia, prima donna a sfidare le convenzioni accademiche del suo tempo.

Il visitatore è guidato attraverso un percorso cronologico e tematico che alterna opere dei due maestri, evidenziando convergenze e differenze nei soggetti prediletti — storie bibliche, allegorie, ritratti — e nella tecnica pittorica. Particolare attenzione è dedicata al tema di Giuditta e Oloferne, affrontato da entrambi con esiti radicalmente diversi.

La mostra è curata dalla Prof.ssa Maria Rossi dell'Università di Roma La Sapienza, con contributi critici di Claudio Strinati e Keith Christiansen.`,
    artistiIds: [2, 3],
    immaginiGalleria: [
      'https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=900&h=600&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=900&h=600&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=900&h=600&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=900&h=600&fit=crop&auto=format&q=80',
    ],
  },
  {
    id: 2,
    titolo: 'La Venezia Eterna: Canaletto e la Grande Veduta',
    stato: 'archiviata',
    dataInizio: '2025-06-01',
    dataFine: '2025-11-30',
    luogo: 'Sala Veneziana, Secondo Piano',
    curatore: 'Dott. Luca Bianchi',
    cover: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=900&h=500&fit=crop&auto=format&q=80',
    descrizioneBreve:
      "Le vedute immortali di Venezia attraverso l'occhio magistrale di Canaletto.",
    descrizione: `Un omaggio alla città più pittoresca del mondo attraverso le vedute del suo più grande interprete. Le opere di Canaletto riproducono con fedeltà quasi scientifica i canali, le piazze e i monumenti della Serenissima, catturando per sempre una Venezia che, pur trasformandosi nel tempo, rimane eternamente riconoscibile nell'immaginario collettivo mondiale.

Il percorso espositivo si sviluppa in tre sezioni: la prima dedicata alle vedute del Canal Grande e di Piazza San Marco, la seconda alle cerimonie e alle feste della Repubblica, la terza ai disegni preparatori e ai taccuini di viaggio. L'allestimento riproduce fedelmente l'atmosfera di una raccolta del Settecento, con pavimenti in cotto veneziano e pareti di velluto verde-acqua.

La mostra ha ospitato oltre 40 opere originali provenienti da musei europei e americani, tra cui il Louvre, il British Museum e la National Gallery di Washington.`,
    artistiIds: [4],
    immaginiGalleria: [
      'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=900&h=600&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=900&h=600&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900&h=600&fit=crop&auto=format&q=80',
    ],
  },
  {
    id: 3,
    titolo: 'Impressioni di Giardino: Monet e la Luce',
    stato: 'archiviata',
    dataInizio: '2025-02-14',
    dataFine: '2025-05-31',
    luogo: 'Padiglione Est, Galleria delle Finestre',
    curatore: 'Dr. François Dubois',
    cover: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=900&h=500&fit=crop&auto=format&q=80',
    descrizioneBreve:
      "L'universo floreale e luminoso di Claude Monet, tra i giardini di Giverny e le rive della Senna.",
    descrizione: `Un'immersione nell'universo sensoriale di Claude Monet, il padre dell'impressionismo. La mostra ripercorre la straordinaria evoluzione del maestro francese dalla giovinezza parigina alle ultime opere a Giverny, dove la fusione di luce, acqua e colore raggiunse vette di astrazione poetica mai più eguagliate.

Il percorso espositivo, strutturato in sei sale tematiche, segue la progressiva liberazione di Monet dal vincolo del soggetto: dalle prime marine normandiche ai covoni di fieno, dalle cattedrali di Rouen alle grandi composizioni acquatiche delle Ninfee. Ogni sala è progettata per riprodurre la qualità luminosa specifica di ogni periodo creativo.

La mostra si conclude con una sala immersiva di 200 mq dedicata alle Ninfee, con proiezioni a 360° che avvolgono il visitatore nell'ambiente di Giverny nelle diverse stagioni dell'anno. Il percorso comprende 30 opere originali e contributi audiovisivi inediti.`,
    artistiIds: [5],
    immaginiGalleria: [
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=900&h=600&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1457530378978-8bac673b8062?w=900&h=600&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=900&h=600&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=900&h=600&fit=crop&auto=format&q=80',
    ],
  },
  {
    id: 4,
    titolo: 'Visionarie: Arte al Femminile tra Mito e Contemporaneità',
    stato: 'in-arrivo',
    dataInizio: '2026-10-10',
    dataFine: '2027-03-15',
    luogo: 'Sale Espositive, Intero Museo',
    curatore: 'Prof.ssa Elena Marchetti',
    cover: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=900&h=500&fit=crop&auto=format&q=80',
    descrizioneBreve:
      'Tre artiste, tre continenti, una sola voce: la potenza trasformatrice della visione femminile.',
    descrizione: `Una mostra straordinaria che celebra la visione di tre artiste iconiche del XX e XXI secolo: Frida Kahlo, Georgia O'Keeffe e Yayoi Kusama. Il progetto espositivo, concepito come un dialogo virtuale tra le tre protagoniste, esplora i temi dell'identità, del corpo, della natura e dell'infinito attraverso linguaggi visivi radicalmente diversi ma uniti da un'intensità poetica irriducibile.

Il percorso è suddiviso in tre grandi aree monografiche, ciascuna delle quali ricrea l'ambiente culturale e biografico entro cui ogni artista ha sviluppato la propria visione: il Messico colorato e doloroso di Kahlo, il deserto silenzioso e metafisico del New Mexico di O'Keeffe, l'universo psichedelico e ossessivo di Kusama.

La mostra include oltre 80 opere tra dipinti, installazioni e sculture, ed è accompagnata da un programma di eventi collaterali — conferenze, laboratori, proiezioni — dedicati al tema del femminile nell'arte contemporanea.`,
    artistiIds: [6, 7, 8],
    immaginiGalleria: [
      'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=900&h=600&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1444065381814-865dc9da92c0?w=900&h=600&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1554188248-986adbb73be4?w=900&h=600&fit=crop&auto=format&q=80',
    ],
  },
  {
    id: 5,
    titolo: 'Il Genio Immortale: Leonardo tra Arte e Scienza',
    stato: 'archiviata',
    dataInizio: '2024-09-01',
    dataFine: '2025-01-15',
    luogo: 'Grande Salone Centrale',
    curatore: 'Prof. Giorgio Ferrari',
    cover: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=900&h=500&fit=crop&auto=format&q=80',
    descrizioneBreve:
      "Un'esplorazione dell'universo poliedrico di Leonardo da Vinci, tra pittura, anatomia e invenzione.",
    descrizione: `Una mostra-evento dedicata al più grande genio della storia umana. L'esposizione integra i capolavori pittorici di Leonardo con i suoi straordinari manoscritti scientifici, i disegni anatomici e i progetti ingegneristici, offrendo una visione completa e coerente di una mente che rifiutava ogni confine tra arte e conoscenza.

Il percorso si articola in quattro sezioni: "La Pittura come Scienza" (dai ritratti alle composizioni sacre), "Il Corpo Umano" (i disegni anatomici e i trattati), "La Macchina del Mondo" (le invenzioni e i progetti di ingegneria civile e militare), "Il Paesaggio" (gli studi di geologia, meteorologia e ottica). Riproduzioni in scala reale di alcune macchine leonardesche sono esposte e interattive.

La mostra è realizzata in collaborazione con la Biblioteca Reale di Windsor, i Musei Vaticani e l'Ambrosiana di Milano, che hanno concesso in prestito materiali eccezionali. Ha accolto oltre 120.000 visitatori nel corso della sua durata.`,
    artistiIds: [1],
    immaginiGalleria: [
      'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=900&h=600&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1452802447250-470a88ac82bc?w=900&h=600&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&h=600&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&h=600&fit=crop&auto=format&q=80',
    ],
  },
]

// ─── FUNZIONI HELPER ───────────────────────────────────────────────────────────

/** Restituisce un artista dato il suo ID, oppure null */
export function getArtistaById(id) {
  return artisti.find((a) => a.id === id) || null
}

/** Restituisce una mostra dato il suo ID, oppure null */
export function getMostraById(id) {
  return mostre.find((m) => m.id === id) || null
}

/** Restituisce la lista degli artisti partecipanti a una mostra */
export function getArtistiByMostra(mostraId) {
  const mostra = getMostraById(mostraId)
  if (!mostra) return []
  return mostra.artistiIds.map((id) => getArtistaById(id)).filter(Boolean)
}

/** Restituisce le mostre a cui ha partecipato un artista */
export function getMostreByArtista(artistaId) {
  return mostre.filter((m) => m.artistiIds.includes(artistaId))
}

/** Formatta una data ISO in formato italiano (es. "15 Marzo 2026") */
export function formatData(isoDate) {
  if (!isoDate) return ''
  const d = new Date(isoDate)
  return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}

/** Mappa lo stato di una mostra in un'etichetta leggibile */
export const statoLabels = {
  'in-corso': 'In corso',
  archiviata: 'Archiviata',
  'in-arrivo': 'In arrivo',
}
