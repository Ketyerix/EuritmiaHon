import { Article, GalleryYear, Sponsor, ScheduleItem } from './types';
import { Leaf, HeartHandshake } from 'lucide-react';
import React from 'react';

export const NAV_LINKS = [
  { name: 'Kezdőlap', href: '#' },
  { name: 'Programok', href: '#programok' },
  { name: 'Képzések', href: '#kepzesek' },
  { name: '1%', href: '#supporters' },
];

export const REPORT_YEARS = [
  { year: '2024', label: '2024-es jelentés' },
  { year: '2023', label: '2023-as jelentés' },
  { year: '2022', label: '2022-es jelentés' },
  { year: '2021', label: '2021-es jelentés' },
  { year: '2020', label: '2020-as jelentés' },
  { year: '2019', label: '2019-es jelentés' },
];

export const HOME_ARTICLES = [
    {
        title: 'Gyógyeuritmia',
        content: 'A gyógyeuritmát dr. Rudolf Steiner dolgozta ki 1921-ben. Az euritmán alapszik és lényeges alkotórésze az antropozófiai orvoslás rendszerének, amely mind a természettudományos, mind az antropozófiai-szellemtudományos ismereteket magában foglalja.',
        isList: false
    },
    {
        title: 'Artemisz Euritmia Színpad',
        content: 'Az Artemisz Euritmia Színpad nevét 2010-ben kapta. Az alkalmat egy zenetanárnő meghívása szülte, aki egy továbbképzésen ismerkedett meg az euritmával, s ez olyannyira megtetszett neki, hogy mindenképpen szerette volna városában, Százhalombattán is megismertetni.',
        isList: false
    },
    {
        title: 'Száz éves az euritmia',
        content: 'Éppen száz évvel ezelőtt, 1912-ben született meg egy új mozgásművészet, az euritmia, amelyet Rudolf Steiner az első Goetheanum építésével párhuzamosan dolgozott ki. A 18 éves Lory-Maier Smits valamilyen ritmikus táncot keresett és édesanyja Rudolf Steiner tanácsát kérte, aki mintha várta volna a kérdést és megkezdődött új mozgásművészet kidolgozása.',
        isList: false
    },
    {
        title: '„Testből font jelbeszéd”',
        content: 'Az euritmia egyfajta mozgásművészet. Maga a szó görög eredetű, jelentése jó, szép ritmus. Rudolf Steiner az 1910-es években indította útjára, s azóta művészeti, pedagógiai és gyógyító ága egyaránt termékeny.',
        isList: false
    },
    {
        title: 'Látható beszéd és ének',
        content: '„Oly csend, amely a fényből éled\nS csendülve alkot dallamot,\nOly csend hirdesse: sose téved\nA változó alakzatok\nSodrában aki nem mulandó Formákon tiszta szemmel ámul:\nMivel az üdvösség honát\nÖrök ámulat hatja át.”\n\n(Mezei Balázs)',
        isList: false
    },
    {
        title: 'Linkek',
        content: 'Makovecz Imre mozgásforma-kísérlet\nAzt mondtad: Euritmia?',
        isList: true
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
    id: '2024',
    year: 2024,
    title: '2024-es előadások',
    coverImages: [
      'https://picsum.photos/400/300?random=1',
      'https://picsum.photos/400/300?random=2',
      'https://picsum.photos/400/300?random=3'
    ],
    fullGallery: Array(6).fill(null).map((_, i) => `https://picsum.photos/800/600?random=24${i}`)
  },
  {
    id: '2023',
    year: 2023,
    title: '2023-as előadások',
    coverImages: [
      'https://picsum.photos/400/300?random=4',
      'https://picsum.photos/400/300?random=5',
      'https://picsum.photos/400/300?random=6'
    ],
    fullGallery: Array(6).fill(null).map((_, i) => `https://picsum.photos/800/600?random=23${i}`)
  },
  {
    id: '2022',
    year: 2022,
    title: '2022-es előadások',
    coverImages: [
      'https://picsum.photos/400/300?random=7',
      'https://picsum.photos/400/300?random=8',
      'https://picsum.photos/400/300?random=9'
    ],
    fullGallery: Array(6).fill(null).map((_, i) => `https://picsum.photos/800/600?random=22${i}`)
  },
  {
    id: '2021',
    year: 2021,
    title: '2021-es előadások',
    coverImages: [
      'https://picsum.photos/400/300?random=10',
      'https://picsum.photos/400/300?random=11',
      'https://picsum.photos/400/300?random=12'
    ],
    fullGallery: Array(6).fill(null).map((_, i) => `https://picsum.photos/800/600?random=21${i}`)
  },
  {
    id: '2020',
    year: 2020,
    title: '2020-as előadások',
    coverImages: [
      'https://picsum.photos/400/300?random=13',
      'https://picsum.photos/400/300?random=14',
      'https://picsum.photos/400/300?random=15'
    ],
    fullGallery: Array(6).fill(null).map((_, i) => `https://picsum.photos/800/600?random=20${i}`)
  },
  {
    id: '2019',
    year: 2019,
    title: '2019-es előadások',
    coverImages: [
      'https://picsum.photos/400/300?random=16',
      'https://picsum.photos/400/300?random=17',
      'https://picsum.photos/400/300?random=18'
    ],
    fullGallery: Array(6).fill(null).map((_, i) => `https://picsum.photos/800/600?random=19${i}`)
  },
];