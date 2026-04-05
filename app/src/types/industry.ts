export interface IndustryTheme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

export interface MustHaveFeature {
  icon: string;
  title: string;
  description: string;
}

export interface BusinessIntelligence {
  title: string;
  value: string;
  description: string;
  color: string;
}

export interface MockReview {
  name: string;
  rating: number;
  text: string;
  time: string;
}

export interface IndustryData {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  overview: string;
  ctaText: string;
  ctaAction: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  mustHaveFeatures: MustHaveFeature[];
  businessIntelligence: BusinessIntelligence[];
  mockReviews: MockReview[];
  socialPosts: string[];
  demoServices: string[];
}

export const industries: IndustryData[] = [
  {
    id: 'salon',
    name: 'Hair & Beauty Salons',
    icon: '💇‍♀️',
    tagline: 'Your Best Hair Day Starts Here',
    overview: 'A salon without a website is leaving empty chairs every day. Transform your salon into a 24/7 booking powerhouse that fills your calendar while you sleep.',
    ctaText: 'Book Appointment',
    ctaAction: 'booking',
    theme: {
      primary: '#E8536A',
      secondary: '#1a0a1a',
      accent: '#F5C6CB',
    },
    mustHaveFeatures: [
      {
        icon: '📅',
        title: '24/7 Online Appointment Booking',
        description: 'Customers book while you sleep. Auto-confirmation via WhatsApp/SMS. Reduce no-shows with reminders.',
      },
      {
        icon: '👩‍🎨',
        title: 'Stylist Profiles & Portfolios',
        description: 'Each stylist gets their own profile with before/after photos. Clients book their preferred stylist directly.',
      },
      {
        icon: '💰',
        title: 'Service Menu with Pricing',
        description: 'Clear pricing reduces questions. Customers come prepared. Upsell premium services naturally.',
      },
      {
        icon: '📸',
        title: 'Before & After Photo Gallery',
        description: 'Visual proof sells salon services better than words. A stunning gallery is your #1 conversion tool.',
      },
    ],
    businessIntelligence: [
      { title: 'Fewer Empty Slots', value: '40%', description: 'Online booking fills last-minute cancellations', color: '#E8536A' },
      { title: 'Higher Average Spend', value: '30%', description: 'Service bundles increase booking value', color: '#B98BFF' },
      { title: 'New Clients via Google', value: '60%', description: 'Rank for "best salon near me"', color: '#27AE60' },
    ],
    mockReviews: [
      { name: 'Priya S.', rating: 5, text: 'Best haircut of my life! Booked online so easily. Will never go anywhere else.', time: '2 days ago' },
      { name: 'Meera R.', rating: 5, text: 'The balayage was stunning. Their photo gallery convinced me to book immediately.', time: '1 week ago' },
      { name: 'Anita K.', rating: 5, text: 'Love that I can book at midnight! 24/7 booking is a game changer for busy moms.', time: '2 weeks ago' },
    ],
    socialPosts: ['💇‍♀️', '✂️', '🎨', '💅', '🌟', '💆‍♀️'],
    demoServices: ['Haircut & Style', 'Color & Balayage', 'Spa Treatment', 'Nail Services'],
  },
  {
    id: 'restaurant',
    name: 'Restaurants & Cafes',
    icon: '🍽️',
    tagline: 'A Feast for the Senses',
    overview: 'From table booking to full CRM ordering system — a restaurant website is your digital maitre d\', working round the clock to fill seats and track orders.',
    ctaText: 'Reserve a Table',
    ctaAction: 'reservation',
    theme: {
      primary: '#C9A84C',
      secondary: '#0d0800',
      accent: '#F5E6C8',
    },
    mustHaveFeatures: [
      {
        icon: '🪑',
        title: 'Online Table Reservation System',
        description: 'Customers reserve instantly. Admin sees all bookings live. Reduce no-shows with SMS reminders.',
      },
      {
        icon: '🛵',
        title: 'Online Food Ordering + Delivery',
        description: 'Receive Zomato-style orders directly — without paying 25% commission to third-party apps.',
      },
      {
        icon: '📊',
        title: 'Live Order Tracking Dashboard (CRM)',
        description: 'Kitchen staff sees live orders. Admin tracks revenue in real-time. Waitstaff gets table alerts.',
      },
      {
        icon: '📱',
        title: 'Digital Menu with Photos & Prices',
        description: 'QR code menu at tables. Seasonal updates instantly. Filter by veg/non-veg, allergies, price.',
      },
    ],
    businessIntelligence: [
      { title: 'Commission Saved', value: '25%', description: 'Keep your delivery profits', color: '#C9A84C' },
      { title: 'Faster Service', value: '30%', description: 'Digital orders to kitchen', color: '#27AE60' },
      { title: 'Data Insights', value: '100%', description: 'Know your best-selling dishes', color: '#4A90D9' },
    ],
    mockReviews: [
      { name: 'Rahul M.', rating: 5, text: 'Booked a table in 30 seconds. The food was amazing and service was impeccable!', time: '1 day ago' },
      { name: 'Sarah K.', rating: 5, text: 'Love the online ordering. No more waiting on hold. Food arrived hot and fresh.', time: '3 days ago' },
      { name: 'Vikram P.', rating: 5, text: 'The QR menu is so convenient. Great photos helped us decide what to order.', time: '1 week ago' },
    ],
    socialPosts: ['🍛', '🫓', '🍚', '🍰', '☕', '🍕'],
    demoServices: ['Butter Chicken', 'Garlic Naan', 'Biryani Royal', 'Fresh Lassi'],
  },
  {
    id: 'auto-repair',
    name: 'Auto Repair Shops',
    icon: '🔧',
    tagline: 'Your Car, Our Expertise',
    overview: 'In a world where trust is everything for mechanics, a strong website with transparent pricing, real reviews, and easy booking wins customers before the phone rings.',
    ctaText: 'Book Service',
    ctaAction: 'booking',
    theme: {
      primary: '#C9A84C',
      secondary: '#111111',
      accent: '#FFD700',
    },
    mustHaveFeatures: [
      {
        icon: '💰',
        title: 'Service Menu with Transparent Pricing',
        description: 'Pricing builds trust immediately. Customers don\'t fear getting overcharged — your #1 conversion advantage.',
      },
      {
        icon: '📅',
        title: 'Online Service Booking',
        description: 'Choose service → select date → confirm. Customers book drop-offs without calling. Zero friction.',
      },
      {
        icon: '🏆',
        title: 'Certifications & Trust Badges',
        description: 'Display ASE certification, insurance, years in business. Visual trust signals convert skeptical visitors.',
      },
      {
        icon: '🚗',
        title: 'Vehicle History / Customer Portal',
        description: 'Login for customers to view past service records. Builds loyalty and repeat business.',
      },
    ],
    businessIntelligence: [
      { title: 'Review-Driven Choice', value: '50%', description: 'Of car owners choose based on reviews', color: '#C9A84C' },
      { title: 'Emergency Searches', value: '24/7', description: 'Rank for "repair near me"', color: '#E8536A' },
      { title: 'WhatsApp Quotes', value: 'Instant', description: 'Send photos, get quotes', color: '#27AE60' },
    ],
    mockReviews: [
      { name: 'Vikram S.', rating: 5, text: 'Posted my issue on their website at 10pm. Got a callback at 9am. Fixed same day. Amazing.', time: '2 days ago' },
      { name: 'Sneha P.', rating: 5, text: 'The pricing page saved me from a dishonest shop nearby. These guys are transparent and fair.', time: '5 days ago' },
      { name: 'Arjun M.', rating: 5, text: 'Their diagnostic tool online helped me understand my car\'s issue before even visiting. Loved it.', time: '1 week ago' },
    ],
    socialPosts: ['🔧', '🚗', '🛞', '⚡', '🔩', '🛠️'],
    demoServices: ['Oil Change', 'Brake Service', 'Engine Diagnostic', 'AC Repair'],
  },
  {
    id: 'dental',
    name: 'Dental Clinics',
    icon: '🦷',
    tagline: 'A Smile That Lasts a Lifetime',
    overview: 'Dental anxiety is real. A calming, professional website with easy booking, transparent pricing, and trust signals turns nervous visitors into confident patients.',
    ctaText: 'Book Appointment',
    ctaAction: 'booking',
    theme: {
      primary: '#4A90D9',
      secondary: '#0a2a4a',
      accent: '#E8F4FD',
    },
    mustHaveFeatures: [
      {
        icon: '📅',
        title: 'Online Appointment Booking by Treatment',
        description: 'Patients book specific treatments. Auto-confirmation reduces front desk calls.',
      },
      {
        icon: '📋',
        title: 'New Patient Intake Forms Online',
        description: 'Forms completed before arrival. Faster check-in. Better patient experience.',
      },
      {
        icon: '💳',
        title: 'Insurance Checker / Accepted Plans',
        description: 'List accepted insurance plans. Remove financial uncertainty for patients.',
      },
      {
        icon: '😁',
        title: 'Before & After Smile Gallery',
        description: 'Visual proof of your work. The most powerful marketing tool for dentists.',
      },
    ],
    businessIntelligence: [
      { title: 'Reduced No-Shows', value: '35%', description: 'Automated reminders', color: '#4A90D9' },
      { title: 'New Patients', value: '45%', description: 'From online bookings', color: '#27AE60' },
      { title: 'Form Completion', value: '95%', description: 'Before arrival', color: '#B98BFF' },
    ],
    mockReviews: [
      { name: 'Anjali R.', rating: 5, text: 'So nervous about my root canal, but the website explained everything. The team was amazing!', time: '3 days ago' },
      { name: 'Rajesh K.', rating: 5, text: 'Booked online at midnight for my toothache. Got an appointment next morning. Life saver!', time: '1 week ago' },
      { name: 'Meera P.', rating: 5, text: 'The smile gallery convinced me. My teeth look amazing now. Thank you!', time: '2 weeks ago' },
    ],
    socialPosts: ['🦷', '😁', '✨', '💎', '🪥', '🦷'],
    demoServices: ['Teeth Cleaning', 'Teeth Whitening', 'Root Canal', 'Dental Implants'],
  },
  {
    id: 'barbershop',
    name: 'Barbershops',
    icon: '💈',
    tagline: 'Fresh Cuts. Sharp Fades.',
    overview: 'Barbershops thrive on loyalty and style. A website that lets clients book their favorite barber, see cut styles, and check wait times keeps your chairs full.',
    ctaText: 'Book a Cut',
    ctaAction: 'booking',
    theme: {
      primary: '#7B5CF5',
      secondary: '#0a0a0a',
      accent: '#C9A84C',
    },
    mustHaveFeatures: [
      {
        icon: '✂️',
        title: 'Book by Specific Barber',
        description: 'Clients choose their barber. Huge loyalty builder. Barbers build their own following.',
      },
      {
        icon: '📸',
        title: 'Cut Style Gallery with Photos',
        description: 'Show every fade, taper, and design. Clients know exactly what to ask for.',
      },
      {
        icon: '💰',
        title: 'Clear Price List',
        description: 'Cuts, fades, beard, shave — all priced clearly. No surprises, happy clients.',
      },
      {
        icon: '⏱️',
        title: 'Walk-in Wait Time Indicator',
        description: 'Live or estimated wait times. Clients know when to arrive.',
      },
    ],
    businessIntelligence: [
      { title: 'Barber Loyalty', value: '3x', description: 'Repeat bookings', color: '#7B5CF5' },
      { title: 'Style Clarity', value: '90%', description: 'Clients know what they want', color: '#C9A84C' },
      { title: 'Wait Reduction', value: '25%', description: 'Better time management', color: '#27AE60' },
    ],
    mockReviews: [
      { name: 'Carlos M.', rating: 5, text: 'I only book with James for my fades. The website makes it so easy every time.', time: '1 day ago' },
      { name: 'Dev S.', rating: 5, text: 'The style gallery is fire. Showed my barber exactly what I wanted. Perfect cut.', time: '4 days ago' },
      { name: 'James T.', rating: 5, text: 'Wait time feature is clutch. Walked in right when my turn came up.', time: '1 week ago' },
    ],
    socialPosts: ['💈', '✂️', '👨', '🪒', '🔥', '💯'],
    demoServices: ['Classic Cut', 'Skin Fade', 'Beard Trim', 'Hot Towel Shave'],
  },
  {
    id: 'plumbing',
    name: 'Plumbing Services',
    icon: '🔩',
    tagline: 'Licensed & Insured Plumbers',
    overview: 'Plumbing emergencies don\'t wait. A website with a prominent emergency call button, service zones, and instant booking converts panicked homeowners into paying customers.',
    ctaText: 'Schedule Visit',
    ctaAction: 'booking',
    theme: {
      primary: '#1DB8A8',
      secondary: '#001a2e',
      accent: '#E8536A',
    },
    mustHaveFeatures: [
      {
        icon: '🚨',
        title: 'BIG Emergency Call Button',
        description: 'Always visible, always accessible. Panicked homeowners convert instantly.',
      },
      {
        icon: '🗺️',
        title: 'Service Zones Map',
        description: 'Show zip codes covered. Customers know you serve their area.',
      },
      {
        icon: '💰',
        title: 'Transparent Pricing Per Service',
        description: 'No hidden fees. Build trust with upfront pricing for common jobs.',
      },
      {
        icon: '📱',
        title: 'WhatsApp Photo Quotes',
        description: 'Send a photo, get a quote. Closes jobs without a phone call.',
      },
    ],
    businessIntelligence: [
      { title: 'Emergency Calls', value: '60%', description: 'From website visitors', color: '#E8536A' },
      { title: 'Quote Conversion', value: '75%', description: 'Via WhatsApp photos', color: '#1DB8A8' },
      { title: 'Service Area', value: '100%', description: 'Clear zone mapping', color: '#27AE60' },
    ],
    mockReviews: [
      { name: 'Priya K.', rating: 5, text: 'Burst pipe at 2am. Clicked emergency button, they were here in 45 mins. Heroes!', time: '2 days ago' },
      { name: 'Rohan S.', rating: 5, text: 'Sent a photo of my leak, got a quote in 10 mins. Fair price, great service.', time: '5 days ago' },
      { name: 'Anita M.', rating: 5, text: 'Pricing was clear, no surprises. Professional from start to finish.', time: '1 week ago' },
    ],
    socialPosts: ['🔩', '🚿', '🔧', '💧', '🛁', '🚰'],
    demoServices: ['Leak Repair', 'Drain Cleaning', 'Water Heater', 'Pipe Installation'],
  },
  {
    id: 'dry-cleaners',
    name: 'Dry Cleaners',
    icon: '👔',
    tagline: 'Your Clothes, Pristine.',
    overview: 'Convenience wins in dry cleaning. A website with pickup scheduling, order tracking, and clear pricing turns occasional customers into regulars.',
    ctaText: 'Schedule Pickup',
    ctaAction: 'pickup',
    theme: {
      primary: '#F4802A',
      secondary: '#1a0f00',
      accent: '#C9A84C',
    },
    mustHaveFeatures: [
      {
        icon: '💰',
        title: 'Full Pricing Menu',
        description: 'Every garment type priced clearly. Shirts, dresses, suits, coats — no guessing.',
      },
      {
        icon: '🚗',
        title: 'Pickup & Delivery Scheduling',
        description: 'Customers schedule pickups online. You optimize routes. Everyone wins.',
      },
      {
        icon: '👰',
        title: 'Bridal/Wedding Dress Page',
        description: 'Dedicated landing page for wedding dress cleaning. High-value service.',
      },
      {
        icon: '📱',
        title: 'Order Tracking with SMS',
        description: '"Your suit is ready" — automatic notifications keep customers informed.',
      },
    ],
    businessIntelligence: [
      { title: 'Pickup Orders', value: '40%', description: 'Higher value bookings', color: '#F4802A' },
      { title: 'Bridal Bookings', value: '3x', description: 'Average order value', color: '#C9A84C' },
      { title: 'Repeat Customers', value: '65%', description: 'With order tracking', color: '#27AE60' },
    ],
    mockReviews: [
      { name: 'Sarah L.', rating: 5, text: 'Scheduled pickup online, they came same day. My suits have never looked better!', time: '3 days ago' },
      { name: 'Michael R.', rating: 5, text: 'Wedding dress cleaning was perfect. The dedicated service made all the difference.', time: '1 week ago' },
      { name: 'Emma T.', rating: 5, text: 'Love the SMS updates. Know exactly when my clothes are ready.', time: '2 weeks ago' },
    ],
    socialPosts: ['👔', '👗', '👰', '✨', '🧥', '👖'],
    demoServices: ['Shirts', 'Dresses', 'Suits', 'Bridal Wear'],
  },
  {
    id: 'cafe',
    name: 'Cafes & Food Spots',
    icon: '☕',
    tagline: 'Brewed with Passion',
    overview: 'Cafes are about atmosphere and community. A website that captures your vibe, showcases your menu, and lets customers order ahead builds loyalty.',
    ctaText: 'Order Ahead',
    ctaAction: 'order',
    theme: {
      primary: '#8B6914',
      secondary: '#1a1200',
      accent: '#D4A574',
    },
    mustHaveFeatures: [
      {
        icon: '📱',
        title: 'Mobile Ordering for Pickup',
        description: 'Customers order on their commute. Pick up without waiting. Perfect for busy mornings.',
      },
      {
        icon: '📸',
        title: 'Instagram-Style Menu Gallery',
        description: 'Beautiful photos of your lattes, pastries, and brunch. Visual appetite builder.',
      },
      {
        icon: '⭐',
        title: 'Loyalty Program Integration',
        description: 'Digital punch cards. Buy 9, get 1 free. Keeps customers coming back.',
      },
      {
        icon: '📅',
        title: 'Events & Live Music Calendar',
        description: 'Showcase open mic nights, live music, special events. Build community.',
      },
    ],
    businessIntelligence: [
      { title: 'Morning Orders', value: '50%', description: 'Via mobile pickup', color: '#8B6914' },
      { title: 'Loyalty Members', value: '3x', description: 'Visit frequency', color: '#C9A84C' },
      { title: 'Event Attendance', value: '40%', description: 'From website calendar', color: '#27AE60' },
    ],
    mockReviews: [
      { name: 'Lisa M.', rating: 5, text: 'Order my latte on the bus, pick it up hot. Perfect for my morning routine!', time: '1 day ago' },
      { name: 'Tom K.', rating: 5, text: 'Found out about live jazz night on their website. Great vibe, amazing coffee.', time: '4 days ago' },
      { name: 'Nina P.', rating: 5, text: 'Loyalty app is great. Free coffee every 10th visit. Keeps me coming back!', time: '1 week ago' },
    ],
    socialPosts: ['☕', '🥐', '🍰', '🥑', '🥤', '🧁'],
    demoServices: ['Specialty Coffee', 'Fresh Pastries', 'Brunch Menu', 'Smoothies'],
  },
  {
    id: 'bakery',
    name: 'Bakery',
    icon: '🥐',
    tagline: 'Freshly Baked with Love',
    overview: 'Bakeries sell with their eyes first. A website with mouth-watering photos, daily specials, and pre-ordering turns browsers into buyers.',
    ctaText: 'Pre-Order Now',
    ctaAction: 'order',
    theme: {
      primary: '#D4A574',
      secondary: '#1a0f00',
      accent: '#F5E6D3',
    },
    mustHaveFeatures: [
      {
        icon: '📸',
        title: 'Daily Fresh Gallery',
        description: 'Show today\'s croissants, cakes, and bread. Fresh photos drive fresh sales.',
      },
      {
        icon: '📅',
        title: 'Pre-Ordering for Special Occasions',
        description: 'Birthday cakes, wedding orders, holiday treats. Book in advance, never miss out.',
      },
      {
        icon: '📱',
        title: 'Daily Specials Notifications',
        description: 'Push notifications or SMS for today\'s specials. Drive foot traffic.',
      },
      {
        icon: '🎂',
        title: 'Custom Cake Builder',
        description: 'Let customers design their cake online. Size, flavor, decorations, message.',
      },
    ],
    businessIntelligence: [
      { title: 'Pre-Orders', value: '35%', description: 'Higher average value', color: '#D4A574' },
      { title: 'Custom Cakes', value: '2.5x', description: 'Profit margin', color: '#C9A84C' },
      { title: 'Daily Specials', value: '40%', description: 'Traffic increase', color: '#27AE60' },
    ],
    mockReviews: [
      { name: 'Emma S.', rating: 5, text: 'Ordered my daughter\'s birthday cake online. It was exactly what she wanted!', time: '2 days ago' },
      { name: 'David L.', rating: 5, text: 'The daily specials notification is dangerous! Always end up stopping by.', time: '5 days ago' },
      { name: 'Rachel K.', rating: 5, text: 'Fresh croissants every morning. The website shows what\'s hot from the oven.', time: '1 week ago' },
    ],
    socialPosts: ['🥐', '🍰', '🧁', '🍞', '🎂', '🥖'],
    demoServices: ['Fresh Croissants', 'Custom Cakes', 'Artisan Bread', 'Macarons'],
  },
  {
    id: 'nail-salon',
    name: 'Nail Salon',
    icon: '💅',
    tagline: 'Nail Art That Speaks',
    overview: 'Nail art is visual and trendy. A website with a stunning portfolio, Instagram integration, and easy booking keeps your appointment book full.',
    ctaText: 'Book Now',
    ctaAction: 'booking',
    theme: {
      primary: '#E8536A',
      secondary: '#1a0a12',
      accent: '#F5C6E0',
    },
    mustHaveFeatures: [
      {
        icon: '📸',
        title: 'Nail Art Portfolio Gallery',
        description: 'Showcase every design, color, and style. Your work sells your services.',
      },
      {
        icon: '📅',
        title: 'Online Booking by Service Type',
        description: 'Manicure, pedicure, gel, acrylic, nail art — book the exact service.',
      },
      {
        icon: '📱',
        title: 'Instagram Feed Integration',
        description: 'Your latest nail art posts automatically appear on your website. Always fresh.',
      },
      {
        icon: '💎',
        title: 'Nail Designer Profiles',
        description: 'Each nail artist\'s specialty and portfolio. Clients book their favorite artist.',
      },
    ],
    businessIntelligence: [
      { title: 'Portfolio Views', value: '80%', description: 'Lead to bookings', color: '#E8536A' },
      { title: 'Instagram Traffic', value: '45%', description: 'Converts to clients', color: '#B98BFF' },
      { title: 'Artist Loyalty', value: '3x', description: 'Repeat bookings', color: '#27AE60' },
    ],
    mockReviews: [
      { name: 'Maya J.', rating: 5, text: 'Found the perfect nail design in their gallery. My nails look exactly like the photo!', time: '1 day ago' },
      { name: 'Sophie L.', rating: 5, text: 'Love booking with my favorite nail artist. She knows exactly what I like.', time: '4 days ago' },
      { name: 'Ava R.', rating: 5, text: 'Their Instagram feed on the website is so inspiring. Always trying new designs!', time: '1 week ago' },
    ],
    socialPosts: ['💅', '✨', '💎', '🌸', '💜', '🔥'],
    demoServices: ['Gel Manicure', 'Nail Art', 'Acrylics', 'Spa Pedicure'],
  },
];

export const globalStats = [
  { value: '97%', label: 'of people search online to find a local business', source: 'BrightLocal' },
  { value: '75%', label: 'judge a business\'s credibility by its website design', source: 'Stanford' },
  { value: '3×', label: 'more leads with an active, optimized website', source: 'HubSpot' },
  { value: '88%', label: 'of local searches lead to a visit or call within 24 hours', source: 'Google' },
];

export const services = [
  { icon: '🌐', title: 'Custom Websites', description: 'Premium, mobile-first websites built specifically for your industry.' },
  { icon: '📅', title: 'Online Booking Systems', description: 'Let customers book appointments 24/7 without calling.' },
  { icon: '🍽️', title: 'Restaurant CRM & Ordering', description: 'Complete table booking, online ordering, and admin dashboard.' },
  { icon: '📱', title: 'Social Media Integration', description: 'Embed your Instagram, Facebook, and Google reviews directly.' },
  { icon: '⭐', title: 'Review Showcase Systems', description: 'Automatically pull and display your best reviews.' },
  { icon: '🔍', title: 'Local SEO Optimization', description: 'Rank #1 when customers search for your service near them.' },
  { icon: '🛒', title: 'E-Commerce & Online Sales', description: 'Sell products, gift cards, memberships directly from your site.' },
  { icon: '📊', title: 'Analytics & Reporting', description: 'Know exactly who visits your site and what they do.' },
  { icon: '🔧', title: 'Maintenance & Support', description: 'Monthly updates, security patches, 24/7 WhatsApp support.' },
];

export const uniquePoints = [
  { icon: '🏭', title: 'Industry-Specific Expertise', description: 'Every site is designed specifically for your industry — with the right pages, booking flows, and CTAs.', color: 'rgba(201,168,76,0.15)' },
  { icon: '🚀', title: 'Built to Convert', description: 'Every design decision is based on conversion psychology. All tested. All intentional.', color: 'rgba(74,144,217,0.15)' },
  { icon: '📱', title: 'Mobile-First Always', description: 'Over 70% of customers find you on a phone. Designed mobile first, then enhanced for desktop.', color: 'rgba(39,174,96,0.15)' },
  { icon: '💬', title: 'Personal. No Middleman.', description: 'You speak directly with me — the person building your website. Fast, clear communication.', color: 'rgba(232,83,106,0.15)' },
  { icon: '🔄', title: 'Complete Ecosystem', description: 'Booking + reviews + social + SEO + analytics. A complete digital presence, not just a page.', color: 'rgba(123,92,245,0.15)' },
  { icon: '💰', title: 'Affordable, Flexible Plans', description: 'Premium results don\'t require a premium budget. Flexible payment plans that scale.', color: 'rgba(29,184,168,0.15)' },
];
