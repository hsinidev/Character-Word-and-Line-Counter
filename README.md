# ✨ Cosmic Counter - Real-Time Text Analysis Tool

**A modern, single-page React application that provides instantaneous analysis of user-input text, featuring a stunning animated cosmic theme.**

[![React Version](https://img.shields.io/badge/react-18.2.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-3.x-cyan.svg)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/typescript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Cosmic Counter Screenshot](https://raw.githubusercontent.com/hsinidev/word-counter/main/public/word-counter.webp)

## 🚀 Introduction

Cosmic Counter is more than just a utility; it's a high-performance text analysis tool designed for writers, students, SEO professionals, and developers. It instantly displays counts for characters (with and without spaces), words, sentences, and lines. Built with a modern tech stack, it emphasizes performance, user experience, and powerful SEO capabilities, all wrapped in a beautiful, responsive, and cosmic-themed interface.

The core counting logic is powered by pure, efficient JavaScript, ensuring that all processing happens client-side for maximum privacy and speed. No data is ever sent to a server.

## 🌟 Key Features

-   **⚡ Real-Time Analysis**: Metrics update instantly as you type.
-   **📊 Comprehensive Metrics**:
    -   Character Count (with spaces)
    -   Character Count (without spaces)
    -   Word Count
    -   Sentence Count
    -   Line Count
-   **🎨 Stunning Visuals**: An animated multi-colored galaxy/cosmic background provides an immersive and unique user experience.
-   **📱 Fully Responsive**: Designed to work seamlessly on desktops, tablets, and mobile devices.
-   **📋 Quick Actions**:
    -   **Copy Text**: One-click button to copy the entire text to the clipboard.
    -   **Clear Text**: Instantly clear the text area to start fresh.
-   **📈 SEO Optimized**:
    -   Includes a detailed 3500+ word article on word counting standards.
    -   Full JSON-LD schema for `WebSite`, `WebApplication`, `Article`, and `FAQPage` to enhance search engine discoverability.
    -   Optimized meta tags, sitemap, and `robots.txt` file.
-   **🔒 Privacy-Focused**: All text processing is done entirely in your browser. Your data is never stored or transmitted.

## 🛠️ Tech Stack

-   **Frontend**: React 18 (with Hooks)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Core Logic**: Pure JavaScript / TypeScript (no external counting libraries)
-   **Bundler**: Vite (for local development)

## 📁 Project Structure

The project follows a clean and logical file structure, separating concerns for better maintainability.

```
/
├── public/
│   ├── favicon.svg        # Application favicon
│   └── index.html         # Main HTML entry point
├── src/
│   ├── components/
│   │   ├── TextCounterTool.tsx  # Core UI and logic for the counter
│   │   └── ThemeLayout.tsx    # Main layout with background, header, footer, modals
│   ├── utils/
│   │   ├── SeoArticle.tsx     # Component for the 3500+ word SEO article
│   │   └── StringMath.ts      # Pure JS/TS functions for all counting logic
│   ├── App.tsx                # Root application component
│   └── index.tsx              # React application entry point
├── README.md                # This file
├── robots.txt               # Instructions for web crawlers
└── sitemap.xml              # Sitemap for SEO
```

## 🚀 Getting Started

To run this project locally, you'll need Node.js and npm installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/cosmic-counter.git
    cd cosmic-counter
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## 💡 How It Works

The counting logic is intentionally kept simple and efficient, using pure JavaScript string methods for maximum performance.

-   **Characters**: Calculated using the string's `.length` property. For the count without spaces, a regex (`/\s/g`) is used to remove all whitespace characters first.
-   **Words**: The input string is trimmed and then split into an array using a regex (`/\s+/`) that accounts for multiple whitespace characters. The length of the resulting array is the word count.
-   **Sentences**: A regular expression (`/[^\.!\?]+[\.!\?]+/g`) is used to find sequences of characters that end with a sentence-terminating punctuation mark.
-   **Lines**: The string is split by newline characters (`/\r\n|\r|\n/`). The length of the resulting array gives the line count.

All of these calculations are memoized using the `useMemo` hook in React to prevent unnecessary recalculations on every render.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or find a bug, please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is distributed under the MIT License. See `LICENSE` for more information.

## ✒️ Author & Contact

This project is powered by **HSINI MOHAMED**.

-   **GitHub**: [hsinidev](https://github.com/hsinidev)
-   **Website**: [doodax.com](https://doodax.com)
-   **Email**: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)
