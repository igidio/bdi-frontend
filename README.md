# bdi-frontend

A modern web interface for the BDI Cemetery Management System. Built with Nuxt 3, this application provides a responsive and intuitive user experience for managing cemetery spaces, reservations, and user profiles.

<p align="center">
  <img src="https://i.imgur.com/8XUSKqV.jpeg" width="49%" />
  <img src="https://i.imgur.com/DOCqtpi.jpeg" width="49%" />
  <img src="https://i.imgur.com/h1eqNa2.jpeg" width="49%" />
  <img src="https://i.imgur.com/WNnniEn.jpeg" width="49%" />
</p>

## Features

- **User Authentication**: Secure login, registration, and password recovery flows.
- **Space Exploration**: Interface to view and filter cemetery space details (Details/Inventory).
- **Reservation Management**: Dedicated dashboard for users to track their active reservations.
- **User Profile**: Account management settings.
- **Responsive Design**: Mobile-first interface built with Tailwind CSS.
- **State Management**: Centralized data handling using Pinia stores.

## Technologies Used

- **Framework**: [Nuxt 3](https://nuxt.com/) (Vue.js)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Library**: [Nuxt UI](https://ui.nuxt.com/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Validation**: Zod
- **Icons**: Nuxt Icon (Tabler Icons)
  > _Note: Please check `package.json` for the full list of dependencies._

## Getting Started

Follow these instructions to set up the frontend application locally.

### Prerequisites

- Node.js (v18 or higher)
- NPM (v9 or higher)
- A running instance of the [BDI-Backend](https://github.com/igidio/bdi-backend) (for API connectivity)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/igidio/bdi-frontend.git
   cd bdi-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a **📄.env** file based on the template:

   ```bash
   cp .env.template .env
   ```

   Update the `SERVER` variable in **📄.env** to point to your backend URL (e.g., http://localhost:3000).

4. **Run the Application**

   Start the development server:

   ```bash
   npm run dev
   ```

The application will be available at 🔗`http://localhost:5173` (or the port shown in your terminal).

## Project Structure

- 📁 **app/**
  - **📁 pages/**: Application routes and views (Login, Reservations, etc.).
  - **📁 components/**: Reusable UI components organized by domain.
  - **📁 stores/**: Pinia stores for state management (User, UI).
  - **📁 interfaces/**: TypeScript definitions matching backend entities.
  - **📁 layouts/**: Main layout templates.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run generate`: Pre-render the application for static hosting.
- `npm run preview`: Preview the production build locally.

## Licence

This project is licensed under the MIT License - see the **📄LICENSE.md** file for details.
