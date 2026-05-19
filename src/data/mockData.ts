export const MOCK_POSTS = [
  {
    id: 'post-1',
    authorId: 1,
    author: { name: 'Emily Johnson', username: 'emily_j', avatar: 'https://dummyjson.com/image/avatar/1', verified: true },
    content: 'Just shipped a brand new feature for our design system 🚀 It took weeks but the result is absolutely worth it. Who else loves that feeling of finally pushing to production?',
    image: null,
    likes: 142,
    comments: 28,
    shares: 14,
    timestamp: new Date(Date.now() - 1000 * 60 * 12),
    tags: ['design', 'engineering', 'productivity'],
  },
  {
    id: 'post-2',
    authorId: 2,
    author: { name: 'Marcus Rivera', username: 'mrivera', avatar: 'https://dummyjson.com/image/avatar/5', verified: false },
    content: 'Reminder: perfect is the enemy of good. Ship it, iterate, improve. The best products aren\'t built in one shot — they\'re built over hundreds of iterations. 💡',
    image: null,
    likes: 89,
    comments: 17,
    shares: 32,
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    tags: ['startup', 'mindset'],
  },
  {
    id: 'post-3',
    authorId: 3,
    author: { name: 'Aisha Okonkwo', username: 'aisha_tech', avatar: 'https://dummyjson.com/image/avatar/8', verified: true },
    content: 'Open source is the backbone of modern software. Let\'s talk about how to contribute effectively and build a portfolio that actually gets you hired 🧵',
    image: null,
    likes: 213,
    comments: 54,
    shares: 67,
    timestamp: new Date(Date.now() - 1000 * 60 * 90),
    tags: ['opensource', 'career', 'tech'],
  },
  {
    id: 'post-4',
    authorId: 4,
    author: { name: 'Carlos Menda', username: 'carlos_dev', avatar: 'https://dummyjson.com/image/avatar/12', verified: false },
    content: 'Hot take: TypeScript saves more time than it costs. Yes, even for small projects. Once you go typed, you never go back.',
    image: null,
    likes: 378,
    comments: 92,
    shares: 44,
    timestamp: new Date(Date.now() - 1000 * 60 * 180),
    tags: ['typescript', 'webdev'],
  },
]

// ─── Mock Rooms ───────────────────────────────────────────────────────────────
export const MOCK_ROOMS = [
  {
    id: 'room-1',
    name: 'Tech & AI Weekly',
    description: 'Live discussions on the latest in AI, machine learning, and emerging tech every Thursday 8 PM UTC.',
    host: { name: 'Dr. Sarah Chen', username: 'sarahchen_ai', avatar: 'https://dummyjson.com/image/avatar/3' },
    participants: 847,
    maxParticipants: 1000,
    tags: ['AI', 'Machine Learning', 'Tech'],
    isLive: true,
    isPremium: false,
    color: 'from-indigo-600 to-purple-700',
    memberCount: 12400,
    category: 'Technology',
  },
  {
    id: 'room-2',
    name: 'Startup Founders Hub',
    description: 'A private room for early-stage founders to share wins, challenges, and connect with mentors.',
    host: { name: 'Alex Kim', username: 'alexkim_vc', avatar: 'https://dummyjson.com/image/avatar/7' },
    participants: 203,
    maxParticipants: 300,
    tags: ['Startup', 'Funding', 'Entrepreneurship'],
    isLive: false,
    isPremium: true,
    color: 'from-amber-500 to-orange-600',
    memberCount: 5200,
    category: 'Business',
  },
  {
    id: 'room-3',
    name: 'Open Source Hangout',
    description: 'Weekly collaborative sessions where developers pair-program on open source projects together.',
    host: { name: 'Aisha Okonkwo', username: 'aisha_tech', avatar: 'https://dummyjson.com/image/avatar/8' },
    participants: 412,
    maxParticipants: 500,
    tags: ['OpenSource', 'Coding', 'Collaboration'],
    isLive: true,
    isPremium: false,
    color: 'from-cyan-500 to-teal-600',
    memberCount: 8900,
    category: 'Technology',
  },
  {
    id: 'room-4',
    name: 'Design Systems Deep-Dive',
    description: 'Exploring design tokens, component libraries, and the philosophy behind great design systems.',
    host: { name: 'Priya Sharma', username: 'priya_design', avatar: 'https://dummyjson.com/image/avatar/11' },
    participants: 0,
    maxParticipants: 200,
    tags: ['Design', 'UX', 'Frontend'],
    isLive: false,
    isPremium: false,
    color: 'from-pink-500 to-rose-600',
    memberCount: 3100,
    category: 'Design',
  },
]

// ─── Mock Groups ──────────────────────────────────────────────────────────────
export const MOCK_GROUPS = [
  {
    id: 'group-1',
    name: 'React Developers Nigeria',
    description: 'A community of React developers across Nigeria sharing resources, jobs, and knowledge.',
    avatar: 'https://dummyjson.com/image/avatar/25',
    cover: null,
    members: 4820,
    postsToday: 23,
    isPrivate: false,
    tags: ['React', 'JavaScript', 'Nigeria'],
    category: 'Technology',
    role: 'member',
  },
  {
    id: 'group-2',
    name: 'SaaS Founders Circle',
    description: 'Exclusive group for SaaS founders to discuss growth, retention, and building product.',
    avatar: 'https://dummyjson.com/image/avatar/30',
    cover: null,
    members: 1230,
    postsToday: 8,
    isPrivate: true,
    tags: ['SaaS', 'Product', 'Growth'],
    category: 'Business',
    role: 'admin',
  },
  {
    id: 'group-3',
    name: 'UX/UI Design Community',
    description: 'Share work, get feedback, find collaborators — the largest design community on the platform.',
    avatar: 'https://dummyjson.com/image/avatar/40',
    cover: null,
    members: 9500,
    postsToday: 47,
    isPrivate: false,
    tags: ['UX', 'Design', 'Figma'],
    category: 'Design',
    role: null,
  },
  {
    id: 'group-4',
    name: 'Blockchain & Web3',
    description: 'Deep technical discussions about DeFi, NFTs, smart contracts, and the decentralized web.',
    avatar: 'https://dummyjson.com/image/avatar/50',
    cover: null,
    members: 6700,
    postsToday: 31,
    isPrivate: false,
    tags: ['Web3', 'DeFi', 'Blockchain'],
    category: 'Technology',
    role: null,
  },
]

// ─── Mock Channels ─────────────────────────────────────────────────────────────
export const MOCK_CHANNELS = [
  {
    id: 'ch-1',
    name: 'Mastering System Design',
    creator: { name: 'Jordan Lee', username: 'jordan_sysdesign', avatar: 'https://dummyjson.com/image/avatar/15', verified: true },
    description: 'Weekly deep-dives into system design interviews, architecture patterns, and scalability principles. Used by 3,400+ engineers who landed FAANG roles.',
    price: 19,
    currency: 'USD',
    period: 'month',
    subscribers: 3412,
    posts: 87,
    rating: 4.9,
    tags: ['System Design', 'Engineering', 'Interviews'],
    perks: ['Weekly live Q&A', 'Design review sessions', 'Private Discord access', 'Interview prep kit'],
    tier: 'gold',
  },
  {
    id: 'ch-2',
    name: 'The Indie Hacker Lab',
    creator: { name: 'Mia Patel', username: 'miapatel_build', avatar: 'https://dummyjson.com/image/avatar/18', verified: true },
    description: 'Build and launch profitable side projects. Real case studies, revenue breakdowns, and step-by-step playbooks.',
    price: 12,
    currency: 'USD',
    period: 'month',
    subscribers: 2180,
    posts: 134,
    rating: 4.7,
    tags: ['IndieHacking', 'SaaS', 'Monetization'],
    perks: ['Monthly revenue teardowns', 'Launch checklists', '1-on-1 office hours'],
    tier: 'silver',
  },
  {
    id: 'ch-3',
    name: 'Visual Design Mastery',
    creator: { name: 'Danielle Cruz', username: 'danidesigns', avatar: 'https://dummyjson.com/image/avatar/22', verified: false },
    description: 'From Figma fundamentals to advanced motion design. Tutorials, resources, and a critique community.',
    price: 9,
    currency: 'USD',
    period: 'month',
    subscribers: 5890,
    posts: 210,
    rating: 4.8,
    tags: ['Design', 'Figma', 'Motion', 'UI'],
    perks: ['Design file access', 'Weekly critique', 'Resource library'],
    tier: 'silver',
  },
  {
    id: 'ch-4',
    name: 'Elite Investor Signals',
    creator: { name: 'Robert Finch', username: 'robfinch_capital', avatar: 'https://dummyjson.com/image/avatar/28', verified: true },
    description: 'Curated investment research, macro analysis, and portfolio strategies from a 15-year veteran fund manager.',
    price: 49,
    currency: 'USD',
    period: 'month',
    subscribers: 890,
    posts: 56,
    rating: 4.6,
    tags: ['Finance', 'Investing', 'Macro'],
    perks: ['Daily market brief', 'Portfolio tracker', 'Exclusive webinars', 'Direct messaging'],
    tier: 'platinum',
  },
]

// ─── Mock Notifications ────────────────────────────────────────────────────────
export const INITIAL_NOTIFICATIONS = [
  { id: 'n1', type: 'follow',   read: false, actor: { name: 'Marcus Rivera', avatar: 'https://dummyjson.com/image/avatar/5' },  message: 'started following you',                time: new Date(Date.now() - 60000 * 5) },
  { id: 'n2', type: 'like',     read: false, actor: { name: 'Aisha Okonkwo', avatar: 'https://dummyjson.com/image/avatar/8' },  message: 'liked your post',                      time: new Date(Date.now() - 60000 * 15) },
  { id: 'n3', type: 'comment',  read: false, actor: { name: 'Emily Johnson', avatar: 'https://dummyjson.com/image/avatar/1' },  message: 'commented on your post',               time: new Date(Date.now() - 60000 * 32) },
  { id: 'n4', type: 'invite',   read: true,  actor: { name: 'Alex Kim', avatar: 'https://dummyjson.com/image/avatar/7' },        message: 'invited you to join "Startup Hub"',    time: new Date(Date.now() - 60000 * 70) },
  { id: 'n5', type: 'join',     read: true,  actor: { name: 'Carlos Menda', avatar: 'https://dummyjson.com/image/avatar/12' },  message: 'joined your group "React Devs NG"',   time: new Date(Date.now() - 60000 * 120) },
  { id: 'n6', type: 'premium',  read: true,  actor: { name: 'System', avatar: null },                                            message: 'Your subscription to "System Design" was activated', time: new Date(Date.now() - 60000 * 240) },
  { id: 'n7', type: 'follow',   read: true,  actor: { name: 'Priya Sharma', avatar: 'https://dummyjson.com/image/avatar/11' }, message: 'started following you',                 time: new Date(Date.now() - 60000 * 380) },
]

// ─── Interests list ───────────────────────────────────────────────────────────
export const ALL_INTERESTS = [
  'Technology', 'Design', 'AI/ML', 'Startups', 'Finance', 'Health',
  'Music', 'Gaming', 'Sports', 'Travel', 'Photography', 'Writing',
  'Open Source', 'Blockchain', 'DevOps', 'Marketing', 'Education',
]

export const users = [
    {
      "id": 1,
      "firstName": "Emily",
      "lastName": "Johnson",
      "maidenName": "Smith",
      "age": 29,
      "gender": "female",
      "email": "emily.johnson@x.dummyjson.com",
      "phone": "+81 965-431-3024",
      "username": "emilys",
      "password": "emilyspass",
      "birthDate": "1996-5-30",
      "image": "https://dummyjson.com/icon/emilys/128",
      "bloodGroup": "O-",
      "height": 193.24,
      "weight": 63.16,
      "eyeColor": "Green",
      "hair": {
        "color": "Brown",
        "type": "Curly"
      },
      "ip": "42.48.100.32",
      "address": {
        "address": "626 Main Street",
        "city": "Phoenix",
        "state": "Mississippi",
        "stateCode": "MS",
        "postalCode": "29112",
        "coordinates": {
          "lat": -77.16213,
          "lng": -92.084824
        },
        "country": "United States"
      },
      "macAddress": "47:fa:41:18:ec:eb",
      "university": "University of Wisconsin--Madison",
      "bank": {
        "cardExpire": "05/28",
        "cardNumber": "3693233511855044",
        "cardType": "Diners Club International",
        "currency": "GBP",
        "iban": "GB74MH2UZLR9TRPHYNU8F8"
      },
      "company": {
        "department": "Engineering",
        "name": "Dooley, Kozey and Cronin",
        "title": "Sales Manager",
        "address": {
          "address": "263 Tenth Street",
          "city": "San Francisco",
          "state": "Wisconsin",
          "stateCode": "WI",
          "postalCode": "37657",
          "coordinates": {
            "lat": 71.814525,
            "lng": -161.150263
          },
          "country": "United States"
        }
      },
      "ein": "977-175",
      "ssn": "900-590-289",
      "userAgent": "Mozilla/5.0 (Macintosh Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
      "crypto": {
        "coin": "Bitcoin",
        "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        "network": "Ethereum (ERC20)"
      },
      "role": "admin"
    },
    {
      "id": 2,
      "firstName": "Michael",
      "lastName": "Williams",
      "maidenName": "",
      "age": 36,
      "gender": "male",
      "email": "michael.williams@x.dummyjson.com",
      "phone": "+49 258-627-6644",
      "username": "michaelw",
      "password": "michaelwpass",
      "birthDate": "1989-8-10",
      "image": "https://dummyjson.com/icon/michaelw/128",
      "bloodGroup": "B+",
      "height": 186.22,
      "weight": 76.32,
      "eyeColor": "Red",
      "hair": {
        "color": "Green",
        "type": "Straight"
      },
      "ip": "12.13.116.142",
      "address": {
        "address": "385 Fifth Street",
        "city": "Houston",
        "state": "Alabama",
        "stateCode": "AL",
        "postalCode": "38807",
        "coordinates": {
          "lat": 22.815468,
          "lng": 115.608581
        },
        "country": "United States"
      },
      "macAddress": "79:15:78:99:60:aa",
      "university": "Ohio State University",
      "bank": {
        "cardExpire": "01/30",
        "cardNumber": "3530633803003665",
        "cardType": "JCB",
        "currency": "USD",
        "iban": "DE26362283149158045865"
      },
      "company": {
        "department": "Support",
        "name": "Spinka - Dickinson",
        "title": "Support Specialist",
        "address": {
          "address": "395 Main Street",
          "city": "Los Angeles",
          "state": "New Hampshire",
          "stateCode": "NH",
          "postalCode": "73442",
          "coordinates": {
            "lat": 79.098326,
            "lng": -119.624845
          },
          "country": "United States"
        }
      },
      "ein": "912-602",
      "ssn": "108-953-962",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/97.0.1072.76 Safari/537.36",
      "crypto": {
        "coin": "Bitcoin",
        "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        "network": "Ethereum (ERC20)"
      },
      "role": "admin"
    },
    {
      "id": 3,
      "firstName": "Sophia",
      "lastName": "Brown",
      "maidenName": "",
      "age": 43,
      "gender": "female",
      "email": "sophia.brown@x.dummyjson.com",
      "phone": "+81 210-652-2785",
      "username": "sophiab",
      "password": "sophiabpass",
      "birthDate": "1982-11-6",
      "image": "https://dummyjson.com/icon/sophiab/128",
      "bloodGroup": "O-",
      "height": 177.72,
      "weight": 52.6,
      "eyeColor": "Hazel",
      "hair": {
        "color": "White",
        "type": "Wavy"
      },
      "ip": "214.225.51.195",
      "address": {
        "address": "1642 Ninth Street",
        "city": "Washington",
        "state": "Alabama",
        "stateCode": "AL",
        "postalCode": "32822",
        "coordinates": {
          "lat": 45.289366,
          "lng": 46.832664
        },
        "country": "United States"
      },
      "macAddress": "12:a3:d3:6f:5c:5b",
      "university": "Pepperdine University",
      "bank": {
        "cardExpire": "10/27",
        "cardNumber": "6011212053392887",
        "cardType": "Discover",
        "currency": "EUR",
        "iban": "DE12191213468288004835"
      },
      "company": {
        "department": "Research and Development",
        "name": "Schiller - Zieme",
        "title": "Accountant",
        "address": {
          "address": "1896 Washington Street",
          "city": "Dallas",
          "state": "Nevada",
          "stateCode": "NV",
          "postalCode": "88511",
          "coordinates": {
            "lat": 20.086743,
            "lng": -34.577107
          },
          "country": "United States"
        }
      },
      "ein": "963-113",
      "ssn": "638-461-822",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
      "crypto": {
        "coin": "Bitcoin",
        "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        "network": "Ethereum (ERC20)"
      },
      "role": "admin"
    },
    {
      "id": 4,
      "firstName": "James",
      "lastName": "Davis",
      "maidenName": "",
      "age": 46,
      "gender": "male",
      "email": "james.davis@x.dummyjson.com",
      "phone": "+49 614-958-9364",
      "username": "jamesd",
      "password": "jamesdpass",
      "birthDate": "1979-5-4",
      "image": "https://dummyjson.com/icon/jamesd/128",
      "bloodGroup": "AB+",
      "height": 193.31,
      "weight": 62.1,
      "eyeColor": "Amber",
      "hair": {
        "color": "Blonde",
        "type": "Straight"
      },
      "ip": "101.118.131.66",
      "address": {
        "address": "238 Jefferson Street",
        "city": "Seattle",
        "state": "Pennsylvania",
        "stateCode": "PA",
        "postalCode": "68354",
        "coordinates": {
          "lat": 16.782513,
          "lng": -139.34723
        },
        "country": "United States"
      },
      "macAddress": "10:7d:df:1f:97:58",
      "university": "University of Southern California",
      "bank": {
        "cardExpire": "07/30",
        "cardNumber": "5303440212268149",
        "cardType": "Mastercard",
        "currency": "CAD",
        "iban": "DE01300746880579852937"
      },
      "company": {
        "department": "Support",
        "name": "Pagac and Sons",
        "title": "Research Analyst",
        "address": {
          "address": "1622 Lincoln Street",
          "city": "Fort Worth",
          "state": "Pennsylvania",
          "stateCode": "PA",
          "postalCode": "27768",
          "coordinates": {
            "lat": 54.91193,
            "lng": -79.498328
          },
          "country": "United States"
        }
      },
      "ein": "904-810",
      "ssn": "116-951-314",
      "userAgent": "Mozilla/5.0 (Macintosh Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
      "crypto": {
        "coin": "Bitcoin",
        "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        "network": "Ethereum (ERC20)"
      },
      "role": "admin"
    },
    {
      "id": 5,
      "firstName": "Emma",
      "lastName": "Miller",
      "maidenName": "Johnson",
      "age": 31,
      "gender": "female",
      "email": "emma.miller@x.dummyjson.com",
      "phone": "+91 759-776-1614",
      "username": "emmaj",
      "password": "emmajpass",
      "birthDate": "1994-6-13",
      "image": "https://dummyjson.com/icon/emmaj/128",
      "bloodGroup": "AB-",
      "height": 192.8,
      "weight": 63.62,
      "eyeColor": "Green",
      "hair": {
        "color": "White",
        "type": "Straight"
      },
      "ip": "224.126.22.183",
      "address": {
        "address": "607 Fourth Street",
        "city": "Jacksonville",
        "state": "Colorado",
        "stateCode": "CO",
        "postalCode": "26593",
        "coordinates": {
          "lat": 0.505589,
          "lng": -157.43281
        },
        "country": "United States"
      },
      "macAddress": "32:b9:7e:8d:f5:e8",
      "university": "Northeastern University",
      "bank": {
        "cardExpire": "07/30",
        "cardNumber": "5237188057591130",
        "cardType": "Mastercard",
        "currency": "NZD",
        "iban": "DE19182355652037133559"
      },
      "company": {
        "department": "Human Resources",
        "name": "Graham - Gulgowski",
        "title": "Quality Assurance Engineer",
        "address": {
          "address": "1460 Sixth Street",
          "city": "San Antonio",
          "state": "Idaho",
          "stateCode": "ID",
          "postalCode": "21965",
          "coordinates": {
            "lat": 44.346545,
            "lng": -26.944701
          },
          "country": "United States"
        }
      },
      "ein": "403-505",
      "ssn": "526-210-885",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0 Win64 x64 rv:97.0) Gecko/20100101 Firefox/97.0",
      "crypto": {
        "coin": "Bitcoin",
        "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        "network": "Ethereum (ERC20)"
      },
      "role": "admin"
    }]