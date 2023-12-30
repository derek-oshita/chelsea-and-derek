
export const WEDDING_DATE = new Date('2024-10-05');

const setBigSurAddress = (num) => `${num.toString()} CA-1, Big Sur, CA 93920`;

export const VENUE = {
  LOMA_VISTA_GARDENS: {
    id: 'LOMA_VISTA_GARDENS',
    label: 'Loma Vista Gardens',
    address: setBigSurAddress('7540'),
    lat: 36.235789748304036,
    lng: -121.76876344578402,
    isPetFriendly: true,
    url: 'https://www.lomavistagardens.com/',
    distanceInMinutes: 0,
  },
};

export const LOCATIONS = {
  BIG_SUR_LODGE: {
    id: 'BIG_SUR_LODGE',
    label: 'Big Sur Lodge',
    address: setBigSurAddress('47225'),
    lat: 36.250896271885104,
    lng: -121.78620568580263,
    isPetFriendly: true,
    url: 'https://bigsurlodge.com',
    distanceInMinutes: 4,
    category: 'hotel',
  },
  GLEN_OAKS_BIG_SUR: {
    id: 'GLEN_OAKS_BIG_SUR',
    label: 'Glen Oaks Big Sur',
    address: setBigSurAddress('47080'),
    lat: 36.26478108887646,
    lng: -121.80086380093223,
    isPetFriendly: false,
    url: 'https://glenoaksbigsur.com',
    distanceInMinutes: 6,
    category: 'hotel',
  },
  DEETJINS_BIG_SUR_INN: {
    id: 'DEETJINS_BIG_SUR_INN',
    label: `Deetjin's Big Sur Inn`,
    address: setBigSurAddress('48865'),
    lat: 36.217656567508875,
    lng: -121.7507846720975,
    isPetFriendly: false,
    url: 'https://deetjens.com',
    distanceInMinutes: 4,
    category: 'hotel',
  },
  BIG_SUR_RIVER_INN: {
    id: 'BIG_SUR_RIVER_INN',
    label: 'Big Sur River Inn',
    address: setBigSurAddress('46800'),
    lat: 36.271623968931365,
    lng: -121.80846100278657,
    isPetFriendly: false,
    url: 'https://bigsurriverinn.com',
    distanceInMinutes: 8,
    category: 'hotel',
  },
  BIG_SUR_CAMPGROUND_AND_CABINS: {
    id: 'BIG_SUR_CAMPGROUND_AND_CABINS',
    label: 'Big Sur Campground and Cabins',
    address: setBigSurAddress('47000'),
    lat: 36.267207980025034,
    lng: -121.80510588744127,
    isPetFriendly: false,
    url: 'https://bigsurcamp.com',
    distanceInMinutes: 8,
    category: 'campground/cabin',
  },
  RIPPLEWOOD_RESORT: {
    id: 'RIPPLEWOOD_RESORT',
    label: 'Ripplewood Resort',
    address: setBigSurAddress('47047'),
    lat: 36.267207980025034,
    lng: -121.80510588744127,
    isPetFriendly: false,
    url: 'https://ripplewoodresort.com',
    distanceInMinutes: 6,
    category: 'campground/cabin',
  },
  FERNWOOD_CAMPGROUND_AND_RESORT: {
    id: 'FERNWOOD_CAMPGROUND_AND_RESORT',
    label: 'Fernwood Campground and Resort',
    address: setBigSurAddress('47200'),
    lat: 36.261013996492096,
    lng: -121.79320391627786,
    isPetFriendly: false,
    url: 'https://fernwoodbigsur.com',
    distanceInMinutes: 5,
    category: 'campground/cabin',
  },
  [VENUE.LOMA_VISTA_GARDENS]: {
    ...VENUE.LOMA_VISTA_GARDENS
  }
};

