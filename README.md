
# Dream LMS -- Course Management App-Next Js Full Stack Project


## Project description

Dream LMS – Course Management App is a simple full-stack web application built with Next.js. It allows users to register, login, browse courses, view lectures, and track their learning progress. The app features user authentication with NextAuth.js, a responsive design using Tailwind CSS, and dynamic data fetching for a smooth and interactive learning experience. It’s a modern and lightweight platform focused on providing students an easy and seamless way to access online courses.

It’s a Next.js full-stack project with authentication, dynamic content fetching, and a responsive UI. Perfect for learning full-stack development with modern technologies.


## Live Site

https://next-js-course-management-app-proje.vercel.app



## Key Features

- Full-Stack Next.js Application
- User Authentication with NextAuth.js
- Secure registration and login system for users.
- Browse all available courses with details and descriptions.
- Dynamic data fetching for real-time course updates.
- Modern UI designed with Tailwind CSS for smooth user experience.
- Users can enroll in courses and complete the checkout process smoothly.
- Users can update existing courses with new content or details.
- Users can add new courses including title, description, and content.
- Dashboard to view and manage enrolled courses and track progress.
- Smooth loading indicators for pages and data fetching.
- Certain pages are protected and accessible only to logged-in users.

## Tech Stack
- React
- Next.js
- Tailwind CSS
- Material UI (@mui/material, @emotion/react, @emotion/styled)
- React Awesome Reveal
- React Hot Toast
- React Icons
- React Select
- Swiper
- React Spinners
- Axios
- MongoDB
- Bcrypt
- Bcryptjs
- NextAuth.js
- SweetAlert2



## Setup & installation instructions


1.Clone the repository

```bash
git clone https://github.com/khalidhossain5000/Next-Js-Course-Management-App-Project.git
cd Next-Js-Course-Management-App-Project

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

## Route Summary

| Route                     | Description                  | Access       |
|----------------------------|------------------------------|-------------|
| `/`                        | Home page                    | Public      |
| `/about`                   | About page                   | Public      |
| `/all-courses`             | All Courses page             | Public      |
| `/contact-us`              | Contact Us page              | Public      |
| `/dashboard`               | Dashboard main page          | Protected   |
| `/dashboard/add-course`    | Add Course page              | Protected   |
| `/courses/[id]`            | Course Detail page           | Protected   |




**Note:** Protected routes require users to be logged in. Unauthenticated users will be redirected to `/login`.



