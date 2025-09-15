
# Dream LMS -- Course Management App-Next Js Full Stack Project


## Project description

Simple Vegetable Shop is a Next.js web app that allows authenticated users to add and manage products. It features secure Google login, responsive UI with Tailwind CSS, and MongoDB integration for product storage. Protected routes ensure only logged-in users can access product management pages.


## Live Demo

https://next-js-task-simple-web-app.vercel.app/



## Setup & installation instructions


1.Clone the repository

```bash
git clone https://github.com/khalidhossain5000/next-js-task-simple-web-app.git
cd next-js-task-simple-web-app

```

2.Install dependencies

```bash
npm install

```

3.Create environment variables

```bash
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URI=your_mongodb_connection_string

```
4.Run the development server  

```bash
npm run dev

```

5.Open in browser with this 

```bash
http://localhost:3000

```


## Route Summary

| Route | Method | Description | Protected |
|-------|--------|-------------|-----------|
| `/` | GET | Home page / Products | No |
| `/login` | GET | Login page (Google OAuth) | No |
| `/dashboard/add-product` | GET | Add new product page | Yes |
| `/api/products` | POST | Add new product to MongoDB | Yes |
| `/api/auth/[...nextauth]` | All | NextAuth authentication routes | N/A |

**Note:** Protected routes require users to be logged in. Unauthenticated users will be redirected to `/login`.



