/**
 * Age Calculator Pro
 * Fully responsive, modern, bilingual (English & Bengali), offline-first age calculator.
 */

// --- Translations & Localization Data ---
const translations = {
  bn: {
    appTitle: "বয়স ক্যালকুলেটর",
    appSubtitle: "নির্ভুল হিসাব, পরবর্তী জন্মদিন ও জীবন পরিসংখ্যান",
    tabAge: "বয়স গণনা",
    tabCompare: "বয়সের তুলনা",
    tabMilestones: "মাইলফলক",
    birthDateLabel: "আপনার জন্ম তারিখ:",
    targetDateLabel: "যে তারিখ পর্যন্ত হিসাব করবেন:",
    quickSelect: "দ্রুত নির্বাচন:",
    setToday: "আজকের তারিখ",
    setNextYear: "+১ বছর পর",
    calcButton: "বয়স বের করুন",
    resetButton: "রিসেট",
    bdayWish: "শুভ জন্মদিন! Happy Birthday!",
    bdayDesc: "আজকের দিনটি আপনার জন্য আনন্দ ও ভালোবাসায় ভরে উঠুক!",
    years: "বছর",
    months: "মাস",
    days: "দিন",
    hours: "ঘণ্টা",
    minutes: "মিনিট",
    seconds: "সেকেন্ড",
    liveTicker: "লাইভ সময় অতিবাহিত",
    tickerNote: "প্রতি সেকেন্ডে আপডেট হচ্ছে",
    nextBdayTitle: "পরবর্তী জন্মদিন",
    daysLeft: "দিন বাকি",
    detailedBreakdown: "সম্পূর্ণ জীবন পরিসংখ্যান",
    statTotalMonths: "মোট মাস",
    statTotalWeeks: "মোট সপ্তাহ",
    statTotalDays: "মোট দিন অতিবাহিত",
    statTotalHours: "মোট ঘণ্টা",
    statTotalMinutes: "মোট মিনিট",
    statTotalSeconds: "মোট সেকেন্ড",
    insightsTitle: "মজার তথ্য ও রাশিফল",
    zodiacLabel: "রাশি (Zodiac)",
    chineseZodiacLabel: "চাইনিজ রাশি",
    birthDayLabel: "যেবারে জন্ম",
    heartbeatsLabel: "আনুমানিক হৃদস্পন্দন",
    heartbeatDesc: "গড়ে ৮০ বিট/মিনিট হিসেবে",
    breathsLabel: "নেওয়া নিঃশ্বাস",
    breathDesc: "গড়ে ১৬ শ্বাস/মিনিট হিসেবে",
    sleepLabel: "ঘুমিয়েছেন প্রায়",
    sleepDesc: "প্রতিদিন গড়ে ৮ ঘণ্টা হিসেবে",
    copySummary: "ফলাফল কপি করুন",
    celebrate: "উদযাপন করুন!",
    compareTitle: "দুইজনের বয়সের তুলনা করুন",
    compareSub: "দুইজন ব্যক্তির জন্ম তারিখ দিয়ে দেখুন তাদের বয়সের ব্যবধান কতটুকু।",
    person1Label: "প্রথম ব্যক্তির জন্ম তারিখ:",
    person2Label: "দ্বিতীয় ব্যক্তির জন্ম তারিখ:",
    compareButton: "ব্যবধান বের করুন",
    milestonesTitle: "জীবনের বিশেষ মাইলফলক",
    milestoneSub: "আপনার জীবনের অতীত এবং ভবিষ্যতের রোমাঞ্চকর দিনগুলোর তালিকা:",
    milestoneEmpty: "প্রথমে 'বয়স গণনা' ট্যাবে আপনার জন্ম তারিখ নির্বাচন করুন!",
    craftedWith: "তৈরি করা হয়েছে সুন্দর অভিজ্ঞতা ও পরম যত্নে",
    fastSecure: "১০০% অফলাইন ও নিরাপদ",
    responsive: "সকল ডিভাইসে নিখুঁত",
    copiedToast: "ফলাফল ক্লিপবোর্ডে কপি করা হয়েছে!",
    invalidDateToast: "অনুগ্রহ করে একটি সঠিক জন্ম তারিখ দিন!",
    futureDateToast: "জন্ম তারিখ বর্তমান তারিখের চেয়ে বড় হতে পারে না!",
    sameAgeToast: "উভয়ের জন্ম একই দিনে!",
    person1Older: "১ম ব্যক্তি ২য় ব্যক্তির চেয়ে বড় 🌟",
    person2Older: "২য় ব্যক্তি ১ম ব্যক্তির চেয়ে বড় 🌟",
    leapYearText: "অধিবর্ষ (Leap Year) ছিল",
    normalYearText: "সাধারণ বছর ছিল",
    daysOfWeek: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"],
    monthsOfYear: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"]
  },
  en: {
    appTitle: "Age Calculator Pro",
    appSubtitle: "Accurate age, next birthday countdown & life statistics",
    tabAge: "Calculate Age",
    tabCompare: "Compare Age",
    tabMilestones: "Milestones",
    birthDateLabel: "Your Date of Birth:",
    targetDateLabel: "Calculate Age as of:",
    quickSelect: "Quick Pick:",
    setToday: "Today's Date",
    setNextYear: "+1 Year",
    calcButton: "Calculate Age",
    resetButton: "Reset",
    bdayWish: "Happy Birthday! 🎉",
    bdayDesc: "Wishing you a wonderful day filled with joy and celebration!",
    years: "Years",
    months: "Months",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    liveTicker: "Live Time Elapsed",
    tickerNote: "Updating every second",
    nextBdayTitle: "Next Birthday",
    daysLeft: "days left",
    detailedBreakdown: "Complete Life Statistics",
    statTotalMonths: "Total Months",
    statTotalWeeks: "Total Weeks",
    statTotalDays: "Total Days Lived",
    statTotalHours: "Total Hours",
    statTotalMinutes: "Total Minutes",
    statTotalSeconds: "Total Seconds",
    insightsTitle: "Fun Insights & Astrology",
    zodiacLabel: "Zodiac Sign",
    chineseZodiacLabel: "Chinese Zodiac",
    birthDayLabel: "Day of Birth",
    heartbeatsLabel: "Estimated Heartbeats",
    heartbeatDesc: "Based on ~80 beats/min",
    breathsLabel: "Breaths Taken",
    breathDesc: "Based on ~16 breaths/min",
    sleepLabel: "Time Slept Approx",
    sleepDesc: "Based on ~8 hours/day",
    copySummary: "Copy Summary",
    celebrate: "Celebrate!",
    compareTitle: "Compare Two Ages",
    compareSub: "Enter dates of birth of two individuals to calculate the exact difference.",
    person1Label: "Person 1 Date of Birth:",
    person2Label: "Person 2 Date of Birth:",
    compareButton: "Compare Ages",
    milestonesTitle: "Life Milestones",
    milestoneSub: "Exciting past and future milestones across your lifespan:",
    milestoneEmpty: "Please enter your date of birth in the 'Calculate Age' tab first!",
    craftedWith: "Crafted with love for smooth performance",
    fastSecure: "100% Offline & Private",
    responsive: "Perfect on all devices",
    copiedToast: "Summary copied to clipboard!",
    invalidDateToast: "Please select a valid date of birth!",
    futureDateToast: "Date of birth cannot be in the future of the target date!",
    sameAgeToast: "Both are of the exact same age!",
    person1Older: "Person 1 is older than Person 2 🌟",
    person2Older: "Person 2 is older than Person 1 🌟",
    leapYearText: "Was a Leap Year",
    normalYearText: "Was a Regular Year",
    daysOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthsOfYear: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }
};

// Zodiac Sign definitions
const ZODIAC_SIGNS = [
  { nameBn: "মকর (Capricorn)", nameEn: "Capricorn", symbol: "♑", elemBn: "মাটি 🌿", elemEn: "Earth 🌿", start: [1, 1], end: [1, 19] },
  { nameBn: "কুম্ভ (Aquarius)", nameEn: "Aquarius", symbol: "♒", elemBn: "বাতাস 💨", elemEn: "Air 💨", start: [1, 20], end: [2, 18] },
  { nameBn: "মীন (Pisces)", nameEn: "Pisces", symbol: "♓", elemBn: "পানি 💧", elemEn: "Water 💧", start: [2, 19], end: [3, 20] },
  { nameBn: "মেষ (Aries)", nameEn: "Aries", symbol: "♈", elemBn: "আগুন 🔥", elemEn: "Fire 🔥", start: [3, 21], end: [4, 19] },
  { nameBn: "বৃষ (Taurus)", nameEn: "Taurus", symbol: "♉", elemBn: "মাটি 🌿", elemEn: "Earth 🌿", start: [4, 20], end: [5, 20] },
  { nameBn: "মিথুন (Gemini)", nameEn: "Gemini", symbol: "♊", elemBn: "বাতাস 💨", elemEn: "Air 💨", start: [5, 21], end: [6, 20] },
  { nameBn: "কর্কট (Cancer)", nameEn: "Cancer", symbol: "♋", elemBn: "পানি 💧", elemEn: "Water 💧", start: [6, 21], end: [7, 22] },
  { nameBn: "সিংহ (Leo)", nameEn: "Leo", symbol: "♌", elemBn: "আগুন 🔥", elemEn: "Fire 🔥", start: [7, 23], end: [8, 22] },
  { nameBn: "কন্যা (Virgo)", nameEn: "Virgo", symbol: "♍", elemBn: "মাটি 🌿", elemEn: "Earth 🌿", start: [8, 23], end: [9, 22] },
  { nameBn: "তুলা (Libra)", nameEn: "Libra", symbol: "♎", elemBn: "বাতাস 💨", elemEn: "Air 💨", start: [9, 23], end: [10, 22] },
  { nameBn: "বৃশ্চিক (Scorpio)", nameEn: "Scorpio", symbol: "♏", elemBn: "পানি 💧", elemEn: "Water 💧", start: [10, 23], end: [11, 21] },
  { nameBn: "ধনু (Sagittarius)", nameEn: "Sagittarius", symbol: "♐", elemBn: "আগুন 🔥", elemEn: "Fire 🔥", start: [11, 22], end: [12, 21] },
  { nameBn: "মকর (Capricorn)", nameEn: "Capricorn", symbol: "♑", elemBn: "মাটি 🌿", elemEn: "Earth 🌿", start: [12, 22], end: [12, 31] }
];

// Chinese Zodiac Animals (Order starting from Rat, modulo 12 with offset 4)
const CHINESE_ZODIAC = [
  { bn: "ইঁদুর (Rat)", en: "Rat", icon: "🐀", descBn: "বুদ্ধিমান ও দূরদর্শী", descEn: "Intelligent & resourcefulness" },
  { bn: "ষাঁড় (Ox)", en: "Ox", icon: "🐂", descBn: "পরিশ্রমী ও বিশ্বস্ত", descEn: "Diligent & dependable" },
  { bn: "বাঘ (Tiger)", en: "Tiger", icon: "🐅", descBn: "সাহসী ও আত্মবিশ্বাসী", descEn: "Brave & confident" },
  { bn: "খরগোশ (Rabbit)", en: "Rabbit", icon: "🐇", descBn: "দয়ালু ও মার্জিত", descEn: "Gentle & elegant" },
  { bn: "ড্রাগন (Dragon)", en: "Dragon", icon: "🐉", descBn: "শক্তি ও সৌভাগ্যের প্রতীক", descEn: "Charismatic & fortunate" },
  { bn: "সাপ (Snake)", en: "Snake", icon: "🐍", descBn: "রহস্যময় ও প্রজ্ঞাবান", descEn: "Wise & enigmatic" },
  { bn: "ঘোড়া (Horse)", en: "Horse", icon: "🐎", descBn: "স্বাধীনচেতা ও উদ্যমী", descEn: "Energetic & free-spirited" },
  { bn: "ছাগল (Goat)", en: "Goat", icon: "🐐", descBn: "শান্ত ও সৃজনশীল", descEn: "Calm & artistic" },
  { bn: "বানর (Monkey)", en: "Monkey", icon: "🐒", descBn: "চটপটে ও উদ্ভাবনী", descEn: "Witty & inventive" },
  { bn: "মোরগ (Rooster)", en: "Rooster", icon: "🐓", descBn: "সময়নিষ্ঠ ও সাহসী", descEn: "Punctual & observant" },
  { bn: "কুকুর (Dog)", en: "Dog", icon: "🐕", descBn: "অনুগত ও সৎ", descEn: "Loyal & honest" },
  { bn: "শূকর (Pig)", en: "Pig", icon: "🐖", descBn: "উদার ও নিষ্ঠাবান", descEn: "Generous & compassionate" }
];

// App State
let currentLang = localStorage.getItem("preferred_lang") || "bn";
let isSoundEnabled = localStorage.getItem("sound_enabled") !== "false";
let liveTickerInterval = null;
let lastCalculatedData = null;

// Audio synthesis via Web Audio API (No external sound files required)
let audioCtx = null;
function playSound(type = "click") {
  if (!isSoundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "celebrate") {
      // Pleasant chord chime
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = "triangle";
        o.frequency.value = freq;
        o.connect(g);
        g.connect(audioCtx.destination);
        const startTime = now + idx * 0.07;
        g.gain.setValueAtTime(0.15, startTime);
        g.gain.exponentialRampToValueAtTime(0.001, startTime + 0.5);
        o.start(startTime);
        o.stop(startTime + 0.5);
      });
    }
  } catch (e) {
    console.debug("Audio play error", e);
  }
}

// Convert numbers to Bengali digits if current language is bn
function formatNumber(num) {
  if (num === null || num === undefined || isNaN(num)) return "0";
  const str = Number(num).toLocaleString('en-US');
  if (currentLang !== "bn") return str;
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return str.replace(/\d/g, d => bnDigits[d]);
}

// --- DOM Elements ---
const birthDateInput = document.getElementById("birth-date");
const targetDateInput = document.getElementById("target-date");
const calculateBtn = document.getElementById("calculate-btn");
const resetBtn = document.getElementById("reset-btn");
const setTodayBtn = document.getElementById("set-today-btn");
const setNextYearBtn = document.getElementById("set-next-year-btn");

const themeToggleBtn = document.getElementById("theme-toggle-btn");
const langToggleBtn = document.getElementById("lang-toggle-btn");
const soundToggleBtn = document.getElementById("sound-toggle-btn");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

// Result Elements
const birthdayGreeting = document.getElementById("birthday-greeting");
const resYears = document.getElementById("res-years");
const resMonths = document.getElementById("res-months");
const resDays = document.getElementById("res-days");

const liveHours = document.getElementById("live-hours");
const liveMinutes = document.getElementById("live-minutes");
const liveSeconds = document.getElementById("live-seconds");

const nextBdayDate = document.getElementById("next-bday-date");
const nextBdayDaysLeft = document.getElementById("next-bday-days-left");
const nextBdayDetail = document.getElementById("next-bday-detail");

const statTotalMonths = document.getElementById("stat-total-months");
const statTotalWeeks = document.getElementById("stat-total-weeks");
const statTotalDays = document.getElementById("stat-total-days");
const statTotalHours = document.getElementById("stat-total-hours");
const statTotalMinutes = document.getElementById("stat-total-minutes");
const statTotalSeconds = document.getElementById("stat-total-seconds");

const zodiacSymbol = document.getElementById("zodiac-symbol");
const zodiacName = document.getElementById("zodiac-name");
const zodiacElement = document.getElementById("zodiac-element");

const chineseZodiacSymbol = document.getElementById("chinese-zodiac-symbol");
const chineseZodiacName = document.getElementById("chinese-zodiac-name");
const chineseZodiacDesc = document.getElementById("chinese-zodiac-desc");

const birthDayName = document.getElementById("birth-day-name");
const birthLeapDesc = document.getElementById("birth-leap-desc");
const estHeartbeats = document.getElementById("est-heartbeats");
const estBreaths = document.getElementById("est-breaths");
const estSleep = document.getElementById("est-sleep");

const copySummaryBtn = document.getElementById("copy-summary-btn");
const celebrateBtn = document.getElementById("celebrate-btn");

// Initialize Default Dates
function getTodayIsoString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Animated count-up effect for hero numbers
function animateValue(element, start, end, duration = 400) {
  if (start === end) {
    element.textContent = formatNumber(end);
    return;
  }
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out quad
    const easeProgress = 1 - (1 - progress) * (1 - progress);
    const current = Math.floor(start + (end - start) * easeProgress);
    element.textContent = formatNumber(current);
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = formatNumber(end);
    }
  }
  requestAnimationFrame(update);
}

function initDates() {
  const todayStr = getTodayIsoString();
  targetDateInput.value = todayStr;
  
  // Set default birth date to 20 years ago
  const defaultBirth = new Date();
  defaultBirth.setFullYear(defaultBirth.getFullYear() - 20);
  const birthYear = defaultBirth.getFullYear();
  const birthMonth = String(defaultBirth.getMonth() + 1).padStart(2, "0");
  const birthDay = String(defaultBirth.getDate()).padStart(2, "0");
  birthDateInput.value = `${birthYear}-${birthMonth}-${birthDay}`;

  // Set default compare dates
  const p1 = new Date();
  p1.setFullYear(p1.getFullYear() - 24);
  const p2 = new Date();
  p2.setFullYear(p2.getFullYear() - 21);
  if (person1Dob && !person1Dob.value) {
    person1Dob.value = `${p1.getFullYear()}-${String(p1.getMonth() + 1).padStart(2, "0")}-${String(p1.getDate()).padStart(2, "0")}`;
  }
  if (person2Dob && !person2Dob.value) {
    person2Dob.value = `${p2.getFullYear()}-${String(p2.getMonth() + 1).padStart(2, "0")}-${String(p2.getDate()).padStart(2, "0")}`;
  }
}

// Show Toast
function showToast(msg) {
  toastMessage.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2600);
}

// --- Exact Age Math Logic ---
function calculateAgeExact(birthDate, targetDate) {
  const y1 = birthDate.getFullYear();
  const m1 = birthDate.getMonth();
  const d1 = birthDate.getDate();

  const y2 = targetDate.getFullYear();
  const m2 = targetDate.getMonth();
  const d2 = targetDate.getDate();

  let years = y2 - y1;
  let months = m2 - m1;
  let days = d2 - d1;

  if (days < 0) {
    // Borrow days from previous month of target date
    const prevMonthDays = new Date(y2, m2, 0).getDate();
    days += prevMonthDays;
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  // Total differences in ms and days
  const diffMs = targetDate.getTime() - birthDate.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const remainingDaysInWeek = totalDays % 7;
  const totalMonths = (years * 12) + months;
  const totalHours = totalDays * 24;
  const totalMinutes = totalHours * 60;
  const totalSeconds = totalMinutes * 60;

  // Next Birthday Calculation
  let nextBday = new Date(y2, m1, d1);
  if (nextBday < targetDate) {
    nextBday.setFullYear(y2 + 1);
  }

  const msToNextBday = nextBday.getTime() - targetDate.getTime();
  const daysToNextBday = Math.ceil(msToNextBday / (1000 * 60 * 60 * 24));
  const isBirthdayToday = (m1 === m2 && d1 === d2);

  // Month and days until next birthday breakdown
  let bdayMonthsLeft = Math.floor(daysToNextBday / 30.4375);
  let bdayDaysLeft = Math.round(daysToNextBday % 30.4375);

  return {
    years,
    months,
    days,
    totalMonths,
    totalWeeks,
    remainingDaysInWeek,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
    isBirthdayToday,
    daysToNextBday: isBirthdayToday ? 0 : daysToNextBday,
    nextBdayDate: nextBday,
    bdayMonthsLeft,
    bdayDaysLeft
  };
}

// Find Zodiac
function getZodiac(month, day) {
  // month is 1-indexed (1-12)
  for (const z of ZODIAC_SIGNS) {
    const [startM, startD] = z.start;
    const [endM, endD] = z.end;
    if (
      (month === startM && day >= startD) ||
      (month === endM && day <= endD) ||
      (startM > endM && ((month === startM && day >= startD) || (month === endM && day <= endD)))
    ) {
      return z;
    }
  }
  return ZODIAC_SIGNS[0];
}

// Check Leap Year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Main Execution Handler
function processCalculation() {
  playSound("click");

  const birthVal = birthDateInput.value;
  const targetVal = targetDateInput.value;

  if (!birthVal || !targetVal) {
    showToast(translations[currentLang].invalidDateToast);
    return;
  }

  const [by, bm, bd] = birthVal.split("-").map(Number);
  const [ty, tm, td] = targetVal.split("-").map(Number);

  const birthDate = new Date(by, bm - 1, bd, 0, 0, 0);
  const targetDate = new Date(ty, tm - 1, td, 0, 0, 0);

  if (birthDate > targetDate) {
    showToast(translations[currentLang].futureDateToast);
    return;
  }

  const results = calculateAgeExact(birthDate, targetDate);
  lastCalculatedData = { results, birthDate, targetDate };

  renderResults(results, birthDate, targetDate);
  renderMilestones(birthDate);

  if (results.isBirthdayToday) {
    birthdayGreeting.classList.remove("hidden");
    triggerConfetti();
    playSound("celebrate");
  } else {
    birthdayGreeting.classList.add("hidden");
  }
}

// Render Results on the UI
function renderResults(res, birthDate, targetDate) {
  const t = translations[currentLang];

  // 1. Hero Big Numbers with smooth count-up animation
  animateValue(resYears, 0, res.years);
  animateValue(resMonths, 0, res.months);
  animateValue(resDays, 0, res.days);

  // 2. Next Birthday
  if (res.isBirthdayToday) {
    nextBdayDaysLeft.textContent = formatNumber(0);
    nextBdayDetail.textContent = currentLang === "bn" ? "আজকেই জন্মদিন! 🎈" : "Today is the day! 🎈";
  } else {
    nextBdayDaysLeft.textContent = formatNumber(res.daysToNextBday);
    const dayOfWeek = t.daysOfWeek[res.nextBdayDate.getDay()];
    nextBdayDetail.textContent = `${dayOfWeek} (${formatNumber(res.bdayMonthsLeft)} ${t.months}, ${formatNumber(res.bdayDaysLeft)} ${t.days})`;
  }

  const nextBdayFormatted = `${t.monthsOfYear[res.nextBdayDate.getMonth()]} ${formatNumber(res.nextBdayDate.getDate())}, ${formatNumber(res.nextBdayDate.getFullYear())}`;
  nextBdayDate.textContent = nextBdayFormatted;

  // 3. Stats Grid
  statTotalMonths.textContent = formatNumber(res.totalMonths);
  statTotalWeeks.textContent = `${formatNumber(res.totalWeeks)} (${formatNumber(res.remainingDaysInWeek)} ${t.days})`;
  statTotalDays.textContent = formatNumber(res.totalDays);
  statTotalHours.textContent = formatNumber(res.totalHours);
  statTotalMinutes.textContent = formatNumber(res.totalMinutes);
  statTotalSeconds.textContent = formatNumber(res.totalSeconds);

  // 4. Astrological & Fun Insights
  const birthMonth = birthDate.getMonth() + 1;
  const birthDay = birthDate.getDate();
  const zodiac = getZodiac(birthMonth, birthDay);

  zodiacSymbol.textContent = zodiac.symbol;
  zodiacName.textContent = currentLang === "bn" ? zodiac.nameBn : zodiac.nameEn;
  zodiacElement.textContent = (currentLang === "bn" ? "উপাদান: " : "Element: ") + (currentLang === "bn" ? zodiac.elemBn : zodiac.elemEn);

  // Chinese Zodiac
  const birthYear = birthDate.getFullYear();
  const czIndex = (birthYear - 4) % 12;
  const chineseZod = CHINESE_ZODIAC[(czIndex + 12) % 12];
  chineseZodiacSymbol.textContent = chineseZod.icon;
  chineseZodiacName.textContent = currentLang === "bn" ? chineseZod.bn : chineseZod.en;
  chineseZodiacDesc.textContent = currentLang === "bn" ? chineseZod.descBn : chineseZod.descEn;

  // Day of Birth & Leap Year
  const birthDayOfWeek = t.daysOfWeek[birthDate.getDay()];
  birthDayName.textContent = birthDayOfWeek;
  birthLeapDesc.textContent = isLeapYear(birthYear) ? t.leapYearText : t.normalYearText;

  // Estimated stats
  const heartbeats = Math.round(res.totalMinutes * 80);
  const breaths = Math.round(res.totalMinutes * 16);
  const sleepHours = Math.round(res.totalDays * 8);

  estHeartbeats.textContent = formatNumber(heartbeats);
  estBreaths.textContent = formatNumber(breaths);
  estSleep.textContent = `${formatNumber(sleepHours)} ${t.hours}`;

  // 5. Start / Update Live Ticker
  startLiveTicker(birthDate);
}

// Live Ticker for Real-time Seconds
function startLiveTicker(birthDate) {
  if (liveTickerInterval) clearInterval(liveTickerInterval);

  function update() {
    const now = new Date();
    const diffMs = now.getTime() - birthDate.getTime();
    if (diffMs < 0) return;

    const totalSeconds = Math.floor(diffMs / 1000);
    const secs = totalSeconds % 60;
    const mins = Math.floor((totalSeconds / 60) % 60);
    const hrs = Math.floor((totalSeconds / 3600) % 24);

    liveHours.textContent = formatNumber(String(hrs).padStart(2, "0"));
    liveMinutes.textContent = formatNumber(String(mins).padStart(2, "0"));
    liveSeconds.textContent = formatNumber(String(secs).padStart(2, "0"));
  }

  update();
  liveTickerInterval = setInterval(update, 1000);
}

// --- Milestones System ---
function renderMilestones(birthDate) {
  const container = document.getElementById("milestones-container");
  container.innerHTML = "";

  const t = translations[currentLang];
  const now = new Date();

  // Milestone list definitions
  const milestones = [
    { titleBn: "১ম জন্মদিন (১ বছর)", titleEn: "1st Birthday (1 Year)", emoji: "🍼", date: new Date(birthDate.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate()) },
    { titleBn: "১,০০০ দিন অতিবাহিত", titleEn: "1,000 Days on Earth", emoji: "🌱", date: new Date(birthDate.getTime() + 1000 * 86400000) },
    { titleBn: "১০ম জন্মদিন (এক দশক)", titleEn: "10th Birthday (1 Decade)", emoji: "🎈", date: new Date(birthDate.getFullYear() + 10, birthDate.getMonth(), birthDate.getDate()) },
    { titleBn: "১৮ বছর (প্রাপ্তবয়স্ক)", titleEn: "18th Birthday (Adulthood)", emoji: "🎓", date: new Date(birthDate.getFullYear() + 18, birthDate.getMonth(), birthDate.getDate()) },
    { titleBn: "৭,০০০ দিন অতিবাহিত", titleEn: "7,000 Days Alive", emoji: "✨", date: new Date(birthDate.getTime() + 7000 * 86400000) },
    { titleBn: "২৫ বছর (সিলভার জুবিলি)", titleEn: "25 Years (Silver Jubilee)", emoji: "🥈", date: new Date(birthDate.getFullYear() + 25, birthDate.getMonth(), birthDate.getDate()) },
    { titleBn: "১০,০০০ দিন অতিবাহিত", titleEn: "10,000 Days Alive", emoji: "🚀", date: new Date(birthDate.getTime() + 10000 * 86400000) },
    { titleBn: "৩০ বছর", titleEn: "30th Birthday", emoji: "🌟", date: new Date(birthDate.getFullYear() + 30, birthDate.getMonth(), birthDate.getDate()) },
    { titleBn: "১৫,০০০ দিন অতিবাহিত", titleEn: "15,000 Days Alive", emoji: "💎", date: new Date(birthDate.getTime() + 15000 * 86400000) },
    { titleBn: "৫০ বছর (গোল্ডেন জুবিলি)", titleEn: "50 Years (Golden Jubilee)", emoji: "👑", date: new Date(birthDate.getFullYear() + 50, birthDate.getMonth(), birthDate.getDate()) },
    { titleBn: "২০,০০০ দিন অতিবাহিত", titleEn: "20,000 Days Alive", emoji: "🪐", date: new Date(birthDate.getTime() + 20000 * 86400000) },
    { titleBn: "১০০ বছর (শতবর্ষী)", titleEn: "100th Birthday (Centenarian)", emoji: "🏆", date: new Date(birthDate.getFullYear() + 100, birthDate.getMonth(), birthDate.getDate()) }
  ];

  milestones.forEach(m => {
    const isPast = m.date <= now;
    const diffDays = Math.abs(Math.ceil((m.date.getTime() - now.getTime()) / 86400000));
    const dateFormatted = `${t.monthsOfYear[m.date.getMonth()]} ${formatNumber(m.date.getDate())}, ${formatNumber(m.date.getFullYear())}`;

    const item = document.createElement("div");
    item.className = `milestone-item ${isPast ? 'reached' : 'upcoming'}`;
    item.innerHTML = `
      <div class="milestone-left">
        <span class="milestone-emoji">${m.emoji}</span>
        <div>
          <h4 class="milestone-title">${currentLang === "bn" ? m.titleBn : m.titleEn}</h4>
          <span class="milestone-sub">${dateFormatted}</span>
        </div>
      </div>
      <div class="milestone-status ${isPast ? 'done' : 'pending'}">
        ${isPast 
          ? (currentLang === "bn" ? `অতিক্রান্ত (${formatNumber(diffDays)} দিন পূর্বে)` : `Reached (${formatNumber(diffDays)} days ago)`)
          : (currentLang === "bn" ? `বাকি ${formatNumber(diffDays)} দিন` : `${formatNumber(diffDays)} days to go`)
        }
      </div>
    `;
    container.appendChild(item);
  });
}

// --- Compare Two Ages ---
const person1Dob = document.getElementById("person1-dob");
const person2Dob = document.getElementById("person2-dob");
const compareCalcBtn = document.getElementById("compare-calc-btn");
const compareResults = document.getElementById("compare-results");
const compareVerdict = document.getElementById("compare-verdict");
const cmpYears = document.getElementById("cmp-years");
const cmpMonths = document.getElementById("cmp-months");
const cmpDays = document.getElementById("cmp-days");
const cmpTotalDays = document.getElementById("cmp-total-days");

function processCompare() {
  playSound("click");
  const p1Val = person1Dob.value;
  const p2Val = person2Dob.value;

  if (!p1Val || !p2Val) {
    showToast(translations[currentLang].invalidDateToast);
    return;
  }

  const [y1, m1, d1] = p1Val.split("-").map(Number);
  const [y2, m2, d2] = p2Val.split("-").map(Number);

  const date1 = new Date(y1, m1 - 1, d1);
  const date2 = new Date(y2, m2 - 1, d2);

  const t = translations[currentLang];

  if (date1.getTime() === date2.getTime()) {
    showToast(t.sameAgeToast);
    compareResults.classList.remove("hidden");
    compareVerdict.textContent = t.sameAgeToast;
    cmpYears.textContent = formatNumber(0);
    cmpMonths.textContent = formatNumber(0);
    cmpDays.textContent = formatNumber(0);
    cmpTotalDays.textContent = currentLang === "bn" ? "মোট ব্যবধান: ০ দিন" : "Total gap: 0 days";
    return;
  }

  let olderDate, youngerDate, verdictText;
  if (date1 < date2) {
    olderDate = date1;
    youngerDate = date2;
    verdictText = t.person1Older;
  } else {
    olderDate = date2;
    youngerDate = date1;
    verdictText = t.person2Older;
  }

  const diff = calculateAgeExact(olderDate, youngerDate);

  compareResults.classList.remove("hidden");
  compareVerdict.textContent = verdictText;
  cmpYears.textContent = formatNumber(diff.years);
  cmpMonths.textContent = formatNumber(diff.months);
  cmpDays.textContent = formatNumber(diff.days);
  cmpTotalDays.textContent = currentLang === "bn" 
    ? `মোট ব্যবধান: ${formatNumber(diff.totalDays)} দিন` 
    : `Total difference: ${formatNumber(diff.totalDays)} days`;
}

// --- Copy Summary to Clipboard ---
function copySummary() {
  playSound("click");
  if (!lastCalculatedData) return;

  const { results, birthDate, targetDate } = lastCalculatedData;
  const t = translations[currentLang];

  const summary = `
🎂 ${t.appTitle}
---------------------------
📅 ${t.birthDateLabel} ${birthDate.toDateString()}
🎯 ${t.targetDateLabel} ${targetDate.toDateString()}
✨ ${t.tabAge}: ${results.years} ${t.years}, ${results.months} ${t.months}, ${results.days} ${t.days}
🎁 ${t.nextBdayTitle}: ${results.daysToNextBday} ${t.daysLeft}
☀️ ${t.statTotalDays}: ${results.totalDays}
❤️ ${t.heartbeatsLabel}: ~${Math.round(results.totalMinutes * 80).toLocaleString()}
---------------------------
Calculated with Age Calculator Pro
  `.trim();

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(summary).then(() => {
      showToast(t.copiedToast);
    });
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = summary;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showToast(t.copiedToast);
  }
}

// --- Confetti Animation System ---
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let confettiParticles = [];
let confettiAnimationId = null;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function triggerConfetti() {
  const colors = ["#6366f1", "#ec4899", "#8b5cf6", "#10b981", "#f59e0b", "#06b6d4"];
  confettiParticles = [];

  for (let i = 0; i < 120; i++) {
    confettiParticles.push({
      x: canvas.width * 0.5 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.4,
      w: Math.random() * 9 + 4,
      h: Math.random() * 7 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 16,
      vy: Math.random() * -14 - 4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      gravity: 0.38,
      opacity: 1
    });
  }

  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let alive = 0;

  confettiParticles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += p.gravity;
    p.rotation += p.rotSpeed;
    p.opacity -= 0.008;

    if (p.opacity > 0 && p.y < canvas.height + 50) {
      alive++;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
  });

  if (alive > 0) {
    confettiAnimationId = requestAnimationFrame(animateConfetti);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// --- Theme Management ---
function initTheme() {
  const savedTheme = localStorage.getItem("app_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcons(savedTheme);
}

function toggleTheme() {
  playSound("click");
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("app_theme", newTheme);
  updateThemeIcons(newTheme);
}

function updateThemeIcons(theme) {
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");
  if (theme === "dark") {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
}

// --- Sound Toggle ---
function toggleSound() {
  isSoundEnabled = !isSoundEnabled;
  localStorage.setItem("sound_enabled", isSoundEnabled);
  updateSoundIcons();
  if (isSoundEnabled) playSound("click");
}

function updateSoundIcons() {
  const onIcon = document.querySelector(".sound-on-icon");
  const offIcon = document.querySelector(".sound-off-icon");
  if (isSoundEnabled) {
    onIcon.classList.remove("hidden");
    offIcon.classList.add("hidden");
  } else {
    onIcon.classList.add("hidden");
    offIcon.classList.remove("hidden");
  }
}

// --- Language Switching ---
function toggleLanguage() {
  playSound("click");
  currentLang = currentLang === "bn" ? "en" : "bn";
  localStorage.setItem("preferred_lang", currentLang);
  applyLanguage();
  if (lastCalculatedData) {
    renderResults(lastCalculatedData.results, lastCalculatedData.birthDate, lastCalculatedData.targetDate);
    renderMilestones(lastCalculatedData.birthDate);
  }
}

function applyLanguage() {
  const langIndicator = document.getElementById("lang-indicator-text");
  langIndicator.textContent = currentLang === "bn" ? "EN" : "বাংলা";
  document.documentElement.setAttribute("lang", currentLang);

  const t = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });
}

// --- Tab Switching ---
function setupTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const viewPanels = document.querySelectorAll(".view-panel");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      playSound("click");
      const targetId = btn.getAttribute("data-target");

      tabBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      viewPanels.forEach(p => {
        if (p.id === targetId) {
          p.style.display = "block";
          p.classList.add("active");
          if (targetId === "compare-mode" && person1Dob.value && person2Dob.value) {
            processCompare();
          }
        } else {
          p.style.display = "none";
          p.classList.remove("active");
        }
      });
    });
  });
}

// --- Quick Chips (e.g. 18, 20, 25, 30 years ago) ---
function setupQuickChips() {
  document.querySelectorAll(".chip[data-years-ago]").forEach(chip => {
    chip.addEventListener("click", () => {
      playSound("click");
      const yearsAgo = parseInt(chip.getAttribute("data-years-ago"), 10);
      const targetVal = targetDateInput.value || getTodayIsoString();
      const [ty, tm, td] = targetVal.split("-").map(Number);

      const d = new Date(ty - yearsAgo, tm - 1, td);
      const yStr = d.getFullYear();
      const mStr = String(d.getMonth() + 1).padStart(2, "0");
      const dStr = String(d.getDate()).padStart(2, "0");

      birthDateInput.value = `${yStr}-${mStr}-${dStr}`;
      processCalculation();
    });
  });
}

// --- Event Listeners Initialization ---
function initEvents() {
  calculateBtn.addEventListener("click", processCalculation);
  resetBtn.addEventListener("click", () => {
    playSound("click");
    initDates();
    processCalculation();
  });

  setTodayBtn.addEventListener("click", () => {
    playSound("click");
    targetDateInput.value = getTodayIsoString();
    processCalculation();
  });

  setNextYearBtn.addEventListener("click", () => {
    playSound("click");
    const currentTarget = targetDateInput.value ? new Date(targetDateInput.value) : new Date();
    currentTarget.setFullYear(currentTarget.getFullYear() + 1);
    const yStr = currentTarget.getFullYear();
    const mStr = String(currentTarget.getMonth() + 1).padStart(2, "0");
    const dStr = String(currentTarget.getDate()).padStart(2, "0");
    targetDateInput.value = `${yStr}-${mStr}-${dStr}`;
    processCalculation();
  });

  birthDateInput.addEventListener("change", processCalculation);
  targetDateInput.addEventListener("change", processCalculation);

  themeToggleBtn.addEventListener("click", toggleTheme);
  langToggleBtn.addEventListener("click", toggleLanguage);
  soundToggleBtn.addEventListener("click", toggleSound);

  copySummaryBtn.addEventListener("click", copySummary);
  celebrateBtn.addEventListener("click", () => {
    playSound("celebrate");
    triggerConfetti();
  });

  compareCalcBtn.addEventListener("click", processCompare);
}

// --- Bootstrap App ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  updateSoundIcons();
  applyLanguage();
  initDates();
  setupTabs();
  setupQuickChips();
  initEvents();
  // Auto-calculate on load
  processCalculation();
});
