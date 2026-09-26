/**
 * RENTINO — PREMIUM ANIMATED VEHICLE RENTAL PLATFORM
 * Core Engine & Interactive Showcase
 */

// ==========================================================================
// 1. VEHICLE DATASET (30+ LUXURY, SPORTS, ELECTRIC, SUV & MODIFIED VEHICLES)
// ==========================================================================

const VEHICLES_DATA = [
  // --- BMW COLLECTION ---
  {
    id: 'bmw-m4',
    brand: 'BMW',
    model: 'M4 Competition Coupé',
    category: 'Sports',
    year: 2026,
    color: 'Isle of Man Green / Carbon Black',
    pricePerDay: 18000,
    driverPrice: 3500,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 4,
    horsepower: 503,
    topSpeed: '290 km/h',
    acceleration: '3.4s (0-100)',
    engine: '3.0L TwinPower Turbo I6',
    mileage: '10.2 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80',
    description: 'The pinnacle of high-performance driving. The BMW M4 Competition combines racetrack DNA with everyday luxury and razor-sharp steering precision.'
  },
  {
    id: 'bmw-m5',
    brand: 'BMW',
    model: 'M5 CS Competition',
    category: 'Sports',
    year: 2026,
    color: 'Frozen Deep Green',
    pricePerDay: 24000,
    driverPrice: 4000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    horsepower: 627,
    topSpeed: '305 km/h',
    acceleration: '2.9s (0-100)',
    engine: '4.4L M TwinPower Turbo V8',
    mileage: '8.9 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1000&q=80',
    description: 'The most powerful production BMW M car ever made. Exceptional V8 acoustics paired with supreme executive saloon comfort.'
  },
  {
    id: 'bmw-i7',
    brand: 'BMW',
    model: 'i7 xDrive60 Excellence',
    category: 'Electric',
    year: 2026,
    color: 'Mineral White / Black Sapphire',
    pricePerDay: 28000,
    driverPrice: 4500,
    transmission: 'Automatic',
    fuel: 'Electric',
    seats: 5,
    horsepower: 536,
    topSpeed: '240 km/h',
    acceleration: '4.5s (0-100)',
    engine: 'Dual Electric Motors (101.7 kWh)',
    mileage: '625 km Range',
    availability: 'limited',
    modified: false,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80',
    description: 'Electric mobility meets first-class luxury. Features 31.3-inch 8K BMW Theatre Screen in the rear for ultimate VIP travel.'
  },
  {
    id: 'bmw-x5',
    brand: 'BMW',
    model: 'X5 M Competition',
    category: 'SUV',
    year: 2025,
    color: 'Marina Bay Blue',
    pricePerDay: 19500,
    driverPrice: 3500,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    horsepower: 617,
    topSpeed: '290 km/h',
    acceleration: '3.7s (0-100)',
    engine: '4.4L Twin-Turbo V8',
    mileage: '8.2 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
    description: 'Commanding road presence with sports-car acceleration. Spacious, high-riding luxury for city dominance and long-distance touring.'
  },
  {
    id: 'bmw-3series',
    brand: 'BMW',
    model: '330i M Sport',
    category: 'Sedan',
    year: 2025,
    color: 'Portimao Blue',
    pricePerDay: 9500,
    driverPrice: 2500,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    horsepower: 255,
    topSpeed: '250 km/h',
    acceleration: '5.6s (0-100)',
    engine: '2.0L TwinPower Turbo 4-Cylinder',
    mileage: '15.3 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1000&q=80',
    description: 'The definitive sport sedan. Agile dynamics, sophisticated cabin styling, and unmatched everyday reliability.'
  },

  // --- MERCEDES-BENZ COLLECTION ---
  {
    id: 'merc-amg-gt',
    brand: 'Mercedes-Benz',
    model: 'AMG GT Black Series',
    category: 'Supercar',
    year: 2026,
    color: 'Magmabeam Orange / Obsidian Black',
    pricePerDay: 48000,
    driverPrice: 6000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 2,
    horsepower: 720,
    topSpeed: '325 km/h',
    acceleration: '3.1s (0-100)',
    engine: '4.0L V8 Biturbo Flat-Plane',
    mileage: '7.5 km/l',
    availability: 'limited',
    modified: false,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80',
    description: 'Motorsport engineering unleashed on public roads. Aggressive aerodynamics, carbon fiber wing, and thrilling track telemetry.'
  },
  {
    id: 'merc-g63',
    brand: 'Mercedes-Benz',
    model: 'G 63 AMG Biturbo',
    category: 'SUV',
    year: 2026,
    color: 'Night Black Matte',
    pricePerDay: 35000,
    driverPrice: 5000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    horsepower: 577,
    topSpeed: '240 km/h',
    acceleration: '4.4s (0-100)',
    engine: 'Handcrafted AMG 4.0L V8',
    mileage: '6.8 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=1000&q=80',
    description: 'The timeless G-Wagon icon. Unrivaled status, roaring side-exit exhaust note, and supreme off-road capability.'
  },
  {
    id: 'merc-sclass',
    brand: 'Mercedes-Benz',
    model: 'S 580 Maybach',
    category: 'Luxury',
    year: 2026,
    color: 'Two-Tone Obsidian / Kalahari Gold',
    pricePerDay: 32000,
    driverPrice: 4500,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 4,
    horsepower: 496,
    topSpeed: '250 km/h',
    acceleration: '4.7s (0-100)',
    engine: '4.0L V8 Biturbo with EQ Boost',
    mileage: '9.8 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80',
    description: 'The global standard of ultra-luxury. Features executive reclining lounge seats, active noise cancellation, and champagne chiller.'
  },
  {
    id: 'merc-c63',
    brand: 'Mercedes-Benz',
    model: 'C 63 S AMG E-Performance',
    category: 'Sports',
    year: 2025,
    color: 'Graphite Grey Metallic',
    pricePerDay: 16500,
    driverPrice: 3000,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    seats: 5,
    horsepower: 671,
    topSpeed: '280 km/h',
    acceleration: '3.3s (0-100)',
    engine: '2.0L Turbo + Electric Motor',
    mileage: '12.4 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&w=1000&q=80',
    description: 'Formula 1 hybrid power translated to a fierce compact luxury sedan. 1020 Nm of instant torque on tap.'
  },

  // --- AUDI COLLECTION ---
  {
    id: 'audi-r8',
    brand: 'Audi',
    model: 'R8 V10 Performance',
    category: 'Supercar',
    year: 2026,
    color: 'Vegas Yellow / Carbon Trim',
    pricePerDay: 42000,
    driverPrice: 5500,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 2,
    horsepower: 602,
    topSpeed: '330 km/h',
    acceleration: '3.1s (0-100)',
    engine: '5.2L Naturally Aspirated V10',
    mileage: '6.9 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1000&q=80',
    description: 'A pure adrenaline machine. The legendary naturally aspirated V10 revs to 8,700 RPM with iconic Quattro all-wheel drive.'
  },
  {
    id: 'audi-rs6',
    brand: 'Audi',
    model: 'RS6 Avant Dynamic',
    category: 'Sports',
    year: 2026,
    color: 'Nardo Grey',
    pricePerDay: 26000,
    driverPrice: 4000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    horsepower: 621,
    topSpeed: '305 km/h',
    acceleration: '3.3s (0-100)',
    engine: '4.0L Twin-Turbo TFSI V8',
    mileage: '8.4 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=80',
    description: 'The undisputed supercar slayer in estate clothing. Ferocious acceleration with everyday family and luggage utility.'
  },
  {
    id: 'audi-q8',
    brand: 'Audi',
    model: 'RS Q8 Performance',
    category: 'SUV',
    year: 2025,
    color: 'Mythos Black Metallic',
    pricePerDay: 22000,
    driverPrice: 3800,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    horsepower: 591,
    topSpeed: '290 km/h',
    acceleration: '3.7s (0-100)',
    engine: '4.0L Biturbo V8 Mild-Hybrid',
    mileage: '8.0 km/l',
    availability: 'limited',
    modified: false,
    image: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1000&q=80',
    description: 'Coupe silhouette with full-size SUV luxury and staggering Nürburgring pedigree.'
  },
  {
    id: 'audi-etron-gt',
    brand: 'Audi',
    model: 'RS e-tron GT',
    category: 'Electric',
    year: 2026,
    color: 'Daytona Grey',
    pricePerDay: 27000,
    driverPrice: 4000,
    transmission: 'Automatic',
    fuel: 'Electric',
    seats: 4,
    horsepower: 637,
    topSpeed: '250 km/h',
    acceleration: '3.1s (0-100)',
    engine: 'Dual Synchronous Electric Motors',
    mileage: '495 km Range',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1000&q=80',
    description: 'Sculpted electric grand tourer with futuristic sound profile and 800-volt high-speed charging capability.'
  },

  // --- PORSCHE COLLECTION ---
  {
    id: 'porsche-911-gt3',
    brand: 'Porsche',
    model: '911 GT3 RS (992)',
    category: 'Supercar',
    year: 2026,
    color: 'Guards Red / Weissach Package',
    pricePerDay: 55000,
    driverPrice: 7000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 2,
    horsepower: 518,
    topSpeed: '296 km/h',
    acceleration: '3.0s (0-100)',
    engine: '4.0L Naturally Aspirated Boxer-6',
    mileage: '7.1 km/l',
    availability: 'limited',
    modified: false,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
    description: 'A street-legal racecar with active DRS rear wing, carbon ceramic brakes, and 9000 RPM symphonic brilliance.'
  },
  {
    id: 'porsche-taycan',
    brand: 'Porsche',
    model: 'Taycan Turbo S',
    category: 'Electric',
    year: 2026,
    color: 'Frozen Blue Metallic',
    pricePerDay: 30000,
    driverPrice: 4500,
    transmission: 'Automatic',
    fuel: 'Electric',
    seats: 4,
    horsepower: 750,
    topSpeed: '260 km/h',
    acceleration: '2.6s (0-100)',
    engine: 'Dual Permanent Magnet Motors',
    mileage: '480 km Range',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=1000&q=80',
    description: 'Instantaneous electric G-force that pins you into the leather sport seats. Phenomenal chassis tuning.'
  },
  {
    id: 'porsche-cayenne',
    brand: 'Porsche',
    model: 'Cayenne Turbo GT',
    category: 'SUV',
    year: 2025,
    color: 'Arctic Grey',
    pricePerDay: 25000,
    driverPrice: 4000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    horsepower: 650,
    topSpeed: '305 km/h',
    acceleration: '3.1s (0-100)',
    engine: '4.0L Twin-Turbo V8',
    mileage: '7.8 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=1000&q=80',
    description: 'The apex luxury performance SUV, setting record lap times while cradling passengers in supreme Alcantara comfort.'
  },

  // --- TESLA COLLECTION ---
  {
    id: 'tesla-model-s',
    brand: 'Tesla',
    model: 'Model S Plaid Tri-Motor',
    category: 'Electric',
    year: 2026,
    color: 'Midnight Silver Metallic',
    pricePerDay: 22000,
    driverPrice: 3500,
    transmission: 'Automatic',
    fuel: 'Electric',
    seats: 5,
    horsepower: 1020,
    topSpeed: '322 km/h',
    acceleration: '1.99s (0-100)',
    engine: 'Tri-Motor All-Wheel Drive',
    mileage: '600 km Range',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1000&q=80',
    description: 'Earth-shattering hypercar acceleration in a quiet 5-seater sedan. Yoke steering and Full Self-Driving hardware.'
  },
  {
    id: 'tesla-model-x',
    brand: 'Tesla',
    model: 'Model X Plaid (Falcon Wing)',
    category: 'SUV',
    year: 2026,
    color: 'Pearl White Multi-Coat',
    pricePerDay: 25000,
    driverPrice: 3800,
    transmission: 'Automatic',
    fuel: 'Electric',
    seats: 6,
    horsepower: 1020,
    topSpeed: '262 km/h',
    acceleration: '2.5s (0-100)',
    engine: 'Tri-Motor AWD (100 kWh)',
    mileage: '535 km Range',
    availability: 'limited',
    modified: false,
    image: 'https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?auto=format&fit=crop&w=1000&q=80',
    description: 'Iconic motorized Falcon Wing doors, panoramic windshield, and seating for 6 VIP travelers.'
  },

  // --- RANGE ROVER & OFF-ROAD ---
  {
    id: 'range-rover-sv',
    brand: 'Range Rover',
    model: 'Range Rover SV Autobiography',
    category: 'Luxury',
    year: 2026,
    color: 'British Racing Green / Gold Flake',
    pricePerDay: 38000,
    driverPrice: 5000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    horsepower: 523,
    topSpeed: '250 km/h',
    acceleration: '4.6s (0-100)',
    engine: '4.4L Twin-Turbo V8',
    mileage: '8.7 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80',
    description: 'Peerless royal luxury. Whisper-quiet cabin with active noise cancelling headrests and ceramic gear selectors.'
  },
  {
    id: 'land-rover-defender',
    brand: 'Land Rover',
    model: 'Defender 110 V8 Carpathian',
    category: 'Off-Road',
    year: 2026,
    color: 'Carpathian Grey Satin',
    pricePerDay: 19000,
    driverPrice: 3200,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 7,
    horsepower: 518,
    topSpeed: '240 km/h',
    acceleration: '5.1s (0-100)',
    engine: '5.0L Supercharged V8',
    mileage: '7.9 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80',
    description: 'Indestructible expedition capability matched with supercharged muscle and commanding luxury posture.'
  },
  {
    id: 'jeep-wrangler-rubicon',
    brand: 'Jeep',
    model: 'Wrangler Rubicon 392 V8',
    category: 'Off-Road',
    year: 2025,
    color: 'Hydro Blue / Black Top',
    pricePerDay: 14000,
    driverPrice: 2500,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    horsepower: 470,
    topSpeed: '180 km/h',
    acceleration: '4.5s (0-100)',
    engine: '6.4L HEMI V8',
    mileage: '6.5 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1000&q=80',
    description: 'Removable roof, heavy-duty Fox suspension, and a deep-rumbling V8 for open-air off-road thrill.'
  },

  // --- TOYOTA & EXECUTIVE ---
  {
    id: 'toyota-supra-mk5',
    brand: 'Toyota',
    model: 'GR Supra 3.0 Pro Track',
    category: 'Sports',
    year: 2025,
    color: 'Renaissance Red 2.0',
    pricePerDay: 12500,
    driverPrice: 2800,
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 2,
    horsepower: 382,
    topSpeed: '250 km/h',
    acceleration: '3.9s (0-100)',
    engine: '3.0L Inline-6 Twin-Scroll Turbo',
    mileage: '11.8 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80',
    description: 'Pure driver engagement with 6-speed manual transmission, 50:50 weight distribution, and sport-tuned exhaust.'
  },
  {
    id: 'toyota-vellfire-vip',
    brand: 'Toyota',
    model: 'Vellfire Executive Lounge',
    category: 'Luxury',
    year: 2026,
    color: 'Burning Black Crystal Shine',
    pricePerDay: 21000,
    driverPrice: 3500,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    seats: 7,
    horsepower: 247,
    topSpeed: '180 km/h',
    acceleration: '8.8s (0-100)',
    engine: '2.5L Hybrid e-CVT',
    mileage: '19.2 km/l',
    availability: 'available',
    modified: false,
    image: 'https://images.unsplash.com/photo-1590362891988-f77804702088?auto=format&fit=crop&w=1000&q=80',
    description: 'First-class private aviation on wheels. Power ottoman massage seats, ambient chandelier lighting, and dual sun-roofs.'
  },

  // --- RENTINO MODIFIED SPECIAL DIVISION ---
  {
    id: 'mod-m4-widebody',
    brand: 'BMW',
    model: 'RENTINO Modified M4 Widebody Beast',
    category: 'Modified',
    year: 2026,
    color: 'Liquid Yellow Glow / Carbon Weave',
    pricePerDay: 28000,
    driverPrice: 5000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 4,
    horsepower: 710,
    topSpeed: '320 km/h',
    acceleration: '2.8s (0-100)',
    engine: '3.0L Stage 3 Twin-Turbo (Armytrix Exhaust)',
    mileage: '6.5 km/l',
    availability: 'available',
    modified: true,
    modCategory: 'Widebody',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80',
    description: 'Custom forged widebody kit, carbon fiber canards, Akrapovič valvetronic titanium exhaust producing fiery pops and crackles.'
  },
  {
    id: 'mod-gtr-r35-nismo',
    brand: 'Nissan',
    model: 'RENTINO Godzilla GT-R 1000HP Edition',
    category: 'Modified',
    year: 2026,
    color: 'Stealth Matte Black / Neon Yellow Trim',
    pricePerDay: 36000,
    driverPrice: 6000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 4,
    horsepower: 1000,
    topSpeed: '345 km/h',
    acceleration: '2.2s (0-100)',
    engine: '3.8L VR38DETT Twin-Turbo HKS Spec',
    mileage: '5.2 km/l',
    availability: 'limited',
    modified: true,
    modCategory: 'JDM',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80',
    description: 'The ultimate Japanese supercar tuned to 1000 brake horsepower. Insane launch control that pulls 1.4G.'
  },
  {
    id: 'mod-amg-c63-liberty',
    brand: 'Mercedes-Benz',
    model: 'RENTINO Liberty Walk C63 V8 Roar',
    category: 'Modified',
    year: 2025,
    color: 'Satin Dark Charcoal',
    pricePerDay: 26000,
    driverPrice: 4500,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 4,
    horsepower: 680,
    topSpeed: '310 km/h',
    acceleration: '3.2s (0-100)',
    engine: '4.0L BiTurbo V8 Straight-Piped',
    mileage: '6.0 km/l',
    availability: 'available',
    modified: true,
    modCategory: 'European',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80',
    description: 'Wide aero stance, air-ride suspension with variable ride-height, and custom forged concave 21" wheels.'
  },
  {
    id: 'mod-wrangler-apocalypse',
    brand: 'Jeep',
    model: 'RENTINO Gladiator 6x6 Destroyer',
    category: 'Modified',
    year: 2026,
    color: 'Armor Textured Kevlar Black',
    pricePerDay: 30000,
    driverPrice: 4000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    horsepower: 505,
    topSpeed: '175 km/h',
    acceleration: '5.8s (0-100)',
    engine: '6.4L V8 Supercharged Hemi',
    mileage: '4.8 km/l',
    availability: 'available',
    modified: true,
    modCategory: 'Off-Road',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80',
    description: 'Custom 40-inch mud terrain tires, roof-mounted Baja light bars, steel winch bumper, and full Kevlar coating.'
  }
];

// Brand summary list with counts
const BRANDS_LIST = [
  { name: 'All Brands', count: VEHICLES_DATA.length },
  { name: 'BMW', count: VEHICLES_DATA.filter(v => v.brand === 'BMW').length },
  { name: 'Mercedes-Benz', count: VEHICLES_DATA.filter(v => v.brand === 'Mercedes-Benz').length },
  { name: 'Audi', count: VEHICLES_DATA.filter(v => v.brand === 'Audi').length },
  { name: 'Porsche', count: VEHICLES_DATA.filter(v => v.brand === 'Porsche').length },
  { name: 'Tesla', count: VEHICLES_DATA.filter(v => v.brand === 'Tesla').length },
  { name: 'Range Rover', count: VEHICLES_DATA.filter(v => v.brand === 'Range Rover').length },
  { name: 'Toyota', count: VEHICLES_DATA.filter(v => v.brand === 'Toyota').length },
  { name: 'Jeep', count: VEHICLES_DATA.filter(v => v.brand === 'Jeep').length },
  { name: 'Nissan', count: VEHICLES_DATA.filter(v => v.brand === 'Nissan').length }
];

// Fictional / Sample Testimonials
const TESTIMONIALS = [
  {
    name: 'Vikramaditya Singhania',
    role: 'Tech Entrepreneur, Bangalore',
    car: 'Rented BMW M4 Competition',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    text: '“RENTINO redefined luxury vehicle rentals in India. The BMW M4 was delivered in pristine showroom condition right to my private villa. The sound of that twin-turbo engine was pure music.”'
  },
  {
    name: 'Ananya Deshmukh',
    role: 'Creative Director, Mumbai',
    car: 'Rented Mercedes-Benz Maybach S 580',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    text: '“We booked the Maybach S 580 with a chauffeur for our high-profile film premiere. The professional driver was impeccably trained, punctual, and the entire digital booking took under 2 minutes.”'
  },
  {
    name: 'Rohit K. Mehra',
    role: 'Motorsport Enthusiast, Delhi NCR',
    car: 'Rented RENTINO Modified Godzilla GT-R',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    text: '“The Modified division cars are insane! Driving the 1000HP GT-R on the expressway was an unforgettable bucket-list moment. RENTINO’s yellow-and-black service standard is truly 5 stars.”'
  },
  {
    name: 'Siddharth & Priya Varma',
    role: 'Destination Wedding, Udaipur',
    car: 'Rented Fleet of Range Rovers & G63 AMG',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    text: '“For our royal wedding in Rajasthan, RENTINO managed a fleet of 8 luxury SUVs without a single glitch. Transparent pricing, zero hidden fees, and courteous 24/7 concierge support.”'
  }
];

// ==========================================================================
// 2. APPLICATION STATE MANAGEMENT
// ==========================================================================

const State = {
  activeBrand: 'All Brands',
  activeCategory: 'All',
  searchQuery: '',
  priceRange: 'all',
  transmission: 'all',
  fuel: 'all',
  driverMode: 'without', // 'with' or 'without'
  rentalDurationDays: 1,
  selectedCarForCalc: VEHICLES_DATA[0],
  favorites: JSON.parse(localStorage.getItem('rentino_favorites') || '[]'),
  comparisonList: JSON.parse(localStorage.getItem('rentino_compare') || '[]'),
  currentTestimonialIndex: 0,
  testimonialInterval: null
};

// ==========================================================================
// 3. INITIALIZATION & DOM READY
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCustomCursor();
  initNavigation();
  initHeroSearch();
  initBrandsGrid();
  initBrandCollections();
  renderVehicleMarketplace();
  initFilters();
  initCalculator();
  initTestimonials();
  initAnimatedCounters();
  initScrollReveals();
  initModals();
  updateHeaderBadges();
  renderCompareDock();
});

// ==========================================================================
// 4. PRELOADER & LOADING ANIMATION
// ==========================================================================

function initPreloader() {
  const preloader = document.getElementById('preloader');
  const bar = document.getElementById('preloaderBar');
  const carIcon = document.getElementById('preloaderCarIcon');
  
  if (!preloader) return;

  let progress = 0;
  const timer = setInterval(() => {
    progress += Math.floor(Math.random() * 18) + 8;
    if (progress > 100) progress = 100;
    
    if (bar) bar.style.width = `${progress}%`;
    if (carIcon) carIcon.style.left = `${progress}%`;

    if (progress === 100) {
      clearInterval(timer);
      setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.style.overflowY = 'auto';
      }, 400);
    }
  }, 90);
}

// ==========================================================================
// 5. CUSTOM CURSOR & MAGNETIC MICRO-INTERACTIONS
// ==========================================================================

function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  const follower = document.getElementById('cursorFollower');

  if (!cursor || !follower || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderFollower() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    requestAnimationFrame(renderFollower);
  }
  requestAnimationFrame(renderFollower);

  // Hover expansion over interactive elements
  const interactiveElements = 'a, button, input, select, .vehicle-card, .brand-card, .driver-card-select, .duration-btn';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveElements)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveElements)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

// ==========================================================================
// 6. STICKY NAVBAR, SCROLL EVENTS & MOBILE MENU
// ==========================================================================

function initNavigation() {
  const header = document.querySelector('.site-header');
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const backToTop = document.getElementById('backToTopBtn');

  // Sticky header transition on scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTop) {
      if (scrollY > 600) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });

  // Back to top click
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Hamburger Drawer
  if (hamburger && mobileDrawer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileDrawer.classList.toggle('open');
    });

    // Close mobile menu when clicking nav links
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileDrawer.classList.remove('open');
      });
    });
  }
}

// ==========================================================================
// 7. HERO SEARCH DASHBOARD
// ==========================================================================

function initHeroSearch() {
  const heroForm = document.getElementById('heroSearchForm');
  if (!heroForm) return;

  heroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.getElementById('heroVehicleType')?.value || 'all';
    const driver = document.getElementById('heroDriverChoice')?.value || 'without';
    
    State.activeCategory = type === 'all' ? 'All' : type;
    State.driverMode = driver;

    // Scroll to marketplace & apply
    renderVehicleMarketplace();
    syncFilterUI();
    updateCalculatorUI();

    const target = document.getElementById('vehicles');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    showToast(`Showing ${State.activeCategory} vehicles for you.`);
  });
}

// ==========================================================================
// 8. BRANDS SHOWCASE & INTERACTIVE CAROUSELS
// ==========================================================================

function initBrandsGrid() {
  const container = document.getElementById('brandsGrid');
  if (!container) return;

  container.innerHTML = BRANDS_LIST.map(brand => `
    <div class="brand-card ${State.activeBrand === brand.name ? 'active' : ''}" data-brand="${brand.name}">
      <div class="brand-icon-wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      </div>
      <span class="brand-name">${brand.name}</span>
      <span class="brand-count">${brand.count} Models</span>
    </div>
  `).join('');

  container.querySelectorAll('.brand-card').forEach(card => {
    card.addEventListener('click', () => {
      const brand = card.getAttribute('data-brand');
      State.activeBrand = brand;
      
      container.querySelectorAll('.brand-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      renderVehicleMarketplace();
      const target = document.getElementById('vehicles');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      showToast(`Showing fleet for ${brand}`);
    });
  });
}

function initBrandCollections() {
  // Render BMW Collection Track
  renderBrandCarousel('bmwCarouselTrack', 'BMW');
  // Render Mercedes Collection Track
  renderBrandCarousel('mercCarouselTrack', 'Mercedes-Benz');
  // Render Audi Collection Track
  renderBrandCarousel('audiCarouselTrack', 'Audi');

  // Carousel navigation arrows
  setupCarouselNav('bmwPrevBtn', 'bmwNextBtn', 'bmwCarouselTrack');
  setupCarouselNav('mercPrevBtn', 'mercNextBtn', 'mercCarouselTrack');
  setupCarouselNav('audiPrevBtn', 'audiNextBtn', 'audiCarouselTrack');
}

function renderBrandCarousel(trackId, brandName) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const cars = VEHICLES_DATA.filter(c => c.brand === brandName);
  track.innerHTML = cars.map(car => generateVehicleCardHtml(car)).join('');
  attachCardActionEvents(track);
}

function setupCarouselNav(prevBtnId, nextBtnId, trackId) {
  const prev = document.getElementById(prevBtnId);
  const next = document.getElementById(nextBtnId);
  const track = document.getElementById(trackId);

  if (prev && track) {
    prev.addEventListener('click', () => {
      track.scrollBy({ left: -340, behavior: 'smooth' });
    });
  }
  if (next && track) {
    next.addEventListener('click', () => {
      track.scrollBy({ left: 340, behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// 9. VEHICLE MARKETPLACE RENDERING & FILTERING
// ==========================================================================

function renderVehicleMarketplace() {
  const grid = document.getElementById('vehiclesGrid');
  const countBadge = document.getElementById('vehicleCountBadge');
  if (!grid) return;

  const filtered = VEHICLES_DATA.filter(car => {
    // Brand filter
    if (State.activeBrand !== 'All Brands' && car.brand !== State.activeBrand) return false;
    // Category filter
    if (State.activeCategory !== 'All') {
      if (State.activeCategory === 'Modified') {
        if (!car.modified) return false;
      } else if (car.category !== State.activeCategory) {
        return false;
      }
    }
    // Search query
    if (State.searchQuery.trim() !== '') {
      const q = State.searchQuery.toLowerCase();
      const match = car.brand.toLowerCase().includes(q) ||
                    car.model.toLowerCase().includes(q) ||
                    car.category.toLowerCase().includes(q) ||
                    car.fuel.toLowerCase().includes(q) ||
                    car.color.toLowerCase().includes(q);
      if (!match) return false;
    }
    // Price range
    if (State.priceRange === 'under15k' && car.pricePerDay > 15000) return false;
    if (State.priceRange === '15k-25k' && (car.pricePerDay < 15000 || car.pricePerDay > 25000)) return false;
    if (State.priceRange === '25k-40k' && (car.pricePerDay < 25000 || car.pricePerDay > 40000)) return false;
    if (State.priceRange === 'above40k' && car.pricePerDay <= 40000) return false;

    // Transmission
    if (State.transmission !== 'all' && car.transmission.toLowerCase() !== State.transmission.toLowerCase()) return false;

    // Fuel
    if (State.fuel !== 'all' && car.fuel.toLowerCase() !== State.fuel.toLowerCase()) return false;

    return true;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Vehicles Found`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results-box">
        <h3>No Vehicles Match Your Criteria</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">Try adjusting your filters, brand selection, or search keywords.</p>
        <button class="btn btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(car => generateVehicleCardHtml(car)).join('');
  attachCardActionEvents(grid);
}

function generateVehicleCardHtml(car) {
  const isFavorite = State.favorites.includes(car.id);
  const isCompared = State.comparisonList.includes(car.id);

  let statusHtml = '';
  if (car.availability === 'available') {
    statusHtml = `<span class="vehicle-status-tag status-available"><span class="status-dot"></span> Available</span>`;
  } else if (car.availability === 'limited') {
    statusHtml = `<span class="vehicle-status-tag status-limited"><span class="status-dot"></span> Limited</span>`;
  } else {
    statusHtml = `<span class="vehicle-status-tag status-rented"><span class="status-dot"></span> Rented</span>`;
  }

  const categoryTag = car.modified 
    ? `<span class="vehicle-badge-category modified">⚡ MODIFIED</span>`
    : `<span class="vehicle-badge-category">${car.category}</span>`;

  return `
    <div class="vehicle-card" data-id="${car.id}">
      <div class="vehicle-card-media">
        <img src="${car.image}" alt="${car.brand} ${car.model}" class="vehicle-image" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80'">
        ${categoryTag}
        <button class="vehicle-action-heart ${isFavorite ? 'active' : ''}" data-fav-id="${car.id}" title="Add to Favorites">
          <svg viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        ${statusHtml}
      </div>

      <div class="vehicle-card-body">
        <div class="vehicle-header-info">
          <div>
            <div class="vehicle-brand">${car.brand}</div>
            <h3 class="vehicle-model">${car.model}</h3>
          </div>
          <span class="vehicle-year">${car.year}</span>
        </div>

        <div class="vehicle-specs-matrix">
          <div class="spec-item">
            <span class="spec-label">Power</span>
            <span class="spec-val">${car.horsepower} HP</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Seats</span>
            <span class="spec-val">${car.seats} Seats</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Fuel</span>
            <span class="spec-val">${car.fuel}</span>
          </div>
        </div>

        <div class="vehicle-pricing-row">
          <div class="price-box">
            <span class="price-prefix">From</span>
            <span class="price-amount">₹${car.pricePerDay.toLocaleString('en-IN')}</span>
            <span class="price-unit">/ 24 Hours</span>
          </div>
        </div>

        <div class="vehicle-card-actions">
          <button class="btn btn-secondary btn-sm btn-view-details" data-detail-id="${car.id}">View Details</button>
          <button class="btn btn-primary btn-sm btn-rent-now" data-rent-id="${car.id}">Rent Now</button>
        </div>

        <div class="vehicle-compare-toggle ${isCompared ? 'selected' : ''}" data-compare-id="${car.id}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          <span>${isCompared ? 'Added to Compare' : '+ Compare'}</span>
        </div>
      </div>
    </div>
  `;
}

function attachCardActionEvents(container) {
  // Favorite buttons
  container.querySelectorAll('[data-fav-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-fav-id');
      toggleFavorite(id);
    });
  });

  // Compare toggles
  container.querySelectorAll('[data-compare-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-compare-id');
      toggleCompare(id);
    });
  });

  // View Details
  container.querySelectorAll('[data-detail-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-detail-id');
      openVehicleDetailsModal(id);
    });
  });

  // Rent Now
  container.querySelectorAll('[data-rent-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-rent-id');
      openBookingModal(id);
    });
  });
}

// ==========================================================================
// 10. FILTER CONTROLS & SEARCH HANDLERS
// ==========================================================================

function initFilters() {
  const searchInput = document.getElementById('liveSearchInput');
  const categoryChips = document.querySelectorAll('.filter-chip');
  const priceSelect = document.getElementById('priceFilterSelect');
  const transSelect = document.getElementById('transFilterSelect');
  const fuelSelect = document.getElementById('fuelFilterSelect');
  const resetBtn = document.getElementById('resetFiltersBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      State.searchQuery = e.target.value;
      renderVehicleMarketplace();
    });
  }

  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      State.activeCategory = chip.getAttribute('data-category');
      renderVehicleMarketplace();
    });
  });

  if (priceSelect) {
    priceSelect.addEventListener('change', (e) => {
      State.priceRange = e.target.value;
      renderVehicleMarketplace();
    });
  }

  if (transSelect) {
    transSelect.addEventListener('change', (e) => {
      State.transmission = e.target.value;
      renderVehicleMarketplace();
    });
  }

  if (fuelSelect) {
    fuelSelect.addEventListener('change', (e) => {
      State.fuel = e.target.value;
      renderVehicleMarketplace();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', resetAllFilters);
  }
}

function resetAllFilters() {
  State.activeBrand = 'All Brands';
  State.activeCategory = 'All';
  State.searchQuery = '';
  State.priceRange = 'all';
  State.transmission = 'all';
  State.fuel = 'all';

  syncFilterUI();
  initBrandsGrid();
  renderVehicleMarketplace();
  showToast('All filters have been reset.');
}

function syncFilterUI() {
  const searchInput = document.getElementById('liveSearchInput');
  if (searchInput) searchInput.value = State.searchQuery;

  document.querySelectorAll('.filter-chip').forEach(chip => {
    if (chip.getAttribute('data-category') === State.activeCategory) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });

  const priceSelect = document.getElementById('priceFilterSelect');
  if (priceSelect) priceSelect.value = State.priceRange;

  const transSelect = document.getElementById('transFilterSelect');
  if (transSelect) transSelect.value = State.transmission;

  const fuelSelect = document.getElementById('fuelFilterSelect');
  if (fuelSelect) fuelSelect.value = State.fuel;
}

// ==========================================================================
// 11. INTERACTIVE RENTAL CALCULATOR & DRIVER PICKER
// ==========================================================================

function initCalculator() {
  const carSelect = document.getElementById('calcCarSelect');
  const durationBtns = document.querySelectorAll('.duration-btn');
  const driverCards = document.querySelectorAll('.driver-card-select');

  // Populate vehicle selector in calculator
  if (carSelect) {
    carSelect.innerHTML = VEHICLES_DATA.map(car => `
      <option value="${car.id}" ${car.id === State.selectedCarForCalc.id ? 'selected' : ''}>
        ${car.brand} ${car.model} (₹${car.pricePerDay.toLocaleString('en-IN')}/day)
      </option>
    `).join('');

    carSelect.addEventListener('change', (e) => {
      const selected = VEHICLES_DATA.find(c => c.id === e.target.value);
      if (selected) {
        State.selectedCarForCalc = selected;
        updateCalculatorUI();
      }
    });
  }

  durationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      durationBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      State.rentalDurationDays = parseInt(btn.getAttribute('data-days'), 10);
      updateCalculatorUI();
    });
  });

  driverCards.forEach(card => {
    card.addEventListener('click', () => {
      driverCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      State.driverMode = card.getAttribute('data-driver-mode');
      updateCalculatorUI();
    });
  });

  updateCalculatorUI();
}

function updateCalculatorUI() {
  const car = State.selectedCarForCalc;
  if (!car) return;

  const days = State.rentalDurationDays;
  const baseRate = car.pricePerDay * days;
  
  // Apply duration discounts
  let discountPercent = 0;
  if (days >= 7 && days < 14) discountPercent = 10;
  if (days >= 14) discountPercent = 18;
  const discountAmount = Math.round(baseRate * (discountPercent / 100));

  // Driver fee
  const driverRate = State.driverMode === 'with' ? (car.driverPrice * days) : 0;
  const deposit = 15000;
  const gstTax = Math.round((baseRate - discountAmount + driverRate) * 0.18);
  const grandTotal = (baseRate - discountAmount + driverRate + gstTax);

  // Update DOM elements
  const elCarName = document.getElementById('calcCarName');
  const elBasePrice = document.getElementById('calcBasePrice');
  const elDaysLabel = document.getElementById('calcDaysLabel');
  const elDiscountRow = document.getElementById('calcDiscountRow');
  const elDiscountVal = document.getElementById('calcDiscountVal');
  const elDriverVal = document.getElementById('calcDriverVal');
  const elTaxVal = document.getElementById('calcTaxVal');
  const elDepositVal = document.getElementById('calcDepositVal');
  const elGrandTotal = document.getElementById('calcGrandTotal');

  if (elCarName) elCarName.textContent = `${car.brand} ${car.model}`;
  if (elBasePrice) elBasePrice.textContent = `₹${baseRate.toLocaleString('en-IN')}`;
  if (elDaysLabel) elDaysLabel.textContent = `(${days} ${days === 1 ? 'Day' : 'Days'})`;

  if (elDiscountRow && elDiscountVal) {
    if (discountPercent > 0) {
      elDiscountRow.style.display = 'flex';
      elDiscountVal.textContent = `-₹${discountAmount.toLocaleString('en-IN')} (${discountPercent}% Off)`;
    } else {
      elDiscountRow.style.display = 'none';
    }
  }

  if (elDriverVal) {
    elDriverVal.textContent = State.driverMode === 'with' ? `₹${driverRate.toLocaleString('en-IN')}` : '₹0 (Self-Drive)';
  }
  if (elTaxVal) elTaxVal.textContent = `₹${gstTax.toLocaleString('en-IN')}`;
  if (elDepositVal) elDepositVal.textContent = `₹${deposit.toLocaleString('en-IN')} (Refundable)`;
  if (elGrandTotal) elGrandTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

// ==========================================================================
// 12. FAVORITES & COMPARISON MANAGER
// ==========================================================================

function toggleFavorite(carId) {
  const index = State.favorites.indexOf(carId);
  const car = VEHICLES_DATA.find(c => c.id === carId);
  
  if (index === -1) {
    State.favorites.push(carId);
    showToast(`Added ${car ? car.model : 'vehicle'} to My Favorites ❤️`);
  } else {
    State.favorites.splice(index, 1);
    showToast(`Removed from Favorites`);
  }

  localStorage.setItem('rentino_favorites', JSON.stringify(State.favorites));
  updateHeaderBadges();
  renderVehicleMarketplace();
}

function toggleCompare(carId) {
  const index = State.comparisonList.indexOf(carId);
  const car = VEHICLES_DATA.find(c => c.id === carId);

  if (index === -1) {
    if (State.comparisonList.length >= 3) {
      showToast('You can compare a maximum of 3 vehicles at once.', 'warning');
      return;
    }
    State.comparisonList.push(carId);
    showToast(`Added ${car ? car.model : 'vehicle'} to Compare`);
  } else {
    State.comparisonList.splice(index, 1);
    showToast(`Removed from Comparison`);
  }

  localStorage.setItem('rentino_compare', JSON.stringify(State.comparisonList));
  updateHeaderBadges();
  renderCompareDock();
  renderVehicleMarketplace();
}

function updateHeaderBadges() {
  const favBadge = document.getElementById('favBadgeCounter');
  const compareBadge = document.getElementById('compareBadgeCounter');

  if (favBadge) favBadge.textContent = State.favorites.length;
  if (compareBadge) compareBadge.textContent = State.comparisonList.length;
}

function renderCompareDock() {
  const dock = document.getElementById('compareDock');
  const slots = document.getElementById('compareDockSlots');
  if (!dock || !slots) return;

  if (State.comparisonList.length === 0) {
    dock.classList.remove('visible');
    return;
  }

  dock.classList.add('visible');
  slots.innerHTML = State.comparisonList.map(id => {
    const car = VEHICLES_DATA.find(c => c.id === id);
    return `
      <div class="compare-dock-thumb" title="${car ? car.model : ''}">
        ${car ? `<img src="${car.image}" alt="${car.model}">` : ''}
      </div>
    `;
  }).join('');
}

// ==========================================================================
// 13. MODALS (DETAILS, BOOKING, COMPARE, FAVORITES & VOUCHER)
// ==========================================================================

function initModals() {
  // Backdrop click to close
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // Close buttons inside modals
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  // Header button triggers
  const favNavBtn = document.getElementById('favNavBtn');
  const compareNavBtn = document.getElementById('compareNavBtn');
  const openCompareDockBtn = document.getElementById('openCompareDockBtn');
  const clearCompareDockBtn = document.getElementById('clearCompareDockBtn');

  if (favNavBtn) favNavBtn.addEventListener('click', openFavoritesModal);
  if (compareNavBtn) compareNavBtn.addEventListener('click', openCompareModal);
  if (openCompareDockBtn) openCompareDockBtn.addEventListener('click', openCompareModal);
  if (clearCompareDockBtn) {
    clearCompareDockBtn.addEventListener('click', () => {
      State.comparisonList = [];
      localStorage.setItem('rentino_compare', JSON.stringify([]));
      updateHeaderBadges();
      renderCompareDock();
      renderVehicleMarketplace();
      showToast('Comparison list cleared.');
    });
  }

  // Booking Form Submission
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleBookingSubmit);
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('open'));
}

function openVehicleDetailsModal(carId) {
  const car = VEHICLES_DATA.find(c => c.id === carId);
  if (!car) return;

  const modal = document.getElementById('vehicleDetailsModal');
  const content = document.getElementById('vehicleDetailsContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="modal-vehicle-grid">
      <div class="modal-vehicle-hero">
        <img src="${car.image}" alt="${car.model}">
        <span class="vehicle-badge-category" style="top: 20px; left: 20px;">${car.category}</span>
      </div>

      <div>
        <div class="vehicle-brand" style="font-size: 14px;">${car.brand}</div>
        <h2 class="section-title" style="font-size: 28px; margin-bottom: 8px;">${car.model}</h2>
        <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 16px;">${car.description}</p>

        <div class="modal-specs-list">
          <div class="modal-spec-badge">
            <span class="spec-label">Horsepower</span>
            <span class="spec-val" style="color: var(--primary-yellow);">${car.horsepower} HP</span>
          </div>
          <div class="modal-spec-badge">
            <span class="spec-label">0-100 km/h</span>
            <span class="spec-val">${car.acceleration}</span>
          </div>
          <div class="modal-spec-badge">
            <span class="spec-label">Top Speed</span>
            <span class="spec-val">${car.topSpeed}</span>
          </div>
          <div class="modal-spec-badge">
            <span class="spec-label">Engine</span>
            <span class="spec-val">${car.engine}</span>
          </div>
          <div class="modal-spec-badge">
            <span class="spec-label">Transmission</span>
            <span class="spec-val">${car.transmission}</span>
          </div>
          <div class="modal-spec-badge">
            <span class="spec-label">Seating</span>
            <span class="spec-val">${car.seats} Persons</span>
          </div>
        </div>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="color: var(--text-muted); font-size: 13px;">Daily Rental Rate:</span>
            <span style="font-family: var(--font-display); font-size: 22px; font-weight: 800; color: var(--primary-yellow);">₹${car.pricePerDay.toLocaleString('en-IN')}/day</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: var(--text-secondary);">
            <span>Chauffeur Service:</span>
            <span>+₹${car.driverPrice.toLocaleString('en-IN')}/day</span>
          </div>
        </div>

        <div style="display: flex; gap: 12px;">
          <button class="btn btn-primary" style="flex: 1;" onclick="closeAllModals(); openBookingModal('${car.id}');">Rent This Vehicle</button>
          <button class="btn btn-secondary" onclick="closeAllModals();">Close</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function openBookingModal(carId) {
  const modal = document.getElementById('bookingModal');
  const carSelect = document.getElementById('bookCarSelect');
  if (!modal) return;

  if (carSelect) {
    carSelect.innerHTML = VEHICLES_DATA.map(c => `
      <option value="${c.id}" ${c.id === carId ? 'selected' : ''}>
        ${c.brand} ${c.model} (₹${c.pricePerDay.toLocaleString('en-IN')}/day)
      </option>
    `).join('');
  }

  // Pre-fill today and return date
  const today = new Date().toISOString().split('T')[0];
  const nextDay = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];
  
  const pickupInput = document.getElementById('bookPickupDate');
  const returnInput = document.getElementById('bookReturnDate');
  if (pickupInput) pickupInput.value = today;
  if (returnInput) returnInput.value = nextDay;

  modal.classList.add('open');
}

function handleBookingSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('bookFullName')?.value;
  const phone = document.getElementById('bookPhone')?.value;
  const email = document.getElementById('bookEmail')?.value;
  const carId = document.getElementById('bookCarSelect')?.value;
  const location = document.getElementById('bookLocation')?.value;
  const pickupDate = document.getElementById('bookPickupDate')?.value;
  const duration = parseInt(document.getElementById('bookDuration')?.value || '1', 10);
  const driverOption = document.getElementById('bookDriverOption')?.value;

  const car = VEHICLES_DATA.find(c => c.id === carId) || VEHICLES_DATA[0];
  const bookingRef = `RENT-${Math.floor(100000 + Math.random() * 900000)}`;

  // Save to localStorage for demo persistence
  const newBooking = {
    bookingRef,
    timestamp: new Date().toISOString(),
    customer: { name, phone, email },
    vehicle: car.brand + ' ' + car.model,
    location,
    pickupDate,
    duration,
    driverOption,
    totalPaid: car.pricePerDay * duration + (driverOption === 'with' ? car.driverPrice * duration : 0)
  };

  const existing = JSON.parse(localStorage.getItem('rentino_bookings') || '[]');
  existing.push(newBooking);
  localStorage.setItem('rentino_bookings', JSON.stringify(existing));

  closeAllModals();
  openVoucherModal(newBooking);
}

function openVoucherModal(booking) {
  const modal = document.getElementById('voucherModal');
  const content = document.getElementById('voucherContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="text-align: center; padding: 20px;">
      <div style="width: 60px; height: 60px; background: rgba(16, 185, 129, 0.2); border: 2px solid #10b981; border-radius: 50%; display: grid; place-items: center; margin: 0 auto 16px; color: #10b981;">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>

      <span class="section-tag" style="margin-bottom: 8px;">VIP RESERVATION CONFIRMED</span>
      <h2 class="section-title" style="font-size: 26px; margin-bottom: 6px;">Booking #${booking.bookingRef}</h2>
      <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 24px;">Your luxury vehicle has been reserved. Our concierge will contact you immediately.</p>

      <div class="calc-summary-receipt" style="text-align: left; margin-bottom: 24px;">
        <div class="receipt-row">
          <span>Client Name:</span>
          <strong style="color: #fff;">${booking.customer.name}</strong>
        </div>
        <div class="receipt-row">
          <span>Reserved Vehicle:</span>
          <strong style="color: var(--primary-yellow);">${booking.vehicle}</strong>
        </div>
        <div class="receipt-row">
          <span>Pickup Location:</span>
          <span>${booking.location}</span>
        </div>
        <div class="receipt-row">
          <span>Pickup Date & Duration:</span>
          <span>${booking.pickupDate} (${booking.duration} Days)</span>
        </div>
        <div class="receipt-row">
          <span>Chauffeur Mode:</span>
          <span>${booking.driverOption === 'with' ? 'Professional Chauffeur' : 'Self Drive'}</span>
        </div>
        <div class="receipt-divider"></div>
        <div class="receipt-total-row">
          <span class="receipt-total-label">Estimated Total:</span>
          <span class="receipt-total-val">₹${booking.totalPaid.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <button class="btn btn-primary" onclick="closeAllModals();">Done & Back to Showroom</button>
    </div>
  `;

  modal.classList.add('open');
  showToast(`Booking ${booking.bookingRef} successfully placed!`);
}

function openFavoritesModal() {
  const modal = document.getElementById('favoritesModal');
  const container = document.getElementById('favoritesListContent');
  if (!modal || !container) return;

  const favCars = VEHICLES_DATA.filter(c => State.favorites.includes(c.id));

  if (favCars.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <p style="color: var(--text-secondary); margin-bottom: 16px;">You haven't saved any dream vehicles to your favorites yet.</p>
        <button class="btn btn-primary btn-sm" onclick="closeAllModals();">Browse Showroom</button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 14px;">
        ${favCars.map(car => `
          <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.04); border: 1px solid var(--border-glass); border-radius: 12px; padding: 14px; gap: 14px;">
            <img src="${car.image}" alt="${car.model}" style="width: 80px; height: 50px; object-fit: cover; border-radius: 8px;">
            <div style="flex: 1;">
              <h4 style="font-size: 15px; color: #fff;">${car.brand} ${car.model}</h4>
              <span style="font-size: 13px; color: var(--primary-yellow); font-family: var(--font-display);">₹${car.pricePerDay.toLocaleString('en-IN')}/day</span>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="btn btn-primary btn-sm" onclick="closeAllModals(); openBookingModal('${car.id}');">Rent</button>
              <button class="btn btn-secondary btn-sm" onclick="toggleFavorite('${car.id}'); openFavoritesModal();">✕</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  modal.classList.add('open');
}

function openCompareModal() {
  const modal = document.getElementById('compareModal');
  const container = document.getElementById('compareTableContent');
  if (!modal || !container) return;

  const compareCars = VEHICLES_DATA.filter(c => State.comparisonList.includes(c.id));

  if (compareCars.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <p style="color: var(--text-secondary); margin-bottom: 16px;">No vehicles selected for comparison. Click "+ Compare" on any car card.</p>
        <button class="btn btn-primary btn-sm" onclick="closeAllModals();">Explore Cars</button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div style="overflow-x: auto;">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Specification</th>
              ${compareCars.map(car => `
                <th style="color: #fff; min-width: 180px;">
                  <img src="${car.image}" alt="${car.model}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;">
                  <div style="font-size: 16px; font-weight: 700;">${car.model}</div>
                  <div style="color: var(--primary-yellow);">₹${car.pricePerDay.toLocaleString('en-IN')}/day</div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brand</td>
              ${compareCars.map(c => `<td>${c.brand}</td>`).join('')}
            </tr>
            <tr>
              <td>Category</td>
              ${compareCars.map(c => `<td>${c.category}</td>`).join('')}
            </tr>
            <tr>
              <td>Horsepower</td>
              ${compareCars.map(c => `<td><strong>${c.horsepower} HP</strong></td>`).join('')}
            </tr>
            <tr>
              <td>0-100 Acceleration</td>
              ${compareCars.map(c => `<td>${c.acceleration}</td>`).join('')}
            </tr>
            <tr>
              <td>Top Speed</td>
              ${compareCars.map(c => `<td>${c.topSpeed}</td>`).join('')}
            </tr>
            <tr>
              <td>Engine</td>
              ${compareCars.map(c => `<td>${c.engine}</td>`).join('')}
            </tr>
            <tr>
              <td>Fuel Type</td>
              ${compareCars.map(c => `<td>${c.fuel}</td>`).join('')}
            </tr>
            <tr>
              <td>Transmission</td>
              ${compareCars.map(c => `<td>${c.transmission}</td>`).join('')}
            </tr>
            <tr>
              <td>Seats</td>
              ${compareCars.map(c => `<td>${c.seats} Persons</td>`).join('')}
            </tr>
            <tr>
              <td>Action</td>
              ${compareCars.map(c => `
                <td>
                  <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="closeAllModals(); openBookingModal('${c.id}');">Book Now</button>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  modal.classList.add('open');
}

// ==========================================================================
// 14. TESTIMONIALS SLIDER
// ==========================================================================

function initTestimonials() {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;

  renderTestimonial(0);

  // Auto advance every 6 seconds
  State.testimonialInterval = setInterval(() => {
    State.currentTestimonialIndex = (State.currentTestimonialIndex + 1) % TESTIMONIALS.length;
    renderTestimonial(State.currentTestimonialIndex);
  }, 6000);
}

function renderTestimonial(index) {
  const item = TESTIMONIALS[index];
  const tText = document.getElementById('tText');
  const tAvatar = document.getElementById('tAvatar');
  const tName = document.getElementById('tName');
  const tRole = document.getElementById('tRole');
  const tCar = document.getElementById('tCar');
  const dots = document.querySelectorAll('.t-dot');

  if (tText) tText.textContent = item.text;
  if (tAvatar) tAvatar.src = item.avatar;
  if (tName) tName.textContent = item.name;
  if (tRole) tRole.textContent = item.role;
  if (tCar) tCar.textContent = item.car;

  dots.forEach((dot, dIdx) => {
    if (dIdx === index) dot.classList.add('active');
    else dot.classList.remove('active');
    
    dot.onclick = () => {
      State.currentTestimonialIndex = dIdx;
      renderTestimonial(dIdx);
    };
  });
}

// ==========================================================================
// 15. ANIMATED STATISTICS COUNTER
// ==========================================================================

function initAnimatedCounters() {
  const statsSection = document.getElementById('statsSection');
  if (!statsSection) return;

  let hasAnimated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateNumber('statVehicles', 500, '+');
        animateNumber('statBrands', 30, '+');
        animateNumber('statRentals', 10000, '+');
        animateNumber('statSatisfaction', 99, '%');
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

function animateNumber(elementId, target, suffix = '') {
  const el = document.getElementById(elementId);
  if (!el) return;

  let count = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    el.textContent = `${count.toLocaleString('en-IN')}${suffix}`;
  }, 25);
}

// ==========================================================================
// 16. SCROLL TRIGGER REVEALS
// ==========================================================================

function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

// ==========================================================================
// 17. TOAST NOTIFICATION ENGINE
// ==========================================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-yellow)" stroke-width="2.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
