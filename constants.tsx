import { Article, GalleryYear, ScheduleItem } from './types';
import React from 'react';

export const NAV_LINKS = [
  { name: 'Kezdőlap', href: '#' },
  { name: 'Programok', href: '#programok' },
  { name: 'Képzések', href: '#kepzesek' },
  { name: '1%', href: '#supporters' },
];

export const REPORT_YEARS = [
  { year: '2024', label: '2024-es jelentés', href: '/EuritmiaHon/documents/Magyar_Euritmia_Mozgásmüvészeti_Társaság_jelentés_2024.pdf' },
  { year: '2023', label: '2023-as jelentés', href: '/EuritmiaHon/documents/Magyar_Euritmia_Mozgásmüvészeti_Társaság_jelentés_2023.pdf' },
  { year: '2022', label: '2022-es jelentés', href: '/EuritmiaHon/documents/Magyar_Euritmia_Mozgásmüvészeti_Társaság_jelentés_2022.pdf' },
  { year: '2021', label: '2021-es jelentés', href: '/EuritmiaHon/documents/Magyar_Euritmia_Mozgásmüvészeti_Társaság_jelentés_2021.pdf' },
  { year: '2020', label: '2020-as jelentés', href: '/EuritmiaHon/documents/Magyar_Euritmia_Mozgásmüvészeti_Társaság_jelentés_2020.pdf' },
  { year: '2019', label: '2019-es jelentés', href: '/EuritmiaHon/documents/Magyar_Euritmia_Mozgásmüvészeti_Társaság_jelentés_2019.pdf' },
];

export const EXTERNAL_LINKS = [
  { title: "Magyar Élő Építészet – Finisszázs", url: "https://orszagepito.net/videok/magyar-elo-epiteszet-finisszazs-beszamolo/" },
  { title: "Azt mondtad: Euritmia?", url: "https://phwi.hu/azt-mondtad-euritmia/" },
  { title: "Makovecz Imre: Mozgásforma kísérletek III.", url: "https://www.makovecz.hu/haz-kategoria/mozgasforma-kiserletek-iii/" },
  { title: "Bukaresti Rádió: Vizsgaelőadás beszámoló", url: "https://www.bukarestiradio.ro/2019/05/29/3-erdelyi-helyszinen-lathato-a-magyar-euritmia-kepzes-vegzos-hallgatoinak-vizsgaeloadasa/" },
  { title: "Videó: Euritmia előadás a Csengeyben", url: "https://youtu.be/tYZ5p6s09RA?si=9-GiKpBBb4q_xMZy" },
  { title: "Spotify: Szabadságra nevelés", url: "https://open.spotify.com/show/1KHPFXCuj060RQ5uMtwpkQ?si=BGYvSW7OTSq4xZG-k6y80w" },
  { title: "Országépítő: euritmia az iskolában", url: "https://epa.oszk.hu/02900/02952/00108/pdf/EPA02952_orszagepito_2011_01_28-29.pdf" },
  { title: "Országépítő: euritmia az óvodában", url: "https://epa.oszk.hu/02900/02952/00108/pdf/EPA02952_orszagepito_2011_01_26-27.pdf" },
  { title: "Videó: Waldorf Nap a Műcsarnokban", url: "https://youtu.be/4JZC5mNlExU?si=crsC6kC_jt3b8rlo" },
  { title: "Waldorf Nap a Műcsarnokban (PDF)", url: "https://waldorf-godollo.hu/wp-content/uploads/2019/02/Waldorf-Nap-a-Műcsarnokban.pdf" },
  { title: "Magyar Építőművészet: Euritmia", url: "https://meonline.hu/utoirat/euritmia/" }
];

export const HOME_ARTICLES = [
  {
    title: 'Gyógyeuritmia',
    content: `
        <p class="mb-4 text-justify leading-relaxed">A gyógyeuritmiát <strong>dr. Rudolf Steiner</strong> dolgozta ki 1921-ben. Az euritmián alapszik és lényeges alkotórésze az antropozófiai orvoslás rendszerének, amely mind a természettudományos, mind az antropozófiai-szellemtudományos ismereteket magában foglalja.</p>
        
        <p class="mb-6 text-justify leading-relaxed font-medium text-lg">A gyógyeuritmia célja, hogy segítsen a páciensnek mozgásba hozni saját öngyógyító erőit, hogy utat találjon saját egészségéhez.</p>

        <p class="mb-6 text-justify leading-relaxed">A gyógyeuritmia eszközei a <strong>mozgással megjelenített hangzók</strong>. A nyelv minden egyes hangzójának megvan a megfelelő mozgásformája, amelyeket a mássalhangzók esetében mint plasztikus formát, a magánhangzók esetében mint geometriai formát mindenekelőtt a karjával képez a felegyenesedett ember. Éppen így a zenei euritmia zenei elemei is átalakíthatók zenei gyógyeuritmiai gyakorlatokká.</p>

        <h4 class="font-serif text-2xl font-bold text-earth mt-10 mb-6">Hatásmechanizmusa</h4>
        
        <p class="mb-4 text-justify leading-relaxed">Az euritmia beszédhangzó és zenei hang mozdulatai a szervek képződési folyamatával és tevékenységével függenek össze. A gyógyeuritmiában ezeket a mozgásokat úgy alakítják át, hogy azok visszahatnak a mozgást végzőkre és élénkítik azokat az erőket, amelyek a szervezet kialakulásának és funkcióinak alapjául szolgálnak. Célzott terápiás eszközként alkalmazzuk őket, hogy élénkítsük azokat az egészséget támogató folyamatokat, amelyek az adott betegség ellenében hatnak.</p>
        
        <p class="mb-4 text-justify leading-relaxed">A gyógyeuritmiában a következő szempontok szerint módosítják az euritmiai hangzó mozdulatokat a terápiás hatás érdekében:</p>

        <ul class="list-disc list-outside space-y-3 mb-8 ml-6 marker:text-earth text-charcoal/90">
            <li>a terápiásan előírt (indiciált) hangzó vagy hangzók egymásutániságának (hangzósorok) ismételt mozgása</li>
            <li>a karmozgásokat <strong>specifikus lábmozgások</strong> kísérik. Ugrások, ritmusok és különböző tempók teszik lehetővé a fokozott beavatkozást az adott szervi funkciókba</li>
            <li>a gyakorlatok speciális felépítése által az időbeli térbelivé, a térbeli időbelivé alakul át</li>
            <li>önmagunk érzékelése a mozgásfolyamatban</li>
            <li>a gyakorlatok közötti szünetnek központi jelentősége van, épp úgy, mint a végén következő pihenésnek.</li>
        </ul>

        <p class="mb-6 text-justify leading-relaxed">Gyógyeuritmiai kezelés esetén olyan mozgássorokat alkalmazunk, amelyek speciálisan az adott kórképre és a páciens individuális alkatára szabottak és az előírt hangzó a gyógyeuritmiai megerősítés által olyan hatékony lehet, mint egy gyógyszer.</p>

        <p class="mb-6 text-justify leading-relaxed">Kiegészítésképpen euritmiai gyakorlatok is felhasználhatók, ha a gyógyeuritmista a terápiás cél támogatására alkalmazza őket.</p>

        <h4 class="font-serif text-2xl font-bold text-earth mt-10 mb-6">Indikáció, célcsoport</h4>
        
        <p class="mb-6 text-justify leading-relaxed">A gyógyeuritmia <strong>minden életkorban alkalmazható</strong> majdnem minden konstitucionális krónikus és akut megbetegedés esetén, többek között akut és degeneratív ideg-, anyagcsere-, szív és érrendszeri betegségek esetén, a pszichoszomatikában és a pszichiátriában, gyermekkori fejlődési zavarok, szempanaszok, fogszabályozási problémák, izombetegségek estén.</p>

        <h4 class="font-serif text-2xl font-bold text-earth mt-10 mb-6">Megvalósítás</h4>
        
        <p class="mb-4 text-justify leading-relaxed">A gyógyeuritmia rendszerint egyéni terápia orvosi rendelésre. Az individuális terápiás tervet a terapeuta állítja össze a páciens adott helyzetének megfelelően. Egy terápiás óra kb 30-60 percig tart. A páciens megtanulja a terápián a mozgásokat és mozgásfolyamatokat és önállóan rendszeresen tudja őket gyakorolni és alkalmazni. Rendszerint nem dolgoznak érintéssel. Speciális esetekben támogatják vagy vezetik a mozgásban a pácienst. A gyakorlatok a páciens állapotának megfelelően ülve és fekve is végezhetők. Arra törekszenek, hogy a páciens a gyakorlatokat integrálja a hétköznapjaiba és rendszeresen gyakorolja őket.</p>

        <h4 class="font-serif text-2xl font-bold text-earth mt-10 mb-6">Praxisok</h4>
        
        <p class="mb-6 text-justify leading-relaxed">A gyógyeuritmiát magán praxisokban, klinikákon, szanatóriumokban, idősek otthonában, gyógypedagógiai és szociálterápiai intézetekben, Waldorf iskolákban és óvodákban ajánlják.</p>

        <h4 class="font-serif text-2xl font-bold text-earth mt-10 mb-6">Képzés</h4>
        
        <p class="mb-4 text-justify leading-relaxed">A gyógyeuritmista képzés előfeltétele egy elismert diplomával zárult 4 éves euritmista alapképzés. Erre épülve kapcsolódik a másfél éves gyógyeuritmista képzés, amely a dornachi Goetheanum Szabad Szellemtudományi Főiskola Orvosi Szekciójának (Medinzinische Sektion der Freien Hochschule für Geisteswissenschaft am Goetheanum in Dornach) diplomájával zárul, és feljogosít a gyógyeuritmia gyakorlására és az Anthromed védjegy használatára. A világszerte létező képzések adatait a következő címen találják:</p>

        <a href="http://www.forumhe-medsektion.net" target="_blank" class="block mb-6 text-earth hover:text-earthDark font-bold hover:underline">www.forumhe-medsektion.net</a>

        <h4 class="font-serif text-2xl font-bold text-earth mt-10 mb-6">Anthromed</h4>

        <p class="mb-4 text-justify leading-relaxed">Az Anthromed közhasznú társaság azzal a céllal, hogy ezzel a védjeggyel biztosítsa és tovább fejlessze az antropozófiai orvoslás minőségét.</p>

        <a href="https://www.anthromed.org" target="_blank" class="block mb-6 text-earth hover:text-earthDark font-bold hover:underline">www.anthromed.org</a>

        <p class="mb-4 text-justify leading-relaxed">A védjegy minden gyógyeuritmista rendelkezésére áll, aki olyan elismert gyógyeuritmiai szakmai szövetséghez tartozik, amely szerződéssel kapcsolódik az Anthromed-hez. A következő nemzeti gyógyeuritmiai szakmai szövetségek kapcsolódtak ez idáig a védjegyhasználathoz: USA, Svédország, Olaszország, Németország, Hollandia, Ausztria, Magyarország, Svájc Anglia.</p>
        `,
    isList: false
  },
  {
    title: 'Artemisz Euritmia Színpad',
    content: `
        <p class="mb-6 text-justify leading-relaxed">Az <strong>Artemisz Euritmia Színpad</strong> nevét 2010-ben kapta. Az alkalmat egy zenetanárnő meghívása szülte, aki egy továbbképzésen ismerkedett meg az euritmiával, s ez olyannyira megtetszett neki, hogy mindenképpen szerette volna városában, Százhalombattán is megismertetni. Több mint fél évig készítette elő, hogy az előadás megfelelő, ünnepélyes kereteket kapjon. A helyi zeneiskola hét tanára vállalta az előadás kíséretét, akik feljártak hozzánk próbálni. Részletesen, közösen terveztük meg az előadást, a helyszínt, a függönyök, világítás stb. kérdéseit. Ez az áldozatos előkészítőmunka sok erőt adott nekünk is, hogy a nyári vakáció alatt is közösen készüljünk az előadásra, ami nagy közönség előtt aratott sikert. Mivel feltétlenül nevet is kellett adni a csoportunknak, akkor választottuk az Artemisz nevet.</p>

        <p class="mb-6 text-justify leading-relaxed">Artemisz templomában Ephesosban a születés misztériumának titkait a beszéd, a hangzók titkaival kapcsolták össze. Érdekes, hogy ugyanezen a helyen élt János evangélista is, aki az Ige, a Logosz erejét, mint mindenek kezdetét állítja elénk. Az euritmia mint látható beszéd és ének, új művészetként jelent meg a huszadik század elején, de gyökerei visszanyúlnak a régi templomi táncokig. Mindannyian örömmel fogadtuk az Artemisz nevet, és a névadás után valóban sokkal intenzívebben összekovácsolódott a csoport. A próbák intenzívebbek lettek, ma már hetente kétszer próbálunk, általában 4-5 órát. Egyre több meghívást is kaptunk, először csak Magyarországon, majd külföldön is.</p>

        <p class="mb-6 text-justify leading-relaxed">Mindannyian tanítás, munka mellett szakítunk időt a művészi munkára. Hogy miért csináljuk? Mert érezzük, hogy ez olyan forrás, ami a mindennapi munkánkba is lendületet, megújulást visz. A társulat legtöbb tagja több helyen is tanít, ketten az euritmiatanítás mellett osztálytanítóként is dolgoznak.</p>

        <p class="mb-6 text-justify leading-relaxed">Az Artemisz csoportban a különböző évfolyamokban végzettek és volt tanáraik együtt gyakorolnak, ami a stílus egysége, a közös nyelv mellett a különböző korosztályok inspiráló együttműködését is jelenti. Az élethelyzetek változása persze a csoport összetételét is változtatja, de a rendszeres gyakorlás, a repertoár kialakítása segít az újabbak beilleszkedésében, a régebbiek újra visszatalálásában. Egy-egy darab mint közös „kincs" élő valósággá válik, és gyorsabban befogadja az újonnan beugrót az üres helyre. A rendszeres közös munka az, ami átsegít bennünket a nehezebb időszakokon. Mindannyian érezzük, hogy a pattanásig feszített összpontosítás után, egy jól sikerült előadás után egyre erősebben összetartozunk. Külön öröm, hogy iskolánk három euritmistája együtt tud gyakorolni hetente két alkalommal iskolán kívül is.</p>

        <p class="mb-6 text-justify leading-relaxed">Az Artemisz Színpad munkájában nagyon nagy szerepet játszanak állandó művészi közreműködőink, zenészeink és versmondóink. A műsor kialakításában és kidolgozásában végig közösen dolgozunk, észrevételeikkel, odaadó játékukkal, magas művészi színvonalukkal ösztönzően hatnak gyakorlásainkra, és előadásaink sikeréhez nagyban hozzájárulnak.</p>

        <p class="mb-6 text-justify leading-relaxed">A Pesthidegkúti Waldorf Iskola a kezdetektől fogva nagyon sokat jelentett az euritmia magyarországi életében. Itt folytak az euritmiaképzés első évei, minden vizsgaelőadás, az ünnepek. A karácsonyi bazárokon rendszeresen léptek fel a tanárokon kívül a különböző évfolyamok hallgatói is. 2013-ban a képzés 21. születésnapját ünnepeltük. Ez a felnőtté válás életkora, s valóban, a rigai jubileumi ünnepet júniusban a végzett euritmisták előadásai mellett több Waldorf-iskola általuk tanított tanulóinak gazdag programú bemutatója is követte. A Goethe-mese előadásában együtt is felléptek tanárok és gyerekek. És talán mindenki emlékszik a gyönyörű plakátunkra is, amelynek festményét itt még egyszer szeretnénk megköszönni Klenovicsné Papp Juditnak!</p>

        <div class="mt-8 text-right font-serif text-sm text-charcoal/60">
            Írta: <span class="font-bold text-charcoal">Scheily Mária</span>
        </div>
        `,
    isList: false
  },
  {
    title: 'Száz éves az euritmia',
    content: `
        <p class="mb-6 text-justify leading-relaxed font-medium text-lg">Éppen száz évvel ezelőtt, 1912-ben született meg egy új mozgásművészet, az euritmia, amelyet Rudolf Steiner az első Goetheanum építésével párhuzamosan dolgozott ki.</p>

        <p class="mb-6 text-justify leading-relaxed">A 18 éves Lory – Maier Smits valamilyen ritmikus táncot keresett és édesanyja Rudolf Steiner tanácsát kérte, aki mintha várta volna a kérdést, azonnal segítséget nyújtott, és megkezdődött az antropozófiai emberképet alapul vevő, szellemtudományos alapokon nyugvó új mozgásművészet kidolgozása.</p>

        <h4 class="font-serif text-2xl font-bold text-earth mt-10 mb-6">A Ritmus és az Élet</h4>

        <p class="mb-4 text-justify leading-relaxed">Nevét Marie Steiner találta ki: <strong>„euritmia"</strong>, amely görög szóból származik és jó, szép, harmonikus ritmust jelent. Ezzel a legfontosabb elemét megneveztük: jó ritmus. Mi is a ritmus? Két pólus közötti állandó, áramló mozgás, az élet maga. Ahol élet van, ott felfedezhetjük a ritmust.</p>

        <p class="mb-4 text-justify leading-relaxed">Egész létünk polaritások közötti egyensúly – keresésben, polaritások közötti átmenetekben zajlik. Gondolhatunk itt az éjszaka – nappal, a tél – nyár, a gravitáció összehúzó ereje – a fény kiáradó, végtelenbe törekvő lénye, a pont és periféria, összehúzódás – kiterjedés ellentétes minőségeire. Beszélhetünk a kozmikus világrend ritmusairól, a bolygók mozgásairól. Ritmusokat találunk a növények és minden élő állat növekedésében, vagy az embrió fejlődésében.</p>

        <p class="mb-4 text-justify leading-relaxed">Az emberi alakban is megfigyelhető a kettősség: a fej gömbölyű, a végtagok egyenesek. Közbül a mellkas, a bordák ritmusa, fent még a gömbölyűséghez kapcsolódva, az alsó bordák az egyeneshez közelítve. A fejhez kapcsolható ideg-érzékszervi rendszer és a végtagokhoz köthető anyagcsere-végtagrendszer között él a ritmikus rendszer, a légzés, a vérkeringés és a szív, az emberhez legközebb álló ritmusok. Milyen fontos, hogy a szívritmus rendben legyen, hogy a be- és kilégzés egyensúlyban legyen! Fizikai testünk az anyagiságig megsűrűsödik, szellemi lényünk kitágul, szabadon szárnyal. A polaritások közötti egyensúlyt a harmonikus, áramló ritmust kell állandóan megtalálnunk.</p>

        <div class="p-8 bg-[#E6DBCF] rounded-3xl my-8 shadow-sm">
            <p class="italic text-center text-charcoal/90 leading-relaxed font-serif">"Ha bármelyik irányba eltolódunk, ha az áramlás nem megfelelő, ha szív, a keringés, az egész ritmikus rendszer nem tudja az egyensúlyt tartani, ha elveszítjük a harmóniát a világ nagy ritmusaival, megbetegszünk."</p>
        </div>

        <p class="mb-6 text-justify leading-relaxed">Nagyon fontos tehát az egészséges élethez a jó ritmus megtalálása, ápolása. Mai világunk nagyon eltávolodott a természet ritmusaitól, nagyvárosi létünk ritmustalanságai igen ártalmasak. Az euritmiával lényegében a jó ritmust, az egyensúlyt keressük, a szíverőket ápoljuk, ezáltal segítséget kaphatunk a sok ritmustalanság kiegyenlítésére.</p>

        <p class="mb-6 text-justify leading-relaxed">Ezt az egyensúlyt, ezt a szép ritmust fedezhetjük fel a görög szobrok, reliefek megformálásánál, éppen ezért adta első feladatként Rudolf Steiner a görög szobrok megfigyelését, tanulmányozását.</p>

        <h4 class="font-serif text-2xl font-bold text-earth mt-10 mb-6">A Lélegzés Ritmusai</h4>

        <p class="mb-6 text-justify leading-relaxed">Az emberhez legközelebb álló ritmus a lélegzés. A levegő mindenkié, a Föld körül áramlik, kavarog. Gondoljuk el, hogy milyen mozgásokat végez, miközben viharokkal, szelekkel, hatalmas légáramlatokkal eljut egyik földrészről a másikra, felmelegszik, felemelkedik, majd lehűlve leereszkedik, időjárási frontokat hoz létre, változó légnyomással az emberek közérzetét befolyásolja. Ebből a levegőből minden lélegzetvétellel egy kis időre kiszakítok egy darabot, majd saját lényemmel átszínezve visszaadom a közös levegőtengernek.</p>

        <p class="mb-6 text-justify leading-relaxed">Ha beszélek, belső lényem lelki –szellemi lényegéből közvetítek valamit, közlök valamit, gondolatot fogalmazok meg, amely nem a fizikai világból származik. A tüdőmből kiáradó levegőnek, a hangképző szervek segítségével, saját ritmust közvetítek, megformálom, megrezgetem, a fizikai világ törvényeinek alávetem. A levegő rezgései, a megformált szó ritmusa egy másik ember füléhez jut, még mindig a fizikai világ törvényei szerint létrehozza a fülben a hangot, majd az ember ezt megértve, újra gondolattá változtatja, visszaviszi a tisztán szellemi világba.</p>

        <h4 class="font-serif text-2xl font-bold text-earth mt-10 mb-6">Látható Beszéd és Ének</h4>

        <p class="mb-6 text-justify leading-relaxed">Rudolf Steiner teljesen a goethei értelemben vett metamorfózissal a hallható beszédet és éneket átalakította látható beszéddé és énekké, így az emberi test, elsősorban a karok mozgásai az emberi gégének megfelelő mozgások. A mozdulatok nem önkényesek, hanem egy magasabb törvényszerűség, az élő világ törvényszerűségei szerinti mozgások. Az euritmia által a fizikai világban láthatóvá lesznek az élet áramló világának objektív törvényei, hiszen a beszéd egy élő folyamat. A hangzó világ, a ritmus időbelisége egy metamorfózis révén átkerül a térbe és láthatóvá válik. A gondolat, megragadva az érzésvilágot, az éteri törvények szerint mozdítja a fizikait és így jut el egészen az akaratba. Mindehhez az én teremti meg a teret és ő az, aki összefogja, kíséri a folyamatot. A teljes emberhez szól, a teljes ember szükséges a látható beszéd létrehozásához.</p>

        <p class="mb-6 text-justify leading-relaxed">Az egyes ember mozgása olyan, akár az egyes ember beszéde, vagy éneke, a csoportok mozgásával láthatóvá válnak az egymáshoz képest átélhető viszonyok, a különböző hangszínek, a zenében a hangszerek kapcsolatai, a versekben a belső összefüggések.</p>

        <p class="mb-6 text-justify leading-relaxed">Az euritmia gyakorlása érzékennyé tesz a világban lévő, élő folyamatok, a ritmusok észlelésére, az élő, formaképző erők, mozgások megfigyelésére, a természetben megtalálható mozgások észlelésére, ugyanakkor a versekben, zenékben fellelhető belső mozdulatok megtalálására.</p>

        <h4 class="font-serif text-2xl font-bold text-earth mt-10 mb-6">Pedagógia, Szociális Művészet és Terápia</h4>

        <p class="mb-6 text-justify leading-relaxed">Éppen ezért a színpadi, művészi euritmia mellett nagy szerepe van a <strong>pedagógiai euritmiának</strong>, amely a gyermekek életkorának megfelelő gyakorlatokkal segíti a gyermekeket megérkezni a saját testükbe, segíti őket, hogy felnőttként harmóniába lehessen a test, lélek, szellem. Segíti őket a koncentrációs képességek növelésében, a finommotorika fejlődésében, a térbeli orientációban, a megfelelő testérzetben. Fejlődik a belső mozgékonyságuk, a szociális képességük és sorolhatnánk itt még sokáig az euritmia segítő, harmonizáló hatásait.</p>

        <p class="mb-6 text-justify leading-relaxed">Az euritmia egy szociális művészet, hiszen legtöbbször közösen hozunk létre egy formát, minden ember része egy nagy egésznek, a saját térformáját, mozgását a többiekével össze kell, hogy hangolja. Éppen ezért nagy lehetőségek vannak a munkahelyeken történő közös euritmiában, hiszen általa láthatóvá tehetők a szociális élet bizonyos folyamatai, mozdulatai, egymást másként ismerik meg az együtt dolgozók, belső folyamatok indulnak el, amelyek segíthetik a problémák megoldását.</p>

        <p class="mb-6 text-justify leading-relaxed">Nagyon fontos ága az euritmiának a gyógyeuritmia, amelynek gyakorlatai által a szervezetben megbomlott egyensúlyt segíthetünk visszaállítani, nagyon finom terápiával támogatni a harmónia létrejöttét.</p>

        <p class="mb-6 text-justify leading-relaxed">Rendkívül sok lehetőség rejlik még az euritmiában, és tudni kell, hogy még fejlődése kezdetén áll. Száz éve Rudolf Steiner lehozott egy magot, mintegy csíraállapotban elindította fejlődési útján az euritmiát, de egy művészet kialakulásában száz év nem hosszú idő. Gondoljuk csak el a zene, a képzőművészetek, az építészet milyen nagy múltra tekinthet vissza! Az euritmia még nem nőtt ki a gyermekcipőből, még sokáig szüksége van az őt körülölelő, szeretetteljes burokra, az euritmisták alázattal teli, sok gyakorlással járó kereső útjára, amely csak a támogató közönséggel együtt segítheti egészséges fejlődésében.</p>

        <div class="mt-8 text-center text-xs text-charcoal/50 uppercase tracking-widest">
            Megjelent a „Michaeliták" című újság 38. számában (2012 János nap)
        </div>
        `,
    isList: false
  },
  {
    title: 'Testből font jelbeszéd',
    content: `
        <div class="mb-8 text-center font-serif italic text-charcoal/60">
            Részletek S. Pintye Mária: „Testből font jelbeszéd" c. írásából
        </div>

        <p class="mb-6 text-justify leading-relaxed">Az euritmia egyfajta mozgásművészet. Maga a szó görög eredetű, jelentése jó, szép ritmus. Rudolf Steiner az 1910-es években indította útjára, s azóta művészeti, pedagógiai és gyógyító ága egyaránt termékeny. Főleg Nyugat-Európában, de az amerikai kontinensen is működnek 4 éves művészeti főiskolák, s az itt diplomázott euritmisták a művészeti munka mellett Waldorf-iskolákban tanítanak, ahol óvodától 12. osztályig szerepel a tantervben euritmia óra. Kórházakban, gyógypedagógiai intézetekben gyógyeuritmisták dolgozznak, akik az orvosokkal együttműködve számos betegséget képesek hatékonyan kezelni.</p>

        <h4 class="font-serif text-2xl font-bold text-earth mt-10 mb-6">A Ritmus Lényege</h4>

        <p class="mb-6 text-justify leading-relaxed">A ritmus lényege talán a mérleg működésével szemléltethető, mely a pólusok között ide-oda lengve az egyensúlyt keresi. Az egyensúly sohasem statikus – és ahogy a mérleg nyelvén is megfigyelhető – igen érzékeny a változásokra, s csak ritmikusan tartható fenn. Az életnek ezt a ritmikus egyensúlyát éljük meg egészségként.</p>

        <p class="mb-6 text-justify leading-relaxed">Születésünktől fogva tér- és időbeli ritmusok alakulnak bennünk, a környezetünkkel való egyensúlyt keresve. A térben életünk két erőteljes pólus között pulzál: egyik oldalon a Föld nehézségi ereje: ahol minden anyagivá, súlyossá, mérhetővé válik, a másik oldalon pedig az az erő áll, mely felegyenesedésünket lehetővé teszi: a fény, a szellem szárnyalása, mely súlytalan és láthatatlan. E két, látszólag ellentétes erőt nekünk kell magunkban kibékítenünk és egyensúlyba hoznunk.</p>

        <div class="p-8 bg-[#E6DBCF] rounded-3xl my-10 shadow-sm text-center">
            <p class="font-serif text-xl text-charcoal mb-2 italic">"Mindent mozgat a Nap, a csillag tőle táncol,</p>
            <p class="font-serif text-xl text-charcoal italic">ha nem mozogsz te is, az egészből hiányzol."</p>
        </div>

        <p class="mb-6 text-justify leading-relaxed">Az egész világmindenséget ritmusok járják át. A csillagok, a Nap, a Föld, mind meghatározott törvények szerint mozognak a térben, s ez a Földön mint időbeli ritmus jelenik meg. Ilyen például a napszakok és az évszakok váltakozása, mely döntőleg meghatározza egész életünket. Számtalan vizsgálat igazolta, hogy e makrokozmikus ritmusok hogyan mutatkoznak meg a vér körforgásában, szerveink pulzálásában, működésében.</p>

        <p class="mb-6 text-justify leading-relaxed">Ha nem mozdulsz, nem tartozol a világmindenséghez, mondja Angelius Silesius. Ha valamely két pólus között nem tudjuk fenntartani az egyensúlyt, megbetegszünk. Ezek lehetnek testi, lelki, vagy akár szellemi betegségek is.</p>

        <p class="mb-6 text-justify leading-relaxed">Nagyon lényeges tehát, hogy a megfelelő dinamikus egyensúlyt, vagyis a ritmust gondozzuk, és a kisgyermeknél segítsük kialakulását is. Ez az egyik legfontosabb feladata az euritmiának, mely nem megszerkesztett, kigondolt mozdulatokkal dolgozik, hanem olyan fölénk rendelt mozgástörvényeket igyekszik megjeleníteni, melyek az egész teremtett világot áthatják, s az emberi organizmusban sűrűsödnek össze.</p>

        <p class="mb-6 text-justify leading-relaxed">Az euritmia nem pusztán testgyakorlat, mint a torna, de nem is tánc. Persze mondhatná bárki, ez olyan mint egy tornagyakorlat, mozdulatok egymásutánját végezzük, mi a különbség? Ha megfigyeljük a kétféle mozzanatot: a torna egy automatizált, a külső forma felől az én felé törekvő mozdulat. Az euritmia éppen fordítva: énnel, lélekkel teli testi kifejezésformát öltő belső mozdulat. Ha kisgyermekeket látunk euritmiázni rögtön nyilvánvaló lesz, mennyire a belső tartalom igyekszik a test segítségével utat törni magának, mert a formailag tökéletlen mozdulatot is olyan erővel élik át, hogy kifejezővé válik. Az euritmia tehát arra törekszik, hogy egy-egy mozdulatban test, lélek, szellem egyaránt részt vegyen, s átélje az individuumot – mely eredeti értelmében oszthatatlant jelent –, a világmindenség és az ember egységét. Hogy az akarat, érzés, gondolat egymást átjárva harmonikus egyensúlyt alakíthasson ki bennünk. Ezért képes az euritmia túl intellektualizált, indulati kitörésektől terhes, testet kizsákmányoló világunkban – ahol a test-lélek-szellem egyensúlyát könnyen elveszíthetjük – eredményesen gyógyítani.</p>

        <p class="mb-6 text-justify leading-relaxed">A teremtésben egyedül az ember kapta ajándékba azt a képességet, hogy ki tud fejezni minden benne tükröződő makrokozmikus ritmust, a legegyszerűbbet és a legbonyolultabbat egyaránt. Ez a beszéd képessége. A körülöttünk és bennünk lévő világot nem csak a beszéd gondolati tartalma képes feltárni, hanem maga a beszédképzés is egy csoda. A gégében és a toldalékcsőben számos parányi izmocska térben és időben összesűrítve hozza létre, teremti újra ezeket az örök érvényű ritmusokat. Így az ember nem csak része ennek a kozmikus együtthangzásnak, hanem önálló, teremtő lényként is megnyilatkozik benne: personare annyit jelent: keresztülhangzani.</p>

        <p class="mb-6 text-justify leading-relaxed">Minden mozgásforma, ritmus, melyet testünk létre tud hozni a beszédszervekben is létrehozható, újrateremthető. A korai görög kultúrákban a beszédhangoknak külön neve és jelentése volt. Az ABC minden hangja egy-egy fogalmat fejezett ki az emberről: Alfa annyit jelentett, „a saját lélegzését érző", Béta olyasmit, mint „az ember a saját házában" (burkában, bőrében). Ezt tudva jobban megérthetjük, hogy ebben az időben egyes gyógyhelyeken kiegészítő terápiaként különböző hangzókat mondattak a pácienssel, vagy a páciensnek. A görög-latin kor fordulóján ez a tudás feledésbemerült. A nyelv egyre intellektuálisabbá lett, mindennapi beszédünkben is többnyire elvont fogalmakat használunk és nem képeket.</p>

        <p class="mb-6 text-justify leading-relaxed">Az euritmia feladata, hogy gondozza a nyelv képekben való látásának képességét, s így könnyebben vezesse át a gyermeket egy-egy tárgyról alkotott képek sorozatán át az élő fogalmak kialakulásáig, megértéséig, kiszabadítva a gyermek testéből a hangzók ősképeit, s ezáltal megadva neki a kifejezés örömét. A felnőttnek pedig segítséget nyújt az euritmia ahhoz, hogy hogyan érti meg a nyelvet a gyermek.</p>

        <p class="mb-6 text-justify leading-relaxed">Az euritmia gyakorlatilag láthatóvá teszi a beszédet úgy, hogy a beszédképzés parányi, de összetett mozgásait kibontja, s az egész test mozgásává nagyítja. Főleg a karok és a felső test képesek ezek kifejezésére. Így minden hangzónak van egy testtel kifejezhető alapmozdulata, mely nem önkényesen jött létre, hanem attól függően, hogy abban a hangzóban milyen képi tartalom sűrűsödött össze korábban, valamint milyenek a hang képzésének karakterjegyei.</p>

        <p class="mb-6 text-justify leading-relaxed">Így például a magánhangzókat akadálytalanul árasztják ki a karok, ezek inkább a beszéd lelki tartalmát közvetítik, mint ahogy az egy hangból álló indulatszavak is többnyire magánhangzók: O, Á, U stb.</p>

        <p class="mb-6 text-justify leading-relaxed">A mássalhangzók inkább a lélek külvilágra való reagálását tükrözik. Egy réshang folyamatos mozgású, pl.: „fff", míg egy zárhang egy erőteljesebb indító mozdulat után egy pillanatra megmerevedő formát mutat, pl.: „b". A zárrés hangok e kettő ötvözetét adják, inkább szakaszos mozdulatokból állnak.</p>

        <p class="mb-6 text-justify leading-relaxed">Sokszor találunk euritmikus mozdulatokat akaratlan taglejtéseink között is. A legtöbbet használt a védekezés mozdulata, amely leginkább az „é" hangzó mozdulatképére hasonlít. Jelentése így foglalható össze: megérintett a külvilág, védekezem ellene. Mozgás közben a karok ugyanúgy a levegőt mozdítják, formálják, mint ahogyan a toldalékcső is a gégéből kiáramló levegőt formálja akadályokat gördítve elébe. Az ember nem is gondolná, hogy milyen pregnánsak ezek a levegőformák, melyek a hang kiejtésekor megjelennek. Jól látható, hogy a magánhangzókat egy erősen körülhatárolt forma hordozja, a zárhangzóknál pedig a forma épp akkor jelenik csak meg, ha a képzés utolsó mozzanatát is befejeztük. Ezeknek a hangzóknak az euritmikus mozdulatai is hasonló érzetet keltenek. Mondhatni áthatóan megjelenítik egy beszédhangzó levegőnyomatát.</p>

        <p class="mb-6 text-justify leading-relaxed">Így az euritmia segítségével megkönnyíthetjük a fonematikus hallás kifejlődését is, az egyes hangok karakterjegyeinek jobb megkülönböztetését. Hiszen kiejtésben elenyésző az eltérés a hasonló alakú szavak között, a nagy mozgások mintegy felnagyítják, s a gyermek számára láthatóvá teszik ezeket a különbségeket, egy-egy szó jelentése pedig új ismeretekkel egészülhet ki, ha mozgásunkkal eljátsszuk sorban hangzóinak tartalmát és karaktereit.</p>

        <h4 class="font-serif text-2xl font-bold text-earth mt-12 mb-8 uppercase tracking-wide">Összefoglaló áttekintés</h4>
        <p class="mb-6 italic text-charcoal/70">Az alábbiakban összefoglaljuk, hogy a készségfejlesztés mely területein képes hatásosan közreműködni az euritmia, annak ellenére, hogy szinte kizárólag indirekt módon fejleszt:</p>

        <div class="space-y-10">
            <div>
                <h5 class="font-serif text-xl font-bold text-charcoal mb-4">Élettani hatása</h5>
                <ul class="list-disc list-outside ml-5 space-y-2 text-charcoal/90 marker:text-earth">
                    <li>javítja az izomtónus-szabályozást;</li>
                    <li>élénkíti az anyagcsere-folyamatokat (az anyagcsererendszerben van a legnagyobb szerepe a ritmusoknak).</li>
                </ul>
            </div>

            <div>
                <h5 class="font-serif text-xl font-bold text-charcoal mb-4">A beszédhez, olvasás-előkészítéshez kapcsolódó készségek</h5>
                <ul class="list-disc list-outside ml-5 space-y-2 text-charcoal/90 marker:text-earth">
                    <li>kialakítja, fejleszti az utánzókészséget;</li>
                    <li>segíti a testséma kialakulását,</li>
                    <li>fejleszti a térbeli tájékozódást;</li>
                    <li>javítja a mozgáskoordinációt;</li>
                    <li>segít a harmonikus mozgás- és beszédritmus kialakításában;</li>
                    <li>segíti a fonematikus hallás kialakulását;</li>
                    <li>kialakítja a beszédfigyelmet;</li>
                    <li>elősegíti a mozgás és a beszéd szeriális felépítését (hagok, szavak helye, egymásutánisága);</li>
                    <li>hozzájárul a beszédértés fejlődéséhez, élő fogalma kialakulásához;</li>
                    <li>segít a szókincs megtartásában, mobilizálásában;</li>
                    <li>segít a belső beszéd rendezésében.</li>
                </ul>
            </div>

            <div>
                <h5 class="font-serif text-xl font-bold text-charcoal mb-4">Lelki hatások</h5>
                <ul class="list-disc list-outside ml-5 space-y-2 text-charcoal/90 marker:text-earth">
                    <li>a mozgás által oldódnak a gátlások, erősebb mozdulatokba beleoldódik az agresszió;</li>
                    <li>a test átjárhatóvá válik a lélek számára, megteremtődik a kettő egyensúlya;</li>
                    <li>a nem beszélő gyermekek is úgy érzik ki tudják fejezni magukat;</li>
                    <li>az apatikus, kevéssé érdeklődő gyermeket felélénkíti az euritmia;</li>
                    <li>a hipermotilis gyermek lelki feszültségei a testtel végzett mozgásokba tevődnek át, megnyugszik. (Neki még az is fontos, hogy a foglalkozások ritmusosan ismétlődjenek egy héten belül, mert a rendezettség, a ritmusok betartása hat rá;</li>
                    <li>fejleszti a szociabilitást, az egymásra való odafigyelést;</li>
                    <li>elősegíti az én erősödését, az önkontroll kialakulását.</li>
                </ul>
            </div>

            <div>
                <h5 class="font-serif text-xl font-bold text-charcoal mb-4">Hatása a kognitív funkciókra</h5>
                <ul class="list-disc list-outside ml-5 space-y-2 text-charcoal/90 marker:text-earth">
                    <li>fejleszti a figyelem tartósságát;</li>
                    <li>fejleszti a vizuális és a verbális emlékezőkészséget;</li>
                    <li>serkenti az észlelési folyamatokat, főleg a kinesztéziát, a hallást és a látást;</li>
                    <li>elősegíti az összefüggések felismerését;</li>
                    <li>szerepet játszik a gondolatritmusok kialakulásában.</li>
                </ul>
            </div>
        </div>

        <div class="mt-12 p-6 bg-earth/5 rounded-xl">
             <h5 class="font-serif text-lg font-bold text-charcoal mb-3 text-center">Ahol az euritmiáról még olvasni lehet</h5>
             <ul class="text-sm text-charcoal/70 space-y-2 text-center">
                <li>Steiner, Rudolf: Eurythmie als sichtbare Sprache. Rudolf Steiner Verlag, Dornach, 1986.</li>
                <li>Steiner, Rudolf: Eurythmie, die neue Bewegungskunst der Gegenwart. Rudolf Steiner Verlag, Dornach, 1986.</li>
                <li>Dubach –Donath, Annamarie: Grundelemente der Eurythmie. Rudolf Steiner Verlag, Dornach 1981.</li>
                <li>Rudolf Steiner: A pedagógia általános embertani alapjai. A Waldorf-pedagógiai továbbképző tanfolyam kézirata.</li>
                <li>Karl König: A gyermek első három éve</li>
                <li>Vekerdy Tamás: A Waldorf-iskola első három évének programjáról. A Török Sándor Alapítvány és az OKI kiadása, Budapest, 1990.</li>
                <li>Frans Calgren: Szabadságra nevelés. Török Sándor Alapítvány kiadása, Budapest,1992.</li>
             </ul>
        </div>

        <div class="mt-8 text-center text-xs text-charcoal/50 uppercase tracking-widest">
            Felnőttképzést folytató intézmény nyilvántartási száma: 01-0684-05.
        </div>
        `,
    isList: false
  },
  {
    title: 'Euritmia – Látható beszéd és ének',
    content: `
        <div class="flex flex-col items-center justify-center space-y-8 my-8">
            <div class="text-center">
                <p class="font-serif italic text-xl text-charcoal mb-2">"Mennyi csodát rejt, s hányat bont ki a csönd meg a mozgás"</p>
                <p class="font-sans text-sm font-bold text-earth uppercase tracking-widest">Weöres Sándor</p>
            </div>

            <div class="w-24 h-px bg-earth/30"></div>

            <div class="text-center max-w-lg">
                <p class="font-serif italic text-lg text-charcoal/90 leading-relaxed">"Oly csend, amely a fényből éled<br/>S csendülve alkot dallamot,<br/>Oly csend hirdesse: sose téved<br/>A változó alakzatok<br/>Sodrában aki nem mulandó Formákon tiszta szemmel ámul:<br/>Mivel az üdvösség honát<br/>Örök ámulat hatja át."</p>
                <p class="font-sans text-sm font-bold text-earth uppercase tracking-widest mt-4">Mezei Balázs</p>
            </div>
        </div>

        <p class="mb-6 text-justify leading-relaxed">Ezeket a gyönyörű versrészleteket olvasva azt gondoltam: a tiszta gyermeki rácsodálkozás nyit egyedül utat az euritmiához, a látható beszédhez és énekhez. A mozdulatban szinte eggyé válunk a beszédben, énekben működő teremtőerőkkel. Egy gondolat időtlenül jelenik meg tudatunkban, mégis, mint gombolyagból a szál, hosszan kibomlik, a beszéd szobrásza által levegőből és hangból, plasztikusan és ritmikusan megformálva jön át az idő s tér világába. Így válik a másik ember számára is érzékelhetővé hallhatóvá, ám a levegő természete miatt láthatatlanná. A levegőt formáló mozgások, a gége mozgásai számunkra rejtve maradnak. Tudatosan nem is igazán irányíthatóak. Kisgyermekként utánzással sajátítjuk el őket – míg az éneket kicsit később, ki gyorsabban, ki lassabban, ki csak alig.</p>
        
        <div class="my-10 text-center">
            <h4 class="font-serif text-2xl font-bold mb-2 text-charcoal">Az Euritmia</h4>
            <p class="italic text-charcoal/80 font-serif mb-6">(görög szó, a.m. jó, szép ritmus)</p>
            <p class="leading-relaxed text-charcoal/90">A beszéd, ének mozgásait az egész test lélekkel áthatott, tudatosan irányított mozgásával fejezi ki.</p>
        </div>

        <div class="text-center my-10">
            <p class="font-serif italic text-xl text-charcoal mb-2">"Aki a szót megragadja<br/>Sugarát is ragyogtatja<br/>Árnyékát is megmutatja."</p>
            <p class="font-sans text-sm font-bold text-earth uppercase tracking-widest mt-2">Weöres Sándor</p>
        </div>

        <p class="mb-6 text-justify leading-relaxed">A beszéd és az ének legnemesebb emberi megnyilvánulásainkhoz tartoznak. Az euritmia belső imaginációinkat a test mozgásával teszi át a látható térbe, mesék, versek, zeneművek csoportos vagy egyéni koreográfiája által. 
        Ha saját élményként, aktívan végezzük ezeket a mozgásokat, a poétikus megformálás – egy-egy vers ritmusa, képei, plasztikája – egész testünk lélekkel áthatott mozgásában válik olyan szinten átélhetővé, ami csak a kisgyermeki érzékelésre jellemző. 
        A mozgás, a tánc ezt a gyermeket ébresztgeti, amikor pl. egy alkaioszi, szapphói versstrófát, egy ballada drámaiságát, egy alliteráció serkentő erejét a mozgásban átéljük. A zenei alapelemeket: a dallamvonal, ritmus, ütem, hangközök, hangnemek titkait karunk énekével, mozgásunk lélegzésével visszük át a térbe.</p>

        <div class="text-center my-10">
            <p class="font-serif italic text-xl text-charcoal mb-2">"Testből font jelbeszéd<br/>Tölti a csarnok holt terét<br/>Éled a föld nehéz pora<br/>Felveri lábak halk dobaja."</p>
            <p class="font-sans text-sm font-bold text-earth uppercase tracking-widest mt-2">Weöres Sándor</p>
        </div>

        <p class="mb-6 text-justify leading-relaxed">Az euritmiában rejlő pedagógiai lehetőségek igen gazdagok. A ritmusérzék, a térbeli tájékozódás, a testkoordináció fejlődésével játékosan be is vezet a költészet és a zene világába. A levegő áradását megjelenítő mozgások valóban lélekkel hatják át, lélegzővé, elevenebbé, a személyiség kifejezőjévé teszik az egész emberi testet.</p>

        <div class="text-center my-10">
             <p class="font-serif italic text-xl text-charcoal mb-2">"Testből, melynek nyűge átok<br/>Nyílnak testtelen virágok.<br/>S az iszapos húson látod<br/>Felragyogni a valóságot."</p>
             <p class="font-sans text-sm font-bold text-earth uppercase tracking-widest mt-2">Weöres Sándor</p>
        </div>
        `,
    isList: false
  }
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  { time: '9:30–9:45', description: 'érkezés' },
  { time: '9:45–10:00', description: 'napindító közös euritmia' },
  { time: '10:00–11:00', description: '1. workshop 4 csoportban' },
  { time: '11:00–11:15', description: 'szünet' },
  { time: '11:15–12:00', description: '2. workshop új csoportban' },
  { time: '12:00–13:00', description: 'ebéd' },
  { time: '13:00–13:45', description: '3. workshop – felkészülés a közös részre' },
  { time: '13:45–14:15', description: 'szünet' },
  { time: '14:15–15:00', description: 'közös euritmia az új csarnokban' },
  { time: '15:00–15:30', description: 'kávészünet' },
  { time: '15:30–16:15', description: 'Sósné Pintye Mária előadása' },
  { time: '16:30–17:30', description: 'Harmath Judit workshopja' },
  { time: '18:00–20:00', description: 'Artemisz Euritmia Színpad előadása' },
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Ritmusok az euritmiában',
    subtitle: 'Műhelymunka Cserháti Kati vezetésével',
    excerpt: 'Ahogy a világegyetemet ritmusok mozgatják, járják át, úgy az ember lényét is ritmusok veszik körül, szövik át, éltetik. A makro- és mikrokozmikus ritmusok egymásba fonódnak, összekapcsolódnak.',
    content: 'Az eu-ritmia (görögül: jó ritmus) világában a ritmusok központi szerepet játszanak. A rövid-hosszú polaritásából indulunk el, átéljük az ezekből felépülő két alap versláb (jambus-trocheus) minőségét, különbözőségét, hatását eljutva a hexameterig.'
  },
  {
    id: '2',
    title: 'A színek',
    subtitle: 'Műhelymunka Kálmán Zsófia és Polgár Zsuzsa vezetésével',
    excerpt: 'Néhány ráhangoló gyakorlat után megismerkedünk a színek euritmiai megjelenítésével.',
    content: 'Közösen és kis csoportokban dolgozunk majd. A mozdulatok segítségével mélyen átélhetik a résztvevők a színek világát, azok lelki hatásait és formáló erejét.'
  },
  {
    id: '3',
    title: 'Zeneeuritmia',
    subtitle: 'Műhelymunka Balogh Orsolya vezetésével',
    excerpt: 'A felépítő és magunkat egyensúlyba hozó euritmiai gyakorlatokon kívül, melyeket élőzenére végzünk, megismerkedünk a zene alapelemeivel.',
    content: 'Azokat testben, a térben közösen átélve megtapasztaljuk a zenei euritmia jótékony, harmonizáló hatását. A zene láthatóvá tétele által közelebb kerülünk a zenei művek belső tartalmához.'
  },
  {
    id: '4',
    title: 'Köztes tér – „Mi hat közöttünk?”',
    subtitle: 'Szociális euritmia Czakó Anikóval',
    excerpt: 'Miként változik a közöttünk áramló tér, ha együtt euritmiázunk? A műhelymunka során megtapasztalhatjuk a „köztes tér” plasztikáját.',
    content: 'Ember és ember, ember és a finomabb terek lényei között, mindezt a költészet és a zene segítségével vizsgáljuk. A szociális euritmia segít érzékelni a közösségi dinamikákat és harmonizálni azokat.'
  },
  {
    id: '5',
    title: 'Teremtő erő',
    subtitle: 'Műhelymunka Harmath Judit vezetésével',
    excerpt: 'Az euritmia, mint egyéni és közösségi megismerési út. A csoportos mozgás, teremtő erő.',
    content: 'A mozdulat, mint ima. Hogyan válik a belső szándék külső formává, és hogyan hat vissza a forma a belsőre? Ezt a dinamikát kutatjuk a közös mozgásban.'
  },
  {
    id: '6',
    title: 'Sósné Pintye Mária előadása',
    subtitle: 'Bio karate? Waldorf-jóga? Jogosítvány-előkészítő?',
    excerpt: 'Az euritmia hatása a testre, a lélekre és a szellemre.',
    content: 'Egy átfogó előadás az euritmia pedagógiai és fejlesztő hatásairól, tévhitek tisztázása és a mozgásművészet valódi mélységeinek feltárása.'
  }
];

export const GALLERY_YEARS: GalleryYear[] = [
  {
    id: '2025',
    year: 2025,
    title: '2025-ös előadások',
    coverImage: '/EuritmiaHon/gallery/2025/DSC03954.jpg',
    fullGallery: [
      '/EuritmiaHon/gallery/2025/DSC03954.jpg',
      '/EuritmiaHon/gallery/2025/DSC04324.jpg',
      '/EuritmiaHon/gallery/2025/DSC04357.jpg',
      '/EuritmiaHon/gallery/2025/DSC04451.jpg',
      '/EuritmiaHon/gallery/2025/DSC04563.jpg',
      '/EuritmiaHon/gallery/2025/DSC04567.jpg',
      '/EuritmiaHon/gallery/2025/DSC04598.jpg',
      '/EuritmiaHon/gallery/2025/DSC04640.jpg',
      '/EuritmiaHon/gallery/2025/DSC04677.jpg',
      '/EuritmiaHon/gallery/2025/DSC04692.jpg',
      '/EuritmiaHon/gallery/2025/DSC04778.jpg',
      '/EuritmiaHon/gallery/2025/DSC04794.jpg',
      '/EuritmiaHon/gallery/2025/DSC04853.jpg',
      '/EuritmiaHon/gallery/2025/DSC05017.jpg'
    ]
  },
  {
    id: '2024',
    year: 2024,
    title: '2024-es előadások',
    coverImage: 'https://picsum.photos/400/300?random=1',
    fullGallery: Array(6).fill(null).map((_, i) => `https://picsum.photos/800/600?random=24${i}`)
  },
  {
    id: '2023',
    year: 2023,
    title: '2023-as előadások',
    coverImage: 'https://picsum.photos/400/300?random=4',
    fullGallery: Array(6).fill(null).map((_, i) => `https://picsum.photos/800/600?random=23${i}`)
  },
  {
    id: '2022',
    year: 2022,
    title: '2022-es előadások',
    coverImage: 'https://picsum.photos/400/300?random=7',
    fullGallery: Array(6).fill(null).map((_, i) => `https://picsum.photos/800/600?random=22${i}`)
  },
  {
    id: '2021',
    year: 2021,
    title: '2021-es előadások',
    coverImage: 'https://picsum.photos/400/300?random=10',
    fullGallery: Array(6).fill(null).map((_, i) => `https://picsum.photos/800/600?random=21${i}`)
  },
  {
    id: '2020',
    year: 2020,
    title: '2020-as előadások',
    coverImage: 'https://picsum.photos/400/300?random=13',
    fullGallery: Array(6).fill(null).map((_, i) => `https://picsum.photos/800/600?random=20${i}`)
  },
  {
    id: '2019',
    year: 2019,
    title: '2019-es előadások',
    coverImage: 'https://picsum.photos/400/300?random=16',
    fullGallery: Array(6).fill(null).map((_, i) => `https://picsum.photos/800/600?random=19${i}`)
  },
];