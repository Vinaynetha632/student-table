<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<h1 align="center">📚 Student Table App</h1>

<p align="center">
  A modern, beautiful student management application built with <strong>Next.js 16</strong>, <strong>React 19</strong>, and <strong>TypeScript</strong>. Manage student records with a sleek glassmorphism UI, smooth animations, and full CRUD operations.
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-screenshots">Screenshots</a>
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📋 **Student List** | View all students in a beautifully styled table with name, email, and age |
| ➕ **Add Student** | Add new students through a validated modal form |
| ✏️ **Edit Student** | Update existing student details with pre-filled form data |
| 🗑️ **Delete Student** | Remove students with a confirmation dialog to prevent accidental deletion |
| 📥 **Export to Excel** | Download the entire student list as an `.xlsx` Excel file with one click |
| ⏳ **Loading States** | Simulated loading spinners for a realistic async experience |
| 🔔 **Toast Notifications** | Real-time success/error notifications for every action |
| 💾 **Persistent Storage** | Data is saved in `localStorage` — your records survive page refreshes |
| ✅ **Form Validation** | Client-side validation for name, email format, and age |
| 🎨 **Glassmorphism UI** | Modern dark theme with glass effects, gradients, and smooth animations |
| 📱 **Responsive Design** | Works beautifully on desktop, tablet, and mobile screens |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Lucide React](https://lucide.dev/) | Beautiful, consistent icons |
| [react-hot-toast](https://react-hot-toast.com/) | Elegant toast notifications |
| [SheetJS (xlsx)](https://sheetjs.com/) | Excel file export |
| Vanilla CSS | Custom styling with CSS variables & glassmorphism |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher) — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Vinaynetha632/student-table.git
   cd student-table
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000) and you're good to go! 🎉

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
student-table/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata & toast provider
│   │   ├── page.tsx            # Main page — student list, modals & export
│   │   ├── globals.css         # Global styles, theme variables & animations
│   │   └── components.css      # Component-specific styles (table, modal, buttons)
│   │
│   ├── components/
│   │   ├── StudentTable.tsx    # Student data table with edit/delete actions
│   │   ├── StudentModal.tsx    # Add/Edit student form modal with validation
│   │   └── StudentDeleteModal.tsx  # Delete confirmation modal
│   │
│   ├── hooks/
│   │   └── useStudents.ts      # Custom hook for CRUD operations & localStorage
│   │
│   └── types/
│       └── student.ts          # TypeScript interface for Student
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📖 Usage

### ➕ Adding a Student

1. Click the **"Add Student"** button (top-right)
2. Fill in the **Name**, **Email**, and **Age** fields
3. Click **"Create Student"**
4. A success toast will confirm the action ✅

### ✏️ Editing a Student

1. Click the **pencil icon** (✏️) on any student row
2. Modify the pre-filled details
3. Click **"Save Changes"**

### 🗑️ Deleting a Student

1. Click the **trash icon** (🗑️) on any student row
2. Confirm the deletion in the popup dialog
3. The student is permanently removed

### 📥 Exporting to Excel

1. Click the **"Export"** button (top-right)
2. An Excel file named `StudentsList.xlsx` will be downloaded
3. The file contains columns: **Name**, **Email**, **Age**

---

## 🎨 Design Highlights

- **Dark Theme** — Easy on the eyes with a carefully chosen color palette
- **Glassmorphism** — Frosted glass effect on panels using `backdrop-filter`
- **Gradient Title** — The heading uses a `linear-gradient` text effect
- **Smooth Animations** — Fade-in effects on page load and modal transitions
- **Hover Effects** — Interactive table rows and icon buttons
- **Custom Scrollbar** — Styled scrollbar matching the dark theme
- **Inter Font** — Clean, modern typography from Google Fonts

---

## 🧪 Form Validation Rules

| Field | Validation |
|-------|-----------|
| **Name** | Required — cannot be empty |
| **Email** | Required — must be a valid email format |
| **Age** | Required — must be a positive number |

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server on `localhost:3000` |
| `npm run build` | Create an optimized production build |
| `npm start` | Run the production build |
| `npm run lint` | Run ESLint to check for code issues |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. **Fork** this repository
2. Create a **feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. Open a **Pull Request**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/dhanadevunoori">dhanadevunoori</a>
</p>
