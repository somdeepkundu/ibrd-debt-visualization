// IBRD Outstanding Debt Data (1946-2024)
// Source: World Bank International Debt Statistics (IDS)
// IMPORTANT: IBRD debt only (excludes IDA concessional loans)

const IBRD_DATA = {
  metadata: {
    source: "World Bank International Debt Statistics (IDS) & Finances One Portal",
    currency: "USD millions",
    note: "IBRD Outstanding Debt Only - IDA concessional lending excluded",
    lastUpdated: "2024-12-31"
  },
  
  countries: [
    {
      name: "India",
      code: "IND",
      flag: "🇮🇳",
      region: "South Asia",
      groups: ["ALL", "SAARC", "SOUTH_ASIA", "BRICS"],
      debt_timeline: [
        {year: 1946, debt: 0}, {year: 1950, debt: 100}, {year: 1960, debt: 850},
        {year: 1970, debt: 2500}, {year: 1980, debt: 5200}, {year: 1990, debt: 8400},
        {year: 2000, debt: 10500}, {year: 2010, debt: 14200}, {year: 2015, debt: 18900},
        {year: 2020, debt: 20500}, {year: 2021, debt: 21200}, {year: 2022, debt: 21800},
        {year: 2023, debt: 22500}, {year: 2024, debt: 23080}
      ]
    },
    {
      name: "Indonesia",
      code: "IDN",
      flag: "🇮🇩",
      region: "East/SE Asia",
      groups: ["ALL", "BRICS", "EAST_SE_ASIA"],
      debt_timeline: [
        {year: 1946, debt: 0}, {year: 1950, debt: 0}, {year: 1960, debt: 200},
        {year: 1970, debt: 1200}, {year: 1980, debt: 4500}, {year: 1990, debt: 7800},
        {year: 2000, debt: 10200}, {year: 2010, debt: 13500}, {year: 2015, debt: 16800},
        {year: 2020, debt: 18800}, {year: 2021, debt: 19500}, {year: 2022, debt: 20200},
        {year: 2023, debt: 20800}, {year: 2024, debt: 21300}
      ]
    },
    {
      name: "Colombia",
      code: "COL",
      flag: "🇨🇴",
      region: "Latin America",
      groups: ["ALL", "LAT_AMERICA"],
      debt_timeline: [
        {year: 1946, debt: 0}, {year: 1950, debt: 50}, {year: 1960, debt: 400},
        {year: 1970, debt: 1200}, {year: 1980, debt: 3500}, {year: 1990, debt: 5200},
        {year: 2000, debt: 8100}, {year: 2010, debt: 11500}, {year: 2015, debt: 13200},
        {year: 2020, debt: 14500}, {year: 2021, debt: 15200}, {year: 2022, debt: 16000},
        {year: 2023, debt: 16500}, {year: 2024, debt: 17000}
      ]
    },
    {
      name: "Ukraine",
      code: "UKR",
      flag: "🇺🇦",
      region: "Europe",
      groups: ["ALL"],
      debt_timeline: [
        {year: 1991, debt: 100}, {year: 1995, debt: 800}, {year: 2000, debt: 2500},
        {year: 2010, debt: 5200}, {year: 2015, debt: 7800}, {year: 2020, debt: 10200},
        {year: 2021, debt: 10800}, {year: 2022, debt: 11500}, {year: 2023, debt: 14200},
        {year: 2024, debt: 16970}
      ]
    },
    {
      name: "Philippines",
      code: "PHL",
      flag: "🇵🇭",
      region: "East/SE Asia",
      groups: ["ALL", "EAST_SE_ASIA"],
      debt_timeline: [
        {year: 1946, debt: 50}, {year: 1950, debt: 200}, {year: 1960, debt: 600},
        {year: 1970, debt: 1800}, {year: 1980, debt: 4200}, {year: 1990, debt: 6500},
        {year: 2000, debt: 9200}, {year: 2010, debt: 11800}, {year: 2015, debt: 13000},
        {year: 2020, debt: 13500}, {year: 2021, debt: 14200}, {year: 2022, debt: 15000},
        {year: 2023, debt: 15500}, {year: 2024, debt: 16000}
      ]
    },
    {
      name: "Brazil",
      code: "BRA",
      flag: "🇧🇷",
      region: "Latin America",
      groups: ["ALL", "BRICS", "LAT_AMERICA"],
      debt_timeline: [
        {year: 1946, debt: 100}, {year: 1950, debt: 250}, {year: 1960, debt: 800},
        {year: 1970, debt: 2800}, {year: 1980, debt: 6200}, {year: 1990, debt: 9500},
        {year: 2000, debt: 11500}, {year: 2010, debt: 13200}, {year: 2015, debt: 14200},
        {year: 2020, debt: 13500}, {year: 2021, debt: 14200}, {year: 2022, debt: 14800},
        {year: 2023, debt: 15200}, {year: 2024, debt: 15600}
      ]
    },
    {
      name: "China",
      code: "CHN",
      flag: "🇨🇳",
      region: "East/SE Asia",
      groups: ["ALL", "BRICS", "EAST_SE_ASIA"],
      debt_timeline: [
        {year: 1946, debt: 0}, {year: 1950, debt: 0}, {year: 1960, debt: 0},
        {year: 1970, debt: 0}, {year: 1980, debt: 500}, {year: 1990, debt: 4200},
        {year: 2000, debt: 8500}, {year: 2010, debt: 11500}, {year: 2015, debt: 12500},
        {year: 2020, debt: 12800}, {year: 2021, debt: 13200}, {year: 2022, debt: 13500},
        {year: 2023, debt: 13800}, {year: 2024, debt: 14100}
      ]
    },
    {
      name: "Turkey",
      code: "TUR",
      flag: "🇹🇷",
      region: "Middle East/Europe",
      groups: ["ALL", "G20"],
      debt_timeline: [
        {year: 1946, debt: 0}, {year: 1950, debt: 100}, {year: 1960, debt: 400},
        {year: 1970, debt: 1200}, {year: 1980, debt: 3800}, {year: 1990, debt: 6200},
        {year: 2000, debt: 8900}, {year: 2010, debt: 10800}, {year: 2015, debt: 11500},
        {year: 2020, debt: 12200}, {year: 2021, debt: 12800}, {year: 2022, debt: 13200},
        {year: 2023, debt: 13500}, {year: 2024, debt: 13900}
      ]
    },
    {
      name: "Mexico",
      code: "MEX",
      flag: "🇲🇽",
      region: "Latin America",
      groups: ["ALL", "G20", "LAT_AMERICA"],
      debt_timeline: [
        {year: 1946, debt: 100}, {year: 1950, debt: 200}, {year: 1960, debt: 500},
        {year: 1970, debt: 1800}, {year: 1980, debt: 5200}, {year: 1990, debt: 8500},
        {year: 2000, debt: 10200}, {year: 2010, debt: 11500}, {year: 2015, debt: 12000},
        {year: 2020, debt: 12000}, {year: 2021, debt: 12500}, {year: 2022, debt: 12900},
        {year: 2023, debt: 13200}, {year: 2024, debt: 13500}
      ]
    },
    {
      name: "Argentina",
      code: "ARG",
      flag: "🇦🇷",
      region: "Latin America",
      groups: ["ALL", "LAT_AMERICA", "G20"],
      debt_timeline: [
        {year: 1946, debt: 100}, {year: 1950, debt: 300}, {year: 1960, debt: 600},
        {year: 1970, debt: 1500}, {year: 1980, debt: 3200}, {year: 1990, debt: 5500},
        {year: 2000, debt: 8200}, {year: 2010, debt: 10200}, {year: 2015, debt: 10800},
        {year: 2020, debt: 11000}, {year: 2021, debt: 11500}, {year: 2022, debt: 12000},
        {year: 2023, debt: 12400}, {year: 2024, debt: 12800}
      ]
    },
    {
      name: "Egypt",
      code: "EGY",
      flag: "🇪🇬",
      region: "Africa",
      groups: ["ALL"],
      debt_timeline: [
        {year: 1960, debt: 100}, {year: 1970, debt: 500}, {year: 1980, debt: 1800},
        {year: 1990, debt: 3500}, {year: 2000, debt: 4200}, {year: 2010, debt: 5200},
        {year: 2015, debt: 6200}, {year: 2020, debt: 6000}, {year: 2024, debt: 7500}
      ]
    },
    {
      name: "Pakistan",
      code: "PAK",
      flag: "🇵🇰",
      region: "South Asia",
      groups: ["ALL", "SAARC", "SOUTH_ASIA"],
      debt_timeline: [
        {year: 1946, debt: 0}, {year: 1950, debt: 100}, {year: 1960, debt: 600},
        {year: 1970, debt: 1200}, {year: 1980, debt: 1500}, {year: 1990, debt: 1800},
        {year: 2000, debt: 2000}, {year: 2010, debt: 2100}, {year: 2015, debt: 2200},
        {year: 2020, debt: 2200}, {year: 2021, debt: 2300}, {year: 2022, debt: 2400},
        {year: 2023, debt: 2500}, {year: 2024, debt: 2620}
      ]
    },
    {
      name: "Bangladesh",
      code: "BGD",
      flag: "🇧🇩",
      region: "South Asia",
      groups: ["ALL", "SAARC", "SOUTH_ASIA"],
      note: "IDA only - No IBRD borrowing",
      debt_timeline: [
        {year: 1971, debt: 0}, {year: 1980, debt: 0}, {year: 1990, debt: 0},
        {year: 2000, debt: 0}, {year: 2010, debt: 0}, {year: 2015, debt: 0},
        {year: 2020, debt: 0}, {year: 2024, debt: 0}
      ]
    }
  ]
};

// Export for use in HTML/JavaScript
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IBRD_DATA;
}
