
# Dream LMS -- Course Management App-Next Js Full Stack Project


## Project description

Dream LMS – Course Management App is a simple full-stack web application built with Next.js. It allows users to register, login, browse courses, view lectures, and track their learning progress. The app features user authentication with NextAuth.js, a responsive design using Tailwind CSS, and dynamic data fetching for a smooth and interactive learning experience. It’s a modern and lightweight platform focused on providing students an easy and seamless way to access online courses.

It’s a Next.js full-stack project with authentication, dynamic content fetching, and a responsive UI. Perfect for learning full-stack development with modern technologies.


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



