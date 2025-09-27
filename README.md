# 🧾 AI Splitwise Clone

A full-stack **bill splitting and expense management application**, inspired by Splitwise.  
Built with **Next.js (App Router)**, **Convex (serverless DB + backend)**, and **Clerk (authentication)**.  
It allows groups of people to track expenses, split bills, and settle balances seamlessly.  

🔗 **Live Demo:** [https://spliter-six.vercel.app/]  

---

## ✨ Features

- 🔐 **Authentication & Authorization** with Clerk  
- 👥 **Contacts Management** – add and manage friends  
- 🏘️ **Groups** – create groups, add members, manage shared expenses  
- 💸 **Expenses** – log shared expenses with categories, amounts, and participants  
- 📊 **Dashboard** – view overall balances, who owes whom, and pending settlements  
- 🧾 **Settlements** – record payments and resolve debts  
- 🎨 **Modern UI** with Tailwind CSS & shadcn/ui components  
- ⚡ **Serverless Backend** powered by Convex  
- 📱 **Responsive Design** (mobile + desktop)  

---

## 🛠️ Tech Stack

**Frontend:**  
- [Next.js 14 (App Router)](https://nextjs.org/)  
- [React](https://react.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [shadcn/ui](https://ui.shadcn.com/)  

**Backend & Database:**  
- [Convex](https://convex.dev/) – serverless database + backend functions  

**Authentication:**  
- [Clerk](https://clerk.com/)  

**Other Tools:**  
- TypeScript  
- ESLint + Prettier  

---

## 📂 Folder Structure
```bash
ai-splitwise-clone/
│
├── app/ # Next.js App Router pages
│ ├── (auth) # Auth-related routes (sign-in, sign-up)
│ ├── (main) # Main application routes
│ │ ├── contacts # Contacts management
│ │ ├── dashboard # Dashboard page
│ │ ├── expenses # Expense creation & listing
│ │ ├── groups # Groups management
│ │ ├── person # Individual balances
│ │ └── settlements # Settlement records
│ └── api # API endpoints (if needed)
│
├── components/ # Reusable UI components
├── hooks/ # Custom React hooks
├── lib/ # Utility functions & configs
├── convex/ # Convex backend functions
├── public/ # Static assets
├── styles/ # Global styles
└── README.md # Project documentation


---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ai-splitwise-clone.git
cd ai-splitwise-clone
2. Install Dependencies
bash
Copy code
npm install
3. Configure Environment Variables
Create a .env.local file in the root and add the following:

env
Copy code
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

# Convex
NEXT_PUBLIC_CONVEX_URL=your_convex_url
4. Run the Development Server
bash
Copy code
npm run dev
Visit: http://localhost:3000

5. Deploy
Deploy frontend on Vercel

Deploy Convex backend on Convex Dashboard

Add your deployment link at the top of this README

✅ Future Improvements
💳 Payment gateway integration (Stripe/PayPal)

🌍 Multi-language support

📱 Mobile app version with React Native

🔔 Notifications for settlements and group activity

🤝 Contribution
Fork the repo

Create a new branch: git checkout -b feature-name

Commit changes: git commit -m "Added feature"

Push to branch: git push origin feature-name

Create a Pull Request

📜 License
This project is licensed under the MIT License.
Feel free to use and modify for personal or commercial projects.
