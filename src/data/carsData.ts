export interface Car {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  category: 'new' | 'rental';
  type: {
    ar: string;
    en: string;
  };
  price: {
    ar: string;
    en: string;
  };
  rentalDailyPrice?: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  specs: {
    engine: string;
    power: string;
    transmission: {
      ar: string;
      en: string;
    };
    fuelType: {
      ar: string;
      en: string;
    };
    seats: number;
    year: number;
    acceleration?: string;
    topSpeed?: string;
  };
  // Render styling / vector silhouette configurations
  silhouetteStyle: {
    bodyColor: string;
    accentColor: string;
    wheelColor: string;
    windowTint: string;
    shapeType: 'coupe' | 'sedan' | 'suv' | 'hypercar' | 'convertible';
  };
}

export const carsData: Car[] = [
  // NEW CARS FOR SALE
  {
    id: 'bmw-m4-competition',
    name: {
      ar: 'بي إم دبليو M4 كومبيتشن',
      en: 'BMW M4 Competition',
    },
    category: 'new',
    type: {
      ar: 'كوبيه رياضية عالية الأداء',
      en: 'High-Performance Sports Coupe',
    },
    price: {
      ar: '$115,000',
      en: '$115,000',
    },
    description: {
      ar: 'تجسيد حقيقي للقوة والأناقة المعمارية، وتتميز بمحرك M TwinPower Turbo وتصميم هجومي انسيابي ديناميكي.',
      en: 'An embodiment of supreme power and architectural elegance, featuring the M TwinPower Turbo engine and aggressive aerodynamics.',
    },
    specs: {
      engine: '3.0L Twin-Turbo Inline-6',
      power: '503 HP @ 6,250 RPM',
      transmission: {
        ar: '8 سرعات أتوماتيك M Steptronic',
        en: '8-Speed M Steptronic Automatic',
      },
      fuelType: {
        ar: 'بنزين 98',
        en: 'Premium Gasoline',
      },
      seats: 4,
      year: 2026,
      acceleration: '3.4s (0-100 km/h)',
      topSpeed: '290 km/h',
    },
    silhouetteStyle: {
      bodyColor: '#1e293b',
      accentColor: '#38bdf8',
      wheelColor: '#94a3b8',
      windowTint: '#0f172a',
      shapeType: 'coupe',
    },
  },
  {
    id: 'porsche-911-gt3-rs',
    name: {
      ar: 'بورشه 911 GT3 RS',
      en: 'Porsche 911 GT3 RS',
    },
    category: 'new',
    type: {
      ar: 'سيارة سباق رياضية مخصصة للطرائق',
      en: 'Road-Legal Motorsport Supercar',
    },
    price: {
      ar: '$275,000',
      en: '$275,000',
    },
    description: {
      ar: 'الديناميكية الهوائية في أقصى صورها، هندسة متطورة تم تسخيرها لتقديم أداء حلبات السباق على الطرقات العامة.',
      en: 'Uncompromised aerodynamics and motorsport engineering refined for peak road performance.',
    },
    specs: {
      engine: '4.0L Naturally Aspirated Flat-6',
      power: '518 HP @ 8,500 RPM',
      transmission: {
        ar: '7 سرعات PDK ثنائي التعشيق',
        en: '7-Speed Dual-Clutch PDK',
      },
      fuelType: {
        ar: 'بنزين عالي الأداء',
        en: 'High-Octane Gasoline',
      },
      seats: 2,
      year: 2026,
      acceleration: '3.2s (0-100 km/h)',
      topSpeed: '296 km/h',
    },
    silhouetteStyle: {
      bodyColor: '#f8fafc',
      accentColor: '#ef4444',
      wheelColor: '#334155',
      windowTint: '#090a0f',
      shapeType: 'hypercar',
    },
  },
  {
    id: 'mercedes-amg-gt-63',
    name: {
      ar: 'مرسيدس AMG GT 63 S',
      en: 'Mercedes-AMG GT 63 S',
    },
    category: 'new',
    type: {
      ar: 'كوبيه 4 أبواب فائقة الفخامة',
      en: 'Ultra-Luxury 4-Door Coupe',
    },
    price: {
      ar: '$185,000',
      en: '$185,000',
    },
    description: {
      ar: 'مزج خيالي بين الفخامة المطلقة للسيدان الأرستقراطية وقوة سيارات AMG الجبارة.',
      en: 'The ultimate synthesis of aristocratic sedan luxury and raw AMG V8 performance.',
    },
    specs: {
      engine: '4.0L Bi-Turbo V8',
      power: '630 HP @ 6,500 RPM',
      transmission: {
        ar: '9 سرعات AMG SPEEDSHIFT',
        en: '9-Speed AMG SPEEDSHIFT MCT',
      },
      fuelType: {
        ar: 'بنزين ممتاز',
        en: 'Premium Gasoline',
      },
      seats: 5,
      year: 2026,
      acceleration: '3.1s (0-100 km/h)',
      topSpeed: '315 km/h',
    },
    silhouetteStyle: {
      bodyColor: '#334155',
      accentColor: '#e2e8f0',
      wheelColor: '#64748b',
      windowTint: '#1e293b',
      shapeType: 'sedan',
    },
  },
  {
    id: 'range-rover-sv-autobiography',
    name: {
      ar: 'رينج روفر SV أوتوبيوجرافي',
      en: 'Range Rover SV Autobiography',
    },
    category: 'new',
    type: {
      ar: 'دفع رباعي أسطوري فاخر',
      en: 'Pinnacle Luxury SUV',
    },
    price: {
      ar: '$240,000',
      en: '$240,000',
    },
    description: {
      ar: 'رمز الفخامة والسيادة على جميع التضاريس، مع مقصورة مصممة خصيصاً لتوفير الراحة القصوى.',
      en: 'The pinnacle of refined luxury and cross-terrain capability, featuring a bespoke executive interior.',
    },
    specs: {
      engine: '4.4L Twin-Turbo V8',
      power: '606 HP @ 6,000 RPM',
      transmission: {
        ar: '8 سرعات أوتوماتيك مع نظام رباعي مستمر',
        en: '8-Speed Automatic All-Wheel Drive',
      },
      fuelType: {
        ar: 'بنزين',
        en: 'Gasoline',
      },
      seats: 5,
      year: 2026,
      acceleration: '4.5s (0-100 km/h)',
      topSpeed: '260 km/h',
    },
    silhouetteStyle: {
      bodyColor: '#0f172a',
      accentColor: '#cbd5e1',
      wheelColor: '#475569',
      windowTint: '#020617',
      shapeType: 'suv',
    },
  },

  // CAR RENTAL FLEET
  {
    id: 'audi-rs7-sportback',
    name: {
      ar: 'أودي RS7 سبورتباك',
      en: 'Audi RS7 Sportback',
    },
    category: 'rental',
    type: {
      ar: 'سيدان رياضية فاخرة للتأجير',
      en: 'Luxury Sportback Rental',
    },
    price: {
      ar: '$160,000',
      en: '$160,000',
    },
    rentalDailyPrice: {
      ar: '$350',
      en: '$350',
    },
    description: {
      ar: 'تصميم رياضي واسع ومقصورة ذكية تمنحك هيبة القيادة والراحة الكاملة أثناء التنقلات اليومية ورجال الأعمال.',
      en: 'Striking design and intelligent cockpit providing executive presence and effortless daily luxury.',
    },
    specs: {
      engine: '4.0L Twin-Turbo V8 Mild-Hybrid',
      power: '591 HP',
      transmission: {
        ar: '8 سرعات tiptronic مع نظام quattro',
        en: '8-Speed Tiptronic Quattro',
      },
      fuelType: {
        ar: 'بنزين',
        en: 'Gasoline',
      },
      seats: 5,
      year: 2025,
      acceleration: '3.6s (0-100 km/h)',
      topSpeed: '280 km/h',
    },
    silhouetteStyle: {
      bodyColor: '#475569',
      accentColor: '#f1f5f9',
      wheelColor: '#94a3b8',
      windowTint: '#0f172a',
      shapeType: 'sedan',
    },
  },
  {
    id: 'mercedes-g63-amg',
    name: {
      ar: 'مرسيدس G63 AMG',
      en: 'Mercedes-AMG G63',
    },
    category: 'rental',
    type: {
      ar: 'سيارة دفع رباعي أيقونية',
      en: 'Iconic Luxury Geländewagen',
    },
    price: {
      ar: '$220,000',
      en: '$220,000',
    },
    rentalDailyPrice: {
      ar: '$500',
      en: '$500',
    },
    description: {
      ar: 'المركبة الأكثر شهرة واستئجاراً للشخصيات الهامة، تتميز بحضورها المهيب وصوت المحرك الجبار.',
      en: 'The legendary off-roader of choice for distinguished drivers, boasting immense command and exhaust note.',
    },
    specs: {
      engine: '4.0L V8 Biturbo',
      power: '577 HP',
      transmission: {
        ar: '9 سرعات AMG SPEEDSHIFT TCT',
        en: '9-Speed AMG SPEEDSHIFT TCT',
      },
      fuelType: {
        ar: 'بنزين',
        en: 'Gasoline',
      },
      seats: 5,
      year: 2025,
      acceleration: '4.5s (0-100 km/h)',
      topSpeed: '240 km/h',
    },
    silhouetteStyle: {
      bodyColor: '#1e1e24',
      accentColor: '#e2e8f0',
      wheelColor: '#475569',
      windowTint: '#000000',
      shapeType: 'suv',
    },
  },
  {
    id: 'bmw-750i-xdrive',
    name: {
      ar: 'بي إم دبليو الفئة السابعة 750i',
      en: 'BMW 7 Series 750i xDrive',
    },
    category: 'rental',
    type: {
      ar: 'سيدان رئاسية فائقة الهدوء',
      en: 'Presidential Luxury Sedan',
    },
    price: {
      ar: '$140,000',
      en: '$140,000',
    },
    rentalDailyPrice: {
      ar: '$300',
      en: '$300',
    },
    description: {
      ar: 'قمة الراحة والتقنية للمؤتمرات والزيارات الرسمية، تتميز بنظام تعليق هوائي فائق النعومة.',
      en: 'Sublime silence, executive seating, and ultra-smooth air suspension crafted for official visits.',
    },
    specs: {
      engine: '4.4L TwinPower V8',
      power: '536 HP',
      transmission: {
        ar: '8 سرعات Steptronic',
        en: '8-Speed Steptronic Automatic',
      },
      fuelType: {
        ar: 'بنزين / هجين جزئي',
        en: 'Gasoline / Mild-Hybrid',
      },
      seats: 5,
      year: 2026,
      acceleration: '4.1s (0-100 km/h)',
      topSpeed: '250 km/h',
    },
    silhouetteStyle: {
      bodyColor: '#0f172a',
      accentColor: '#94a3b8',
      wheelColor: '#cbd5e1',
      windowTint: '#020617',
      shapeType: 'sedan',
    },
  },
  {
    id: 'cadillac-escalade-esv',
    name: {
      ar: 'كاديلات إسكاليد ESV',
      en: 'Cadillac Escalade ESV',
    },
    category: 'rental',
    type: {
      ar: 'دفع رباعي عائلي ورئاسي واسع',
      en: 'Full-Size Executive SUV',
    },
    price: {
      ar: '$130,000',
      en: '$130,000',
    },
    rentalDailyPrice: {
      ar: '$280',
      en: '$280',
    },
    description: {
      ar: 'اتساع فائق يتسع لسبعة ركاب مع شاشات OLED منحنية ونظام صوتي AKG Studio المذهل.',
      en: 'Expansive 7-seater space paired with curved OLED displays and immersive studio acoustics.',
    },
    specs: {
      engine: '6.2L V8 Dynamic Fuel Management',
      power: '420 HP',
      transmission: {
        ar: '10 سرعات أوتوماتيك',
        en: '10-Speed Automatic',
      },
      fuelType: {
        ar: 'بنزين',
        en: 'Gasoline',
      },
      seats: 7,
      year: 2025,
      acceleration: '5.9s (0-100 km/h)',
      topSpeed: '210 km/h',
    },
    silhouetteStyle: {
      bodyColor: '#334155',
      accentColor: '#f8fafc',
      wheelColor: '#64748b',
      windowTint: '#0f172a',
      shapeType: 'suv',
    },
  },
];
