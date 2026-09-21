export type Language = 'ar' | 'en';

export interface TranslationKeys {
  // Navigation
  brandName: string;
  brandSubtitle: string;
  navHome: string;
  navNewCars: string;
  navRental: string;
  navAbout: string;
  navContact: string;
  switchLanguage: string;

  // Hero
  heroTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  exploreNewCars: string;
  exploreRentalCars: string;
  heroBadge: string;

  // Section Titles
  newCarsTitle: string;
  newCarsSubtitle: string;
  rentalTitle: string;
  rentalSubtitle: string;
  aboutTitle: string;
  aboutSubtitle: string;
  contactTitle: string;
  contactSubtitle: string;

  // Car Details
  viewDetails: string;
  backToListing: string;
  specifications: string;
  price: string;
  rentalRate: string;
  perDay: string;
  contactNow: string;
  engine: string;
  power: string;
  transmission: string;
  fuelType: string;
  seats: string;
  modelYear: string;
  dragToRotate: string;
  autoRotate: string;

  // WhatsApp Modal / Inquiry
  inquireHeader: string;
  inquireSubtitle: string;
  yourName: string;
  yourPhone: string;
  additionalMessage: string;
  sendWhatsApp: string;
  whatsappDefaultMsg: string;

  // About Section Content
  aboutP1: string;
  aboutP2: string;
  statExperience: string;
  statVehicles: string;
  statClients: string;

  // Contact Form
  sendMessage: string;
  addressTitle: string;
  addressValue: string;
  phoneTitle: string;
  emailTitle: string;
  workingHoursTitle: string;
  workingHoursValue: string;

  // Footer
  footerTagline: string;
  rightsReserved: string;
  quickLinks: string;
  contactInfo: string;
}

export const translations: Record<Language, TranslationKeys> = {
  ar: {
    brandName: 'أكوارا',
    brandSubtitle: 'لبيع وأجار السيارات',
    navHome: 'الرئيسية',
    navNewCars: 'السيارات الجديدة',
    navRental: 'تأجير السيارات',
    navAbout: 'عن أكوارا',
    navContact: 'اتصل بنا',
    switchLanguage: 'English',

    heroTagline: 'قمة الفخامة والهندسة الراقية',
    heroTitle: 'تجربة قيادة استثنائية تناسب تطلعاتك',
    heroSubtitle: 'شركة أكوارا تقدم مجموعة مختارة من أحدث السيارات الفاخرة للبيع وخدمات التأجير الراقية بأعلى معايير الجودة والاحترافية.',
    exploreNewCars: 'استكشف السيارات الجديدة',
    exploreRentalCars: 'استكشف سيارات الإيجار',
    heroBadge: 'التميز المعماري في عالم السيارات',

    newCarsTitle: 'السيارات الجديدة للبيع',
    newCarsSubtitle: 'مجموعة من أحدث الطرازات الفاخرة المصممة خصيصاً لعشاق التميز والأداء العالي',
    rentalTitle: 'أسطول تأجير السيارات',
    rentalSubtitle: 'خيارات تأجير عملية وراقية بأسعار منافسة وخدمة متكاملة على مدار الساعة',
    aboutTitle: 'عن شركة أكوارا',
    aboutSubtitle: 'نحن لا نبيع السيارات فحسب، بل نصنع معايير جديدة للفخامة والخدمة المتميزة',
    contactTitle: 'تواصل معنا',
    contactSubtitle: 'فريقنا المستشار جاهز للإجابة على كافة استفساراتكم وتلبية تطلعاتكم',

    viewDetails: 'عرض التفاصيل',
    backToListing: 'العودة للفيلم الرئيسي',
    specifications: 'المواصفات الفنية',
    price: 'السعر',
    rentalRate: 'سعر الإيجار اليومي',
    perDay: '/ يوم',
    contactNow: 'تواصل الآن عبر واتساب',
    engine: 'المحرك',
    power: 'القوة',
    transmission: 'ناقل الحركة',
    fuelType: 'نوع الوقود',
    seats: 'عدد المقاعد',
    modelYear: 'سنة الصنع',
    dragToRotate: 'اسحب للتدوير 360°',
    autoRotate: 'دوران تلقائي مستمر',

    inquireHeader: 'طلب استفسار عن سيارة',
    inquireSubtitle: 'سيتم تحويلك مباشرة للواتساب للتواصل مع مسؤول المبيعات',
    yourName: 'الاسم الكريم',
    yourPhone: 'رقم الهاتف',
    additionalMessage: 'ملاحظات إضافية أو استفسار خاص',
    sendWhatsApp: 'إرسال الرسالة عبر WhatsApp',
    whatsappDefaultMsg: 'مرحباً، أود الاستفسار عن حجز / شراء سيارة [CAR_NAME].',

    aboutP1: 'تعتبر شركة أكوارا (Aqwara) من الشركات الرائدة في قطاع السيارات الحديثة والفاخرة، حيث تجمع بين الرؤية المعمارية الدقيقة والخدمة رفيعة المستوى.',
    aboutP2: 'نسعى دائماً لتقديم تجربة شرائية واستئجارية لا تضاهى، من خلال اختيار أفضل السيارات العالمية وتقديم الدعم الفني والاستشاري الكامل لعملائنا.',
    statExperience: 'سنوات من الخبرة',
    statVehicles: 'سيارات فاخرة',
    statClients: 'عملاء محليون ودوليون',

    sendMessage: 'إرسال الرسالة',
    addressTitle: 'العنوان الرئيس',
    addressValue: 'دمشق، سوريا - المنطقة الدبلوماسية',
    phoneTitle: 'الهاتف / واتساب',
    emailTitle: 'البريد الإلكتروني',
    workingHoursTitle: 'ساعات العمل',
    workingHoursValue: 'السبت - الخميس: 9:00 ص - 9:00 م',

    footerTagline: 'شركة أكوارا — الفخامة، الأداء، والخدمة الاستثنائية.',
    rightsReserved: 'جميع الحقوق محفوظة © أكوارا 2026',
    quickLinks: 'روابط سريعة',
    contactInfo: 'معلومات الاتصال',
  },
  en: {
    brandName: 'Aqwara',
    brandSubtitle: 'Sales & Rental',
    navHome: 'Home',
    navNewCars: 'New Cars',
    navRental: 'Car Rental',
    navAbout: 'About Aqwara',
    navContact: 'Contact',
    switchLanguage: 'العربية',

    heroTagline: 'ARCHITECTURAL AUTOMOTIVE EXCELLENCE',
    heroTitle: 'An Extraordinary Driving Experience Tailored For You',
    heroSubtitle: 'Aqwara offers a curated selection of brand-new luxury vehicles for sale and premium rental services with unprecedented standards.',
    exploreNewCars: 'Explore New Cars',
    exploreRentalCars: 'Explore Rental Cars',
    heroBadge: 'Premium Automotive Identity',

    newCarsTitle: 'New Cars For Sale',
    newCarsSubtitle: 'Curated luxury models designed for performance enthusiasts and timeless distinction.',
    rentalTitle: 'Car Rental Fleet',
    rentalSubtitle: 'Modern, economical, and prestigious vehicles available with flexible rental terms.',
    aboutTitle: 'About Aqwara',
    aboutSubtitle: 'We do not just present cars — we establish new benchmarks in automotive luxury.',
    contactTitle: 'Contact Us',
    contactSubtitle: 'Our dedicated advisors are ready to assist you with every inquiry.',

    viewDetails: 'View Details',
    backToListing: 'Back to Collection',
    specifications: 'Technical Specifications',
    price: 'Price',
    rentalRate: 'Daily Rental Rate',
    perDay: '/ day',
    contactNow: 'Contact Now via WhatsApp',
    engine: 'Engine',
    power: 'Power',
    transmission: 'Transmission',
    fuelType: 'Fuel Type',
    seats: 'Seats',
    modelYear: 'Model Year',
    dragToRotate: 'Drag to Rotate 360°',
    autoRotate: 'Automatic Rotation Active',

    inquireHeader: 'Vehicle Inquiry',
    inquireSubtitle: 'You will be redirected to WhatsApp to speak with an advisor.',
    yourName: 'Full Name',
    yourPhone: 'Phone Number',
    additionalMessage: 'Additional details or specific request',
    sendWhatsApp: 'Send via WhatsApp',
    whatsappDefaultMsg: 'Hello, I would like to inquire about the [CAR_NAME].',

    aboutP1: 'Aqwara stands at the intersection of modern architecture, luxury automotive engineering, and bespoke customer service.',
    aboutP2: 'We provide an effortless purchasing and rental journey by curating only top-tier vehicles and offering tailored consultation.',
    statExperience: 'Years Experience',
    statVehicles: 'Curated Vehicles',
    statClients: 'Satisfied Clients',

    sendMessage: 'Send Message',
    addressTitle: 'Main Headquarters',
    addressValue: 'Damascus, Syria — Diplomatic District',
    phoneTitle: 'Phone / WhatsApp',
    emailTitle: 'Email Address',
    workingHoursTitle: 'Working Hours',
    workingHoursValue: 'Sat - Thu: 9:00 AM - 9:00 PM',

    footerTagline: 'Aqwara — Luxury, Performance, & Architectural Elegance.',
    rightsReserved: 'All rights reserved © Aqwara 2026',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Details',
  },
};
