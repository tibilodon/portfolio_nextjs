import {
  MenuTexts,
  AboutTextsShort,
  AboutTextsLong,
} from "@/utils/commonTypes";

//sidebar, navbar
const hunTexts: MenuTexts = {
  home: "Főoldal",
  about: "Rólam",
  project: "Projekt",
  work: "Tapasztalat",
  contact: "Kapcsolat",
};
const engTexts: MenuTexts = {
  home: "Home",
  about: "About",
  project: "Project",
  work: "Work",
  contact: "Contact",
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
      "My Name is Tibor Vigh, a hungarian self-taught and aspiring (web) developer.  I am comfortable using the technologies listed below. (Click to see more)",
    technologies: techStack,
  },
];

const hunAboutShortTexts: AboutTextsShort = [
  {
    title: "Tibiről",
    paragraph:
      "Az én nevem Vigh Tibor és egy feltörekvő, autodidakta (web) fejlesztő. Az alábbi technológiákat magabiztosan használom. (Kattints, hogy bővebben lásd)",
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
        "The superset of JS, which made me to dab on to more statically typed languages like C# (see more at Project page). In my opinion it is a great way to keep any application scalable in the long run.",
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

export {
  engTexts,
  hunTexts,
  hunAboutShortTexts,
  engAboutShortTexts,
  engAboutLongTexts,
  hunAboutLongTexts,
};
