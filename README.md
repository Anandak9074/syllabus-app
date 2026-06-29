# 📚 B.Pharm Syllabus App

A modern mobile application built using **React Native**, **Expo**, and **Expo Router** to provide easy access to the **B.Pharm syllabus**. The app allows students to browse semester-wise syllabi, view PDF documents directly inside the application, and download them for offline access.

---

# ✨ Features

* 📖 Semester-wise B.Pharm syllabus
* 📄 Built-in PDF viewer
* ⬇ Download syllabus PDFs
* 🎨 Clean and modern UI
* 🚀 Fast navigation using Expo Router
* 📱 Android application support
* 🌐 PDF hosting through GitHub
* 📚 GPAT section
* 🏥 NIPER section
* 🔄 Easy to update syllabus PDFs

---

# 📱 Screens

* Splash Screen
* Home Screen
* Semester Selection
* PDF Viewer
* GPAT Section
* NIPER Section

---

# 🛠 Tech Stack

* React Native
* Expo SDK 56
* Expo Router
* TypeScript
* React Native WebView
* Expo File System
* Expo Sharing
* GitHub (PDF Hosting)

---

# 📂 Project Structure

```
src/
│
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── home.tsx
│   ├── semester/
│   │     └── [id].tsx
│   └── pdf/
│         └── [id].tsx
│
├── components/
│
├── assets/
│   ├── images/
│   └── pdf/
│
└── App.js
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/Anandak9074/syllabus-app.git
```

Move into the project directory

```bash
cd syllabus-app
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npx expo start
```

Run on Android

```bash
npx expo run:android
```

---

# 📦 Build APK

Configure EAS (only once)

```bash
eas build:configure
```

Generate an Android APK

```bash
eas build -p android --profile preview
```

Generate an Android App Bundle (Play Store)

```bash
eas build -p android --profile production
```

---

# 📥 PDF Support

The application supports:

* Semester-wise syllabus PDFs
* In-app PDF viewing
* PDF download
* Online PDF hosting

---

# 🎯 Future Enhancements

* Offline PDF storage
* Search syllabus
* Notifications
* Previous year question papers
* Notes for each subject
* GPAT study materials
* NIPER preparation materials
* Dark mode
* Bookmark favourite semesters
* User authentication
* Admin panel for syllabus updates

---

# 📷 Screenshots

Add screenshots of the following screens:

* Splash Screen
* Home Screen
* Semester Screen
* PDF Viewer
* GPAT Screen
* NIPER Screen

---

# 👨‍💻 Developer

**Ananda Krishna S**

B.Tech Information Technology

Government Engineering College Idukki

GitHub: https://github.com/Anandak9074

---

# 📄 License

This project is intended for educational purposes. The syllabus documents belong to their respective universities and regulatory authorities.
