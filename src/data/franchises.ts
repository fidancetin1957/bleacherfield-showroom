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

  // NFL - AFC North
  { id: 'bal', name: 'Baltimore', sport: 'Football', league: 'NFL', conference: 'AFC', division: 'North', colors: { primary: '#241773', secondary: '#9E7C0C' } },
  { id: 'cin', name: 'Cincinnati', sport: 'Football', league: 'NFL', conference: 'AFC', division: 'North', colors: { primary: '#FB4F14', secondary: '#000000' } },
  { id: 'cle', name: 'Cleveland', sport: 'Football', league: 'NFL', conference: 'AFC', division: 'North', colors: { primary: '#311D00', secondary: '#FF3C00' } },
  { id: 'pit', name: 'Pittsburgh', sport: 'Football', league: 'NFL', conference: 'AFC', division: 'North', colors: { primary: '#FFB612', secondary: '#101820' } },

  // NFL - NFC North (Huge fanbases)
  { id: 'det', name: 'Detroit', sport: 'Football', league: 'NFL', conference: 'NFC', division: 'North', colors: { primary: '#0076B6', secondary: '#B0B7BC' } },
  { id: 'gnb', name: 'Green Bay', sport: 'Football', league: 'NFL', conference: 'NFC', division: 'North', colors: { primary: '#204E32', secondary: '#FFB612' } },
  { id: 'min', name: 'Minnesota', sport: 'Football', league: 'NFL', conference: 'NFC', division: 'North', colors: { primary: '#4F2683', secondary: '#FFC62F' } },
  { id: 'chi', name: 'Chicago', sport: 'Football', league: 'NFL', conference: 'NFC', division: 'North', colors: { primary: '#0B162A', secondary: '#C83803' } },

  // NBA - West (Popular Teams)
  { id: 'lal', name: 'LA Purple', sport: 'Basketball', league: 'NBA', conference: 'West', division: 'Pacific', colors: { primary: '#552583', secondary: '#FDB927' } },
  { id: 'gsw', name: 'Golden State', sport: 'Basketball', league: 'NBA', conference: 'West', division: 'Pacific', colors: { primary: '#1D428A', secondary: '#FFC72C' } },
  { id: 'phx', name: 'Phoenix', sport: 'Basketball', league: 'NBA', conference: 'West', division: 'Pacific', colors: { primary: '#1D1160', secondary: '#E56020' } },
  { id: 'dal_nba', name: 'Dallas Hoop', sport: 'Basketball', league: 'NBA', conference: 'West', division: 'Southwest', colors: { primary: '#00538C', secondary: '#B8C4CA' } },

  // NBA - East
  { id: 'bos', name: 'Boston', sport: 'Basketball', league: 'NBA', conference: 'East', division: 'Atlantic', colors: { primary: '#2D5A27', secondary: '#FFFFFF' } },
  { id: 'chi_nba', name: 'Chicago Hoop', sport: 'Basketball', league: 'NBA', conference: 'East', division: 'Central', colors: { primary: '#CE1141', secondary: '#000000' } },
  { id: 'phi_nba', name: 'Philadelphia', sport: 'Basketball', league: 'NBA', conference: 'East', division: 'Atlantic', colors: { primary: '#1B3C73', secondary: '#B23A48' } },
  { id: 'nyk', name: 'New York', sport: 'Basketball', league: 'NBA', conference: 'East', division: 'Atlantic', colors: { primary: '#1B3C73', secondary: '#D97706' } },
  { id: 'mia_nba', name: 'Miami', sport: 'Basketball', league: 'NBA', conference: 'East', division: 'Southeast', colors: { primary: '#7A1B2D', secondary: '#D97706' } },

  // MLB - American League
  { id: 'nyy', name: 'NY Pinstripe', sport: 'Baseball', league: 'MLB', conference: 'American', division: 'East', colors: { primary: '#132448', secondary: '#FFFFFF' } },
  { id: 'bos_mlb', name: 'Boston Sox', sport: 'Baseball', league: 'MLB', conference: 'American', division: 'East', colors: { primary: '#BD3039', secondary: '#0C2340' } },
  { id: 'hou', name: 'Houston', sport: 'Baseball', league: 'MLB', conference: 'American', division: 'West', colors: { primary: '#EB6E1F', secondary: '#002D62' } },

  // MLB - National League
  { id: 'lad', name: 'LA Blue', sport: 'Baseball', league: 'MLB', conference: 'National', division: 'West', colors: { primary: '#1B3C73', secondary: '#A1A1A1' } },
  { id: 'atl', name: 'Atlanta', sport: 'Baseball', league: 'MLB', conference: 'National', division: 'East', colors: { primary: '#CE1141', secondary: '#13274F' } },
  { id: 'chc', name: 'Chicago Diamond', sport: 'Baseball', league: 'MLB', conference: 'National', division: 'Central', colors: { primary: '#0E3386', secondary: '#CC3433' } },
  
  // NCAA - Top Schools
  { id: 'ala', name: 'Alabama', sport: 'Football', league: 'NCAA', conference: 'SEC', division: 'West', colors: { primary: '#7A1B2D', secondary: '#FFFFFF' } },
  { id: 'mich', name: 'Michigan', sport: 'Football', league: 'NCAA', conference: 'Big Ten', division: 'East', colors: { primary: '#132448', secondary: '#E6B800' } },
  { id: 'uga', name: 'Georgia', sport: 'Football', league: 'NCAA', conference: 'SEC', division: 'East', colors: { primary: '#BA0C2F', secondary: '#000000' } },
];
