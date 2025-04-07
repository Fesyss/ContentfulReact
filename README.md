# 🌱 My First Contentful + React Project

This is my very first attempt at building a project using **Contentful** as a headless CMS, combined with **React Router DOM** for navigation, and an initial integration of **Algolia Search API**.

While Algolia is technically set up on the page, it's not fully functional yet — I still have more to learn before it’s fully working. But it's a great start and I’m proud of the progress!

---

## 🚀 Features

- 🧠 Fetches quiz data from **Contentful**
- ⚛️ Built with **React**
- 🌐 Uses **React Router DOM** for client-side routing
- 🔍 Algolia Search UI element is included (but not fully working yet)
- 🎨 Dark mode toggle
- 📱 Mobile responsive design

---

## 🛠️ Technologies Used

- **React**
- **React Router DOM**
- **Contentful (Content Delivery API)**
- **Algolia Search API**
- **CSS (custom variables and responsive layout)**

---

## 📦 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Fesyss/ContentfulReact.git
cd ContentfulReact
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Add Environment Variables
Create a `.env` file in the root of the project and add your Contentful and Algolia keys like this:
```bash
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_delivery_access_token
VITE_ALGOLIA_APP_ID=your_algolia_app_id
VITE_ALGOLIA_SEARCH_API_KEY=your_algolia_search_key
VITE_ALGOLIA_INDEX_NAME=data
```
### 4. Start the App
```bash
npm run dev
```
---
#### 📚 Notes
* This is a **_learning project_** – feel free to explore and improve upon it!

* Algolia is **partially** integrated but **_not yet searchable_**. 

* All quiz data is fetched from **Contentful**, so be sure to add some questions/. **_steps in your Contentful space!_**
