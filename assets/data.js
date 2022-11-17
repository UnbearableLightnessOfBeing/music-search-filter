// Опции для комбо-бокса города
var cityOptions = [
  {
    name: "Краснодар",
    value: "Краснодар",
  },
  {
    name: "Анапа",
    value: "Анапа",
  },
  {
    name: "Севастополь",
    value: "Севастополь",
  },
  {
    name: "Сочи",
    value: "Сочи",
  },
  {
    name: "Анталья",
    value: "Анталья",
  },
  {
    name: "Хургада",
    value: "Хургада",
  },
];

// Отели - классы из hotel.js. Сигнатура ниже
// Hotel(title, rating, location, room, price)
var hotels = [
  // Комнаты отеля Hilton Plaza в Хургаде
  new Hotel("Hilton Plaza", 5, "Хургада", "Стандарт", 4200),
  new Hotel("Hilton Plaza", 5, "Хургада", "Комфорт", 6100),
  new Hotel("Hilton Plaza", 5, "Хургада", "Люкс", 11500),
  new Hotel("Hilton Plaza", 5, "Хургада", "Семейный", 14500),

  // Комнаты отеля Palm Beach Resort в Хургаде
  new Hotel("Palm Beach Resort", 5, "Хургада", "Стандарт", 3500),
  new Hotel("Palm Beach Resort", 5, "Хургада", "Комфорт", 4100),
  new Hotel("Palm Beach Resort", 5, "Хургада", "Семейный", 7200),

  // Комнаты отеля Sphinx Aqua Park Beach Resort
  new Hotel("Sphinx Aqua Park Beach Resort", 3, "Хургада", "Стандарт", 2100),
  new Hotel("Sphinx Aqua Park Beach Resort", 3, "Хургада", "Комфорт", 2600),
  new Hotel("Sphinx Aqua Park Beach Resort", 3, "Хургада", "Семейный", 5400),

  // Комнаты отеля Antalya Pearl в Анталье
  new Hotel("Antalya Pearl", 4, "Анталья", "Стандарт", 3300),
  new Hotel("Antalya Pearl", 4, "Анталья", "Комфорт", 4000),
  new Hotel("Antalya Pearl", 4, "Анталья", "Люкс", 5800),
  new Hotel("Antalya Pearl", 4, "Анталья", "Семейный", 6300),

  new Hotel("Four Seasons", 5, "Анапа", "Люкс", 17350),

  new Hotel("Мотель Автосон", 3, "Симферополь", "Стандарт", 950),
  new Hotel("Мотель Автосон", 3, "Симферополь", "Комфорт", 1400),
];

// Опции для комбо-бокса отеля
// var hotelOptions = [];
