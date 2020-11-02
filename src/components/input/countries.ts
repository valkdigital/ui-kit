import type { CountryCode } from "libphonenumber-js/min";
import type { Option } from "../Picker";
export type CountryCodes = Exclude<CountryCode, "001" | "AC" | "TA">;
type Languages = "native" | "nl" | "de" | "en";

const countries: {
  [key in Languages]: {
    [key in CountryCodes]: Option;
  };
} = {
  native: {
    AD: {
      value: "AD",
      label: "Andorra",
      image: { uri: "https://www.countryflags.io/ad/flat/64.png" },
    },
    AE: {
      value: "AE",
      label: "دولة الإمارات العربيّة المتّحدة",
      image: { uri: "https://www.countryflags.io/ae/flat/64.png" },
    },
    AF: {
      value: "AF",
      label:
        "د افغانستان اسلامي دولتدولت اسلامی افغانستان, جمهوری اسلامی افغانستان",
      image: { uri: "https://www.countryflags.io/af/flat/64.png" },
    },
    AG: {
      value: "AG",
      label: "Antigua and Barbuda",
      image: { uri: "https://www.countryflags.io/ag/flat/64.png" },
    },
    AI: {
      value: "AI",
      label: "Anguilla",
      image: { uri: "https://www.countryflags.io/ai/flat/64.png" },
    },
    AL: {
      value: "AL",
      label: "Shqipëria",
      image: { uri: "https://www.countryflags.io/al/flat/64.png" },
    },
    AM: {
      value: "AM",
      label: "Հայաստան",
      image: { uri: "https://www.countryflags.io/am/flat/64.png" },
    },
    AO: {
      value: "AO",
      label: "Angola",
      image: { uri: "https://www.countryflags.io/ao/flat/64.png" },
    },
    AR: {
      value: "AR",
      label: "Argentina",
      image: { uri: "https://www.countryflags.io/ar/flat/64.png" },
    },
    AS: {
      value: "AS",
      label: "American Samoa",
      image: { uri: "https://www.countryflags.io/as/flat/64.png" },
    },
    AT: {
      value: "AT",
      label: "Österreich",
      image: { uri: "https://www.countryflags.io/at/flat/64.png" },
    },
    AU: {
      value: "AU",
      label: "Australia",
      image: { uri: "https://www.countryflags.io/au/flat/64.png" },
    },
    AW: {
      value: "AW",
      label: "Aruba",
      image: { uri: "https://www.countryflags.io/aw/flat/64.png" },
    },
    AX: {
      value: "AX",
      label: "Åland",
      image: { uri: "https://www.countryflags.io/ax/flat/64.png" },
    },
    AZ: {
      value: "AZ",
      label: "Azərbaycan",
      image: { uri: "https://www.countryflags.io/az/flat/64.png" },
    },
    BA: {
      value: "BA",
      label: "Bosna i Hercegovina",
      image: { uri: "https://www.countryflags.io/ba/flat/64.png" },
    },
    BB: {
      value: "BB",
      label: "Barbados",
      image: { uri: "https://www.countryflags.io/bb/flat/64.png" },
    },
    BD: {
      value: "BD",
      label: "গণপ্রজাতন্ত্রী বাংলাদেশ",
      image: { uri: "https://www.countryflags.io/bd/flat/64.png" },
    },
    BE: {
      value: "BE",
      label: "België, Belgique, Belgien",
      image: { uri: "https://www.countryflags.io/be/flat/64.png" },
    },
    BF: {
      value: "BF",
      label: "Burkina Faso",
      image: { uri: "https://www.countryflags.io/bf/flat/64.png" },
    },
    BG: {
      value: "BG",
      label: "България",
      image: { uri: "https://www.countryflags.io/bg/flat/64.png" },
    },
    BH: {
      value: "BH",
      label: "البحرين",
      image: { uri: "https://www.countryflags.io/bh/flat/64.png" },
    },
    BI: {
      value: "BI",
      label: "Burundi",
      image: { uri: "https://www.countryflags.io/bi/flat/64.png" },
    },
    BJ: {
      value: "BJ",
      label: "Bénin",
      image: { uri: "https://www.countryflags.io/bj/flat/64.png" },
    },
    BL: {
      value: "BL",
      label: "Saint-Barthélemy",
      image: { uri: "https://www.countryflags.io/bl/flat/64.png" },
    },
    BM: {
      value: "BM",
      label: "Bermuda",
      image: { uri: "https://www.countryflags.io/bm/flat/64.png" },
    },
    BN: {
      value: "BN",
      label: "Brunei Darussalam",
      image: { uri: "https://www.countryflags.io/bn/flat/64.png" },
    },
    BO: {
      value: "BO",
      label: "Bolivia, Bulibiya, Volívia, Wuliwya",
      image: { uri: "https://www.countryflags.io/bo/flat/64.png" },
    },
    BQ: {
      value: "BQ",
      label: "Caribisch Nederland",
      image: { uri: "https://www.countryflags.io/bq/flat/64.png" },
    },
    BR: {
      value: "BR",
      label: "Brasil",
      image: { uri: "https://www.countryflags.io/br/flat/64.png" },
    },
    BS: {
      value: "BS",
      label: "Commonwealth of The Bahamas",
      image: { uri: "https://www.countryflags.io/bs/flat/64.png" },
    },
    BT: {
      value: "BT",
      label: "འབྲུག་ཡུལ",
      image: { uri: "https://www.countryflags.io/bt/flat/64.png" },
    },
    BW: {
      value: "BW",
      label: "Botswana",
      image: { uri: "https://www.countryflags.io/bw/flat/64.png" },
    },
    BY: {
      value: "BY",
      label: "Беларусь",
      image: { uri: "https://www.countryflags.io/by/flat/64.png" },
    },
    BZ: {
      value: "BZ",
      label: "Belize",
      image: { uri: "https://www.countryflags.io/bz/flat/64.png" },
    },
    CA: {
      value: "CA",
      label: "Canada",
      image: { uri: "https://www.countryflags.io/ca/flat/64.png" },
    },
    CC: {
      value: "CC",
      label: "Pulu Kokos (Keeling)",
      image: { uri: "https://www.countryflags.io/cc/flat/64.png" },
    },
    CD: {
      value: "CD",
      label: "Democratic Republic of the Congo",
      image: { uri: "https://www.countryflags.io/cd/flat/64.png" },
    },
    CF: {
      value: "CF",
      label: "République centrafricaine",
      image: { uri: "https://www.countryflags.io/cf/flat/64.png" },
    },
    CG: {
      value: "CG",
      label: "République du Congo",
      image: { uri: "https://www.countryflags.io/cg/flat/64.png" },
    },
    CH: {
      value: "CH",
      label: "Schweiz, Suisse, Svizzera, Svizra",
      image: { uri: "https://www.countryflags.io/ch/flat/64.png" },
    },
    CI: {
      value: "CI",
      label: "Côte d'Ivoire",
      image: { uri: "https://www.countryflags.io/ci/flat/64.png" },
    },
    CK: {
      value: "CK",
      label: "Kūki 'Āirani",
      image: { uri: "https://www.countryflags.io/ck/flat/64.png" },
    },
    CL: {
      value: "CL",
      label: "Chile",
      image: { uri: "https://www.countryflags.io/cl/flat/64.png" },
    },
    CM: {
      value: "CM",
      label: "Cameroun, Cameroon",
      image: { uri: "https://www.countryflags.io/cm/flat/64.png" },
    },
    CN: {
      value: "CN",
      label: "中国",
      image: { uri: "https://www.countryflags.io/cn/flat/64.png" },
    },
    CO: {
      value: "CO",
      label: "Colombia",
      image: { uri: "https://www.countryflags.io/co/flat/64.png" },
    },
    CR: {
      value: "CR",
      label: "Costa Rica",
      image: { uri: "https://www.countryflags.io/cr/flat/64.png" },
    },
    CU: {
      value: "CU",
      label: "Cuba",
      image: { uri: "https://www.countryflags.io/cu/flat/64.png" },
    },
    CV: {
      value: "CV",
      label: "Cabo Verde",
      image: { uri: "https://www.countryflags.io/cv/flat/64.png" },
    },
    CW: {
      value: "CW",
      label: "Curaçao",
      image: { uri: "https://www.countryflags.io/cw/flat/64.png" },
    },
    CX: {
      value: "CX",
      label: "Christmas Island",
      image: { uri: "https://www.countryflags.io/cx/flat/64.png" },
    },
    CY: {
      value: "CY",
      label: "Κύπρος, Kibris",
      image: { uri: "https://www.countryflags.io/cy/flat/64.png" },
    },
    CZ: {
      value: "CZ",
      label: "Česká republika",
      image: { uri: "https://www.countryflags.io/cz/flat/64.png" },
    },
    DE: {
      value: "DE",
      label: "Deutschland",
      image: { uri: "https://www.countryflags.io/de/flat/64.png" },
    },
    DJ: {
      value: "DJ",
      label: "Djibouti, جيبوتي, Jabuuti, Gabuutih",
      image: { uri: "https://www.countryflags.io/dj/flat/64.png" },
    },
    DK: {
      value: "DK",
      label: "Danmark",
      image: { uri: "https://www.countryflags.io/dk/flat/64.png" },
    },
    DM: {
      value: "DM",
      label: "Dominica",
      image: { uri: "https://www.countryflags.io/dm/flat/64.png" },
    },
    DO: {
      value: "DO",
      label: "República Dominicana",
      image: { uri: "https://www.countryflags.io/do/flat/64.png" },
    },
    DZ: {
      value: "DZ",
      label: "الجزائر",
      image: { uri: "https://www.countryflags.io/dz/flat/64.png" },
    },
    EC: {
      value: "EC",
      label: "Ecuador",
      image: { uri: "https://www.countryflags.io/ec/flat/64.png" },
    },
    EE: {
      value: "EE",
      label: "Eesti",
      image: { uri: "https://www.countryflags.io/ee/flat/64.png" },
    },
    EG: {
      value: "EG",
      label: "مصر",
      image: { uri: "https://www.countryflags.io/eg/flat/64.png" },
    },
    EH: {
      value: "EH",
      label: "Sahara Occidental",
      image: { uri: "https://www.countryflags.io/eh/flat/64.png" },
    },
    ER: {
      value: "ER",
      label: "ኤርትራ, إرتريا, Eritrea",
      image: { uri: "https://www.countryflags.io/er/flat/64.png" },
    },
    ES: {
      value: "ES",
      label: "España",
      image: { uri: "https://www.countryflags.io/es/flat/64.png" },
    },
    ET: {
      value: "ET",
      label: "ኢትዮጵያ, Itoophiyaa",
      image: { uri: "https://www.countryflags.io/et/flat/64.png" },
    },
    FI: {
      value: "FI",
      label: "Suomi",
      image: { uri: "https://www.countryflags.io/fi/flat/64.png" },
    },
    FJ: {
      value: "FJ",
      label: "Fiji",
      image: { uri: "https://www.countryflags.io/fj/flat/64.png" },
    },
    FK: {
      value: "FK",
      label: "Falkland Islands",
      image: { uri: "https://www.countryflags.io/fk/flat/64.png" },
    },
    FM: {
      value: "FM",
      label: "Micronesia",
      image: { uri: "https://www.countryflags.io/fm/flat/64.png" },
    },
    FO: {
      value: "FO",
      label: "Færøerne",
      image: { uri: "https://www.countryflags.io/fo/flat/64.png" },
    },
    FR: {
      value: "FR",
      label: "France",
      image: { uri: "https://www.countryflags.io/fr/flat/64.png" },
    },
    GA: {
      value: "GA",
      label: "Gabon",
      image: { uri: "https://www.countryflags.io/ga/flat/64.png" },
    },
    GB: {
      value: "GB",
      label: "Great Britain",
      image: { uri: "https://www.countryflags.io/gb/flat/64.png" },
    },
    GD: {
      value: "GD",
      label: "Grenada",
      image: { uri: "https://www.countryflags.io/gd/flat/64.png" },
    },
    GE: {
      value: "GE",
      label: "საქართველო",
      image: { uri: "https://www.countryflags.io/ge/flat/64.png" },
    },
    GF: {
      value: "GF",
      label: "Guyane française",
      image: { uri: "https://www.countryflags.io/gf/flat/64.png" },
    },
    GG: {
      value: "GG",
      label: "Guernsey",
      image: { uri: "https://www.countryflags.io/gg/flat/64.png" },
    },
    GH: {
      value: "GH",
      label: "Ghana",
      image: { uri: "https://www.countryflags.io/gh/flat/64.png" },
    },
    GI: {
      value: "GI",
      label: "Gibraltar",
      image: { uri: "https://www.countryflags.io/gi/flat/64.png" },
    },
    GL: {
      value: "GL",
      label: "Kalaallit Nunaat, Grønland",
      image: { uri: "https://www.countryflags.io/gl/flat/64.png" },
    },
    GM: {
      value: "GM",
      label: "The Gambia",
      image: { uri: "https://www.countryflags.io/gm/flat/64.png" },
    },
    GN: {
      value: "GN",
      label: "Guinée",
      image: { uri: "https://www.countryflags.io/gn/flat/64.png" },
    },
    GP: {
      value: "GP",
      label: "Guadeloupe",
      image: { uri: "https://www.countryflags.io/gp/flat/64.png" },
    },
    GQ: {
      value: "GQ",
      label: "Guiena ecuatorial, Guinée équatoriale, Guiné Equatorial",
      image: { uri: "https://www.countryflags.io/gq/flat/64.png" },
    },
    GR: {
      value: "GR",
      label: "Ελλάδα",
      image: { uri: "https://www.countryflags.io/gr/flat/64.png" },
    },
    GT: {
      value: "GT",
      label: "Guatemala",
      image: { uri: "https://www.countryflags.io/gt/flat/64.png" },
    },
    GU: {
      value: "GU",
      label: "Guam, Guåhån",
      image: { uri: "https://www.countryflags.io/gu/flat/64.png" },
    },
    GW: {
      value: "GW",
      label: "Guiné-Bissau",
      image: { uri: "https://www.countryflags.io/gw/flat/64.png" },
    },
    GY: {
      value: "GY",
      label: "Guyana",
      image: { uri: "https://www.countryflags.io/gy/flat/64.png" },
    },
    HK: {
      value: "HK",
      label: "香港, Hong Kong",
      image: { uri: "https://www.countryflags.io/hk/flat/64.png" },
    },
    HN: {
      value: "HN",
      label: "Honduras",
      image: { uri: "https://www.countryflags.io/hn/flat/64.png" },
    },
    HR: {
      value: "HR",
      label: "Hrvatska",
      image: { uri: "https://www.countryflags.io/hr/flat/64.png" },
    },
    HT: {
      value: "HT",
      label: "Haïti, Ayiti",
      image: { uri: "https://www.countryflags.io/ht/flat/64.png" },
    },
    HU: {
      value: "HU",
      label: "Magyarország",
      image: { uri: "https://www.countryflags.io/hu/flat/64.png" },
    },
    ID: {
      value: "ID",
      label: "Indonesia",
      image: { uri: "https://www.countryflags.io/id/flat/64.png" },
    },
    IE: {
      value: "IE",
      label: "Ireland, Éire",
      image: { uri: "https://www.countryflags.io/ie/flat/64.png" },
    },
    IL: {
      value: "IL",
      label: "ישראל",
      image: { uri: "https://www.countryflags.io/il/flat/64.png" },
    },
    IM: {
      value: "IM",
      label: "Isle of Man",
      image: { uri: "https://www.countryflags.io/im/flat/64.png" },
    },
    IN: {
      value: "IN",
      label: "भारत, India",
      image: { uri: "https://www.countryflags.io/in/flat/64.png" },
    },
    IO: {
      value: "IO",
      label: "British Indian Ocean Territory",
      image: { uri: "https://www.countryflags.io/io/flat/64.png" },
    },
    IQ: {
      value: "IQ",
      label: "العراق, Iraq",
      image: { uri: "https://www.countryflags.io/iq/flat/64.png" },
    },
    IR: {
      value: "IR",
      label: "ایران",
      image: { uri: "https://www.countryflags.io/ir/flat/64.png" },
    },
    IS: {
      value: "IS",
      label: "Ísland",
      image: { uri: "https://www.countryflags.io/is/flat/64.png" },
    },
    IT: {
      value: "IT",
      label: "Italia",
      image: { uri: "https://www.countryflags.io/it/flat/64.png" },
    },
    JE: {
      value: "JE",
      label: "Jersey",
      image: { uri: "https://www.countryflags.io/je/flat/64.png" },
    },
    JM: {
      value: "JM",
      label: "Jamaica",
      image: { uri: "https://www.countryflags.io/jm/flat/64.png" },
    },
    JO: {
      value: "JO",
      label: "الأُرْدُن",
      image: { uri: "https://www.countryflags.io/jo/flat/64.png" },
    },
    JP: {
      value: "JP",
      label: "日本",
      image: { uri: "https://www.countryflags.io/jp/flat/64.png" },
    },
    KE: {
      value: "KE",
      label: "Kenya",
      image: { uri: "https://www.countryflags.io/ke/flat/64.png" },
    },
    KG: {
      value: "KG",
      label: "Кыргызстан, Киргизия",
      image: { uri: "https://www.countryflags.io/kg/flat/64.png" },
    },
    KH: {
      value: "KH",
      label: "កម្ពុជា",
      image: { uri: "https://www.countryflags.io/kh/flat/64.png" },
    },
    KI: {
      value: "KI",
      label: "Kiribati",
      image: { uri: "https://www.countryflags.io/ki/flat/64.png" },
    },
    KM: {
      value: "KM",
      label: "Umoja wa Komori",
      image: { uri: "https://www.countryflags.io/km/flat/64.png" },
    },
    KN: {
      value: "KN",
      label: "Saint Kitts and Nevis",
      image: { uri: "https://www.countryflags.io/kn/flat/64.png" },
    },
    KP: {
      value: "KP",
      label: "조선민주주의인민공화국",
      image: { uri: "https://www.countryflags.io/kp/flat/64.png" },
    },
    KR: {
      value: "KR",
      label: "대한민국",
      image: { uri: "https://www.countryflags.io/kr/flat/64.png" },
    },
    KW: {
      value: "KW",
      label: "الكويت",
      image: { uri: "https://www.countryflags.io/kw/flat/64.png" },
    },
    KY: {
      value: "KY",
      label: "Cayman Islands",
      image: { uri: "https://www.countryflags.io/ky/flat/64.png" },
    },
    KZ: {
      value: "KZ",
      label: "Қазақстан, Казахстан",
      image: { uri: "https://www.countryflags.io/kz/flat/64.png" },
    },
    LA: {
      value: "LA",
      label: "ປະຊາຊົນລາວ",
      image: { uri: "https://www.countryflags.io/la/flat/64.png" },
    },
    LB: {
      value: "LB",
      label: "لبنان, Liban",
      image: { uri: "https://www.countryflags.io/lb/flat/64.png" },
    },
    LC: {
      value: "LC",
      label: "Saint Lucia",
      image: { uri: "https://www.countryflags.io/lc/flat/64.png" },
    },
    LI: {
      value: "LI",
      label: "Liechtenstein",
      image: { uri: "https://www.countryflags.io/li/flat/64.png" },
    },
    LK: {
      value: "LK",
      label: "ශ්‍රී ලංකා, இலங்கை",
      image: { uri: "https://www.countryflags.io/lk/flat/64.png" },
    },
    LR: {
      value: "LR",
      label: "Liberia",
      image: { uri: "https://www.countryflags.io/lr/flat/64.png" },
    },
    LS: {
      value: "LS",
      label: "Lesotho",
      image: { uri: "https://www.countryflags.io/ls/flat/64.png" },
    },
    LT: {
      value: "LT",
      label: "Lietuva",
      image: { uri: "https://www.countryflags.io/lt/flat/64.png" },
    },
    LU: {
      value: "LU",
      label: "Lëtzebuerg, Luxembourg, Luxemburg",
      image: { uri: "https://www.countryflags.io/lu/flat/64.png" },
    },
    LV: {
      value: "LV",
      label: "Latvija",
      image: { uri: "https://www.countryflags.io/lv/flat/64.png" },
    },
    LY: {
      value: "LY",
      label: "ليبيا",
      image: { uri: "https://www.countryflags.io/ly/flat/64.png" },
    },
    MA: {
      value: "MA",
      label: "Maroc, ⵍⵎⵖⵔⵉⴱ, المغرب",
      image: { uri: "https://www.countryflags.io/ma/flat/64.png" },
    },
    MC: {
      value: "MC",
      label: "Monaco",
      image: { uri: "https://www.countryflags.io/mc/flat/64.png" },
    },
    MD: {
      value: "MD",
      label: "Moldova, Молдавия",
      image: { uri: "https://www.countryflags.io/md/flat/64.png" },
    },
    ME: {
      value: "ME",
      label: "Crna Gora, Црна Гора",
      image: { uri: "https://www.countryflags.io/me/flat/64.png" },
    },
    MF: {
      value: "MF",
      label: "Saint-Martin",
      image: { uri: "https://www.countryflags.io/mf/flat/64.png" },
    },
    MG: {
      value: "MG",
      label: "Madagasikara, Madagascar",
      image: { uri: "https://www.countryflags.io/mg/flat/64.png" },
    },
    MH: {
      value: "MH",
      label: "Aolepān Aorōkin Ṃajeḷ",
      image: { uri: "https://www.countryflags.io/mh/flat/64.png" },
    },
    MK: {
      value: "MK",
      label: "Македонија",
      image: { uri: "https://www.countryflags.io/mk/flat/64.png" },
    },
    ML: {
      value: "ML",
      label: "Mali",
      image: { uri: "https://www.countryflags.io/ml/flat/64.png" },
    },
    MM: {
      value: "MM",
      label: "မြန်မာ",
      image: { uri: "https://www.countryflags.io/mm/flat/64.png" },
    },
    MN: {
      value: "MN",
      label: "Монгол Улс",
      image: { uri: "https://www.countryflags.io/mn/flat/64.png" },
    },
    MO: {
      value: "MO",
      label: "澳門, Macau",
      image: { uri: "https://www.countryflags.io/mo/flat/64.png" },
    },
    MP: {
      value: "MP",
      label: "Sankattan Siha Na Islas Mariånas",
      image: { uri: "https://www.countryflags.io/mp/flat/64.png" },
    },
    MQ: {
      value: "MQ",
      label: "Martinique",
      image: { uri: "https://www.countryflags.io/mq/flat/64.png" },
    },
    MR: {
      value: "MR",
      label: "موريتانيا, Mauritanie",
      image: { uri: "https://www.countryflags.io/mr/flat/64.png" },
    },
    MS: {
      value: "MS",
      label: "Montserrat",
      image: { uri: "https://www.countryflags.io/ms/flat/64.png" },
    },
    MT: {
      value: "MT",
      label: "Malta",
      image: { uri: "https://www.countryflags.io/mt/flat/64.png" },
    },
    MU: {
      value: "MU",
      label: "Maurice, Mauritius",
      image: { uri: "https://www.countryflags.io/mu/flat/64.png" },
    },
    MV: {
      value: "MV",
      label: "Dhivehi Raajje, ދިވެހިރާއްޖެ",
      image: { uri: "https://www.countryflags.io/mv/flat/64.png" },
    },
    MW: {
      value: "MW",
      label: "Malawi",
      image: { uri: "https://www.countryflags.io/mw/flat/64.png" },
    },
    MX: {
      value: "MX",
      label: "México",
      image: { uri: "https://www.countryflags.io/mx/flat/64.png" },
    },
    MY: {
      value: "MY",
      label: "Malaysia, Mǎláixīyà, 马来西亚, Malēṣiyā, மலேசியா",
      image: { uri: "https://www.countryflags.io/my/flat/64.png" },
    },
    MZ: {
      value: "MZ",
      label: "Mozambique",
      image: { uri: "https://www.countryflags.io/mz/flat/64.png" },
    },
    NA: {
      value: "NA",
      label: "Namibia",
      image: { uri: "https://www.countryflags.io/na/flat/64.png" },
    },
    NC: {
      value: "NC",
      label: "Nouvelle-Calédonie",
      image: { uri: "https://www.countryflags.io/nc/flat/64.png" },
    },
    NE: {
      value: "NE",
      label: "Niger",
      image: { uri: "https://www.countryflags.io/ne/flat/64.png" },
    },
    NF: {
      value: "NF",
      label: "Norfolk Island",
      image: { uri: "https://www.countryflags.io/nf/flat/64.png" },
    },
    NG: {
      value: "NG",
      label: "Nigeria",
      image: { uri: "https://www.countryflags.io/ng/flat/64.png" },
    },
    NI: {
      value: "NI",
      label: "Nicaragua",
      image: { uri: "https://www.countryflags.io/ni/flat/64.png" },
    },
    NL: {
      value: "NL",
      label: "Nederland",
      image: { uri: "https://www.countryflags.io/nl/flat/64.png" },
    },
    NO: {
      value: "NO",
      label: "Norge, Noreg",
      image: { uri: "https://www.countryflags.io/no/flat/64.png" },
    },
    NP: {
      value: "NP",
      label: "Nepāl, नेपाल",
      image: { uri: "https://www.countryflags.io/np/flat/64.png" },
    },
    NR: {
      value: "NR",
      label: "Nauru",
      image: { uri: "https://www.countryflags.io/nr/flat/64.png" },
    },
    NU: {
      value: "NU",
      label: "Niue",
      image: { uri: "https://www.countryflags.io/nu/flat/64.png" },
    },
    NZ: {
      value: "NZ",
      label: "New Zealand",
      image: { uri: "https://www.countryflags.io/nz/flat/64.png" },
    },
    OM: {
      value: "OM",
      label: "سلطنة عُمان",
      image: { uri: "https://www.countryflags.io/om/flat/64.png" },
    },
    PA: {
      value: "PA",
      label: "Panama",
      image: { uri: "https://www.countryflags.io/pa/flat/64.png" },
    },
    PE: {
      value: "PE",
      label: "Perú",
      image: { uri: "https://www.countryflags.io/pe/flat/64.png" },
    },
    PF: {
      value: "PF",
      label: "Polynésie française",
      image: { uri: "https://www.countryflags.io/pf/flat/64.png" },
    },
    PG: {
      value: "PG",
      label: "Papua New Guinea",
      image: { uri: "https://www.countryflags.io/pg/flat/64.png" },
    },
    PH: {
      value: "PH",
      label: "Philippines",
      image: { uri: "https://www.countryflags.io/ph/flat/64.png" },
    },
    PK: {
      value: "PK",
      label: "پاکستان",
      image: { uri: "https://www.countryflags.io/pk/flat/64.png" },
    },
    PL: {
      value: "PL",
      label: "Polska",
      image: { uri: "https://www.countryflags.io/pl/flat/64.png" },
    },
    PM: {
      value: "PM",
      label: "Saint-Pierre-et-Miquelon",
      image: { uri: "https://www.countryflags.io/pm/flat/64.png" },
    },
    PR: {
      value: "PR",
      label: "Puerto Rico",
      image: { uri: "https://www.countryflags.io/pr/flat/64.png" },
    },
    PS: {
      value: "PS",
      label: "Palestinian Territory",
      image: { uri: "https://www.countryflags.io/ps/flat/64.png" },
    },
    PT: {
      value: "PT",
      label: "Portugal",
      image: { uri: "https://www.countryflags.io/pt/flat/64.png" },
    },
    PW: {
      value: "PW",
      label: "Palau",
      image: { uri: "https://www.countryflags.io/pw/flat/64.png" },
    },
    PY: {
      value: "PY",
      label: "Paraguay",
      image: { uri: "https://www.countryflags.io/py/flat/64.png" },
    },
    QA: {
      value: "QA",
      label: "قطر",
      image: { uri: "https://www.countryflags.io/qa/flat/64.png" },
    },
    RE: {
      value: "RE",
      label: "La Réunion",
      image: { uri: "https://www.countryflags.io/re/flat/64.png" },
    },
    RO: {
      value: "RO",
      label: "România",
      image: { uri: "https://www.countryflags.io/ro/flat/64.png" },
    },
    RS: {
      value: "RS",
      label: "Србија",
      image: { uri: "https://www.countryflags.io/rs/flat/64.png" },
    },
    RU: {
      value: "RU",
      label: "Россия",
      image: { uri: "https://www.countryflags.io/ru/flat/64.png" },
    },
    RW: {
      value: "RW",
      label: "Rwanda",
      image: { uri: "https://www.countryflags.io/rw/flat/64.png" },
    },
    SA: {
      value: "SA",
      label: "السعودية",
      image: { uri: "https://www.countryflags.io/sa/flat/64.png" },
    },
    SB: {
      value: "SB",
      label: "Solomon Islands",
      image: { uri: "https://www.countryflags.io/sb/flat/64.png" },
    },
    SC: {
      value: "SC",
      label: "Seychelles",
      image: { uri: "https://www.countryflags.io/sc/flat/64.png" },
    },
    SD: {
      value: "SD",
      label: "السودان",
      image: { uri: "https://www.countryflags.io/sd/flat/64.png" },
    },
    SE: {
      value: "SE",
      label: "Sverige",
      image: { uri: "https://www.countryflags.io/se/flat/64.png" },
    },
    SG: {
      value: "SG",
      label: "Singapore",
      image: { uri: "https://www.countryflags.io/sg/flat/64.png" },
    },
    SH: {
      value: "SH",
      label: "Saint Helena",
      image: { uri: "https://www.countryflags.io/sh/flat/64.png" },
    },
    SI: {
      value: "SI",
      label: "Slovenija",
      image: { uri: "https://www.countryflags.io/si/flat/64.png" },
    },
    SJ: {
      value: "SJ",
      label: "Svalbard and Jan Mayen",
      image: { uri: "https://www.countryflags.io/sj/flat/64.png" },
    },
    SK: {
      value: "SK",
      label: "Slovensko",
      image: { uri: "https://www.countryflags.io/sk/flat/64.png" },
    },
    SL: {
      value: "SL",
      label: "Sierra Leone",
      image: { uri: "https://www.countryflags.io/sl/flat/64.png" },
    },
    SM: {
      value: "SM",
      label: "San Marino",
      image: { uri: "https://www.countryflags.io/sm/flat/64.png" },
    },
    SN: {
      value: "SN",
      label: "Sénégal",
      image: { uri: "https://www.countryflags.io/sn/flat/64.png" },
    },
    SO: {
      value: "SO",
      label: "Somalia, الصومال",
      image: { uri: "https://www.countryflags.io/so/flat/64.png" },
    },
    SR: {
      value: "SR",
      label: "Suriname",
      image: { uri: "https://www.countryflags.io/sr/flat/64.png" },
    },
    SS: {
      value: "SS",
      label: "South Sudan",
      image: { uri: "https://www.countryflags.io/ss/flat/64.png" },
    },
    ST: {
      value: "ST",
      label: "São Tomé e Príncipe",
      image: { uri: "https://www.countryflags.io/st/flat/64.png" },
    },
    SV: {
      value: "SV",
      label: "El Salvador",
      image: { uri: "https://www.countryflags.io/sv/flat/64.png" },
    },
    SX: {
      value: "SX",
      label: "Sint Maarten",
      image: { uri: "https://www.countryflags.io/sx/flat/64.png" },
    },
    SY: {
      value: "SY",
      label: "سوريا, Sūriyya",
      image: { uri: "https://www.countryflags.io/sy/flat/64.png" },
    },
    SZ: {
      value: "SZ",
      label: "Swaziland",
      image: { uri: "https://www.countryflags.io/sz/flat/64.png" },
    },
    TC: {
      value: "TC",
      label: "Turks and Caicos Islands",
      image: { uri: "https://www.countryflags.io/tc/flat/64.png" },
    },
    TD: {
      value: "TD",
      label: "Tchad, تشاد",
      image: { uri: "https://www.countryflags.io/td/flat/64.png" },
    },
    TG: {
      value: "TG",
      label: "Togo",
      image: { uri: "https://www.countryflags.io/tg/flat/64.png" },
    },
    TH: {
      value: "TH",
      label: "ประเทศไทย",
      image: { uri: "https://www.countryflags.io/th/flat/64.png" },
    },
    TJ: {
      value: "TJ",
      label: "Tojikistan, Тоҷикистон",
      image: { uri: "https://www.countryflags.io/tj/flat/64.png" },
    },
    TK: {
      value: "TK",
      label: "Tokelau",
      image: { uri: "https://www.countryflags.io/tk/flat/64.png" },
    },
    TL: {
      value: "TL",
      label: "Timor-Leste, Timor Lorosa'e",
      image: { uri: "https://www.countryflags.io/tl/flat/64.png" },
    },
    TM: {
      value: "TM",
      label: "Türkmenistan",
      image: { uri: "https://www.countryflags.io/tm/flat/64.png" },
    },
    TN: {
      value: "TN",
      label: "تونس, Tunisie",
      image: { uri: "https://www.countryflags.io/tn/flat/64.png" },
    },
    TO: {
      value: "TO",
      label: "Tonga",
      image: { uri: "https://www.countryflags.io/to/flat/64.png" },
    },
    TR: {
      value: "TR",
      label: "Türkiye",
      image: { uri: "https://www.countryflags.io/tr/flat/64.png" },
    },
    TT: {
      value: "TT",
      label: "Trinidad and Tobago",
      image: { uri: "https://www.countryflags.io/tt/flat/64.png" },
    },
    TV: {
      value: "TV",
      label: "Tuvalu",
      image: { uri: "https://www.countryflags.io/tv/flat/64.png" },
    },
    TW: {
      value: "TW",
      label: "Taiwan",
      image: { uri: "https://www.countryflags.io/tw/flat/64.png" },
    },
    TZ: {
      value: "TZ",
      label: "Tanzania",
      image: { uri: "https://www.countryflags.io/tz/flat/64.png" },
    },
    UA: {
      value: "UA",
      label: "Україна",
      image: { uri: "https://www.countryflags.io/ua/flat/64.png" },
    },
    UG: {
      value: "UG",
      label: "Uganda",
      image: { uri: "https://www.countryflags.io/ug/flat/64.png" },
    },
    US: {
      value: "US",
      label: "United States of America",
      image: { uri: "https://www.countryflags.io/us/flat/64.png" },
    },
    UY: {
      value: "UY",
      label: "Uruguay",
      image: { uri: "https://www.countryflags.io/uy/flat/64.png" },
    },
    UZ: {
      value: "UZ",
      label: "O‘zbekiston, Ўзбекистон",
      image: { uri: "https://www.countryflags.io/uz/flat/64.png" },
    },
    VA: {
      value: "VA",
      label: "Sancta Sedes",
      image: { uri: "https://www.countryflags.io/va/flat/64.png" },
    },
    VC: {
      value: "VC",
      label: "Saint Vincent and the Grenadines",
      image: { uri: "https://www.countryflags.io/vc/flat/64.png" },
    },
    VE: {
      value: "VE",
      label: "Venezuela",
      image: { uri: "https://www.countryflags.io/ve/flat/64.png" },
    },
    VG: {
      value: "VG",
      label: "British Virgin Islands",
      image: { uri: "https://www.countryflags.io/vg/flat/64.png" },
    },
    VI: {
      value: "VI",
      label: "United States Virgin Islands",
      image: { uri: "https://www.countryflags.io/vi/flat/64.png" },
    },
    VN: {
      value: "VN",
      label: "Việt Nam",
      image: { uri: "https://www.countryflags.io/vn/flat/64.png" },
    },
    VU: {
      value: "VU",
      label: "Vanuatu",
      image: { uri: "https://www.countryflags.io/vu/flat/64.png" },
    },
    WF: {
      value: "WF",
      label: "Wallis-et-Futuna",
      image: { uri: "https://www.countryflags.io/wf/flat/64.png" },
    },
    WS: {
      value: "WS",
      label: "Samoa",
      image: { uri: "https://www.countryflags.io/ws/flat/64.png" },
    },
    XK: {
      value: "XK",
      label: "Kosova, Kosovo, Косово",
      image: { uri: "https://www.countryflags.io/xk/flat/64.png" },
    },
    YE: {
      value: "YE",
      label: "اليَمَن",
      image: { uri: "https://www.countryflags.io/ye/flat/64.png" },
    },
    YT: {
      value: "YT",
      label: "Mayotte",
      image: { uri: "https://www.countryflags.io/yt/flat/64.png" },
    },
    ZA: {
      value: "ZA",
      label: "South Africa",
      image: { uri: "https://www.countryflags.io/za/flat/64.png" },
    },
    ZM: {
      value: "ZM",
      label: "Zambia",
      image: { uri: "https://www.countryflags.io/zm/flat/64.png" },
    },
    ZW: {
      value: "ZW",
      label: "Zimbabwe",
      image: { uri: "https://www.countryflags.io/zw/flat/64.png" },
    },
  },
  nl: {
    AD: {
      value: "AD",
      label: "Andorra",
      image: { uri: "https://www.countryflags.io/ad/flat/64.png" },
    },
    AE: {
      value: "AE",
      label: "Verenigde Arabische Emiraten",
      image: { uri: "https://www.countryflags.io/ae/flat/64.png" },
    },
    AF: {
      value: "AF",
      label: "Afghanistan",
      image: { uri: "https://www.countryflags.io/af/flat/64.png" },
    },
    AG: {
      value: "AG",
      label: "Antigua en Barbuda",
      image: { uri: "https://www.countryflags.io/ag/flat/64.png" },
    },
    AI: {
      value: "AI",
      label: "Anguilla",
      image: { uri: "https://www.countryflags.io/ai/flat/64.png" },
    },
    AL: {
      value: "AL",
      label: "Albanië",
      image: { uri: "https://www.countryflags.io/al/flat/64.png" },
    },
    AM: {
      value: "AM",
      label: "Armenië",
      image: { uri: "https://www.countryflags.io/am/flat/64.png" },
    },
    AO: {
      value: "AO",
      label: "Angola",
      image: { uri: "https://www.countryflags.io/ao/flat/64.png" },
    },
    AR: {
      value: "AR",
      label: "Argentinië",
      image: { uri: "https://www.countryflags.io/ar/flat/64.png" },
    },
    AS: {
      value: "AS",
      label: "Amerikaans-Samoa",
      image: { uri: "https://www.countryflags.io/as/flat/64.png" },
    },
    AT: {
      value: "AT",
      label: "Oostenrijk",
      image: { uri: "https://www.countryflags.io/at/flat/64.png" },
    },
    AU: {
      value: "AU",
      label: "Australië",
      image: { uri: "https://www.countryflags.io/au/flat/64.png" },
    },
    AW: {
      value: "AW",
      label: "Aruba",
      image: { uri: "https://www.countryflags.io/aw/flat/64.png" },
    },
    AX: {
      value: "AX",
      label: "Åland",
      image: { uri: "https://www.countryflags.io/ax/flat/64.png" },
    },
    AZ: {
      value: "AZ",
      label: "Azerbeidzjan",
      image: { uri: "https://www.countryflags.io/az/flat/64.png" },
    },
    BA: {
      value: "BA",
      label: "Bosnië-Herzegovina",
      image: { uri: "https://www.countryflags.io/ba/flat/64.png" },
    },
    BB: {
      value: "BB",
      label: "Barbados",
      image: { uri: "https://www.countryflags.io/bb/flat/64.png" },
    },
    BD: {
      value: "BD",
      label: "Bangladesh",
      image: { uri: "https://www.countryflags.io/bd/flat/64.png" },
    },
    BE: {
      value: "BE",
      label: "België",
      image: { uri: "https://www.countryflags.io/be/flat/64.png" },
    },
    BF: {
      value: "BF",
      label: "Burkina Faso",
      image: { uri: "https://www.countryflags.io/bf/flat/64.png" },
    },
    BG: {
      value: "BG",
      label: "Bulgarije",
      image: { uri: "https://www.countryflags.io/bg/flat/64.png" },
    },
    BH: {
      value: "BH",
      label: "Bahrein",
      image: { uri: "https://www.countryflags.io/bh/flat/64.png" },
    },
    BI: {
      value: "BI",
      label: "Burundi",
      image: { uri: "https://www.countryflags.io/bi/flat/64.png" },
    },
    BJ: {
      value: "BJ",
      label: "Benin",
      image: { uri: "https://www.countryflags.io/bj/flat/64.png" },
    },
    BL: {
      value: "BL",
      label: "Saint Barthélemy",
      image: { uri: "https://www.countryflags.io/bl/flat/64.png" },
    },
    BM: {
      value: "BM",
      label: "Bermuda",
      image: { uri: "https://www.countryflags.io/bm/flat/64.png" },
    },
    BN: {
      value: "BN",
      label: "Brunei Darussalam",
      image: { uri: "https://www.countryflags.io/bn/flat/64.png" },
    },
    BO: {
      value: "BO",
      label: "Bolivië",
      image: { uri: "https://www.countryflags.io/bo/flat/64.png" },
    },
    BQ: {
      value: "BQ",
      label: "Bonaire, Sint Eustatius en Saba",
      image: { uri: "https://www.countryflags.io/bq/flat/64.png" },
    },
    BR: {
      value: "BR",
      label: "Brazilië",
      image: { uri: "https://www.countryflags.io/br/flat/64.png" },
    },
    BS: {
      value: "BS",
      label: "Bahama's",
      image: { uri: "https://www.countryflags.io/bs/flat/64.png" },
    },
    BT: {
      value: "BT",
      label: "Bhutan",
      image: { uri: "https://www.countryflags.io/bt/flat/64.png" },
    },
    BW: {
      value: "BW",
      label: "Botswana",
      image: { uri: "https://www.countryflags.io/bw/flat/64.png" },
    },
    BY: {
      value: "BY",
      label: "Wit-Rusland",
      image: { uri: "https://www.countryflags.io/by/flat/64.png" },
    },
    BZ: {
      value: "BZ",
      label: "Belize",
      image: { uri: "https://www.countryflags.io/bz/flat/64.png" },
    },
    CA: {
      value: "CA",
      label: "Canada",
      image: { uri: "https://www.countryflags.io/ca/flat/64.png" },
    },
    CC: {
      value: "CC",
      label: "Cocoseilanden",
      image: { uri: "https://www.countryflags.io/cc/flat/64.png" },
    },
    CD: {
      value: "CD",
      label: "Congo, Democratische Republiek",
      image: { uri: "https://www.countryflags.io/cd/flat/64.png" },
    },
    CF: {
      value: "CF",
      label: "Centraal-Afrikaanse Republiek",
      image: { uri: "https://www.countryflags.io/cf/flat/64.png" },
    },
    CG: {
      value: "CG",
      label: "Congo, Volksrepubliek",
      image: { uri: "https://www.countryflags.io/cg/flat/64.png" },
    },
    CH: {
      value: "CH",
      label: "Zwitserland",
      image: { uri: "https://www.countryflags.io/ch/flat/64.png" },
    },
    CI: {
      value: "CI",
      label: "Ivoorkust",
      image: { uri: "https://www.countryflags.io/ci/flat/64.png" },
    },
    CK: {
      value: "CK",
      label: "Cookeilanden",
      image: { uri: "https://www.countryflags.io/ck/flat/64.png" },
    },
    CL: {
      value: "CL",
      label: "Chili",
      image: { uri: "https://www.countryflags.io/cl/flat/64.png" },
    },
    CM: {
      value: "CM",
      label: "Kameroen",
      image: { uri: "https://www.countryflags.io/cm/flat/64.png" },
    },
    CN: {
      value: "CN",
      label: "China",
      image: { uri: "https://www.countryflags.io/cn/flat/64.png" },
    },
    CO: {
      value: "CO",
      label: "Colombia",
      image: { uri: "https://www.countryflags.io/co/flat/64.png" },
    },
    CR: {
      value: "CR",
      label: "Costa Rica",
      image: { uri: "https://www.countryflags.io/cr/flat/64.png" },
    },
    CU: {
      value: "CU",
      label: "Cuba",
      image: { uri: "https://www.countryflags.io/cu/flat/64.png" },
    },
    CV: {
      value: "CV",
      label: "Kaapverdië",
      image: { uri: "https://www.countryflags.io/cv/flat/64.png" },
    },
    CW: {
      value: "CW",
      label: "Curaçao",
      image: { uri: "https://www.countryflags.io/cw/flat/64.png" },
    },
    CX: {
      value: "CX",
      label: "Christmaseiland",
      image: { uri: "https://www.countryflags.io/cx/flat/64.png" },
    },
    CY: {
      value: "CY",
      label: "Cyprus",
      image: { uri: "https://www.countryflags.io/cy/flat/64.png" },
    },
    CZ: {
      value: "CZ",
      label: "Tsjechië",
      image: { uri: "https://www.countryflags.io/cz/flat/64.png" },
    },
    DE: {
      value: "DE",
      label: "Duitsland",
      image: { uri: "https://www.countryflags.io/de/flat/64.png" },
    },
    DJ: {
      value: "DJ",
      label: "Djibouti",
      image: { uri: "https://www.countryflags.io/dj/flat/64.png" },
    },
    DK: {
      value: "DK",
      label: "Denemarken",
      image: { uri: "https://www.countryflags.io/dk/flat/64.png" },
    },
    DM: {
      value: "DM",
      label: "Dominica",
      image: { uri: "https://www.countryflags.io/dm/flat/64.png" },
    },
    DO: {
      value: "DO",
      label: "Dominicaanse Republiek",
      image: { uri: "https://www.countryflags.io/do/flat/64.png" },
    },
    DZ: {
      value: "DZ",
      label: "Algerije",
      image: { uri: "https://www.countryflags.io/dz/flat/64.png" },
    },
    EC: {
      value: "EC",
      label: "Ecuador",
      image: { uri: "https://www.countryflags.io/ec/flat/64.png" },
    },
    EE: {
      value: "EE",
      label: "Estland",
      image: { uri: "https://www.countryflags.io/ee/flat/64.png" },
    },
    EG: {
      value: "EG",
      label: "Egypte",
      image: { uri: "https://www.countryflags.io/eg/flat/64.png" },
    },
    EH: {
      value: "EH",
      label: "Westelijke Sahara",
      image: { uri: "https://www.countryflags.io/eh/flat/64.png" },
    },
    ER: {
      value: "ER",
      label: "Eritrea",
      image: { uri: "https://www.countryflags.io/er/flat/64.png" },
    },
    ES: {
      value: "ES",
      label: "Spanje",
      image: { uri: "https://www.countryflags.io/es/flat/64.png" },
    },
    ET: {
      value: "ET",
      label: "Ethiopië",
      image: { uri: "https://www.countryflags.io/et/flat/64.png" },
    },
    FI: {
      value: "FI",
      label: "Finland",
      image: { uri: "https://www.countryflags.io/fi/flat/64.png" },
    },
    FJ: {
      value: "FJ",
      label: "Fiji",
      image: { uri: "https://www.countryflags.io/fj/flat/64.png" },
    },
    FK: {
      value: "FK",
      label: "Falklandeilanden",
      image: { uri: "https://www.countryflags.io/fk/flat/64.png" },
    },
    FM: {
      value: "FM",
      label: "Micronesië, Federale Staten",
      image: { uri: "https://www.countryflags.io/fm/flat/64.png" },
    },
    FO: {
      value: "FO",
      label: "Faeröer",
      image: { uri: "https://www.countryflags.io/fo/flat/64.png" },
    },
    FR: {
      value: "FR",
      label: "Frankrijk",
      image: { uri: "https://www.countryflags.io/fr/flat/64.png" },
    },
    GA: {
      value: "GA",
      label: "Gabon",
      image: { uri: "https://www.countryflags.io/ga/flat/64.png" },
    },
    GB: {
      value: "GB",
      label: "Verenigd Koninkrijk",
      image: { uri: "https://www.countryflags.io/gb/flat/64.png" },
    },
    GD: {
      value: "GD",
      label: "Grenada",
      image: { uri: "https://www.countryflags.io/gd/flat/64.png" },
    },
    GE: {
      value: "GE",
      label: "Georgië",
      image: { uri: "https://www.countryflags.io/ge/flat/64.png" },
    },
    GF: {
      value: "GF",
      label: "Frans-Guyana",
      image: { uri: "https://www.countryflags.io/gf/flat/64.png" },
    },
    GG: {
      value: "GG",
      label: "Guernsey",
      image: { uri: "https://www.countryflags.io/gg/flat/64.png" },
    },
    GH: {
      value: "GH",
      label: "Ghana",
      image: { uri: "https://www.countryflags.io/gh/flat/64.png" },
    },
    GI: {
      value: "GI",
      label: "Gibraltar",
      image: { uri: "https://www.countryflags.io/gi/flat/64.png" },
    },
    GL: {
      value: "GL",
      label: "Groenland",
      image: { uri: "https://www.countryflags.io/gl/flat/64.png" },
    },
    GM: {
      value: "GM",
      label: "Gambia",
      image: { uri: "https://www.countryflags.io/gm/flat/64.png" },
    },
    GN: {
      value: "GN",
      label: "Guinea",
      image: { uri: "https://www.countryflags.io/gn/flat/64.png" },
    },
    GP: {
      value: "GP",
      label: "Guadeloupe",
      image: { uri: "https://www.countryflags.io/gp/flat/64.png" },
    },
    GQ: {
      value: "GQ",
      label: "Equatoriaal-Guinea",
      image: { uri: "https://www.countryflags.io/gq/flat/64.png" },
    },
    GR: {
      value: "GR",
      label: "Griekenland",
      image: { uri: "https://www.countryflags.io/gr/flat/64.png" },
    },
    GT: {
      value: "GT",
      label: "Guatemala",
      image: { uri: "https://www.countryflags.io/gt/flat/64.png" },
    },
    GU: {
      value: "GU",
      label: "Guam",
      image: { uri: "https://www.countryflags.io/gu/flat/64.png" },
    },
    GW: {
      value: "GW",
      label: "Guinee-Bissau",
      image: { uri: "https://www.countryflags.io/gw/flat/64.png" },
    },
    GY: {
      value: "GY",
      label: "Guyana",
      image: { uri: "https://www.countryflags.io/gy/flat/64.png" },
    },
    HK: {
      value: "HK",
      label: "Hong Kong",
      image: { uri: "https://www.countryflags.io/hk/flat/64.png" },
    },
    HN: {
      value: "HN",
      label: "Honduras",
      image: { uri: "https://www.countryflags.io/hn/flat/64.png" },
    },
    HR: {
      value: "HR",
      label: "Kroatië",
      image: { uri: "https://www.countryflags.io/hr/flat/64.png" },
    },
    HT: {
      value: "HT",
      label: "Haïti",
      image: { uri: "https://www.countryflags.io/ht/flat/64.png" },
    },
    HU: {
      value: "HU",
      label: "Hongarije",
      image: { uri: "https://www.countryflags.io/hu/flat/64.png" },
    },
    ID: {
      value: "ID",
      label: "Indonesia",
      image: { uri: "https://www.countryflags.io/id/flat/64.png" },
    },
    IE: {
      value: "IE",
      label: "Ierland",
      image: { uri: "https://www.countryflags.io/ie/flat/64.png" },
    },
    IL: {
      value: "IL",
      label: "Israël",
      image: { uri: "https://www.countryflags.io/il/flat/64.png" },
    },
    IM: {
      value: "IM",
      label: "Man Eiland",
      image: { uri: "https://www.countryflags.io/im/flat/64.png" },
    },
    IN: {
      value: "IN",
      label: "India",
      image: { uri: "https://www.countryflags.io/in/flat/64.png" },
    },
    IO: {
      value: "IO",
      label: "Brits Indische oceaan",
      image: { uri: "https://www.countryflags.io/io/flat/64.png" },
    },
    IQ: {
      value: "IQ",
      label: "Irak",
      image: { uri: "https://www.countryflags.io/iq/flat/64.png" },
    },
    IR: {
      value: "IR",
      label: "Iran",
      image: { uri: "https://www.countryflags.io/ir/flat/64.png" },
    },
    IS: {
      value: "IS",
      label: "IJsland",
      image: { uri: "https://www.countryflags.io/is/flat/64.png" },
    },
    IT: {
      value: "IT",
      label: "Italië",
      image: { uri: "https://www.countryflags.io/it/flat/64.png" },
    },
    JE: {
      value: "JE",
      label: "Jersey",
      image: { uri: "https://www.countryflags.io/je/flat/64.png" },
    },
    JM: {
      value: "JM",
      label: "Jamaica",
      image: { uri: "https://www.countryflags.io/jm/flat/64.png" },
    },
    JO: {
      value: "JO",
      label: "Jordanië",
      image: { uri: "https://www.countryflags.io/jo/flat/64.png" },
    },
    JP: {
      value: "JP",
      label: "Japan",
      image: { uri: "https://www.countryflags.io/jp/flat/64.png" },
    },
    KE: {
      value: "KE",
      label: "Kenia",
      image: { uri: "https://www.countryflags.io/ke/flat/64.png" },
    },
    KG: {
      value: "KG",
      label: "Kirgizstan",
      image: { uri: "https://www.countryflags.io/kg/flat/64.png" },
    },
    KH: {
      value: "KH",
      label: "Cambodja",
      image: { uri: "https://www.countryflags.io/kh/flat/64.png" },
    },
    KI: {
      value: "KI",
      label: "Kiribati",
      image: { uri: "https://www.countryflags.io/ki/flat/64.png" },
    },
    KM: {
      value: "KM",
      label: "Comoren",
      image: { uri: "https://www.countryflags.io/km/flat/64.png" },
    },
    KN: {
      value: "KN",
      label: "Saint Kitts en Nevis",
      image: { uri: "https://www.countryflags.io/kn/flat/64.png" },
    },
    KP: {
      value: "KP",
      label: "Noord-Korea",
      image: { uri: "https://www.countryflags.io/kp/flat/64.png" },
    },
    KR: {
      value: "KR",
      label: "Zuid-Korea",
      image: { uri: "https://www.countryflags.io/kr/flat/64.png" },
    },
    KW: {
      value: "KW",
      label: "Koeweit",
      image: { uri: "https://www.countryflags.io/kw/flat/64.png" },
    },
    KY: {
      value: "KY",
      label: "Kaaimaneilanden",
      image: { uri: "https://www.countryflags.io/ky/flat/64.png" },
    },
    KZ: {
      value: "KZ",
      label: "Kazachstan",
      image: { uri: "https://www.countryflags.io/kz/flat/64.png" },
    },
    LA: {
      value: "LA",
      label: "Laos",
      image: { uri: "https://www.countryflags.io/la/flat/64.png" },
    },
    LB: {
      value: "LB",
      label: "Libanon",
      image: { uri: "https://www.countryflags.io/lb/flat/64.png" },
    },
    LC: {
      value: "LC",
      label: "Saint Lucia",
      image: { uri: "https://www.countryflags.io/lc/flat/64.png" },
    },
    LI: {
      value: "LI",
      label: "Liechtenstein",
      image: { uri: "https://www.countryflags.io/li/flat/64.png" },
    },
    LK: {
      value: "LK",
      label: "Sri Lanka",
      image: { uri: "https://www.countryflags.io/lk/flat/64.png" },
    },
    LR: {
      value: "LR",
      label: "Liberia",
      image: { uri: "https://www.countryflags.io/lr/flat/64.png" },
    },
    LS: {
      value: "LS",
      label: "Lesotho",
      image: { uri: "https://www.countryflags.io/ls/flat/64.png" },
    },
    LT: {
      value: "LT",
      label: "Litouwen",
      image: { uri: "https://www.countryflags.io/lt/flat/64.png" },
    },
    LU: {
      value: "LU",
      label: "Luxemburg",
      image: { uri: "https://www.countryflags.io/lu/flat/64.png" },
    },
    LV: {
      value: "LV",
      label: "Letland",
      image: { uri: "https://www.countryflags.io/lv/flat/64.png" },
    },
    LY: {
      value: "LY",
      label: "Libië",
      image: { uri: "https://www.countryflags.io/ly/flat/64.png" },
    },
    MA: {
      value: "MA",
      label: "Marokko",
      image: { uri: "https://www.countryflags.io/ma/flat/64.png" },
    },
    MC: {
      value: "MC",
      label: "Monaco",
      image: { uri: "https://www.countryflags.io/mc/flat/64.png" },
    },
    MD: {
      value: "MD",
      label: "Moldavië",
      image: { uri: "https://www.countryflags.io/md/flat/64.png" },
    },
    ME: {
      value: "ME",
      label: "Montenegro",
      image: { uri: "https://www.countryflags.io/me/flat/64.png" },
    },
    MF: {
      value: "MF",
      label: "Sint-Maarten (Frans deel)",
      image: { uri: "https://www.countryflags.io/mf/flat/64.png" },
    },
    MG: {
      value: "MG",
      label: "Madagaskar",
      image: { uri: "https://www.countryflags.io/mg/flat/64.png" },
    },
    MH: {
      value: "MH",
      label: "Marshalleilanden",
      image: { uri: "https://www.countryflags.io/mh/flat/64.png" },
    },
    MK: {
      value: "MK",
      label: "Noord-Macedonië",
      image: { uri: "https://www.countryflags.io/mk/flat/64.png" },
    },
    ML: {
      value: "ML",
      label: "Mali",
      image: { uri: "https://www.countryflags.io/ml/flat/64.png" },
    },
    MM: {
      value: "MM",
      label: "Myanmar",
      image: { uri: "https://www.countryflags.io/mm/flat/64.png" },
    },
    MN: {
      value: "MN",
      label: "Mongolië",
      image: { uri: "https://www.countryflags.io/mn/flat/64.png" },
    },
    MO: {
      value: "MO",
      label: "Macao",
      image: { uri: "https://www.countryflags.io/mo/flat/64.png" },
    },
    MP: {
      value: "MP",
      label: "Noordelijke Marianen",
      image: { uri: "https://www.countryflags.io/mp/flat/64.png" },
    },
    MQ: {
      value: "MQ",
      label: "Martinique",
      image: { uri: "https://www.countryflags.io/mq/flat/64.png" },
    },
    MR: {
      value: "MR",
      label: "Mauritanië",
      image: { uri: "https://www.countryflags.io/mr/flat/64.png" },
    },
    MS: {
      value: "MS",
      label: "Montserrat",
      image: { uri: "https://www.countryflags.io/ms/flat/64.png" },
    },
    MT: {
      value: "MT",
      label: "Malta",
      image: { uri: "https://www.countryflags.io/mt/flat/64.png" },
    },
    MU: {
      value: "MU",
      label: "Mauritius",
      image: { uri: "https://www.countryflags.io/mu/flat/64.png" },
    },
    MV: {
      value: "MV",
      label: "Maldiven",
      image: { uri: "https://www.countryflags.io/mv/flat/64.png" },
    },
    MW: {
      value: "MW",
      label: "Malawi",
      image: { uri: "https://www.countryflags.io/mw/flat/64.png" },
    },
    MX: {
      value: "MX",
      label: "Mexico",
      image: { uri: "https://www.countryflags.io/mx/flat/64.png" },
    },
    MY: {
      value: "MY",
      label: "Maleisië",
      image: { uri: "https://www.countryflags.io/my/flat/64.png" },
    },
    MZ: {
      value: "MZ",
      label: "Mozambique",
      image: { uri: "https://www.countryflags.io/mz/flat/64.png" },
    },
    NA: {
      value: "NA",
      label: "Namibië",
      image: { uri: "https://www.countryflags.io/na/flat/64.png" },
    },
    NC: {
      value: "NC",
      label: "Nieuw-Caledonië",
      image: { uri: "https://www.countryflags.io/nc/flat/64.png" },
    },
    NE: {
      value: "NE",
      label: "Niger",
      image: { uri: "https://www.countryflags.io/ne/flat/64.png" },
    },
    NF: {
      value: "NF",
      label: "Norfolk",
      image: { uri: "https://www.countryflags.io/nf/flat/64.png" },
    },
    NG: {
      value: "NG",
      label: "Nigeria",
      image: { uri: "https://www.countryflags.io/ng/flat/64.png" },
    },
    NI: {
      value: "NI",
      label: "Nicaragua",
      image: { uri: "https://www.countryflags.io/ni/flat/64.png" },
    },
    NL: {
      value: "NL",
      label: "Nederland",
      image: { uri: "https://www.countryflags.io/nl/flat/64.png" },
    },
    NO: {
      value: "NO",
      label: "Noorwegen",
      image: { uri: "https://www.countryflags.io/no/flat/64.png" },
    },
    NP: {
      value: "NP",
      label: "Nepal",
      image: { uri: "https://www.countryflags.io/np/flat/64.png" },
    },
    NR: {
      value: "NR",
      label: "Nauru",
      image: { uri: "https://www.countryflags.io/nr/flat/64.png" },
    },
    NU: {
      value: "NU",
      label: "Niue",
      image: { uri: "https://www.countryflags.io/nu/flat/64.png" },
    },
    NZ: {
      value: "NZ",
      label: "Nieuw-Zeeland",
      image: { uri: "https://www.countryflags.io/nz/flat/64.png" },
    },
    OM: {
      value: "OM",
      label: "Oman",
      image: { uri: "https://www.countryflags.io/om/flat/64.png" },
    },
    PA: {
      value: "PA",
      label: "Panama",
      image: { uri: "https://www.countryflags.io/pa/flat/64.png" },
    },
    PE: {
      value: "PE",
      label: "Peru",
      image: { uri: "https://www.countryflags.io/pe/flat/64.png" },
    },
    PF: {
      value: "PF",
      label: "Frans-Polynesië",
      image: { uri: "https://www.countryflags.io/pf/flat/64.png" },
    },
    PG: {
      value: "PG",
      label: "Papoea-Nieuw-Guinea",
      image: { uri: "https://www.countryflags.io/pg/flat/64.png" },
    },
    PH: {
      value: "PH",
      label: "Filipijnen",
      image: { uri: "https://www.countryflags.io/ph/flat/64.png" },
    },
    PK: {
      value: "PK",
      label: "Pakistan",
      image: { uri: "https://www.countryflags.io/pk/flat/64.png" },
    },
    PL: {
      value: "PL",
      label: "Polen",
      image: { uri: "https://www.countryflags.io/pl/flat/64.png" },
    },
    PM: {
      value: "PM",
      label: "Saint-Pierre en Miquelon",
      image: { uri: "https://www.countryflags.io/pm/flat/64.png" },
    },
    PR: {
      value: "PR",
      label: "Puerto Rico",
      image: { uri: "https://www.countryflags.io/pr/flat/64.png" },
    },
    PS: {
      value: "PS",
      label: "Palestina",
      image: { uri: "https://www.countryflags.io/ps/flat/64.png" },
    },
    PT: {
      value: "PT",
      label: "Portugal",
      image: { uri: "https://www.countryflags.io/pt/flat/64.png" },
    },
    PW: {
      value: "PW",
      label: "Palau",
      image: { uri: "https://www.countryflags.io/pw/flat/64.png" },
    },
    PY: {
      value: "PY",
      label: "Paraguay",
      image: { uri: "https://www.countryflags.io/py/flat/64.png" },
    },
    QA: {
      value: "QA",
      label: "Qatar",
      image: { uri: "https://www.countryflags.io/qa/flat/64.png" },
    },
    RE: {
      value: "RE",
      label: "Réunion",
      image: { uri: "https://www.countryflags.io/re/flat/64.png" },
    },
    RO: {
      value: "RO",
      label: "Roemenië",
      image: { uri: "https://www.countryflags.io/ro/flat/64.png" },
    },
    RS: {
      value: "RS",
      label: "Servië",
      image: { uri: "https://www.countryflags.io/rs/flat/64.png" },
    },
    RU: {
      value: "RU",
      label: "Rusland",
      image: { uri: "https://www.countryflags.io/ru/flat/64.png" },
    },
    RW: {
      value: "RW",
      label: "Rwanda",
      image: { uri: "https://www.countryflags.io/rw/flat/64.png" },
    },
    SA: {
      value: "SA",
      label: "Saudi-Arabië",
      image: { uri: "https://www.countryflags.io/sa/flat/64.png" },
    },
    SB: {
      value: "SB",
      label: "Salomonseilanden",
      image: { uri: "https://www.countryflags.io/sb/flat/64.png" },
    },
    SC: {
      value: "SC",
      label: "Seychellen",
      image: { uri: "https://www.countryflags.io/sc/flat/64.png" },
    },
    SD: {
      value: "SD",
      label: "Soedan",
      image: { uri: "https://www.countryflags.io/sd/flat/64.png" },
    },
    SE: {
      value: "SE",
      label: "Zweden",
      image: { uri: "https://www.countryflags.io/se/flat/64.png" },
    },
    SG: {
      value: "SG",
      label: "Singapore",
      image: { uri: "https://www.countryflags.io/sg/flat/64.png" },
    },
    SH: {
      value: "SH",
      label: "Sint-Helena",
      image: { uri: "https://www.countryflags.io/sh/flat/64.png" },
    },
    SI: {
      value: "SI",
      label: "Slovenië",
      image: { uri: "https://www.countryflags.io/si/flat/64.png" },
    },
    SJ: {
      value: "SJ",
      label: "Spitsbergen en Jan Mayen",
      image: { uri: "https://www.countryflags.io/sj/flat/64.png" },
    },
    SK: {
      value: "SK",
      label: "Slowakije",
      image: { uri: "https://www.countryflags.io/sk/flat/64.png" },
    },
    SL: {
      value: "SL",
      label: "Sierra Leone",
      image: { uri: "https://www.countryflags.io/sl/flat/64.png" },
    },
    SM: {
      value: "SM",
      label: "San Marino",
      image: { uri: "https://www.countryflags.io/sm/flat/64.png" },
    },
    SN: {
      value: "SN",
      label: "Senegal",
      image: { uri: "https://www.countryflags.io/sn/flat/64.png" },
    },
    SO: {
      value: "SO",
      label: "Somalië",
      image: { uri: "https://www.countryflags.io/so/flat/64.png" },
    },
    SR: {
      value: "SR",
      label: "Suriname",
      image: { uri: "https://www.countryflags.io/sr/flat/64.png" },
    },
    SS: {
      value: "SS",
      label: "Zuid-Soedan",
      image: { uri: "https://www.countryflags.io/ss/flat/64.png" },
    },
    ST: {
      value: "ST",
      label: "São Tomé en Principe",
      image: { uri: "https://www.countryflags.io/st/flat/64.png" },
    },
    SV: {
      value: "SV",
      label: "El Salvador",
      image: { uri: "https://www.countryflags.io/sv/flat/64.png" },
    },
    SX: {
      value: "SX",
      label: "Sint Maarten (Nederlands deel)",
      image: { uri: "https://www.countryflags.io/sx/flat/64.png" },
    },
    SY: {
      value: "SY",
      label: "Syrië",
      image: { uri: "https://www.countryflags.io/sy/flat/64.png" },
    },
    SZ: {
      value: "SZ",
      label: "Ngwane, Koninkrijk Eswatini",
      image: { uri: "https://www.countryflags.io/sz/flat/64.png" },
    },
    TC: {
      value: "TC",
      label: "Turks- en Caicoseilanden",
      image: { uri: "https://www.countryflags.io/tc/flat/64.png" },
    },
    TD: {
      value: "TD",
      label: "Tsjaad",
      image: { uri: "https://www.countryflags.io/td/flat/64.png" },
    },
    TG: {
      value: "TG",
      label: "Togo",
      image: { uri: "https://www.countryflags.io/tg/flat/64.png" },
    },
    TH: {
      value: "TH",
      label: "Thailand",
      image: { uri: "https://www.countryflags.io/th/flat/64.png" },
    },
    TJ: {
      value: "TJ",
      label: "Tadzjikistan",
      image: { uri: "https://www.countryflags.io/tj/flat/64.png" },
    },
    TK: {
      value: "TK",
      label: "Tokelau",
      image: { uri: "https://www.countryflags.io/tk/flat/64.png" },
    },
    TL: {
      value: "TL",
      label: "Timor Leste",
      image: { uri: "https://www.countryflags.io/tl/flat/64.png" },
    },
    TM: {
      value: "TM",
      label: "Turkmenistan",
      image: { uri: "https://www.countryflags.io/tm/flat/64.png" },
    },
    TN: {
      value: "TN",
      label: "Tunesië",
      image: { uri: "https://www.countryflags.io/tn/flat/64.png" },
    },
    TO: {
      value: "TO",
      label: "Tonga",
      image: { uri: "https://www.countryflags.io/to/flat/64.png" },
    },
    TR: {
      value: "TR",
      label: "Turkije",
      image: { uri: "https://www.countryflags.io/tr/flat/64.png" },
    },
    TT: {
      value: "TT",
      label: "Trinidad en Tobago",
      image: { uri: "https://www.countryflags.io/tt/flat/64.png" },
    },
    TV: {
      value: "TV",
      label: "Tuvalu",
      image: { uri: "https://www.countryflags.io/tv/flat/64.png" },
    },
    TW: {
      value: "TW",
      label: "Taiwan",
      image: { uri: "https://www.countryflags.io/tw/flat/64.png" },
    },
    TZ: {
      value: "TZ",
      label: "Tanzania, Verenigde Republiek",
      image: { uri: "https://www.countryflags.io/tz/flat/64.png" },
    },
    UA: {
      value: "UA",
      label: "Oekraïne",
      image: { uri: "https://www.countryflags.io/ua/flat/64.png" },
    },
    UG: {
      value: "UG",
      label: "Oeganda",
      image: { uri: "https://www.countryflags.io/ug/flat/64.png" },
    },
    US: {
      value: "US",
      label: "Verenigde Staten van Amerika",
      image: { uri: "https://www.countryflags.io/us/flat/64.png" },
    },
    UY: {
      value: "UY",
      label: "Uruguay",
      image: { uri: "https://www.countryflags.io/uy/flat/64.png" },
    },
    UZ: {
      value: "UZ",
      label: "Oezbekistan",
      image: { uri: "https://www.countryflags.io/uz/flat/64.png" },
    },
    VA: {
      value: "VA",
      label: "Heilige Stoel",
      image: { uri: "https://www.countryflags.io/va/flat/64.png" },
    },
    VC: {
      value: "VC",
      label: "Saint Vincent en de Grenadines",
      image: { uri: "https://www.countryflags.io/vc/flat/64.png" },
    },
    VE: {
      value: "VE",
      label: "Venezuela",
      image: { uri: "https://www.countryflags.io/ve/flat/64.png" },
    },
    VG: {
      value: "VG",
      label: "Maagdeneilanden, Britse",
      image: { uri: "https://www.countryflags.io/vg/flat/64.png" },
    },
    VI: {
      value: "VI",
      label: "Maagdeneilanden, Amerikaanse",
      image: { uri: "https://www.countryflags.io/vi/flat/64.png" },
    },
    VN: {
      value: "VN",
      label: "Vietnam",
      image: { uri: "https://www.countryflags.io/vn/flat/64.png" },
    },
    VU: {
      value: "VU",
      label: "Vanuatu",
      image: { uri: "https://www.countryflags.io/vu/flat/64.png" },
    },
    WF: {
      value: "WF",
      label: "Wallis en Futuna",
      image: { uri: "https://www.countryflags.io/wf/flat/64.png" },
    },
    WS: {
      value: "WS",
      label: "Samoa",
      image: { uri: "https://www.countryflags.io/ws/flat/64.png" },
    },
    XK: {
      value: "XK",
      label: "Kosovo",
      image: { uri: "https://www.countryflags.io/xk/flat/64.png" },
    },
    YE: {
      value: "YE",
      label: "Jemen",
      image: { uri: "https://www.countryflags.io/ye/flat/64.png" },
    },
    YT: {
      value: "YT",
      label: "Mayotte",
      image: { uri: "https://www.countryflags.io/yt/flat/64.png" },
    },
    ZA: {
      value: "ZA",
      label: "Zuid-Afrika",
      image: { uri: "https://www.countryflags.io/za/flat/64.png" },
    },
    ZM: {
      value: "ZM",
      label: "Zambia",
      image: { uri: "https://www.countryflags.io/zm/flat/64.png" },
    },
    ZW: {
      value: "ZW",
      label: "Zimbabwe",
      image: { uri: "https://www.countryflags.io/zw/flat/64.png" },
    },
  },
  de: {
    AD: {
      value: "AD",
      label: "Andorra",
      image: { uri: "https://www.countryflags.io/ad/flat/64.png" },
    },
    AE: {
      value: "AE",
      label: "Vereinigte Arabische Emirate",
      image: { uri: "https://www.countryflags.io/ae/flat/64.png" },
    },
    AF: {
      value: "AF",
      label: "Afghanistan",
      image: { uri: "https://www.countryflags.io/af/flat/64.png" },
    },
    AG: {
      value: "AG",
      label: "Antigua und Barbuda",
      image: { uri: "https://www.countryflags.io/ag/flat/64.png" },
    },
    AI: {
      value: "AI",
      label: "Anguilla",
      image: { uri: "https://www.countryflags.io/ai/flat/64.png" },
    },
    AL: {
      value: "AL",
      label: "Albanien",
      image: { uri: "https://www.countryflags.io/al/flat/64.png" },
    },
    AM: {
      value: "AM",
      label: "Armenien",
      image: { uri: "https://www.countryflags.io/am/flat/64.png" },
    },
    AO: {
      value: "AO",
      label: "Angola",
      image: { uri: "https://www.countryflags.io/ao/flat/64.png" },
    },
    AR: {
      value: "AR",
      label: "Argentinien",
      image: { uri: "https://www.countryflags.io/ar/flat/64.png" },
    },
    AS: {
      value: "AS",
      label: "Amerikanisch-Samoa",
      image: { uri: "https://www.countryflags.io/as/flat/64.png" },
    },
    AT: {
      value: "AT",
      label: "Österreich",
      image: { uri: "https://www.countryflags.io/at/flat/64.png" },
    },
    AU: {
      value: "AU",
      label: "Australien",
      image: { uri: "https://www.countryflags.io/au/flat/64.png" },
    },
    AW: {
      value: "AW",
      label: "Aruba",
      image: { uri: "https://www.countryflags.io/aw/flat/64.png" },
    },
    AX: {
      value: "AX",
      label: "Åland",
      image: { uri: "https://www.countryflags.io/ax/flat/64.png" },
    },
    AZ: {
      value: "AZ",
      label: "Aserbaidschan",
      image: { uri: "https://www.countryflags.io/az/flat/64.png" },
    },
    BA: {
      value: "BA",
      label: "Bosnien und Herzegowina",
      image: { uri: "https://www.countryflags.io/ba/flat/64.png" },
    },
    BB: {
      value: "BB",
      label: "Barbados",
      image: { uri: "https://www.countryflags.io/bb/flat/64.png" },
    },
    BD: {
      value: "BD",
      label: "Bangladesch",
      image: { uri: "https://www.countryflags.io/bd/flat/64.png" },
    },
    BE: {
      value: "BE",
      label: "Belgien",
      image: { uri: "https://www.countryflags.io/be/flat/64.png" },
    },
    BF: {
      value: "BF",
      label: "Burkina Faso",
      image: { uri: "https://www.countryflags.io/bf/flat/64.png" },
    },
    BG: {
      value: "BG",
      label: "Bulgarien",
      image: { uri: "https://www.countryflags.io/bg/flat/64.png" },
    },
    BH: {
      value: "BH",
      label: "Bahrain",
      image: { uri: "https://www.countryflags.io/bh/flat/64.png" },
    },
    BI: {
      value: "BI",
      label: "Burundi",
      image: { uri: "https://www.countryflags.io/bi/flat/64.png" },
    },
    BJ: {
      value: "BJ",
      label: "Benin",
      image: { uri: "https://www.countryflags.io/bj/flat/64.png" },
    },
    BL: {
      value: "BL",
      label: "Saint-Barthélemy",
      image: { uri: "https://www.countryflags.io/bl/flat/64.png" },
    },
    BM: {
      value: "BM",
      label: "Bermuda",
      image: { uri: "https://www.countryflags.io/bm/flat/64.png" },
    },
    BN: {
      value: "BN",
      label: "Brunei Darussalam",
      image: { uri: "https://www.countryflags.io/bn/flat/64.png" },
    },
    BO: {
      value: "BO",
      label: "Bolivien",
      image: { uri: "https://www.countryflags.io/bo/flat/64.png" },
    },
    BQ: {
      value: "BQ",
      label: "Bonaire",
      image: { uri: "https://www.countryflags.io/bq/flat/64.png" },
    },
    BR: {
      value: "BR",
      label: "Brasilien",
      image: { uri: "https://www.countryflags.io/br/flat/64.png" },
    },
    BS: {
      value: "BS",
      label: "Bahamas",
      image: { uri: "https://www.countryflags.io/bs/flat/64.png" },
    },
    BT: {
      value: "BT",
      label: "Bhutan",
      image: { uri: "https://www.countryflags.io/bt/flat/64.png" },
    },
    BW: {
      value: "BW",
      label: "Botswana",
      image: { uri: "https://www.countryflags.io/bw/flat/64.png" },
    },
    BY: {
      value: "BY",
      label: "Weißrussland",
      image: { uri: "https://www.countryflags.io/by/flat/64.png" },
    },
    BZ: {
      value: "BZ",
      label: "Belize",
      image: { uri: "https://www.countryflags.io/bz/flat/64.png" },
    },
    CA: {
      value: "CA",
      label: "Kanada",
      image: { uri: "https://www.countryflags.io/ca/flat/64.png" },
    },
    CC: {
      value: "CC",
      label: "Kokosinseln",
      image: { uri: "https://www.countryflags.io/cc/flat/64.png" },
    },
    CD: {
      value: "CD",
      label: "Kongo",
      image: { uri: "https://www.countryflags.io/cd/flat/64.png" },
    },
    CF: {
      value: "CF",
      label: "Zentralafrikanische Republik",
      image: { uri: "https://www.countryflags.io/cf/flat/64.png" },
    },
    CG: {
      value: "CG",
      label: "Republik Kongo",
      image: { uri: "https://www.countryflags.io/cg/flat/64.png" },
    },
    CH: {
      value: "CH",
      label: "Schweiz",
      image: { uri: "https://www.countryflags.io/ch/flat/64.png" },
    },
    CI: {
      value: "CI",
      label: "Elfenbeinküste",
      image: { uri: "https://www.countryflags.io/ci/flat/64.png" },
    },
    CK: {
      value: "CK",
      label: "Cookinseln",
      image: { uri: "https://www.countryflags.io/ck/flat/64.png" },
    },
    CL: {
      value: "CL",
      label: "Chile",
      image: { uri: "https://www.countryflags.io/cl/flat/64.png" },
    },
    CM: {
      value: "CM",
      label: "Kamerun",
      image: { uri: "https://www.countryflags.io/cm/flat/64.png" },
    },
    CN: {
      value: "CN",
      label: "China",
      image: { uri: "https://www.countryflags.io/cn/flat/64.png" },
    },
    CO: {
      value: "CO",
      label: "Kolumbien",
      image: { uri: "https://www.countryflags.io/co/flat/64.png" },
    },
    CR: {
      value: "CR",
      label: "Costa Rica",
      image: { uri: "https://www.countryflags.io/cr/flat/64.png" },
    },
    CU: {
      value: "CU",
      label: "Kuba",
      image: { uri: "https://www.countryflags.io/cu/flat/64.png" },
    },
    CV: {
      value: "CV",
      label: "Kap Verde",
      image: { uri: "https://www.countryflags.io/cv/flat/64.png" },
    },
    CW: {
      value: "CW",
      label: "Curaçao",
      image: { uri: "https://www.countryflags.io/cw/flat/64.png" },
    },
    CX: {
      value: "CX",
      label: "Weihnachtsinsel",
      image: { uri: "https://www.countryflags.io/cx/flat/64.png" },
    },
    CY: {
      value: "CY",
      label: "Zypern",
      image: { uri: "https://www.countryflags.io/cy/flat/64.png" },
    },
    CZ: {
      value: "CZ",
      label: "Tschechische Republik",
      image: { uri: "https://www.countryflags.io/cz/flat/64.png" },
    },
    DE: {
      value: "DE",
      label: "Deutschland",
      image: { uri: "https://www.countryflags.io/de/flat/64.png" },
    },
    DJ: {
      value: "DJ",
      label: "Dschibuti",
      image: { uri: "https://www.countryflags.io/dj/flat/64.png" },
    },
    DK: {
      value: "DK",
      label: "Dänemark",
      image: { uri: "https://www.countryflags.io/dk/flat/64.png" },
    },
    DM: {
      value: "DM",
      label: "Dominica",
      image: { uri: "https://www.countryflags.io/dm/flat/64.png" },
    },
    DO: {
      value: "DO",
      label: "Dominikanische Republik",
      image: { uri: "https://www.countryflags.io/do/flat/64.png" },
    },
    DZ: {
      value: "DZ",
      label: "Algerien",
      image: { uri: "https://www.countryflags.io/dz/flat/64.png" },
    },
    EC: {
      value: "EC",
      label: "Ecuador",
      image: { uri: "https://www.countryflags.io/ec/flat/64.png" },
    },
    EE: {
      value: "EE",
      label: "Estland",
      image: { uri: "https://www.countryflags.io/ee/flat/64.png" },
    },
    EG: {
      value: "EG",
      label: "Ägypten",
      image: { uri: "https://www.countryflags.io/eg/flat/64.png" },
    },
    EH: {
      value: "EH",
      label: "Westsahara",
      image: { uri: "https://www.countryflags.io/eh/flat/64.png" },
    },
    ER: {
      value: "ER",
      label: "Eritrea",
      image: { uri: "https://www.countryflags.io/er/flat/64.png" },
    },
    ES: {
      value: "ES",
      label: "Spanien",
      image: { uri: "https://www.countryflags.io/es/flat/64.png" },
    },
    ET: {
      value: "ET",
      label: "Äthiopien",
      image: { uri: "https://www.countryflags.io/et/flat/64.png" },
    },
    FI: {
      value: "FI",
      label: "Finnland",
      image: { uri: "https://www.countryflags.io/fi/flat/64.png" },
    },
    FJ: {
      value: "FJ",
      label: "Fidschi",
      image: { uri: "https://www.countryflags.io/fj/flat/64.png" },
    },
    FK: {
      value: "FK",
      label: "Falklandinseln",
      image: { uri: "https://www.countryflags.io/fk/flat/64.png" },
    },
    FM: {
      value: "FM",
      label: "Mikronesien",
      image: { uri: "https://www.countryflags.io/fm/flat/64.png" },
    },
    FO: {
      value: "FO",
      label: "Färöer",
      image: { uri: "https://www.countryflags.io/fo/flat/64.png" },
    },
    FR: {
      value: "FR",
      label: "Frankreich",
      image: { uri: "https://www.countryflags.io/fr/flat/64.png" },
    },
    GA: {
      value: "GA",
      label: "Gabun",
      image: { uri: "https://www.countryflags.io/ga/flat/64.png" },
    },
    GB: {
      value: "GB",
      label: "Vereinigtes Königreich",
      image: { uri: "https://www.countryflags.io/gb/flat/64.png" },
    },
    GD: {
      value: "GD",
      label: "Grenada",
      image: { uri: "https://www.countryflags.io/gd/flat/64.png" },
    },
    GE: {
      value: "GE",
      label: "Georgien",
      image: { uri: "https://www.countryflags.io/ge/flat/64.png" },
    },
    GF: {
      value: "GF",
      label: "Französisch-Guayana",
      image: { uri: "https://www.countryflags.io/gf/flat/64.png" },
    },
    GG: {
      value: "GG",
      label: "Guernsey",
      image: { uri: "https://www.countryflags.io/gg/flat/64.png" },
    },
    GH: {
      value: "GH",
      label: "Ghana",
      image: { uri: "https://www.countryflags.io/gh/flat/64.png" },
    },
    GI: {
      value: "GI",
      label: "Gibraltar",
      image: { uri: "https://www.countryflags.io/gi/flat/64.png" },
    },
    GL: {
      value: "GL",
      label: "Grönland",
      image: { uri: "https://www.countryflags.io/gl/flat/64.png" },
    },
    GM: {
      value: "GM",
      label: "Gambia",
      image: { uri: "https://www.countryflags.io/gm/flat/64.png" },
    },
    GN: {
      value: "GN",
      label: "Guinea",
      image: { uri: "https://www.countryflags.io/gn/flat/64.png" },
    },
    GP: {
      value: "GP",
      label: "Guadeloupe",
      image: { uri: "https://www.countryflags.io/gp/flat/64.png" },
    },
    GQ: {
      value: "GQ",
      label: "Äquatorialguinea",
      image: { uri: "https://www.countryflags.io/gq/flat/64.png" },
    },
    GR: {
      value: "GR",
      label: "Griechenland",
      image: { uri: "https://www.countryflags.io/gr/flat/64.png" },
    },
    GT: {
      value: "GT",
      label: "Guatemala",
      image: { uri: "https://www.countryflags.io/gt/flat/64.png" },
    },
    GU: {
      value: "GU",
      label: "Guam",
      image: { uri: "https://www.countryflags.io/gu/flat/64.png" },
    },
    GW: {
      value: "GW",
      label: "Guinea-Bissau",
      image: { uri: "https://www.countryflags.io/gw/flat/64.png" },
    },
    GY: {
      value: "GY",
      label: "Guyana",
      image: { uri: "https://www.countryflags.io/gy/flat/64.png" },
    },
    HK: {
      value: "HK",
      label: "Hongkong",
      image: { uri: "https://www.countryflags.io/hk/flat/64.png" },
    },
    HN: {
      value: "HN",
      label: "Honduras",
      image: { uri: "https://www.countryflags.io/hn/flat/64.png" },
    },
    HR: {
      value: "HR",
      label: "Kroatien",
      image: { uri: "https://www.countryflags.io/hr/flat/64.png" },
    },
    HT: {
      value: "HT",
      label: "Haiti",
      image: { uri: "https://www.countryflags.io/ht/flat/64.png" },
    },
    HU: {
      value: "HU",
      label: "Ungarn",
      image: { uri: "https://www.countryflags.io/hu/flat/64.png" },
    },
    ID: {
      value: "ID",
      label: "Indonesien",
      image: { uri: "https://www.countryflags.io/id/flat/64.png" },
    },
    IE: {
      value: "IE",
      label: "Irland",
      image: { uri: "https://www.countryflags.io/ie/flat/64.png" },
    },
    IL: {
      value: "IL",
      label: "Israel",
      image: { uri: "https://www.countryflags.io/il/flat/64.png" },
    },
    IM: {
      value: "IM",
      label: "Insel Man",
      image: { uri: "https://www.countryflags.io/im/flat/64.png" },
    },
    IN: {
      value: "IN",
      label: "Indien",
      image: { uri: "https://www.countryflags.io/in/flat/64.png" },
    },
    IO: {
      value: "IO",
      label: "Britisches Territorium im Indischen Ozean",
      image: { uri: "https://www.countryflags.io/io/flat/64.png" },
    },
    IQ: {
      value: "IQ",
      label: "Irak",
      image: { uri: "https://www.countryflags.io/iq/flat/64.png" },
    },
    IR: {
      value: "IR",
      label: "Iran",
      image: { uri: "https://www.countryflags.io/ir/flat/64.png" },
    },
    IS: {
      value: "IS",
      label: "Island",
      image: { uri: "https://www.countryflags.io/is/flat/64.png" },
    },
    IT: {
      value: "IT",
      label: "Italien",
      image: { uri: "https://www.countryflags.io/it/flat/64.png" },
    },
    JE: {
      value: "JE",
      label: "Jersey",
      image: { uri: "https://www.countryflags.io/je/flat/64.png" },
    },
    JM: {
      value: "JM",
      label: "Jamaika",
      image: { uri: "https://www.countryflags.io/jm/flat/64.png" },
    },
    JO: {
      value: "JO",
      label: "Jordanien",
      image: { uri: "https://www.countryflags.io/jo/flat/64.png" },
    },
    JP: {
      value: "JP",
      label: "Japan",
      image: { uri: "https://www.countryflags.io/jp/flat/64.png" },
    },
    KE: {
      value: "KE",
      label: "Kenia",
      image: { uri: "https://www.countryflags.io/ke/flat/64.png" },
    },
    KG: {
      value: "KG",
      label: "Kirgisistan",
      image: { uri: "https://www.countryflags.io/kg/flat/64.png" },
    },
    KH: {
      value: "KH",
      label: "Kambodscha",
      image: { uri: "https://www.countryflags.io/kh/flat/64.png" },
    },
    KI: {
      value: "KI",
      label: "Kiribati",
      image: { uri: "https://www.countryflags.io/ki/flat/64.png" },
    },
    KM: {
      value: "KM",
      label: "Komoren",
      image: { uri: "https://www.countryflags.io/km/flat/64.png" },
    },
    KN: {
      value: "KN",
      label: "St. Kitts und Nevis",
      image: { uri: "https://www.countryflags.io/kn/flat/64.png" },
    },
    KP: {
      value: "KP",
      label: "Nordkorea",
      image: { uri: "https://www.countryflags.io/kp/flat/64.png" },
    },
    KR: {
      value: "KR",
      label: "Südkorea",
      image: { uri: "https://www.countryflags.io/kr/flat/64.png" },
    },
    KW: {
      value: "KW",
      label: "Kuwait",
      image: { uri: "https://www.countryflags.io/kw/flat/64.png" },
    },
    KY: {
      value: "KY",
      label: "Kaimaninseln",
      image: { uri: "https://www.countryflags.io/ky/flat/64.png" },
    },
    KZ: {
      value: "KZ",
      label: "Kasachstan",
      image: { uri: "https://www.countryflags.io/kz/flat/64.png" },
    },
    LA: {
      value: "LA",
      label: "Laos",
      image: { uri: "https://www.countryflags.io/la/flat/64.png" },
    },
    LB: {
      value: "LB",
      label: "Libanon",
      image: { uri: "https://www.countryflags.io/lb/flat/64.png" },
    },
    LC: {
      value: "LC",
      label: "St. Lucia",
      image: { uri: "https://www.countryflags.io/lc/flat/64.png" },
    },
    LI: {
      value: "LI",
      label: "Liechtenstein",
      image: { uri: "https://www.countryflags.io/li/flat/64.png" },
    },
    LK: {
      value: "LK",
      label: "Sri Lanka",
      image: { uri: "https://www.countryflags.io/lk/flat/64.png" },
    },
    LR: {
      value: "LR",
      label: "Liberia",
      image: { uri: "https://www.countryflags.io/lr/flat/64.png" },
    },
    LS: {
      value: "LS",
      label: "Lesotho",
      image: { uri: "https://www.countryflags.io/ls/flat/64.png" },
    },
    LT: {
      value: "LT",
      label: "Litauen",
      image: { uri: "https://www.countryflags.io/lt/flat/64.png" },
    },
    LU: {
      value: "LU",
      label: "Luxemburg",
      image: { uri: "https://www.countryflags.io/lu/flat/64.png" },
    },
    LV: {
      value: "LV",
      label: "Lettland",
      image: { uri: "https://www.countryflags.io/lv/flat/64.png" },
    },
    LY: {
      value: "LY",
      label: "Libyen",
      image: { uri: "https://www.countryflags.io/ly/flat/64.png" },
    },
    MA: {
      value: "MA",
      label: "Marokko",
      image: { uri: "https://www.countryflags.io/ma/flat/64.png" },
    },
    MC: {
      value: "MC",
      label: "Monaco",
      image: { uri: "https://www.countryflags.io/mc/flat/64.png" },
    },
    MD: {
      value: "MD",
      label: "Moldawien",
      image: { uri: "https://www.countryflags.io/md/flat/64.png" },
    },
    ME: {
      value: "ME",
      label: "Montenegro",
      image: { uri: "https://www.countryflags.io/me/flat/64.png" },
    },
    MF: {
      value: "MF",
      label: "Saint-Martin",
      image: { uri: "https://www.countryflags.io/mf/flat/64.png" },
    },
    MG: {
      value: "MG",
      label: "Madagaskar",
      image: { uri: "https://www.countryflags.io/mg/flat/64.png" },
    },
    MH: {
      value: "MH",
      label: "Marshallinseln",
      image: { uri: "https://www.countryflags.io/mh/flat/64.png" },
    },
    MK: {
      value: "MK",
      label: "Nordmazedonien",
      image: { uri: "https://www.countryflags.io/mk/flat/64.png" },
    },
    ML: {
      value: "ML",
      label: "Mali",
      image: { uri: "https://www.countryflags.io/ml/flat/64.png" },
    },
    MM: {
      value: "MM",
      label: "Myanmar",
      image: { uri: "https://www.countryflags.io/mm/flat/64.png" },
    },
    MN: {
      value: "MN",
      label: "Mongolei",
      image: { uri: "https://www.countryflags.io/mn/flat/64.png" },
    },
    MO: {
      value: "MO",
      label: "Macao",
      image: { uri: "https://www.countryflags.io/mo/flat/64.png" },
    },
    MP: {
      value: "MP",
      label: "Nördliche Marianen",
      image: { uri: "https://www.countryflags.io/mp/flat/64.png" },
    },
    MQ: {
      value: "MQ",
      label: "Martinique",
      image: { uri: "https://www.countryflags.io/mq/flat/64.png" },
    },
    MR: {
      value: "MR",
      label: "Mauretanien",
      image: { uri: "https://www.countryflags.io/mr/flat/64.png" },
    },
    MS: {
      value: "MS",
      label: "Montserrat",
      image: { uri: "https://www.countryflags.io/ms/flat/64.png" },
    },
    MT: {
      value: "MT",
      label: "Malta",
      image: { uri: "https://www.countryflags.io/mt/flat/64.png" },
    },
    MU: {
      value: "MU",
      label: "Mauritius",
      image: { uri: "https://www.countryflags.io/mu/flat/64.png" },
    },
    MV: {
      value: "MV",
      label: "Malediven",
      image: { uri: "https://www.countryflags.io/mv/flat/64.png" },
    },
    MW: {
      value: "MW",
      label: "Malawi",
      image: { uri: "https://www.countryflags.io/mw/flat/64.png" },
    },
    MX: {
      value: "MX",
      label: "Mexiko",
      image: { uri: "https://www.countryflags.io/mx/flat/64.png" },
    },
    MY: {
      value: "MY",
      label: "Malaysia",
      image: { uri: "https://www.countryflags.io/my/flat/64.png" },
    },
    MZ: {
      value: "MZ",
      label: "Mosambik",
      image: { uri: "https://www.countryflags.io/mz/flat/64.png" },
    },
    NA: {
      value: "NA",
      label: "Namibia",
      image: { uri: "https://www.countryflags.io/na/flat/64.png" },
    },
    NC: {
      value: "NC",
      label: "Neukaledonien",
      image: { uri: "https://www.countryflags.io/nc/flat/64.png" },
    },
    NE: {
      value: "NE",
      label: "Niger",
      image: { uri: "https://www.countryflags.io/ne/flat/64.png" },
    },
    NF: {
      value: "NF",
      label: "Norfolkinsel",
      image: { uri: "https://www.countryflags.io/nf/flat/64.png" },
    },
    NG: {
      value: "NG",
      label: "Nigeria",
      image: { uri: "https://www.countryflags.io/ng/flat/64.png" },
    },
    NI: {
      value: "NI",
      label: "Nicaragua",
      image: { uri: "https://www.countryflags.io/ni/flat/64.png" },
    },
    NL: {
      value: "NL",
      label: "Niederlande",
      image: { uri: "https://www.countryflags.io/nl/flat/64.png" },
    },
    NO: {
      value: "NO",
      label: "Norwegen",
      image: { uri: "https://www.countryflags.io/no/flat/64.png" },
    },
    NP: {
      value: "NP",
      label: "Nepal",
      image: { uri: "https://www.countryflags.io/np/flat/64.png" },
    },
    NR: {
      value: "NR",
      label: "Nauru",
      image: { uri: "https://www.countryflags.io/nr/flat/64.png" },
    },
    NU: {
      value: "NU",
      label: "Niue",
      image: { uri: "https://www.countryflags.io/nu/flat/64.png" },
    },
    NZ: {
      value: "NZ",
      label: "Neuseeland",
      image: { uri: "https://www.countryflags.io/nz/flat/64.png" },
    },
    OM: {
      value: "OM",
      label: "Oman",
      image: { uri: "https://www.countryflags.io/om/flat/64.png" },
    },
    PA: {
      value: "PA",
      label: "Panama",
      image: { uri: "https://www.countryflags.io/pa/flat/64.png" },
    },
    PE: {
      value: "PE",
      label: "Peru",
      image: { uri: "https://www.countryflags.io/pe/flat/64.png" },
    },
    PF: {
      value: "PF",
      label: "Französisch-Polynesien",
      image: { uri: "https://www.countryflags.io/pf/flat/64.png" },
    },
    PG: {
      value: "PG",
      label: "Papua-Neuguinea",
      image: { uri: "https://www.countryflags.io/pg/flat/64.png" },
    },
    PH: {
      value: "PH",
      label: "Philippinen",
      image: { uri: "https://www.countryflags.io/ph/flat/64.png" },
    },
    PK: {
      value: "PK",
      label: "Pakistan",
      image: { uri: "https://www.countryflags.io/pk/flat/64.png" },
    },
    PL: {
      value: "PL",
      label: "Polen",
      image: { uri: "https://www.countryflags.io/pl/flat/64.png" },
    },
    PM: {
      value: "PM",
      label: "Saint-Pierre und Miquelon",
      image: { uri: "https://www.countryflags.io/pm/flat/64.png" },
    },
    PR: {
      value: "PR",
      label: "Puerto Rico",
      image: { uri: "https://www.countryflags.io/pr/flat/64.png" },
    },
    PS: {
      value: "PS",
      label: "Staat Palästina",
      image: { uri: "https://www.countryflags.io/ps/flat/64.png" },
    },
    PT: {
      value: "PT",
      label: "Portugal",
      image: { uri: "https://www.countryflags.io/pt/flat/64.png" },
    },
    PW: {
      value: "PW",
      label: "Palau",
      image: { uri: "https://www.countryflags.io/pw/flat/64.png" },
    },
    PY: {
      value: "PY",
      label: "Paraguay",
      image: { uri: "https://www.countryflags.io/py/flat/64.png" },
    },
    QA: {
      value: "QA",
      label: "Katar",
      image: { uri: "https://www.countryflags.io/qa/flat/64.png" },
    },
    RE: {
      value: "RE",
      label: "Réunion",
      image: { uri: "https://www.countryflags.io/re/flat/64.png" },
    },
    RO: {
      value: "RO",
      label: "Rumänien",
      image: { uri: "https://www.countryflags.io/ro/flat/64.png" },
    },
    RS: {
      value: "RS",
      label: "Serbien",
      image: { uri: "https://www.countryflags.io/rs/flat/64.png" },
    },
    RU: {
      value: "RU",
      label: "Russische Föderation",
      image: { uri: "https://www.countryflags.io/ru/flat/64.png" },
    },
    RW: {
      value: "RW",
      label: "Ruanda",
      image: { uri: "https://www.countryflags.io/rw/flat/64.png" },
    },
    SA: {
      value: "SA",
      label: "Saudi-Arabien",
      image: { uri: "https://www.countryflags.io/sa/flat/64.png" },
    },
    SB: {
      value: "SB",
      label: "Salomonen",
      image: { uri: "https://www.countryflags.io/sb/flat/64.png" },
    },
    SC: {
      value: "SC",
      label: "Seychellen",
      image: { uri: "https://www.countryflags.io/sc/flat/64.png" },
    },
    SD: {
      value: "SD",
      label: "Sudan",
      image: { uri: "https://www.countryflags.io/sd/flat/64.png" },
    },
    SE: {
      value: "SE",
      label: "Schweden",
      image: { uri: "https://www.countryflags.io/se/flat/64.png" },
    },
    SG: {
      value: "SG",
      label: "Singapur",
      image: { uri: "https://www.countryflags.io/sg/flat/64.png" },
    },
    SH: {
      value: "SH",
      label: "St. Helena",
      image: { uri: "https://www.countryflags.io/sh/flat/64.png" },
    },
    SI: {
      value: "SI",
      label: "Slowenien",
      image: { uri: "https://www.countryflags.io/si/flat/64.png" },
    },
    SJ: {
      value: "SJ",
      label: "Svalbard und Jan Mayen",
      image: { uri: "https://www.countryflags.io/sj/flat/64.png" },
    },
    SK: {
      value: "SK",
      label: "Slowakei",
      image: { uri: "https://www.countryflags.io/sk/flat/64.png" },
    },
    SL: {
      value: "SL",
      label: "Sierra Leone",
      image: { uri: "https://www.countryflags.io/sl/flat/64.png" },
    },
    SM: {
      value: "SM",
      label: "San Marino",
      image: { uri: "https://www.countryflags.io/sm/flat/64.png" },
    },
    SN: {
      value: "SN",
      label: "Senegal",
      image: { uri: "https://www.countryflags.io/sn/flat/64.png" },
    },
    SO: {
      value: "SO",
      label: "Somalia",
      image: { uri: "https://www.countryflags.io/so/flat/64.png" },
    },
    SR: {
      value: "SR",
      label: "Suriname",
      image: { uri: "https://www.countryflags.io/sr/flat/64.png" },
    },
    SS: {
      value: "SS",
      label: "Südsudan",
      image: { uri: "https://www.countryflags.io/ss/flat/64.png" },
    },
    ST: {
      value: "ST",
      label: "São Tomé und Príncipe",
      image: { uri: "https://www.countryflags.io/st/flat/64.png" },
    },
    SV: {
      value: "SV",
      label: "El Salvador",
      image: { uri: "https://www.countryflags.io/sv/flat/64.png" },
    },
    SX: {
      value: "SX",
      label: "Sint Maarten",
      image: { uri: "https://www.countryflags.io/sx/flat/64.png" },
    },
    SY: {
      value: "SY",
      label: "Syrien, Arabische Republik",
      image: { uri: "https://www.countryflags.io/sy/flat/64.png" },
    },
    SZ: {
      value: "SZ",
      label: "Swasiland",
      image: { uri: "https://www.countryflags.io/sz/flat/64.png" },
    },
    TC: {
      value: "TC",
      label: "Turks- und Caicosinseln",
      image: { uri: "https://www.countryflags.io/tc/flat/64.png" },
    },
    TD: {
      value: "TD",
      label: "Tschad",
      image: { uri: "https://www.countryflags.io/td/flat/64.png" },
    },
    TG: {
      value: "TG",
      label: "Togo",
      image: { uri: "https://www.countryflags.io/tg/flat/64.png" },
    },
    TH: {
      value: "TH",
      label: "Thailand",
      image: { uri: "https://www.countryflags.io/th/flat/64.png" },
    },
    TJ: {
      value: "TJ",
      label: "Tadschikistan",
      image: { uri: "https://www.countryflags.io/tj/flat/64.png" },
    },
    TK: {
      value: "TK",
      label: "Tokelau",
      image: { uri: "https://www.countryflags.io/tk/flat/64.png" },
    },
    TL: {
      value: "TL",
      label: "Osttimor",
      image: { uri: "https://www.countryflags.io/tl/flat/64.png" },
    },
    TM: {
      value: "TM",
      label: "Turkmenistan",
      image: { uri: "https://www.countryflags.io/tm/flat/64.png" },
    },
    TN: {
      value: "TN",
      label: "Tunesien",
      image: { uri: "https://www.countryflags.io/tn/flat/64.png" },
    },
    TO: {
      value: "TO",
      label: "Tonga",
      image: { uri: "https://www.countryflags.io/to/flat/64.png" },
    },
    TR: {
      value: "TR",
      label: "Türkei",
      image: { uri: "https://www.countryflags.io/tr/flat/64.png" },
    },
    TT: {
      value: "TT",
      label: "Trinidad und Tobago",
      image: { uri: "https://www.countryflags.io/tt/flat/64.png" },
    },
    TV: {
      value: "TV",
      label: "Tuvalu",
      image: { uri: "https://www.countryflags.io/tv/flat/64.png" },
    },
    TW: {
      value: "TW",
      label: "Taiwan",
      image: { uri: "https://www.countryflags.io/tw/flat/64.png" },
    },
    TZ: {
      value: "TZ",
      label: "Tansania, Vereinigte Republik",
      image: { uri: "https://www.countryflags.io/tz/flat/64.png" },
    },
    UA: {
      value: "UA",
      label: "Ukraine",
      image: { uri: "https://www.countryflags.io/ua/flat/64.png" },
    },
    UG: {
      value: "UG",
      label: "Uganda",
      image: { uri: "https://www.countryflags.io/ug/flat/64.png" },
    },
    US: {
      value: "US",
      label: "Vereinigte Staaten von Amerika",
      image: { uri: "https://www.countryflags.io/us/flat/64.png" },
    },
    UY: {
      value: "UY",
      label: "Uruguay",
      image: { uri: "https://www.countryflags.io/uy/flat/64.png" },
    },
    UZ: {
      value: "UZ",
      label: "Usbekistan",
      image: { uri: "https://www.countryflags.io/uz/flat/64.png" },
    },
    VA: {
      value: "VA",
      label: "Vatikanstadt",
      image: { uri: "https://www.countryflags.io/va/flat/64.png" },
    },
    VC: {
      value: "VC",
      label: "St. Vincent und die Grenadinen",
      image: { uri: "https://www.countryflags.io/vc/flat/64.png" },
    },
    VE: {
      value: "VE",
      label: "Venezuela",
      image: { uri: "https://www.countryflags.io/ve/flat/64.png" },
    },
    VG: {
      value: "VG",
      label: "Britische Jungferninseln",
      image: { uri: "https://www.countryflags.io/vg/flat/64.png" },
    },
    VI: {
      value: "VI",
      label: "Amerikanische Jungferninseln",
      image: { uri: "https://www.countryflags.io/vi/flat/64.png" },
    },
    VN: {
      value: "VN",
      label: "Vietnam",
      image: { uri: "https://www.countryflags.io/vn/flat/64.png" },
    },
    VU: {
      value: "VU",
      label: "Vanuatu",
      image: { uri: "https://www.countryflags.io/vu/flat/64.png" },
    },
    WF: {
      value: "WF",
      label: "Wallis und Futuna",
      image: { uri: "https://www.countryflags.io/wf/flat/64.png" },
    },
    WS: {
      value: "WS",
      label: "Samoa",
      image: { uri: "https://www.countryflags.io/ws/flat/64.png" },
    },
    XK: {
      value: "XK",
      label: "Kosovo",
      image: { uri: "https://www.countryflags.io/xk/flat/64.png" },
    },
    YE: {
      value: "YE",
      label: "Jemen",
      image: { uri: "https://www.countryflags.io/ye/flat/64.png" },
    },
    YT: {
      value: "YT",
      label: "Mayotte",
      image: { uri: "https://www.countryflags.io/yt/flat/64.png" },
    },
    ZA: {
      value: "ZA",
      label: "Südafrika",
      image: { uri: "https://www.countryflags.io/za/flat/64.png" },
    },
    ZM: {
      value: "ZM",
      label: "Sambia",
      image: { uri: "https://www.countryflags.io/zm/flat/64.png" },
    },
    ZW: {
      value: "ZW",
      label: "Simbabwe",
      image: { uri: "https://www.countryflags.io/zw/flat/64.png" },
    },
  },
  en: {
    AD: {
      value: "AD",
      label: "Andorra",
      image: { uri: "https://www.countryflags.io/ad/flat/64.png" },
    },
    AE: {
      value: "AE",
      label: "United Arab Emirates",
      image: { uri: "https://www.countryflags.io/ae/flat/64.png" },
    },
    AF: {
      value: "AF",
      label: "Afghanistan",
      image: { uri: "https://www.countryflags.io/af/flat/64.png" },
    },
    AG: {
      value: "AG",
      label: "Antigua and Barbuda",
      image: { uri: "https://www.countryflags.io/ag/flat/64.png" },
    },
    AI: {
      value: "AI",
      label: "Anguilla",
      image: { uri: "https://www.countryflags.io/ai/flat/64.png" },
    },
    AL: {
      value: "AL",
      label: "Albania",
      image: { uri: "https://www.countryflags.io/al/flat/64.png" },
    },
    AM: {
      value: "AM",
      label: "Armenia",
      image: { uri: "https://www.countryflags.io/am/flat/64.png" },
    },
    AO: {
      value: "AO",
      label: "Angola",
      image: { uri: "https://www.countryflags.io/ao/flat/64.png" },
    },
    AR: {
      value: "AR",
      label: "Argentina",
      image: { uri: "https://www.countryflags.io/ar/flat/64.png" },
    },
    AS: {
      value: "AS",
      label: "American Samoa",
      image: { uri: "https://www.countryflags.io/as/flat/64.png" },
    },
    AT: {
      value: "AT",
      label: "Austria",
      image: { uri: "https://www.countryflags.io/at/flat/64.png" },
    },
    AU: {
      value: "AU",
      label: "Australia",
      image: { uri: "https://www.countryflags.io/au/flat/64.png" },
    },
    AW: {
      value: "AW",
      label: "Aruba",
      image: { uri: "https://www.countryflags.io/aw/flat/64.png" },
    },
    AX: {
      value: "AX",
      label: "Åland Islands",
      image: { uri: "https://www.countryflags.io/ax/flat/64.png" },
    },
    AZ: {
      value: "AZ",
      label: "Azerbaijan",
      image: { uri: "https://www.countryflags.io/az/flat/64.png" },
    },
    BA: {
      value: "BA",
      label: "Bosnia and Herzegovina",
      image: { uri: "https://www.countryflags.io/ba/flat/64.png" },
    },
    BB: {
      value: "BB",
      label: "Barbados",
      image: { uri: "https://www.countryflags.io/bb/flat/64.png" },
    },
    BD: {
      value: "BD",
      label: "Bangladesh",
      image: { uri: "https://www.countryflags.io/bd/flat/64.png" },
    },
    BE: {
      value: "BE",
      label: "Belgium",
      image: { uri: "https://www.countryflags.io/be/flat/64.png" },
    },
    BF: {
      value: "BF",
      label: "Burkina Faso",
      image: { uri: "https://www.countryflags.io/bf/flat/64.png" },
    },
    BG: {
      value: "BG",
      label: "Bulgaria",
      image: { uri: "https://www.countryflags.io/bg/flat/64.png" },
    },
    BH: {
      value: "BH",
      label: "Bahrain",
      image: { uri: "https://www.countryflags.io/bh/flat/64.png" },
    },
    BI: {
      value: "BI",
      label: "Burundi",
      image: { uri: "https://www.countryflags.io/bi/flat/64.png" },
    },
    BJ: {
      value: "BJ",
      label: "Benin",
      image: { uri: "https://www.countryflags.io/bj/flat/64.png" },
    },
    BL: {
      value: "BL",
      label: "Saint Barthélemy",
      image: { uri: "https://www.countryflags.io/bl/flat/64.png" },
    },
    BM: {
      value: "BM",
      label: "Bermuda",
      image: { uri: "https://www.countryflags.io/bm/flat/64.png" },
    },
    BN: {
      value: "BN",
      label: "Brunei Darussalam",
      image: { uri: "https://www.countryflags.io/bn/flat/64.png" },
    },
    BO: {
      value: "BO",
      label: "Bolivia",
      image: { uri: "https://www.countryflags.io/bo/flat/64.png" },
    },
    BQ: {
      value: "BQ",
      label: "Bonaire, Sint Eustatius and Saba",
      image: { uri: "https://www.countryflags.io/bq/flat/64.png" },
    },
    BR: {
      value: "BR",
      label: "Brazil",
      image: { uri: "https://www.countryflags.io/br/flat/64.png" },
    },
    BS: {
      value: "BS",
      label: "Bahamas",
      image: { uri: "https://www.countryflags.io/bs/flat/64.png" },
    },
    BT: {
      value: "BT",
      label: "Bhutan",
      image: { uri: "https://www.countryflags.io/bt/flat/64.png" },
    },
    BW: {
      value: "BW",
      label: "Botswana",
      image: { uri: "https://www.countryflags.io/bw/flat/64.png" },
    },
    BY: {
      value: "BY",
      label: "Belarus",
      image: { uri: "https://www.countryflags.io/by/flat/64.png" },
    },
    BZ: {
      value: "BZ",
      label: "Belize",
      image: { uri: "https://www.countryflags.io/bz/flat/64.png" },
    },
    CA: {
      value: "CA",
      label: "Canada",
      image: { uri: "https://www.countryflags.io/ca/flat/64.png" },
    },
    CC: {
      value: "CC",
      label: "Cocos (Keeling) Islands",
      image: { uri: "https://www.countryflags.io/cc/flat/64.png" },
    },
    CD: {
      value: "CD",
      label: "Congo, the Democratic Republic of the",
      image: { uri: "https://www.countryflags.io/cd/flat/64.png" },
    },
    CF: {
      value: "CF",
      label: "Central African Republic",
      image: { uri: "https://www.countryflags.io/cf/flat/64.png" },
    },
    CG: {
      value: "CG",
      label: "Congo",
      image: { uri: "https://www.countryflags.io/cg/flat/64.png" },
    },
    CH: {
      value: "CH",
      label: "Switzerland",
      image: { uri: "https://www.countryflags.io/ch/flat/64.png" },
    },
    CI: {
      value: "CI",
      label: "Cote D'Ivoire",
      image: { uri: "https://www.countryflags.io/ci/flat/64.png" },
    },
    CK: {
      value: "CK",
      label: "Cook Islands",
      image: { uri: "https://www.countryflags.io/ck/flat/64.png" },
    },
    CL: {
      value: "CL",
      label: "Chile",
      image: { uri: "https://www.countryflags.io/cl/flat/64.png" },
    },
    CM: {
      value: "CM",
      label: "Cameroon",
      image: { uri: "https://www.countryflags.io/cm/flat/64.png" },
    },
    CN: {
      value: "CN",
      label: "China",
      image: { uri: "https://www.countryflags.io/cn/flat/64.png" },
    },
    CO: {
      value: "CO",
      label: "Colombia",
      image: { uri: "https://www.countryflags.io/co/flat/64.png" },
    },
    CR: {
      value: "CR",
      label: "Costa Rica",
      image: { uri: "https://www.countryflags.io/cr/flat/64.png" },
    },
    CU: {
      value: "CU",
      label: "Cuba",
      image: { uri: "https://www.countryflags.io/cu/flat/64.png" },
    },
    CV: {
      value: "CV",
      label: "Cape Verde",
      image: { uri: "https://www.countryflags.io/cv/flat/64.png" },
    },
    CW: {
      value: "CW",
      label: "Curaçao",
      image: { uri: "https://www.countryflags.io/cw/flat/64.png" },
    },
    CX: {
      value: "CX",
      label: "Christmas Island",
      image: { uri: "https://www.countryflags.io/cx/flat/64.png" },
    },
    CY: {
      value: "CY",
      label: "Cyprus",
      image: { uri: "https://www.countryflags.io/cy/flat/64.png" },
    },
    CZ: {
      value: "CZ",
      label: "Czech Republic",
      image: { uri: "https://www.countryflags.io/cz/flat/64.png" },
    },
    DE: {
      value: "DE",
      label: "Germany",
      image: { uri: "https://www.countryflags.io/de/flat/64.png" },
    },
    DJ: {
      value: "DJ",
      label: "Djibouti",
      image: { uri: "https://www.countryflags.io/dj/flat/64.png" },
    },
    DK: {
      value: "DK",
      label: "Denmark",
      image: { uri: "https://www.countryflags.io/dk/flat/64.png" },
    },
    DM: {
      value: "DM",
      label: "Dominica",
      image: { uri: "https://www.countryflags.io/dm/flat/64.png" },
    },
    DO: {
      value: "DO",
      label: "Dominican Republic",
      image: { uri: "https://www.countryflags.io/do/flat/64.png" },
    },
    DZ: {
      value: "DZ",
      label: "Algeria",
      image: { uri: "https://www.countryflags.io/dz/flat/64.png" },
    },
    EC: {
      value: "EC",
      label: "Ecuador",
      image: { uri: "https://www.countryflags.io/ec/flat/64.png" },
    },
    EE: {
      value: "EE",
      label: "Estonia",
      image: { uri: "https://www.countryflags.io/ee/flat/64.png" },
    },
    EG: {
      value: "EG",
      label: "Egypt",
      image: { uri: "https://www.countryflags.io/eg/flat/64.png" },
    },
    EH: {
      value: "EH",
      label: "Western Sahara",
      image: { uri: "https://www.countryflags.io/eh/flat/64.png" },
    },
    ER: {
      value: "ER",
      label: "Eritrea",
      image: { uri: "https://www.countryflags.io/er/flat/64.png" },
    },
    ES: {
      value: "ES",
      label: "Spain",
      image: { uri: "https://www.countryflags.io/es/flat/64.png" },
    },
    ET: {
      value: "ET",
      label: "Ethiopia",
      image: { uri: "https://www.countryflags.io/et/flat/64.png" },
    },
    FI: {
      value: "FI",
      label: "Finland",
      image: { uri: "https://www.countryflags.io/fi/flat/64.png" },
    },
    FJ: {
      value: "FJ",
      label: "Fiji",
      image: { uri: "https://www.countryflags.io/fj/flat/64.png" },
    },
    FK: {
      value: "FK",
      label: "Falkland Islands (Malvinas)",
      image: { uri: "https://www.countryflags.io/fk/flat/64.png" },
    },
    FM: {
      value: "FM",
      label: "Micronesia, Federated States of",
      image: { uri: "https://www.countryflags.io/fm/flat/64.png" },
    },
    FO: {
      value: "FO",
      label: "Faroe Islands",
      image: { uri: "https://www.countryflags.io/fo/flat/64.png" },
    },
    FR: {
      value: "FR",
      label: "France",
      image: { uri: "https://www.countryflags.io/fr/flat/64.png" },
    },
    GA: {
      value: "GA",
      label: "Gabon",
      image: { uri: "https://www.countryflags.io/ga/flat/64.png" },
    },
    GB: {
      value: "GB",
      label: "United Kingdom",
      image: { uri: "https://www.countryflags.io/gb/flat/64.png" },
    },
    GD: {
      value: "GD",
      label: "Grenada",
      image: { uri: "https://www.countryflags.io/gd/flat/64.png" },
    },
    GE: {
      value: "GE",
      label: "Georgia",
      image: { uri: "https://www.countryflags.io/ge/flat/64.png" },
    },
    GF: {
      value: "GF",
      label: "French Guiana",
      image: { uri: "https://www.countryflags.io/gf/flat/64.png" },
    },
    GG: {
      value: "GG",
      label: "Guernsey",
      image: { uri: "https://www.countryflags.io/gg/flat/64.png" },
    },
    GH: {
      value: "GH",
      label: "Ghana",
      image: { uri: "https://www.countryflags.io/gh/flat/64.png" },
    },
    GI: {
      value: "GI",
      label: "Gibraltar",
      image: { uri: "https://www.countryflags.io/gi/flat/64.png" },
    },
    GL: {
      value: "GL",
      label: "Greenland",
      image: { uri: "https://www.countryflags.io/gl/flat/64.png" },
    },
    GM: {
      value: "GM",
      label: "Gambia",
      image: { uri: "https://www.countryflags.io/gm/flat/64.png" },
    },
    GN: {
      value: "GN",
      label: "Guinea",
      image: { uri: "https://www.countryflags.io/gn/flat/64.png" },
    },
    GP: {
      value: "GP",
      label: "Guadeloupe",
      image: { uri: "https://www.countryflags.io/gp/flat/64.png" },
    },
    GQ: {
      value: "GQ",
      label: "Equatorial Guinea",
      image: { uri: "https://www.countryflags.io/gq/flat/64.png" },
    },
    GR: {
      value: "GR",
      label: "Greece",
      image: { uri: "https://www.countryflags.io/gr/flat/64.png" },
    },
    GT: {
      value: "GT",
      label: "Guatemala",
      image: { uri: "https://www.countryflags.io/gt/flat/64.png" },
    },
    GU: {
      value: "GU",
      label: "Guam",
      image: { uri: "https://www.countryflags.io/gu/flat/64.png" },
    },
    GW: {
      value: "GW",
      label: "Guinea-Bissau",
      image: { uri: "https://www.countryflags.io/gw/flat/64.png" },
    },
    GY: {
      value: "GY",
      label: "Guyana",
      image: { uri: "https://www.countryflags.io/gy/flat/64.png" },
    },
    HK: {
      value: "HK",
      label: "Hong Kong",
      image: { uri: "https://www.countryflags.io/hk/flat/64.png" },
    },
    HN: {
      value: "HN",
      label: "Honduras",
      image: { uri: "https://www.countryflags.io/hn/flat/64.png" },
    },
    HR: {
      value: "HR",
      label: "Croatia",
      image: { uri: "https://www.countryflags.io/hr/flat/64.png" },
    },
    HT: {
      value: "HT",
      label: "Haiti",
      image: { uri: "https://www.countryflags.io/ht/flat/64.png" },
    },
    HU: {
      value: "HU",
      label: "Hungary",
      image: { uri: "https://www.countryflags.io/hu/flat/64.png" },
    },
    ID: {
      value: "ID",
      label: "Indonesia",
      image: { uri: "https://www.countryflags.io/id/flat/64.png" },
    },
    IE: {
      value: "IE",
      label: "Ireland",
      image: { uri: "https://www.countryflags.io/ie/flat/64.png" },
    },
    IL: {
      value: "IL",
      label: "Israel",
      image: { uri: "https://www.countryflags.io/il/flat/64.png" },
    },
    IM: {
      value: "IM",
      label: "Isle of Man",
      image: { uri: "https://www.countryflags.io/im/flat/64.png" },
    },
    IN: {
      value: "IN",
      label: "India",
      image: { uri: "https://www.countryflags.io/in/flat/64.png" },
    },
    IO: {
      value: "IO",
      label: "British Indian Ocean Territory",
      image: { uri: "https://www.countryflags.io/io/flat/64.png" },
    },
    IQ: {
      value: "IQ",
      label: "Iraq",
      image: { uri: "https://www.countryflags.io/iq/flat/64.png" },
    },
    IR: {
      value: "IR",
      label: "Iran, Islamic Republic of",
      image: { uri: "https://www.countryflags.io/ir/flat/64.png" },
    },
    IS: {
      value: "IS",
      label: "Iceland",
      image: { uri: "https://www.countryflags.io/is/flat/64.png" },
    },
    IT: {
      value: "IT",
      label: "Italy",
      image: { uri: "https://www.countryflags.io/it/flat/64.png" },
    },
    JE: {
      value: "JE",
      label: "Jersey",
      image: { uri: "https://www.countryflags.io/je/flat/64.png" },
    },
    JM: {
      value: "JM",
      label: "Jamaica",
      image: { uri: "https://www.countryflags.io/jm/flat/64.png" },
    },
    JO: {
      value: "JO",
      label: "Jordan",
      image: { uri: "https://www.countryflags.io/jo/flat/64.png" },
    },
    JP: {
      value: "JP",
      label: "Japan",
      image: { uri: "https://www.countryflags.io/jp/flat/64.png" },
    },
    KE: {
      value: "KE",
      label: "Kenya",
      image: { uri: "https://www.countryflags.io/ke/flat/64.png" },
    },
    KG: {
      value: "KG",
      label: "Kyrgyzstan",
      image: { uri: "https://www.countryflags.io/kg/flat/64.png" },
    },
    KH: {
      value: "KH",
      label: "Cambodia",
      image: { uri: "https://www.countryflags.io/kh/flat/64.png" },
    },
    KI: {
      value: "KI",
      label: "Kiribati",
      image: { uri: "https://www.countryflags.io/ki/flat/64.png" },
    },
    KM: {
      value: "KM",
      label: "Comoros",
      image: { uri: "https://www.countryflags.io/km/flat/64.png" },
    },
    KN: {
      value: "KN",
      label: "Saint Kitts and Nevis",
      image: { uri: "https://www.countryflags.io/kn/flat/64.png" },
    },
    KP: {
      value: "KP",
      label: "North Korea",
      image: { uri: "https://www.countryflags.io/kp/flat/64.png" },
    },
    KR: {
      value: "KR",
      label: "South Korea",
      image: { uri: "https://www.countryflags.io/kr/flat/64.png" },
    },
    KW: {
      value: "KW",
      label: "Kuwait",
      image: { uri: "https://www.countryflags.io/kw/flat/64.png" },
    },
    KY: {
      value: "KY",
      label: "Cayman Islands",
      image: { uri: "https://www.countryflags.io/ky/flat/64.png" },
    },
    KZ: {
      value: "KZ",
      label: "Kazakhstan",
      image: { uri: "https://www.countryflags.io/kz/flat/64.png" },
    },
    LA: {
      value: "LA",
      label: "Lao People's Democratic Republic",
      image: { uri: "https://www.countryflags.io/la/flat/64.png" },
    },
    LB: {
      value: "LB",
      label: "Lebanon",
      image: { uri: "https://www.countryflags.io/lb/flat/64.png" },
    },
    LC: {
      value: "LC",
      label: "Saint Lucia",
      image: { uri: "https://www.countryflags.io/lc/flat/64.png" },
    },
    LI: {
      value: "LI",
      label: "Liechtenstein",
      image: { uri: "https://www.countryflags.io/li/flat/64.png" },
    },
    LK: {
      value: "LK",
      label: "Sri Lanka",
      image: { uri: "https://www.countryflags.io/lk/flat/64.png" },
    },
    LR: {
      value: "LR",
      label: "Liberia",
      image: { uri: "https://www.countryflags.io/lr/flat/64.png" },
    },
    LS: {
      value: "LS",
      label: "Lesotho",
      image: { uri: "https://www.countryflags.io/ls/flat/64.png" },
    },
    LT: {
      value: "LT",
      label: "Lithuania",
      image: { uri: "https://www.countryflags.io/lt/flat/64.png" },
    },
    LU: {
      value: "LU",
      label: "Luxembourg",
      image: { uri: "https://www.countryflags.io/lu/flat/64.png" },
    },
    LV: {
      value: "LV",
      label: "Latvia",
      image: { uri: "https://www.countryflags.io/lv/flat/64.png" },
    },
    LY: {
      value: "LY",
      label: "Libya",
      image: { uri: "https://www.countryflags.io/ly/flat/64.png" },
    },
    MA: {
      value: "MA",
      label: "Morocco",
      image: { uri: "https://www.countryflags.io/ma/flat/64.png" },
    },
    MC: {
      value: "MC",
      label: "Monaco",
      image: { uri: "https://www.countryflags.io/mc/flat/64.png" },
    },
    MD: {
      value: "MD",
      label: "Moldova, Republic of",
      image: { uri: "https://www.countryflags.io/md/flat/64.png" },
    },
    ME: {
      value: "ME",
      label: "Montenegro",
      image: { uri: "https://www.countryflags.io/me/flat/64.png" },
    },
    MF: {
      value: "MF",
      label: "Saint Martin (French part)",
      image: { uri: "https://www.countryflags.io/mf/flat/64.png" },
    },
    MG: {
      value: "MG",
      label: "Madagascar",
      image: { uri: "https://www.countryflags.io/mg/flat/64.png" },
    },
    MH: {
      value: "MH",
      label: "Marshall Islands",
      image: { uri: "https://www.countryflags.io/mh/flat/64.png" },
    },
    MK: {
      value: "MK",
      label: "North Macedonia, Republic of",
      image: { uri: "https://www.countryflags.io/mk/flat/64.png" },
    },
    ML: {
      value: "ML",
      label: "Mali",
      image: { uri: "https://www.countryflags.io/ml/flat/64.png" },
    },
    MM: {
      value: "MM",
      label: "Myanmar",
      image: { uri: "https://www.countryflags.io/mm/flat/64.png" },
    },
    MN: {
      value: "MN",
      label: "Mongolia",
      image: { uri: "https://www.countryflags.io/mn/flat/64.png" },
    },
    MO: {
      value: "MO",
      label: "Macao",
      image: { uri: "https://www.countryflags.io/mo/flat/64.png" },
    },
    MP: {
      value: "MP",
      label: "Northern Mariana Islands",
      image: { uri: "https://www.countryflags.io/mp/flat/64.png" },
    },
    MQ: {
      value: "MQ",
      label: "Martinique",
      image: { uri: "https://www.countryflags.io/mq/flat/64.png" },
    },
    MR: {
      value: "MR",
      label: "Mauritania",
      image: { uri: "https://www.countryflags.io/mr/flat/64.png" },
    },
    MS: {
      value: "MS",
      label: "Montserrat",
      image: { uri: "https://www.countryflags.io/ms/flat/64.png" },
    },
    MT: {
      value: "MT",
      label: "Malta",
      image: { uri: "https://www.countryflags.io/mt/flat/64.png" },
    },
    MU: {
      value: "MU",
      label: "Mauritius",
      image: { uri: "https://www.countryflags.io/mu/flat/64.png" },
    },
    MV: {
      value: "MV",
      label: "Maldives",
      image: { uri: "https://www.countryflags.io/mv/flat/64.png" },
    },
    MW: {
      value: "MW",
      label: "Malawi",
      image: { uri: "https://www.countryflags.io/mw/flat/64.png" },
    },
    MX: {
      value: "MX",
      label: "Mexico",
      image: { uri: "https://www.countryflags.io/mx/flat/64.png" },
    },
    MY: {
      value: "MY",
      label: "Malaysia",
      image: { uri: "https://www.countryflags.io/my/flat/64.png" },
    },
    MZ: {
      value: "MZ",
      label: "Mozambique",
      image: { uri: "https://www.countryflags.io/mz/flat/64.png" },
    },
    NA: {
      value: "NA",
      label: "Namibia",
      image: { uri: "https://www.countryflags.io/na/flat/64.png" },
    },
    NC: {
      value: "NC",
      label: "New Caledonia",
      image: { uri: "https://www.countryflags.io/nc/flat/64.png" },
    },
    NE: {
      value: "NE",
      label: "Niger",
      image: { uri: "https://www.countryflags.io/ne/flat/64.png" },
    },
    NF: {
      value: "NF",
      label: "Norfolk Island",
      image: { uri: "https://www.countryflags.io/nf/flat/64.png" },
    },
    NG: {
      value: "NG",
      label: "Nigeria",
      image: { uri: "https://www.countryflags.io/ng/flat/64.png" },
    },
    NI: {
      value: "NI",
      label: "Nicaragua",
      image: { uri: "https://www.countryflags.io/ni/flat/64.png" },
    },
    NL: {
      value: "NL",
      label: "Netherlands",
      image: { uri: "https://www.countryflags.io/nl/flat/64.png" },
    },
    NO: {
      value: "NO",
      label: "Norway",
      image: { uri: "https://www.countryflags.io/no/flat/64.png" },
    },
    NP: {
      value: "NP",
      label: "Nepal",
      image: { uri: "https://www.countryflags.io/np/flat/64.png" },
    },
    NR: {
      value: "NR",
      label: "Nauru",
      image: { uri: "https://www.countryflags.io/nr/flat/64.png" },
    },
    NU: {
      value: "NU",
      label: "Niue",
      image: { uri: "https://www.countryflags.io/nu/flat/64.png" },
    },
    NZ: {
      value: "NZ",
      label: "New Zealand",
      image: { uri: "https://www.countryflags.io/nz/flat/64.png" },
    },
    OM: {
      value: "OM",
      label: "Oman",
      image: { uri: "https://www.countryflags.io/om/flat/64.png" },
    },
    PA: {
      value: "PA",
      label: "Panama",
      image: { uri: "https://www.countryflags.io/pa/flat/64.png" },
    },
    PE: {
      value: "PE",
      label: "Peru",
      image: { uri: "https://www.countryflags.io/pe/flat/64.png" },
    },
    PF: {
      value: "PF",
      label: "French Polynesia",
      image: { uri: "https://www.countryflags.io/pf/flat/64.png" },
    },
    PG: {
      value: "PG",
      label: "Papua New Guinea",
      image: { uri: "https://www.countryflags.io/pg/flat/64.png" },
    },
    PH: {
      value: "PH",
      label: "Philippines",
      image: { uri: "https://www.countryflags.io/ph/flat/64.png" },
    },
    PK: {
      value: "PK",
      label: "Pakistan",
      image: { uri: "https://www.countryflags.io/pk/flat/64.png" },
    },
    PL: {
      value: "PL",
      label: "Poland",
      image: { uri: "https://www.countryflags.io/pl/flat/64.png" },
    },
    PM: {
      value: "PM",
      label: "Saint Pierre and Miquelon",
      image: { uri: "https://www.countryflags.io/pm/flat/64.png" },
    },
    PR: {
      value: "PR",
      label: "Puerto Rico",
      image: { uri: "https://www.countryflags.io/pr/flat/64.png" },
    },
    PS: {
      value: "PS",
      label: "Palestinian Territory, Occupied",
      image: { uri: "https://www.countryflags.io/ps/flat/64.png" },
    },
    PT: {
      value: "PT",
      label: "Portugal",
      image: { uri: "https://www.countryflags.io/pt/flat/64.png" },
    },
    PW: {
      value: "PW",
      label: "Palau",
      image: { uri: "https://www.countryflags.io/pw/flat/64.png" },
    },
    PY: {
      value: "PY",
      label: "Paraguay",
      image: { uri: "https://www.countryflags.io/py/flat/64.png" },
    },
    QA: {
      value: "QA",
      label: "Qatar",
      image: { uri: "https://www.countryflags.io/qa/flat/64.png" },
    },
    RE: {
      value: "RE",
      label: "Reunion",
      image: { uri: "https://www.countryflags.io/re/flat/64.png" },
    },
    RO: {
      value: "RO",
      label: "Romania",
      image: { uri: "https://www.countryflags.io/ro/flat/64.png" },
    },
    RS: {
      value: "RS",
      label: "Serbia",
      image: { uri: "https://www.countryflags.io/rs/flat/64.png" },
    },
    RU: {
      value: "RU",
      label: "Russian Federation",
      image: { uri: "https://www.countryflags.io/ru/flat/64.png" },
    },
    RW: {
      value: "RW",
      label: "Rwanda",
      image: { uri: "https://www.countryflags.io/rw/flat/64.png" },
    },
    SA: {
      value: "SA",
      label: "Saudi Arabia",
      image: { uri: "https://www.countryflags.io/sa/flat/64.png" },
    },
    SB: {
      value: "SB",
      label: "Solomon Islands",
      image: { uri: "https://www.countryflags.io/sb/flat/64.png" },
    },
    SC: {
      value: "SC",
      label: "Seychelles",
      image: { uri: "https://www.countryflags.io/sc/flat/64.png" },
    },
    SD: {
      value: "SD",
      label: "Sudan",
      image: { uri: "https://www.countryflags.io/sd/flat/64.png" },
    },
    SE: {
      value: "SE",
      label: "Sweden",
      image: { uri: "https://www.countryflags.io/se/flat/64.png" },
    },
    SG: {
      value: "SG",
      label: "Singapore",
      image: { uri: "https://www.countryflags.io/sg/flat/64.png" },
    },
    SH: {
      value: "SH",
      label: "Saint Helena",
      image: { uri: "https://www.countryflags.io/sh/flat/64.png" },
    },
    SI: {
      value: "SI",
      label: "Slovenia",
      image: { uri: "https://www.countryflags.io/si/flat/64.png" },
    },
    SJ: {
      value: "SJ",
      label: "Svalbard and Jan Mayen",
      image: { uri: "https://www.countryflags.io/sj/flat/64.png" },
    },
    SK: {
      value: "SK",
      label: "Slovakia",
      image: { uri: "https://www.countryflags.io/sk/flat/64.png" },
    },
    SL: {
      value: "SL",
      label: "Sierra Leone",
      image: { uri: "https://www.countryflags.io/sl/flat/64.png" },
    },
    SM: {
      value: "SM",
      label: "San Marino",
      image: { uri: "https://www.countryflags.io/sm/flat/64.png" },
    },
    SN: {
      value: "SN",
      label: "Senegal",
      image: { uri: "https://www.countryflags.io/sn/flat/64.png" },
    },
    SO: {
      value: "SO",
      label: "Somalia",
      image: { uri: "https://www.countryflags.io/so/flat/64.png" },
    },
    SR: {
      value: "SR",
      label: "Suriname",
      image: { uri: "https://www.countryflags.io/sr/flat/64.png" },
    },
    SS: {
      value: "SS",
      label: "South Sudan",
      image: { uri: "https://www.countryflags.io/ss/flat/64.png" },
    },
    ST: {
      value: "ST",
      label: "Sao Tome and Principe",
      image: { uri: "https://www.countryflags.io/st/flat/64.png" },
    },
    SV: {
      value: "SV",
      label: "El Salvador",
      image: { uri: "https://www.countryflags.io/sv/flat/64.png" },
    },
    SX: {
      value: "SX",
      label: "Sint Maarten (Dutch part)",
      image: { uri: "https://www.countryflags.io/sx/flat/64.png" },
    },
    SY: {
      value: "SY",
      label: "Syrian Arab Republic",
      image: { uri: "https://www.countryflags.io/sy/flat/64.png" },
    },
    SZ: {
      value: "SZ",
      label: "Eswatini",
      image: { uri: "https://www.countryflags.io/sz/flat/64.png" },
    },
    TC: {
      value: "TC",
      label: "Turks and Caicos Islands",
      image: { uri: "https://www.countryflags.io/tc/flat/64.png" },
    },
    TD: {
      value: "TD",
      label: "Chad",
      image: { uri: "https://www.countryflags.io/td/flat/64.png" },
    },
    TG: {
      value: "TG",
      label: "Togo",
      image: { uri: "https://www.countryflags.io/tg/flat/64.png" },
    },
    TH: {
      value: "TH",
      label: "Thailand",
      image: { uri: "https://www.countryflags.io/th/flat/64.png" },
    },
    TJ: {
      value: "TJ",
      label: "Tajikistan",
      image: { uri: "https://www.countryflags.io/tj/flat/64.png" },
    },
    TK: {
      value: "TK",
      label: "Tokelau",
      image: { uri: "https://www.countryflags.io/tk/flat/64.png" },
    },
    TL: {
      value: "TL",
      label: "Timor-Leste",
      image: { uri: "https://www.countryflags.io/tl/flat/64.png" },
    },
    TM: {
      value: "TM",
      label: "Turkmenistan",
      image: { uri: "https://www.countryflags.io/tm/flat/64.png" },
    },
    TN: {
      value: "TN",
      label: "Tunisia",
      image: { uri: "https://www.countryflags.io/tn/flat/64.png" },
    },
    TO: {
      value: "TO",
      label: "Tonga",
      image: { uri: "https://www.countryflags.io/to/flat/64.png" },
    },
    TR: {
      value: "TR",
      label: "Turkey",
      image: { uri: "https://www.countryflags.io/tr/flat/64.png" },
    },
    TT: {
      value: "TT",
      label: "Trinidad and Tobago",
      image: { uri: "https://www.countryflags.io/tt/flat/64.png" },
    },
    TV: {
      value: "TV",
      label: "Tuvalu",
      image: { uri: "https://www.countryflags.io/tv/flat/64.png" },
    },
    TW: {
      value: "TW",
      label: "Taiwan",
      image: { uri: "https://www.countryflags.io/tw/flat/64.png" },
    },
    TZ: {
      value: "TZ",
      label: "Tanzania, United Republic of",
      image: { uri: "https://www.countryflags.io/tz/flat/64.png" },
    },
    UA: {
      value: "UA",
      label: "Ukraine",
      image: { uri: "https://www.countryflags.io/ua/flat/64.png" },
    },
    UG: {
      value: "UG",
      label: "Uganda",
      image: { uri: "https://www.countryflags.io/ug/flat/64.png" },
    },
    US: {
      value: "US",
      label: "United States of America",
      image: { uri: "https://www.countryflags.io/us/flat/64.png" },
    },
    UY: {
      value: "UY",
      label: "Uruguay",
      image: { uri: "https://www.countryflags.io/uy/flat/64.png" },
    },
    UZ: {
      value: "UZ",
      label: "Uzbekistan",
      image: { uri: "https://www.countryflags.io/uz/flat/64.png" },
    },
    VA: {
      value: "VA",
      label: "Holy See (Vatican City State)",
      image: { uri: "https://www.countryflags.io/va/flat/64.png" },
    },
    VC: {
      value: "VC",
      label: "Saint Vincent and the Grenadines",
      image: { uri: "https://www.countryflags.io/vc/flat/64.png" },
    },
    VE: {
      value: "VE",
      label: "Venezuela",
      image: { uri: "https://www.countryflags.io/ve/flat/64.png" },
    },
    VG: {
      value: "VG",
      label: "Virgin Islands, British",
      image: { uri: "https://www.countryflags.io/vg/flat/64.png" },
    },
    VI: {
      value: "VI",
      label: "Virgin Islands, U.S.",
      image: { uri: "https://www.countryflags.io/vi/flat/64.png" },
    },
    VN: {
      value: "VN",
      label: "Vietnam",
      image: { uri: "https://www.countryflags.io/vn/flat/64.png" },
    },
    VU: {
      value: "VU",
      label: "Vanuatu",
      image: { uri: "https://www.countryflags.io/vu/flat/64.png" },
    },
    WF: {
      value: "WF",
      label: "Wallis and Futuna",
      image: { uri: "https://www.countryflags.io/wf/flat/64.png" },
    },
    WS: {
      value: "WS",
      label: "Samoa",
      image: { uri: "https://www.countryflags.io/ws/flat/64.png" },
    },
    XK: {
      value: "XK",
      label: "Kosovo",
      image: { uri: "https://www.countryflags.io/xk/flat/64.png" },
    },
    YE: {
      value: "YE",
      label: "Yemen",
      image: { uri: "https://www.countryflags.io/ye/flat/64.png" },
    },
    YT: {
      value: "YT",
      label: "Mayotte",
      image: { uri: "https://www.countryflags.io/yt/flat/64.png" },
    },
    ZA: {
      value: "ZA",
      label: "South Africa",
      image: { uri: "https://www.countryflags.io/za/flat/64.png" },
    },
    ZM: {
      value: "ZM",
      label: "Zambia",
      image: { uri: "https://www.countryflags.io/zm/flat/64.png" },
    },
    ZW: {
      value: "ZW",
      label: "Zimbabwe",
      image: { uri: "https://www.countryflags.io/zw/flat/64.png" },
    },
  },
};

export default countries;
