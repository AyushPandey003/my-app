# Multivendor Ecommerce Web App

## Overview
This project is a modern multivendor ecommerce web application that caters to three distinct roles: **Users**, **Farmers**, and **Admins**. The platform integrates advanced features and optimizations to deliver a seamless user experience. Below is a detailed breakdown of the technologies, features, and architecture used in the project.

---

## Features

### User Roles and Dashboards
- **Users**:
  - Browse products and make purchases.
  - Post and view reviews on products.
  - Read blogs on farmer training.
  
- **Farmers**:
  - Manage product listings.
  - Write and review training blogs.
  - Access insights through dynamic charts.
  
- **Admins**:
  - Oversee all platform activities.
  - Manage users, products, and content.

### Core Functionality
- **Product Reviews**: Users can post and read reviews for individual products.
- **Blog System**: Farmers can create blogs for training purposes, and users can read and review these blogs.
- **Advanced Chatbots**:
  - **RAG Bot**: Provides detailed product information.
  - **Vercel AI SDK Bot**: Handles user complaints and product returns.
- **Dynamic Components**: Enhance responsiveness and adaptability.
- **Visualization Tools**:
  - **D3.js** and **React ApexCharts**: For interactive and visually appealing charts and graphs.

---

## Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) (v14.8, App Router architecture).
- **UI Components**: [ShadCN UI](https://shadcn.dev/) for consistent and customizable design.
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) for lightweight and scalable state management.
- **Styling**: [PostCSS](https://postcss.org/) for optimized and maintainable CSS.
- **MDX**: For creating rich blog posts with embedded React components.

### Backend
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) for efficient database interactions.
- **Database**: PostgreSQL for reliable and scalable data storage.
- **API**:
  - Dynamic API routes for secure data operations.
  - Implemented optimizations like Incremental Static Regeneration (ISR) and useSWR for data fetching.

### Optimizations
- **useSWR**: Real-time data fetching with caching and revalidation.
- **ISR**: Combines static and dynamic rendering for optimal performance.
- **Dynamic Components**: Ensures components load only when needed, reducing initial load times.

---

## Installation and Setup

### Prerequisites
- Node.js (>= 16.x)
- PostgreSQL
- Yarn or npm

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/multivendor-ecommerce.git
   cd multivendor-ecommerce
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_postgres_connection_string
   NEXT_PUBLIC_API_URL=your_api_url
   VERCEL_AI_SDK_KEY=your_vercel_ai_sdk_key
   ```

4. **Run migrations**:
   ```bash
   npx drizzle-kit generate:pg
   npx drizzle-kit up
   ```

5. **Start the development server**:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

6. **Build for production**:
   ```bash
   yarn build
   # or
   npm run build
   ```

---

## Folder Structure
```
multivendor-ecommerce/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable components
│   ├── pages/         # Next.js pages
│   ├── styles/        # Global and module CSS
│   ├── utils/         # Utility functions
│   ├── api/           # API route handlers
│   ├── hooks/         # Custom React hooks
│   └── store/         # Zustand store
├── drizzle/           # ORM migrations and schema
└── package.json       # Project dependencies and scripts
```

---

## Future Enhancements
- Implement advanced analytics for admins.
- Add support for multiple languages.
- Enhance chatbot capabilities for more personalized interactions.
- Introduce machine learning models for product recommendations.

---

## License
This project is licensed under the MIT License.

---

## Contributions
Contributions are welcome! Feel free to submit a pull request or open an issue to suggest improvements.

---

## Acknowledgments
Special thanks to the creators of the libraries and frameworks used in this project.
