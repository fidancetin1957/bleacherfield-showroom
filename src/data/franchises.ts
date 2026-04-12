export interface Franchise {
  id: string;
  name: string; // e.g., "Kansas City"
  sport: string; // e.g., "Football"
  league: string; // e.g., "NFL"
  conference: string; // e.g., "AFC"
  division: string; // e.g., "West"
  colors: {
    primary: string; // Softened primary color
    secondary: string; // Softened secondary color
  };
}

export const franchises: Franchise[] = [
  // NFL - AFC
  { id: 'kc', name: 'Kansas City', sport: 'Football', league: 'NFL', conference: 'AFC', division: 'West', colors: { primary: '#B23A48', secondary: '#E6B800' } },
  { id: 'lv', name: 'Las Vegas', sport: 'Football', league: 'NFL', conference: 'AFC', division: 'West', colors: { primary: '#4A4A4A', secondary: '#A5A5A5' } },
  { id: 'den', name: 'Denver', sport: 'Football', league: 'NFL', conference: 'AFC', division: 'West', colors: { primary: '#2D4B7A', secondary: '#D97706' } },
  { id: 'lac', name: 'LA (Blue & Gold)', sport: 'Football', league: 'NFL', conference: 'AFC', division: 'West', colors: { primary: '#2D4B7A', secondary: '#D97706' } },
  
  { id: 'buf', name: 'Buffalo', sport: 'Football', league: 'NFL', conference: 'AFC', division: 'East', colors: { primary: '#2D4B7A', secondary: '#B23A48' } },
  { id: 'mia', name: 'Miami', sport: 'Football', league: 'NFL', conference: 'AFC', division: 'East', colors: { primary: '#3D8C8C', secondary: '#D97706' } },
  { id: 'nyj', name: 'NY Green', sport: 'Football', league: 'NFL', conference: 'AFC', division: 'East', colors: { primary: '#2D5A27', secondary: '#FFFFFF' } },
  { id: 'nwe', name: 'New England', sport: 'Football', league: 'NFL', conference: 'AFC', division: 'East', colors: { primary: '#1B2C4E', secondary: '#B23A48' } },

  // NFL - NFC
  { id: 'dal', name: 'Dallas', sport: 'Football', league: 'NFL', conference: 'NFC', division: 'East', colors: { primary: '#2D4B7A', secondary: '#A1A1A1' } },
  { id: 'phi', name: 'Philadelphia', sport: 'Football', league: 'NFL', conference: 'NFC', division: 'East', colors: { primary: '#1B4D3E', secondary: '#A5A5A5' } },
  { id: 'nyg', name: 'NY Blue', sport: 'Football', league: 'NFL', conference: 'NFC', division: 'East', colors: { primary: '#1B3C73', secondary: '#B23A48' } },
  { id: 'was', name: 'Washington', sport: 'Football', league: 'NFL', conference: 'NFC', division: 'East', colors: { primary: '#5A2D2D', secondary: '#D9B200' } },

  { id: 'sfo', name: 'San Francisco', sport: 'Football', league: 'NFL', conference: 'NFC', division: 'West', colors: { primary: '#8B2C3A', secondary: '#C5A059' } },
  { id: 'sea', name: 'Seattle', sport: 'Football', league: 'NFL', conference: 'NFC', division: 'West', colors: { primary: '#1B3C73', secondary: '#4E8A3D' } },
  { id: 'lar', name: 'LA (Blue & White)', sport: 'Football', league: 'NFL', conference: 'NFC', division: 'West', colors: { primary: '#1B3C73', secondary: '#E1E1E1' } },
  { id: 'ari', name: 'Arizona', sport: 'Football', league: 'NFL', conference: 'NFC', division: 'West', colors: { primary: '#8B2C3A', secondary: '#1A1A1A' } },

  // NBA - East
  { id: 'bos', name: 'Boston', sport: 'Basketball', league: 'NBA', conference: 'East', division: 'Atlantic', colors: { primary: '#2D5A27', secondary: '#FFFFFF' } },
  { id: 'phi_nba', name: 'Philadelphia', sport: 'Basketball', league: 'NBA', conference: 'East', division: 'Atlantic', colors: { primary: '#1B3C73', secondary: '#B23A48' } },
  { id: 'nyk', name: 'New York', sport: 'Basketball', league: 'NBA', conference: 'East', division: 'Atlantic', colors: { primary: '#1B3C73', secondary: '#D97706' } },
  { id: 'mia_nba', name: 'Miami', sport: 'Basketball', league: 'NBA', conference: 'East', division: 'Southeast', colors: { primary: '#7A1B2D', secondary: '#D97706' } },

  // MLB - National
  { id: 'lad', name: 'LA Blue', sport: 'Baseball', league: 'MLB', conference: 'National', division: 'West', colors: { primary: '#1B3C73', secondary: '#A1A1A1' } },
  { id: 'nyy', name: 'NY Pinstripe', sport: 'Baseball', league: 'MLB', conference: 'American', division: 'East', colors: { primary: '#132448', secondary: '#FFFFFF' } },
  
  // NCAA - Top Schools
  { id: 'ala', name: 'Alabama', sport: 'Football', league: 'NCAA', conference: 'SEC', division: 'West', colors: { primary: '#7A1B2D', secondary: '#FFFFFF' } },
  { id: 'mich', name: 'Michigan', sport: 'Football', league: 'NCAA', conference: 'Big Ten', division: 'East', colors: { primary: '#132448', secondary: '#E6B800' } },
];
