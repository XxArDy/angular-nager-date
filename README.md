# Angular Nager.Date Holidays App

This application is built with **Angular 20** using **Angular Material** and integrates with the [Nager.Date API](https://date.nager.at/).  
It allows users to search for countries, view their public holidays, and quickly switch between years.

## 🚀 Features

### Home Page

- **Country Search** — search for countries by name with live data from the API.
- **Country List** — clickable country names that navigate to the Country Page.
- **Random Countries Widget** — displays 3 random countries and their next upcoming holiday (name and date).
- **Navigation** — seamless routing between the Home Page and Country Page.

### Country Page

- **Holiday List** — shows all holidays for the selected country and the current year.
- **Year Switching** — buttons for years 2020–2030 to view holidays for different years.
- **Holiday Details** — includes holiday name, date, and type.

## 🛠️ Tech Stack

- **Angular 20**
- **Angular Material**
- **TypeScript**
- **ESLint + Prettier** (configured for consistent code style)
- **Nager.Date API**

## 📦 Installation & Running

### 1. Clone the repository

```bash
git clone https://github.com/XxArDy/angular-nager-date.git
cd angular-nager-date
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

or

```bash
ng serve
```

The app will be available at:  
[http://localhost:4200](http://localhost:4200)

### 4. Build for production

```bash
npm run build
```

The compiled files will be located in the `dist/` folder.

## 🔍 Linting & Formatting

- Lint the code:

```bash
npm run lint
```

- Format code:

```bash
npm run format
```

## 🌐 API

This project uses the [Nager.Date API](https://date.nager.at/Api) to fetch country and holiday data.
