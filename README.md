<div align="center">
# 🚀 Character Word And Line Counter
### *Modern, High-Performance JavaScript Solution & Developer Suite*

<p align="center">
  [![Architect](https://img.shields.io/badge/Architect-Hsini%20Mohamed-0055ff?style=for-the-badge&logo=github&logoColor=white)](https://hsini.dev)
  [![Portfolio](https://img.shields.io/badge/Portfolio-hsini.dev-00c853?style=for-the-badge&logo=google-chrome&logoColor=white)](https://hsini.dev)
  [![Language](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge)](https://github.com/hsinidev)
  [![Framework](https://img.shields.io/badge/Framework-JavaScript-6366f1?style=for-the-badge)](https://github.com/hsinidev)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</p>

![Cosmic Counter Screenshot](https://raw.githubusercontent.com/hsinidev/word-counter/main/public/word-counter.webp)

</div>

---
## 🌟 Executive Overview

**Character Word And Line Counter** is a production-grade **TypeScript** platform engineered for high reliability, clean architectural separation, and frictionless developer workflow.

## ⚡ Key Highlights & Capabilities

- **Scalable Architecture**: Modular, decoupled components adhering to clean code principles.
- **Optimized Runtime**: Ultra-fast execution with minimal memory and CPU overhead.
- **Developer Tooling**: Standardized linting, formatting, and rapid local iteration setup.
- **Production Ready**: Built-in error resilience, validation, and structured logging.

---
## 🏗️ Architecture & Technology Stack

- **Primary Language**: `TypeScript`
- **Framework / Runtime**: `JavaScript`
- **Design Pattern**: Modular Clean Architecture / Domain-Driven Design
- **License**: MIT Open Source Attribution

## 📖 Deep-Dive Technical Documentation

# ✨ Cosmic Counter - Real-Time Text Analysis Tool

**A modern, single-page React application that provides instantaneous analysis of user-input text, featuring a stunning animated cosmic theme.**


![Cosmic Counter Screenshot](https://raw.githubusercontent.com/hsinidev/word-counter/main/public/word-counter.webp)

## 🚀 Introduction


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




This project is powered by **HSINI MOHAMED**.

-   **GitHub**: [hsinidev](https://github.com/hsinidev)
-   **Website**: [doodax.com](https://doodax.com)
-   **Email**: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

---
## 🚀 Quick Start & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/hsinidev/Character-Word-and-Line-Counter.git
cd Character-Word-and-Line-Counter
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch the Application
```bash
npm run dev
```


---

## 👨‍💻 System Architect & Author

<table align="center" style="border: none; background: transparent; width: 100%;">
  <tr>
    <td align="center" width="160" style="border: none; padding: 12px;">
      <img src="https://avatars.githubusercontent.com/u/232697467?v=4" width="120" height="120" style="border-radius: 50%; box-shadow: 0 8px 24px rgba(99,102,241,0.3); border: 2.5px solid #6366f1;" alt="Hsini Mohamed" />
      <br /><br />
      <b>Hsini Mohamed</b><br />
      <sub>Morocco 🇲🇦</sub>
    </td>
    <td style="border: none; padding: 12px; vertical-align: middle;">
      <h3 style="margin-top: 0;">🚀 System Architect & Full-Stack Engineer</h3>
      <p style="font-size: 0.95rem; line-height: 1.6; color: #475569;">
        Specializing in high-performance autonomous AI systems, deterministic multi-agent swarms, enterprise cloud architecture, and modern full-stack engineering.
      </p>
      <p>
        <a href="https://hsini.dev"><img src="https://img.shields.io/badge/Portfolio-hsini.dev-2563eb?style=flat-square&logo=google-chrome&logoColor=white" alt="Portfolio" /></a>
        <a href="mailto:contact@hsini.dev"><img src="https://img.shields.io/badge/Email-contact@hsini.dev-ea4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
        <a href="https://github.com/hsinidev"><img src="https://img.shields.io/badge/GitHub-@hsinidev-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
        <a href="https://linkedin.com/in/hsinidev/"><img src="https://img.shields.io/badge/LinkedIn-hsinidev-0077b5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
      </p>
    </td>
  </tr>
</table>

---

## 📄 License & Attribution

This project is distributed under the **MIT License**. See [`LICENSE`](LICENSE) for complete terms.

<div align="center">
  <sub>⚡ Designed, architected, and maintained with engineering precision by <b><a href="https://hsini.dev">Hsini Mohamed</a></b>.</sub>
</div>
