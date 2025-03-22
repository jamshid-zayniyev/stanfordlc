import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      courses: 'Courses',
      team: 'Team',
      faq: 'FAQ',
      news: 'News',
      articles: 'Articles',
      gallery: 'Gallery',
      contact: 'Contact',

      // Hero section
      hero_description: 'Welcome to Stanford Educational Center - your gateway to excellence in education',
      get_started: 'Get Started',

      // Features
      courses_desc: 'Wide range of courses tailored to your needs',
      teachers_desc: 'Experienced and qualified teaching staff',
      materials_desc: 'High-quality learning materials',
      support_desc: '24/7 support for our students',

      // Course titles
      english: 'English Language',
      russian: 'Russian Language',
      mathematics: 'Mathematics',
      english_desc: 'Master English with our comprehensive courses',
      russian_desc: 'Learn Russian from native speakers',
      mathematics_desc: 'Excel in mathematics with our expert tutors',
      learn_more: 'Learn More',

      // Team
      our_team: 'Our Team',
      english_teacher: 'English Teacher',
      russian_teacher: 'Russian Teacher',
      math_teacher: 'Mathematics Teacher',
      john_bio: 'Experienced English teacher with 10+ years of teaching',
      anna_bio: 'Native Russian speaker with modern teaching methods',
      michael_bio: 'Mathematics expert specializing in problem-solving',

      // FAQ
      faq_title: 'Frequently Asked Questions',
      faq_1_q: 'What courses do you offer?',
      faq_1_a: 'We offer courses in English, Russian, Mathematics, and test preparation.',
      faq_2_q: 'How long are the courses?',
      faq_2_a: 'Course duration varies from 3 to 6 months depending on the program.',
      faq_3_q: 'What is the class size?',
      faq_3_a: 'We maintain small class sizes of 10-12 students for optimal learning.',
      faq_4_q: 'Do you offer online classes?',
      faq_4_a: 'Yes, we offer both online and offline learning options.',

      // News & Articles
      news_title: 'Latest News',
      articles_title: 'Educational Articles',
      read_more: 'Read More',
      news_1_title: 'New Semester Starting Soon',
      news_1_content: 'Join our upcoming semester starting this March',
      article_1_title: 'Effective Learning Strategies',
      article_1_content: 'Discover the best practices for successful learning',

      // Gallery
      gallery_title: 'Our Gallery',
      gallery_1_title: 'Modern Classrooms',
      gallery_1_desc: 'Well-equipped classrooms for optimal learning',

      // Contact
      contact_title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      send_message: 'Send Message',
      address: 'Address',
      location: 'Tashkent, Uzbekistan',
      rights: 'All rights reserved',
    },
  },
  ru: {
    translation: {
      // Navigation
      home: 'Главная',
      courses: 'Курсы',
      team: 'Команда',
      faq: 'Вопросы',
      news: 'Новости',
      articles: 'Статьи',
      gallery: 'Галерея',
      contact: 'Контакты',

      // Hero section
      hero_description: 'Добро пожаловать в Образовательный центр Stanford - ваш путь к успеху в образовании',
      get_started: 'Начать обучение',

      // Features
      courses_desc: 'Широкий выбор курсов под ваши потребности',
      teachers_desc: 'Опытные и квалифицированные преподаватели',
      materials_desc: 'Качественные учебные материалы',
      support_desc: 'Поддержка 24/7 для наших студентов',

      // Course titles
      english: 'Английский язык',
      russian: 'Русский язык',
      mathematics: 'Математика',
      english_desc: 'Освойте английский на наших комплексных курсах',
      russian_desc: 'Изучайте русский с носителями языка',
      mathematics_desc: 'Преуспейте в математике с нашими экспертами',
      learn_more: 'Подробнее',

      // Team
      our_team: 'Наша команда',
      english_teacher: 'Преподаватель английского',
      russian_teacher: 'Преподаватель русского',
      math_teacher: 'Преподаватель математики',
      john_bio: 'Опытный преподаватель английского с 10+ летним стажем',
      anna_bio: 'Носитель русского языка с современными методиками',
      michael_bio: 'Эксперт по математике, специализирующийся на решении задач',

      // Contact
      contact_title: 'Свяжитесь с нами',
      name: 'Имя',
      email: 'Email',
      phone: 'Телефон',
      message: 'Сообщение',
      send_message: 'Отправить',
      address: 'Адрес',
      location: 'Ташкент, Узбекистан',
      rights: 'Все права защищены',
    },
  },
  uz: {
    translation: {
      // Navigation
      home: 'Asosiy',
      courses: 'Kurslar',
      team: 'Jamoa',
      faq: 'Savollar',
      news: 'Yangiliklar',
      articles: 'Maqolalar',
      gallery: 'Galereya',
      contact: 'Aloqa',

      // Hero section
      hero_description: 'Stanford ta\'lim markaziga xush kelibsiz - ta\'limdagi muvaffaqiyat yo\'li',
      get_started: 'Boshlash',

      // Features
      courses_desc: 'Ehtiyojlaringizga mos kurslar',
      teachers_desc: 'Tajribali va malakali o\'qituvchilar',
      materials_desc: 'Sifatli o\'quv materiallari',
      support_desc: 'Talabalar uchun 24/7 qo\'llab-quvvatlash',

      // Course titles
      english: 'Ingliz tili',
      russian: 'Rus tili',
      mathematics: 'Matematika',
      english_desc: 'Bizning kurslarimiz bilan ingliz tilini o\'rganing',
      russian_desc: 'Rus tilini ona tilida so\'zlashuvchilardan o\'rganing',
      mathematics_desc: 'Ekspertlarimiz bilan matematikada yutuqlarga erishing',
      learn_more: 'Batafsil',

      // Team
      our_team: 'Bizning jamoa',
      english_teacher: 'Ingliz tili o\'qituvchisi',
      russian_teacher: 'Rus tili o\'qituvchisi',
      math_teacher: 'Matematika o\'qituvchisi',
      john_bio: '10+ yillik tajribaga ega ingliz tili o\'qituvchisi',
      anna_bio: 'Zamonaviy usullar bilan rus tilini o\'rgatuvchi',
      michael_bio: 'Masalalar yechishga ixtisoslashgan matematika eksperti',

      // Contact
      contact_title: 'Biz bilan bog\'laning',
      name: 'Ism',
      email: 'Email',
      phone: 'Telefon',
      message: 'Xabar',
      send_message: 'Yuborish',
      address: 'Manzil',
      location: 'Toshkent, O\'zbekiston',
      rights: 'Barcha huquqlar himoyalangan',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;