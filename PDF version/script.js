/*
  Garna for Creators landing page logic

  The main editable copy is in the i18n dictionary below.
  Edit values inside i18n.en / i18n.ru, but keep keys like 'hero.title' unchanged.
*/

// =============================
// TEXT DICTIONARY / TRANSLATIONS
// =============================
// EN text is inside i18n.en. RU text is inside i18n.ru.
// Each key is connected to an HTML element via data-i18n="...".
const i18n = {
  en: {
    'nav.how': 'How it works',
    'nav.platforms': 'Platforms',
    'nav.fees': 'Fees',
    'nav.faq': 'FAQ',
    'cta.create': 'Create Garna Account',
    'cta.manager': 'Contact Payout Manager',

    'hero.eyebrow': 'Early Access for selected creators',
    'hero.title': 'Creator payouts from global platforms, guided by Garna',
    'hero.subtitle': 'Receive payouts from creator platforms, stock marketplaces, freelance services and digital product platforms through one Garna account.',
    'hero.note': 'We’ll guide you through the first setup, help you understand which payout method fits your platform, and support you during your first withdrawals.',
    'hero.micro': 'Early Access is available for selected creators and platforms.',

    'visual.cardLabel': 'Incoming payout',
    'visual.matched': 'Matched',
    'visual.invoice': 'Invoice verified',
    'visual.balance': 'Garna balance',
    'visual.kyc': 'KYC',
    'visual.kycText': '1–2 business days',
    'visual.withdraw': 'Withdraw',
    'visual.withdrawText': 'Bank, card, crypto',

    'transition.kicker': 'Partner transition',
    'transition.title': 'Moving your payout setup to Garna?',
    'transition.text': 'You were invited to Garna through one of our partners. Our team will help you move your payout setup step by step, so you can continue receiving creator payouts with less friction.',

    'who.kicker': 'Who it’s for',
    'who.title': 'Built for creators who earn globally',
    'who.text': 'Garna can help creators, freelancers and digital sellers who receive income from international platforms.',
    'who.card1.title': 'Designers & illustrators',
    'who.card1.text': 'For creators selling graphics, templates, fonts, digital assets and visual products.',
    'who.card2.title': 'Photographers & stock contributors',
    'who.card2.text': 'For contributors receiving royalties or payouts from stock photo and media platforms.',
    'who.card3.title': '3D artists & game asset creators',
    'who.card3.text': 'For creators selling 3D models, plugins, textures, game assets and marketplace products.',
    'who.card4.title': 'Freelancers & digital sellers',
    'who.card4.text': 'For people earning from freelance platforms, subscriptions, courses, music, content or digital products.',

    'helps.kicker': 'What Garna helps with',
    'helps.title': 'One account for creator payouts',
    'helps.text': 'A guided way to connect platform payouts, receive funds to your Garna balance and withdraw using available payout methods.',
    'helps.f1.title': 'Receive platform payouts',
    'helps.f1.text': 'Use Garna details where supported to receive payments from international creator platforms.',
    'helps.f2.title': 'Get guided setup',
    'helps.f2.text': 'Tell us which platform you use. We’ll check the available payout method and guide you through the setup.',
    'helps.f3.title': 'Manage your balance',
    'helps.f3.text': 'Once funds arrive, they are credited to your Garna balance after verification and matching with your invoice.',
    'helps.f4.title': 'Withdraw globally',
    'helps.f4.text': 'Withdraw your money using available payout methods such as bank transfer, card, PayPal, Payoneer, crypto and other supported options.',

    'how.kicker': 'How it works',
    'how.title': 'From platform payout to your Garna balance',
    'how.text': 'The flow is simple, but setup may differ by platform. During Early Access, we guide you through the important details.',
    'how.s1.title': 'Create your Garna account',
    'how.s1.text': 'Register in Garna and complete verification. KYC usually takes 1–2 business days.',
    'how.s2.title': 'Tell us your platform',
    'how.s2.text': 'Contact your payout manager and tell us where you receive income.',
    'how.s3.title': 'Get setup instructions',
    'how.s3.text': 'We’ll check the available payout method and provide the correct Garna details or next steps.',
    'how.s4.title': 'Request payout on the platform',
    'how.s4.text': 'Add the provided details where supported and request a withdrawal from your platform.',
    'how.s5.title': 'Create an invoice in Garna',
    'how.s5.text': 'Create an invoice and attach the required confirmation, such as a payout screenshot or platform document.',
    'how.s6.title': 'Receive and withdraw funds',
    'how.s6.text': 'Garna matches the payment with your invoice, credits your balance, and you withdraw using your preferred available method.',
    'how.note': 'Platform processing time usually depends on the platform itself. In many cases, incoming funds may take 1–5 business days.',

    'fees.kicker': 'Early Access fee',
    'fees.title': 'Reduced fee for Early Access creators',
    'fees.text': 'We’re opening creator payouts in Early Access and manually helping selected users configure their first platform setups.',
    'fees.standard': 'Standard fee',
    'fees.early': 'Early Access fee',
    'fees.caption': 'Early Access creators can receive a reduced 1.5% Garna service fee for their first payouts while we help validate and fine-tune the setup flow.',
    'fees.disclaimer': 'The percentages above refer only to Garna’s service fee. Platform withdrawal fees, payment method charges, FX costs or other third-party fees may vary and are not included.',

    'platforms.kicker': 'Platforms',
    'platforms.title': 'Popular platforms we can help with',
    'platforms.text': 'We’re starting with popular creator platforms, stock marketplaces and digital product services. Some platforms can be configured directly, while others may require manual guidance from Garna or the platform’s own support team.',
    'platforms.moreKicker': 'More payout sources',
    'platforms.moreText': 'We can also review additional platforms and payout methods during Early Access. The exact setup depends on each platform’s rules and available payout options.',

    'why.kicker': 'Why Garna',
    'why.title': 'Global payout infrastructure for modern teams and creators',
    'why.text': 'Garna already helps businesses and contractors work with international payouts. Now we’re bringing the same payout infrastructure to creators who earn from global platforms.',
    'why.t1.title': 'Global coverage',
    'why.t1.text': 'Receive and withdraw funds across multiple countries, currencies and payout methods.',
    'why.t2.title': 'Currencies',
    'why.t2.text': 'Work with multiple currencies and available payout directions through Garna.',
    'why.t3.title': 'Guided onboarding',
    'why.t3.text': 'A payout manager will help you understand what to do and which details to use.',
    'why.t4.title': 'Compliance-first approach',
    'why.t4.text': 'Garna works with verification, invoices and payment documentation to keep the process structured.',

    'manager.kicker': 'Personal manager',
    'manager.title': 'Need help with your first setup?',
    'manager.text': 'Your payout manager will help you understand whether your platform is supported, which payout method is available, and what steps you need to complete.',
    'manager.telegram': 'Message on Telegram',
    'manager.email': 'Send an email',

    'faq.kicker': 'FAQ',
    'faq.title': 'Questions creators usually ask',
    'faq.text': 'A few important details before you start your first payout setup with Garna.',
    'faq.q1': 'Is Garna a creator platform?',
    'faq.a1': 'No. Garna is not a marketplace and does not sell your content. Garna helps creators receive payouts from international platforms and withdraw funds using available payout methods.',
    'faq.q2': 'Is this available for everyone?',
    'faq.a2': 'Creator payouts are currently available in Early Access. We start with selected creators and platforms to make sure each setup works correctly.',
    'faq.q3': 'Do I need to create a Garna account?',
    'faq.a3': 'Yes. You need a Garna account to complete verification, create invoices, receive funds and withdraw your balance.',
    'faq.q4': 'How long does verification take?',
    'faq.a4': 'KYC usually takes 1–2 business days, depending on the documents and verification flow.',
    'faq.q5': 'How long does it take to receive funds from a platform?',
    'faq.a5': 'It depends on the platform and payout method. In many cases, incoming funds may take 1–5 business days after the platform sends the payout.',
    'faq.q6': 'How long does withdrawal from Garna take?',
    'faq.a6': 'Withdrawal timing depends on the selected method and destination. As a general guideline, it may take 1–2 business days for many standard methods.',
    'faq.q7': 'Can I use Garna with any platform?',
    'faq.a7': 'Not always. Each platform has its own payout rules and supported methods. During setup, we confirm whether your platform can be processed and which flow applies.',
    'faq.q8': 'What is the fee?',
    'faq.a8': 'The standard Garna service fee is 5.5%. Early Access creators can receive a reduced 1.5% Garna service fee for their first payouts, subject to final confirmation and setup details.',

    'final.title': 'Start receiving creator payouts with Garna',
    'final.text': 'Contact your payout manager to check your platform and get guided setup, or create your Garna account when you’re ready to continue.',
    'final.telegramLabel': 'Telegram',
    'final.emailLabel': 'Email',

    'footer.text': 'Creator payouts from global platforms, guided by Garna.',
    'footer.product': 'Product',
    'footer.contact': 'Contact',
    'footer.legal': 'Garna is not a bank or financial institution. Financial technology services are provided through certified partners where applicable. Availability of payout methods, processing times and fees may depend on the user’s country, platform, verification status and selected withdrawal method.'
  },

  ru: {
    'nav.how': 'Как это работает',
    'nav.platforms': 'Платформы',
    'nav.fees': 'Комиссии',
    'nav.faq': 'FAQ',
    'cta.create': 'Создать аккаунт Garna',
    'cta.manager': 'Связаться с payout-менеджером',

    'hero.eyebrow': 'Early Access для выбранных креаторов',
    'hero.title': 'Выплаты с международных платформ для креаторов с сопровождением Garna',
    'hero.subtitle': 'Получайте выплаты со стоков, creator-платформ, freelance-сервисов и digital-маркетплейсов через один аккаунт Garna.',
    'hero.note': 'Мы поможем пройти первую настройку, понять, какой способ получения средств подходит для вашей платформы, и сопроводим вас на первых выводах.',
    'hero.micro': 'Early Access доступен для выбранных креаторов и платформ.',

    'visual.cardLabel': 'Входящий платёж',
    'visual.matched': 'Сопоставлен',
    'visual.invoice': 'Инвойс проверен',
    'visual.balance': 'Баланс Garna',
    'visual.kyc': 'KYC',
    'visual.kycText': '1–2 рабочих дня',
    'visual.withdraw': 'Вывод',
    'visual.withdrawText': 'Банк, карта, crypto',

    'transition.kicker': 'Переход от партнёра',
    'transition.title': 'Планируете переход в Garna?',
    'transition.text': 'Наша команда поможет вам шаг за шагом перенести настройку выплат, чтобы вы могли продолжить получать выплаты с меньшим количеством сложностей.',

    'who.kicker': 'Для кого это',
    'who.title': 'Для креаторов, которые зарабатывают по всему миру',
    'who.text': 'Garna может помочь креаторам, фрилансерам и продавцам digital-продуктов, которые получают доход с международных платформ.',
    'who.card1.title': 'Дизайнеры и иллюстраторы',
    'who.card1.text': 'Для авторов, которые продают графику, шаблоны, шрифты, digital assets и визуальные продукты.',
    'who.card2.title': 'Фотографы и авторы на стоках',
    'who.card2.text': 'Для контрибьюторов, которые получают роялти или выплаты с фотостоков и медиаплатформ.',
    'who.card3.title': '3D-артисты и авторы игровых ассетов',
    'who.card3.text': 'Для креаторов, которые продают 3D-модели, плагины, текстуры, игровые ассеты и продукты на маркетплейсах.',
    'who.card4.title': 'Фрилансеры и digital-продавцы',
    'who.card4.text': 'Для тех, кто зарабатывает на freelance-платформах, подписках, курсах, музыке, контенте или digital-продуктах.',

    'helps.kicker': 'С чем помогает Garna',
    'helps.title': 'Единый аккаунт для выплат',
    'helps.text': 'Сопровождаемый процесс для подключения выплат с платформ, получения средств на баланс Garna и дальнейшего вывода доступными способами.',
    'helps.f1.title': 'Получайте выплаты с платформ',
    'helps.f1.text': 'Используйте реквизиты Garna там, где это поддерживается, чтобы получать выплаты с международных creator-платформ.',
    'helps.f2.title': 'Настройка с сопровождением',
    'helps.f2.text': 'Сообщите нам, какой платформой вы пользуетесь. Мы проверим доступный способ вывода и подскажем, как настроить процесс.',
    'helps.f3.title': 'Управляйте балансом',
    'helps.f3.text': 'После поступления средств они зачисляются на баланс Garna после проверки и сопоставления с вашим инвойсом.',
    'helps.f4.title': 'Выводите средства глобально',
    'helps.f4.text': 'Выводите деньги доступными способами: банковский перевод, карта, PayPal, Payoneer, crypto и другие поддерживаемые варианты.',

    'how.kicker': 'Как это работает',
    'how.title': 'От выплаты с платформы до баланса Garna',
    'how.text': 'Процесс простой, но настройка может отличаться в зависимости от платформы. В Early Access мы помогаем пройти важные детали.',
    'how.s1.title': 'Создайте аккаунт Garna',
    'how.s1.text': 'Зарегистрируйтесь в Garna и пройдите верификацию. KYC обычно занимает 1–2 рабочих дня.',
    'how.s2.title': 'Сообщите нам вашу платформу',
    'how.s2.text': 'Свяжитесь с payout-менеджером и расскажите, где вы получаете доход.',
    'how.s3.title': 'Получите инструкцию по настройке',
    'how.s3.text': 'Мы проверим доступный способ вывода и предоставим нужные реквизиты Garna или следующие шаги.',
    'how.s4.title': 'Запросите выплату на платформе',
    'how.s4.text': 'Добавьте предоставленные реквизиты там, где это поддерживается, и запросите вывод средств на вашей платформе.',
    'how.s5.title': 'Создайте инвойс в Garna',
    'how.s5.text': 'Создайте инвойс и прикрепите нужное подтверждение: например, скриншот выплаты или документ с платформы.',
    'how.s6.title': 'Получите и выведите средства',
    'how.s6.text': 'Garna сопоставит платёж с вашим инвойсом, пополнит баланс, и вы сможете вывести деньги удобным способом.',
    'how.note': 'Срок обработки зависит от самой платформы. Во многих случаях входящий платёж может занимать 1–5 рабочих дней.',

    'fees.kicker': 'Early Access комиссия',
    'fees.title': 'Сниженная комиссия для Early Access креаторов',
    'fees.text': 'Мы открываем выплаты для креаторов в режиме Early Access и вручную помогаем выбранным пользователям настроить первые платформы.',
    'fees.standard': 'Стандартная комиссия',
    'fees.early': 'Early Access комиссия',
    'fees.caption': 'Early Access креаторы могут получить сниженную комиссию сервиса Garna 1.5% на первые выплаты, пока мы проверяем и дорабатываем процесс настройки.',
    'fees.disclaimer': 'Указанные проценты относятся только к комиссии сервиса Garna. Комиссии платформ, платёжных методов, конвертации валют и другие сторонние расходы могут отличаться и не включены в эту ставку.',

    'platforms.kicker': 'Платформы',
    'platforms.title': 'Популярные платформы, с которыми мы можем помочь',
    'platforms.text': 'Мы начинаем с популярных creator-платформ, стоков и digital-сервисов. Некоторые платформы можно настроить напрямую, а для некоторых может потребоваться ручное сопровождение от Garna или поддержка самой платформы.',
    'platforms.moreKicker': 'Дополнительные payout-источники',
    'platforms.moreText': 'В Early Access мы также можем рассматривать дополнительные платформы и способы выплат. Точная настройка зависит от правил конкретной платформы и доступных payout-методов.',

    'why.kicker': 'Почему Garna',
    'why.title': 'Глобальная payout-инфраструктура для современных команд и креаторов',
    'why.text': 'Garna уже помогает бизнесам и подрядчикам работать с международными выплатами. Теперь мы переносим эту инфраструктуру на креаторов, которые зарабатывают на глобальных платформах.',
    'why.t1.title': 'Глобальное покрытие',
    'why.t1.text': 'Получайте и выводите средства в разных странах, валютах и через разные payout-методы.',
    'why.t2.title': 'Валюты',
    'why.t2.text': 'Работайте с разными валютами и доступными payout-направлениями через Garna.',
    'why.t3.title': 'Сопровождение при подключении',
    'why.t3.text': 'Payout-менеджер поможет понять, что нужно сделать и какие реквизиты использовать.',
    'why.t4.title': 'Compliance-first подход',
    'why.t4.text': 'Garna работает с верификацией, инвойсами и платёжными документами, чтобы процесс был структурированным.',

    'manager.kicker': 'Персональный менеджер',
    'manager.title': 'Нужна помощь с первой настройкой?',
    'manager.text': 'Ваш payout-менеджер поможет понять, поддерживается ли ваша платформа, какой способ выплаты доступен и какие шаги нужно пройти.',
    'manager.telegram': 'Написать в Telegram',
    'manager.email': 'Написать на email',

    'faq.kicker': 'FAQ',
    'faq.title': 'Что обычно спрашивают креаторы',
    'faq.text': 'Несколько важных деталей перед первой настройкой выплат через Garna.',
    'faq.q1': 'Garna – это creator-платформа?',
    'faq.a1': 'Нет. Garna не является маркетплейсом и не продаёт ваш контент. Garna помогает креаторам получать выплаты с международных платформ и выводить средства доступными способами.',
    'faq.q2': 'Это доступно всем?',
    'faq.a2': 'Сейчас направление выплат для креаторов доступно в режиме Early Access. Мы начинаем с выбранных креаторов и платформ, чтобы убедиться, что каждый сценарий настройки работает корректно.',
    'faq.q3': 'Нужно ли создавать аккаунт Garna?',
    'faq.a3': 'Да. Аккаунт Garna нужен, чтобы пройти верификацию, создавать инвойсы, получать средства и выводить баланс.',
    'faq.q4': 'Сколько занимает верификация?',
    'faq.a4': 'KYC обычно занимает 1–2 рабочих дня, в зависимости от документов и процесса проверки.',
    'faq.q5': 'Сколько занимает получение средств с платформы?',
    'faq.a5': 'Это зависит от платформы и способа выплаты. Во многих случаях входящий платёж может занимать 1–5 рабочих дней после отправки выплаты платформой.',
    'faq.q6': 'Сколько занимает вывод из Garna?',
    'faq.a6': 'Срок вывода зависит от выбранного метода и направления. В качестве общего ориентира многие стандартные методы могут занимать 1–2 рабочих дня.',
    'faq.q7': 'Можно ли использовать Garna с любой платформой?',
    'faq.a7': 'Не всегда. У каждой платформы есть свои правила и доступные payout-методы. Во время настройки мы подтверждаем, можно ли обработать вашу платформу и какой сценарий подходит.',
    'faq.q8': 'Какая комиссия?',
    'faq.a8': 'Стандартная комиссия сервиса Garna – 5.5%. Early Access креаторы могут получить сниженную комиссию сервиса Garna 1.5% на первые выплаты, при условии финального подтверждения и деталей настройки.',

    'final.title': 'Начните получать creator payouts через Garna',
    'final.text': 'Свяжитесь с payout-менеджером, чтобы проверить вашу платформу и получить сопровождение при настройке, или создайте аккаунт Garna, когда будете готовы продолжить.',
    'final.telegramLabel': 'Telegram',
    'final.emailLabel': 'Email',

    'footer.text': 'Выплаты с международных платформ для креаторов с сопровождением Garna.',
    'footer.product': 'Product',
    'footer.contact': 'Contact',
    'footer.legal': 'Garna не является банком или финансовой организацией. Финтех-сервисы предоставляются через сертифицированных партнёров там, где это применимо. Доступность payout-методов, сроки обработки и комиссии могут зависеть от страны пользователя, платформы, статуса верификации и выбранного способа вывода.'
  }
};

// Platform names used only in the running ticker.
const tickerPlatforms = [
  'Upwork',
  'iStock / Getty Images',
  'ArtStation',
  'Buy Me a Coffee',
  'Creative Fabrica',
  'Blender Market',
  'Unity Asset Store',
  'Unreal Marketplace',
  'SoundCloud',
  'Pixiv / FANBOX',
  'Patreon',
  'Fiverr',
  'Envato',
  'Gumroad'
];

// URL modes:
// ?lang=ru switches to Russian on first load.
// ?mode=transition or ?ref=partner shows the soft transition banner.
const params = new URLSearchParams(window.location.search);
const isPdfVersion = document.body.classList.contains('pdf-version');

function getInitialLang() {
  // PDF version is intended as an English printable handout by default.
  if (isPdfVersion) return 'en';
  const fromUrl = params.get('lang');
  if (fromUrl && i18n[fromUrl]) return fromUrl;
  const stored = localStorage.getItem('garnaCreatorsLang');
  if (stored && i18n[stored]) return stored;
  return 'en';
}

function setLanguage(lang, updateUrl = true) {
  const dictionary = i18n[lang] || i18n.en;
  document.documentElement.lang = lang;
  document.title = isPdfVersion ? 'Garna for Creators - PDF version' : (lang === 'ru' ? 'Garna for Creators – выплаты для креаторов' : 'Garna for Creators');

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (dictionary[key]) node.textContent = dictionary[key];
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === lang);
  });

  localStorage.setItem('garnaCreatorsLang', lang);
  refreshFaqHeights();

  if (updateUrl) {
    const next = new URL(window.location.href);
    next.searchParams.set('lang', lang);
    window.history.replaceState({}, '', next);
  }
}

function initTransitionMode() {
  const mode = params.get('mode');
  const ref = params.get('ref');
  const shouldShow = mode === 'transition' || ref === 'partner';
  const banner = document.getElementById('transitionBanner');
  if (banner) banner.hidden = !shouldShow;
}

function initTicker() {
  const ticker = document.getElementById('platformTicker');
  if (!ticker) return;

  const items = isPdfVersion ? tickerPlatforms : [...tickerPlatforms, ...tickerPlatforms];
  ticker.innerHTML = items.map((name) => `<span class="ticker-item">${name}</span>`).join('');
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  items.forEach((item) => observer.observe(item));
}

function initMobileMenu() {
  const button = document.querySelector('.menu-btn');
  const menu = document.querySelector('.mobile-nav');
  if (!button || !menu) return;

  button.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('menu-open');
    button.setAttribute('aria-expanded', String(isOpen));
    menu.hidden = !isOpen;
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      button.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    });
  });
}

function setFaqItemState(item, shouldOpen) {
  const button = item.querySelector('.faq-question');
  const panel = item.querySelector('.faq-answer');
  if (!button || !panel) return;

  button.setAttribute('aria-expanded', String(shouldOpen));

  if (shouldOpen) {
    item.classList.add('is-open');
    panel.style.height = `${panel.scrollHeight}px`;
    return;
  }

  panel.style.height = `${panel.scrollHeight}px`;
  panel.offsetHeight;
  item.classList.remove('is-open');
  panel.style.height = '0px';
}

function refreshFaqHeights() {
  document.querySelectorAll('.faq-item.is-open .faq-answer').forEach((panel) => {
    panel.style.height = `${panel.scrollHeight}px`;
  });
}

function initFaqAccordion() {
  const items = Array.from(document.querySelectorAll('.faq-item'));
  if (!items.length) return;

  items.forEach((item) => {
    const button = item.querySelector('.faq-question');
    const panel = item.querySelector('.faq-answer');
    if (!button || !panel) return;

    panel.style.height = item.classList.contains('is-open') ? `${panel.scrollHeight}px` : '0px';

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach((other) => {
        if (other !== item) setFaqItemState(other, false);
      });

      setFaqItemState(item, !isOpen);
    });
  });

  window.addEventListener('resize', refreshFaqHeights);
}

function initLanguageButtons() {
  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initTransitionMode();
  initTicker();
  initLanguageButtons();
  initMobileMenu();
  setLanguage(getInitialLang(), false);
  initFaqAccordion();
  initReveal();
});
