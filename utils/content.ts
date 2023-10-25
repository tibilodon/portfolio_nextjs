import {
  MenuTexts,
  AboutTextsShort,
  AboutTextsLong,
  WorkExperience,
  HomeTexts,
  Contact,
  Projects,
} from "@/utils/commonTypes";

//sidebar, navbar
const hunTexts: MenuTexts = {
  home: "Főoldal",
  about: "Rólam",
  projects: "Projektek",
  work: "Tapasztalat",
  contact: "Kapcsolat",
};
const engTexts: MenuTexts = {
  home: "Home",
  about: "About",
  projects: "Projects",
  work: "Work",
  contact: "Contact",
};

const engHomeTexts: HomeTexts = {
  heading: "Hello! I am Tibor.",
  profession: "Web Developer",
};

const hunHomeTexts: HomeTexts = {
  heading: "Szia! Tibor vagyok.",
  profession: "Webfejlesztő",
};

const techStack: string[] = [
  "JavaScript",
  "TypeScript",
  "NodeJs",
  "React",
  "NextJs",
  "SaSS",
];

//about - short
const engAboutShortTexts: AboutTextsShort = [
  {
    title: "About Tib",
    paragraph:
      "Hey there, I am Tibor Vigh. I earned my BsC in Psychology, but my work experience made me to pick up programming and transition into a self-taught and aspiring (web) developer. I am comfortable using the technologies listed below. (Click to see more)",
    technologies: techStack,
  },
];

const hunAboutShortTexts: AboutTextsShort = [
  {
    title: "Tibiről",
    paragraph:
      "Helló, az én nevem Vigh Tibor. Pszicholoógiából Bsc-t szereztem, de a munkahelyi tapasztalataim arra késztettek, hogy elkezdjek programozi és így egy feltörekvő, autodidakta (web) fejlesztővé váljak. Az alábbi technológiákat magabiztosan használom. (Kattints, hogy bővebben lásd)",
    technologies: techStack,
  },
];

const engAboutLongTexts: AboutTextsLong = [
  {
    title: engAboutShortTexts[0].title,
    paragraph: engAboutShortTexts[0].paragraph,
    technologies: techStack,
    technologiesDesc: {
      javascript:
        "The first programming language I started out with and still learning new things about every time I use it. My current tech-stack is based around JS, besides SASS",
      typescript:
        "The superset of JS, which made me to dab on to more statically typed languages like C# (see more at Projects page). In my opinion it is a great way to keep any application scalable in the long run.",
      react:
        "With its popularity and component approach it is my go to frontend framework for any web based project.",
      nodejs:
        "I discovered the walls a pure frontend application can build around itself without a database. First I used Firebase, which is easy to get things going with, but that is not as fast and as convenient as making api calls to a backend.",
      sass: "Productivity has always been a priority in my work. CSS much more complicated than it seems, and why not make it easier with a well defined framework? I asked myself that question and made the decision to use SASS for making my life easier when CSS tries to make it harder.",
      nextjs:
        "As I was developing applications using NodeJS + Express and React everything went fine in my development environment, but production is a different kettle of fish. The convenience this framework provides to develop applications and deploy them can save some well cherished time. Not even mentioning, that the React team recommends NextJS in order to use React.",
    },
  },
];

const hunAboutLongTexts: AboutTextsLong = [
  {
    title: hunAboutShortTexts[0].title,
    paragraph: hunAboutShortTexts[0].paragraph,
    technologies: techStack,
    technologiesDesc: {
      javascript:
        "Az első programozási nyelv amellyel elkezdtem, és minden alkalommal amikor használom tanulok valami újat. A jelenlegi technológiák amelyeket használok JS-en alapulnak, kivéve a SASS.",
      typescript:
        "Ha úgy tetszik a JS következő foka, ami arra késztetett, hogy a statikusabban írt nyelvekbe is beletekintsek, mint a C# (bővebben a Projekt oldalon). Véleményem szerint a TS használata hosszú távon bővíthetőbbé tesz minden applikációt.",
      react:
        "Az elterjedtsége és komponens alapú megközelítése miatt, az elsődleges frontend keretrendszer amit web-es alapú projektekhez használok.",
      nodejs:
        "A tiszta frontend alapú applikációk során hamar falakba ütköztem az adatbázis hiánya miatt. Elsődlegesen Firebase-t használtam, amivel könnyú elindítani dolgokat, de nem olyan gyors sem kényelmes mint api hívásokat intézni a backend felé.",
      sass: "A produktivitás mindig elsődleges a munkám során. A CSS sokkal komlikáltabb mint amilyennek tűnik, miért ne tenném könnyebbé egy jól bevált keretrendszerrel? A kérdés feltétele után elhatároztam, hogy SASS-t fogok használni, hogy megkönnyítsem az életem amikor a CSS az ellenkezőjére törekszik.",
      nextjs:
        "NodeJS + Express és React alkalmazások a fejlesztői környezetben probléma nélkül állhatnak készen a következő fázisra, viszont élesítéskor már több gond is felbukkanhat (például CORS error-ok). A keretrendszer hasznossága és könnyedsége miatt a NextJS-re esik a választásom minden alkalommal, hogy időt takarítsak meg. Nem beszélve arról, hogy a React csapat őket (is) említi mint ajánlott keretrendszert.",
    },
  },
];

const engWork: WorkExperience = [
  {
    blueant: {
      company: "Blue-Ant Solutions",
      position: "Web Developer",
      desc: "Blue-Ant Solutions is a company, which is focused on creating apps and stores based around the Shopify ecosystem. I was employed as the company tried to expand itself towards app development as well. Their primarily used programming language is PhP, so that my knowladgebse of JavaScript brought a new colour to them. My job was to develop and expand already existing apps for the Shopify store, and in-house use. I had to use Shopify's own CLI that is based on NodeJs, React, also Shopify's own component framework Polaris.",
      tasks: "App development and expansion for the Shopify store.",
      projects: [
        {
          labely: [
            {
              title: "Labely app",
              url: "https://apps.shopify.com/partners/storefrontheroes",
              desc: "An already in production app, that I had to introduce new features to, such as an overall dashboard for editing the app's UI, full customization within the app block, that is abling the user to inserting any text and picture based on a selected condition. I had the chance to look into and work with the Liquid templating language as well.",
            },
          ],
          emailTemplatingApp: [
            {
              title: "Bulk E-mail app",
              url: "unreleased",
              desc: "The porpuse of the app was to be able to set up templates and send out emails to any recipients in that template. You could set up different conditions of when to send out the email and it used a WYSIWYG editor and in that you could replace specific snippets to for example the product's name (like: {{product.title}} was replaced to Product title in the email). Webhooks were watching for the condtions saved in the template and if it got fulfilled the email was sent out.",
            },
          ],
          checkoutExt: [
            {
              title: "Checkout extension app",
              url: "unreleased",
              desc: `It was and integrated part of the Shopify store's checkout UI. When the user proceeded to checkout, shopify's own product recommendation and a custom logic was initiated to recommend products to the user (in a "You may also like this" fashion). If a recommended product was added, a new api call was sent based on the last product added to the cart and a new recommendation was presented by the UI. I had the oportunity to work with and use GraphQl besided REST Api calls.`,
            },
          ],
          magentoConverter: [
            {
              title: "Magento CSV to Shopify",
              url: "unreleased",
              desc: `An existing CSV converter for magento csv-s which was expanded with the feature to take in any regular csv with any data on it and if it was similar to shopify's data structure it imported that data (you can also select the fields you thought are similar), if not they were saved as "metafields", that is customizable data fields. In this way data will not be lost.`,
            },
          ],
        },
      ],
      duration: "6 months",
      reasonOfLeaving:
        "Apps were not released, therefore economically it was unsustainable to keep me employed.",
    },
    agroHof: {
      company: "Agrohof",
      position: "Advertising specialist",
      desc: `My obsession with programming started here. Upon
      switching from my old job (where I also had repetitive
      tasks) I noticed that a lot I will have to do a lot of
      repetitive tasks. They had an open mindset about me
      figuring out a way, what will speed up the process. I
      immediately jumped on the task. I
      reached out to my childhood friend about the idea of
      writing a script, which will replace my clicks. The idea
      seemed pretty straightforward, but soon I was put in
      place about the complexity, that is involved in writing
      such a script. In the following weeks I was managing
      advertisements, google ads, and other duties which made
      sure the company and its products are seen and available
      throughout the web. (Un)fortunately, I realized, that
      programming interests me more than the actual job. I
      wanted to become a web developer, and in order to
      achieve that I handed in my resignation, and I have been
      learning to code ever since.`,
      tasks:
        "Updating creating adverts for existing and new products on multiple websites.",
      projects: [
        {
          none: [
            {
              title: "",
              url: "",
              desc: "",
            },
          ],
        },
      ],
      duration: "3 months",
      reasonOfLeaving: "Career shift towards programming",
    },

    kobe: {
      company: "Köbe",
      position: "Administration Assistant",
      desc: `The first proper job I held in Hungary, the first desk
      job to be precise. I was responsible for dealing with a range
      of tasks at an independent insurance company. The
      manager spotted the opportunity and taught me a variety
      of tasks. Most of them were repetitive and were demanded
      to be executed in the exact way she taught them.
      However, I proposed a few new ideas to her (as I am
      fairly ok using google and finding for example keyboard
      shortcuts for excel) which softened her set ways, and
      encouraged her to train me even more functions of the
      software we worked with (java based). When covid hit and
      home office become popular I was one of the first few to
      try it out, which lead me to work from home for a year
      and a half. At this time we moved back to the
      countryside, and a new opportunity arose.`,
      tasks:
        "From checking all the details of customers against the central database to giving the green light for a newly purcashed car's insurance, I had multiple tasks I had to solve throughout the day. Even fixing co-workers computers and other small technical issues (such as easing the load on IT personals throughout a version transition).",
      projects: [
        {
          none: [
            {
              title: "",
              url: "",
              desc: "",
            },
          ],
        },
      ],
      duration: "2 years",
      reasonOfLeaving: "Career shift towards programming",
    },
  },
];

const hunWork: WorkExperience = [
  {
    blueant: {
      company: "Blue-Ant Solutions",
      position: "Webfejlesztő",
      desc: `Blue-Ant Solutions egy cég amely fókuszában applikációk és "boltok" kialakítása áll a Shopify rendszerén belül. Az én foglalkoztatásom a cég bővítési próbálkozásának köszönhető, a Shopify app Store-ba kellett applikációkat fejleszteni. Fő nyelvük a PhP, így az én JavaScript alapú tudásom egy új színt hozott magával. Munkám során új appok készítése és meglévők bővítése volt a cél, amelyeket a Shopify Store-ba vagy saját használatra fognak alkalmazni. Shopify saját CLI-t kellett használnom, amely NodeJs-en, React-on és a saját komponens keretrenszerükön a Polarison alapszik.`,
      tasks: "Shopify applikációk fejlesztése és bővítése.",
      projects: [
        {
          labely: [
            {
              title: "Labely",
              url: "https://apps.shopify.com/partners/storefrontheroes",
              desc: `Egy már meglévő app bővítése új funkciókkal, mint például egy átfogó kezdőlap ahol az applikáció teljes kinézete állítható. Lehetővé tenni, hogy a felhasználó bármilyen képet illetve szöveget használhasson az "app block-on" belül, amely a beállított kondíción alapszik. Volt szerencsém belelátni és használni is a Liquid sablonnyelvet is.`,
            },
          ],
          emailTemplatingApp: [
            {
              title: "Bulk E-mail app",
              url: "kiadatlan",
              desc: "Az applikáció lényege, hogy különböző levélmintákat készíthessen és küldhessen bármilyen címzettnek a user. Különböző kondíciók beállítását követően a WYSIWYG szerkesztő segítségével különböző adatok behelyettesíthetőek voltak (például: {{product.title}} behelyettesítődött az aktuális termék nevére). Webhook-ok figyelték a termék, bolt vagy bármilyen kiválasztott kondíciót, és ha az igazzá vált a beállított email minta kiküldésre került.",
            },
          ],
          checkoutExt: [
            {
              title: "Checkout extension app",
              url: "unreleased",
              desc: `A Shopify boltok fizetési oldalának egy beépített része volt az app. Amikor a felhasználó a fizetéshez érkezett, a Shopify saját és általam írt logika alapján a user termék ajánlásokat kapott amelyek mindig az utóljára hozzáadott termék alapján történt ("Ezek is tetszhetnek"). Amennyiben egy ajánlott termék hozzáadásra került, egy új api hívás alapján frissült a kínálat. Itt lehetőségem volt a GraphQl-t megismernem és dolgoznom vele a REST api hívásokkal együtt.`,
            },
          ],
          magentoConverter: [
            {
              title: "Magento CSV to Shopify",
              url: "kiadatlan, házon belüli használatra",
              desc: `Egy meglévő CSV importáló app amely Magento csv-ket konvertált át Shopify store használatra, amely bővítésre került, hogy bármilyen CSV-t képes legyen átkonvertálni. Amennyiben az adat hasonló volt a shopify-ban szereplőhöz vagy a felhasználó által beállított, az applikáció beimportálja a shopify store-ba. A különálló adatok "metafield" formájában kerültek tárolásra (állítható adathalmaz) így az adatvesztés nem történt.`,
            },
          ],
        },
      ],
      duration: "6 months",
      reasonOfLeaving:
        "A fejlesztett applikációk nem kerültek be a Shopify store-ba, így nem tudtak hozamot termelni, amely ellehetetlenítette az pozícióm fenntartását a cég részéről.",
    },
    agroHof: {
      company: "Agrohof",
      position: "Hirdetés specialista",
      desc: `A programozás iránti megszállottságom itt kezdődött. Miután munkahelyet váltottam (amely szintén ismétlődő feladatokból állt), felismertem, hogy ugyancsak ismétlődő feladatokkal kell szembenéznem. Mivel nyitottak voltak a probléma megoldására (és felgyorsítására) így egyből nekiugrottam. Felkerestem egy gyermekkori barátom, hogy egy script-et használva kiváltsam az ismétlődő "klikkeket". Az elképzelés egyszerűnek tűnt, de hamar felfedztem, hogy a megvalósítás sokkal komplexebb mint amilyennek tűnik. Az elkövetkező hetekben hirdetéseket és termékeket próbáltam minél elérhetőbbé tenni az weben. Sajnálatosan rá kellett jönnöm, hogy a programozás (ekkor még csak a webfejlesztést ismertem) sokkal jobban leköt mint a pozícióm, és webfejlesztővé akarok válni. Ennek érdekében benyújtottam a felmondásom és azóta is "kódolni" tanulok.`,
      tasks:
        "Új hirdetések készítése és meglévőek módosítása, karbantartása megannyi webhelyen.",
      projects: [
        {
          none: [
            {
              title: "",
              url: "",
              desc: "",
            },
          ],
        },
      ],
      duration: "3 months",
      reasonOfLeaving: "Karrierváltás webfejlesztővé.",
    },

    kobe: {
      company: "Köbe",
      position: "Aminisztrációs asszisztens",
      desc: `Az első magyarországon végzett irodai munkám. Egy független, magyar biztosítási cégen belül végeztem sokrétő feladataim. A vezetőm felfedezte a lehetőséget és annyi feladatottba vezetett bele amennyibe csak tudott. Sok feladat ismétlődő volt és elvárás volt, hogy a betanított módon kerüljön elvégzésre. Szerencsére mivel a technológia mindig is érdekelt (és jól bánok a google-el, továbbá nem félek gyorsbillentyúket használni egy excel táblázatban) sikerült fellazítanom az addigi korlátokat és megmutatnom, hogy más (és gyorsabb) módokon is elvégezhetőek ugyanazok a munkafolyamatok. Így még több lehetőséget biztosítottak a mindannyiuk által használt (java alapú) szoftver funkcióinak elsajátítására. Amikor a COVID miatti home-office elterjedté vállt, az elsők között lehettem aki kipróbálhatta. Végül csak otthonról dolgoztam másfél évig, amikor is a fővárosból vidékre költöztünk és egy új munkalehetőséget kaptam.`,
      tasks: `Vevők adatinak összevetésével a központi adatbázissal, újonan vásárolt gépjárművek forgalomba helyezése majd biztosításuk érvényesítése. Sokrétű feladataimon túl, például munkatársaim technikai problémait is kezeltem. Továbbá az IT részleg terhelését is próbáltam enyhíteni verzióváltásokat követően.`,
      projects: [
        {
          none: [
            {
              title: "",
              url: "",
              desc: "",
            },
          ],
        },
      ],
      duration: "2 years",
      reasonOfLeaving: "Új lehetőség adódott.",
    },
  },
];

const engContact: Contact = {
  title: "Contact",
  hero: `Feel free to get contact me any time. I will get back to you as soon
  as I can!`,
  name: "name",
  textfield: "your message",
  button: "Submit",
};

const hunContact: Contact = {
  title: "Kapcsolat",
  hero: `Bármikor felveheted velem a kapcsolatot. Igyekszem minél hamarabb válaszolni!`,
  name: "név",
  textfield: "a Te üzeneted",
  button: "Küldés",
};

const engProject: Projects = {
  title: "Projects",
  buttonMore: "See More",
  buttonLess: "See Less",
  projects: [
    {
      hingyi: [
        {
          title: "Hingyi Méhészet",
          desc: "Small scaled webshop for a family runned bee keeping company. Database and other products will be added but are dependent on the customer's demand. At the moment, orders are processed vie the FormSubmit.co API. The website is using NextJS, JavaScript and custom SASS.",
          url: "https://hingyi-meheszet.vercel.app",
        },
      ],
      busyant: [
        {
          title: "Busy Ant LLC",
          desc: "Simple landing and contact page for a startup. Enquiries are processed with the FormSubmit.co API for simplicity. The website is using NextJS, JavaScript and custom CSS.",
          url: "https://www.busyantllc.com/",
        },
      ],
      portfolio: [
        {
          title: "This Portfolio site",
          desc: "Interactive and concise CV. Simplicity and a kind of logic that satisfies my standards made up the base idea for this website. I also wanted to get back into TypeScript and CSS, that is why the old website went through a complete overhaul and instead of using React, JS, CSS and Firebase, the website is using NextJS, TypeScript and custom CSS.",
          url: "https://www.busyantllc.com/",
        },
      ],
    },
  ],
};

const hunProject: Projects = {
  title: "Projektek",
  buttonMore: "Több",
  buttonLess: "Kevesebb",
  projects: [
    {
      hingyi: [
        {
          title: "Hingyi Méhészet",
          desc: "Kis méretű webshop egy családi méhészetnek. Adatbázis és további termékek hozzáadása az ügyfél kérésére történnek majd. A megrendelések jelenleg a FormSubmit.co API által kezeltek. A weblap NextJS, JavaScript és egyedi SASS-el készült.",
          url: "https://hingyi-meheszet.vercel.app",
        },
      ],
      busyant: [
        {
          title: "Busy Ant LLC",
          desc: "Egyszerű fő és kapcsolat oldalakból álló weblap egy induló vállalkozáshoz. Az üzeneteket a FormSubmit.co API által kezeltek, hogy megkönnyítsék az átláthatóságot. A weblap NextJS, JavaScript és egyedi CSS-el készült.",
          url: "https://www.busyantllc.com/",
        },
      ],
      portfolio: [
        {
          title: "Ez a portfolio",
          desc: "Interaktív, összefoglaló önéletrajz. Az egyszerűség és az én elvárásaimnak megfelelő logikán volt a hangsúly. A TypeScript és a CSS újragyakorlása miatt teljes mértékben átírásra került a régi honlap, amely React, JS és Firebase alkotta keretrendszerben íródott. A weblap NextJS, TypeScript és egyedi CSS-el készült.",
          url: "https://www.busyantllc.com/",
        },
      ],
    },
  ],
};

export {
  engTexts,
  hunTexts,
  hunAboutShortTexts,
  engAboutShortTexts,
  engAboutLongTexts,
  hunAboutLongTexts,
  engWork,
  hunWork,
  engHomeTexts,
  hunHomeTexts,
  engContact,
  hunContact,
  engProject,
  hunProject,
};
