# Donald's Developer Portfolio 🚀

Welcome to the source code of my personal portfolio! This repository showcases my journey, skills, and projects as a software engineer.

**🌐 Live Demo:** [donaldmwangamakori.netlify.app](https://donaldmwangamakori.netlify.app)

## 👨‍💻 About Me

I am a dedicated Software Developer with a passion for building interactive, user-friendly applications. My strategic framework is built on innovation, collaboration, and continuous improvement. I strive to leverage technology to create solutions that not only meet today's needs but also anticipate tomorrow's challenges.

I have experience working in cross-functional teams, designing smart city solutions, and leading social entrepreneurship initiatives.

## 🛠️ Technologies & Tools

I possess a diverse skillset across the full software development lifecycle:

*   **Languages:** JavaScript, Python, PHP, C, C++, Dart
*   **Frontend:** React.js, Vue.js, HTML5, CSS3, Flutter (Mobile)
*   **Backend:** Node.js (Express.js), Django, Flask, Laravel
*   **Databases:** MySQL, Microsoft SQL Server
*   **Tools & DevOps:** Git, GitHub, Docker, Figma, ERPNext

## 🌟 Featured Projects

### VisiTrack
*Desktop Application*
A standalone desktop application using Electron and React to replace manual, paper-based systems in high school libraries. Features include secure librarian authentication, book inventory management, and automated due date tracking.

### CheckMate
*Mobile Application*
A dynamic solution designed to streamline student class attendance management in universities. Built with **Flutter (Dart)** for a responsive cross-platform frontend and **Node.js** for a reliable backend, it replaces traditional paper methods with real-time tracking.

## 💼 Experience

**Software Developer - Attache**
*Konza Technopolis Development Authority (May 2024 - August 2024)*
*   Designed, developed, and implemented smart city solutions.
*   Utilized Python (Django, Flask), PHP (Laravel), and Node.js.
*   Collaborated in cross-functional teams to write clean, maintainable code with unit and integration testing.

**Idea Competition Winner & Team Lead**
*Venture For Change Kenya (2022)*
*   Led 'Team Spork' to win first place in a social entrepreneurship competition sponsored by Boehringer Ingelheim International.
*   Focused on innovating solutions to alleviate waste in rapidly growing urban centers.

## 📫 Contact Me

I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.

*   **Email:** [donaldmwanga33@gmail.com](mailto:donaldmwanga33@gmail.com)
*   **LinkedIn:** [Donald Mwanga](https://www.linkedin.com/in/donald-mwanga-4bb5abba)
*   **GitHub:** [TheDonDev](https://github.com/TheDonDev)

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run Locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Contact Form EmailJS Setup

The contact form sends through EmailJS. Configure these values in the local `.env` file and in the hosting provider's build environment:

```text
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

`REACT_APP_EMAILJS_USER_ID` is also supported as a legacy alias for the public key. These are browser-visible EmailJS identifiers and a public key; never put an EmailJS private key in a `REACT_APP_*` variable.

In the EmailJS dashboard:

1. Create or reconnect an Email Service and copy its current Service ID exactly into `REACT_APP_EMAILJS_SERVICE_ID`.
2. Create an email template whose **To Email** is `donaldmwanga33@gmail.com`. Keep the recipient fixed in the template so visitors cannot change where submissions are sent.
3. Use `{{name}}`, `{{email}}`, and `{{message}}` for the contact form fields. Set **Reply To** to `{{email}}` so you can reply directly to the sender.
4. Copy the template ID and account public key into the matching environment variables.
5. Add the production site origin to EmailJS's allowed origins, then rebuild and redeploy the site after changing hosting environment variables.

The current `Service ID not found` response means the Service ID reaching EmailJS does not match an active service in the EmailJS account. Confirm the ID in the dashboard and update both local and hosting build settings if they differ.
