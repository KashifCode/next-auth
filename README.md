I am happy to share that I have completed a new project that uses next-auth v5(beta) to create an reliable and reusable authentication service. It incorporates the latest technologies of web development, and this project can be reused in every small to large-scale project, can be tailored easily upto your needs. This project is a full-stack web application built with Next.js 14 and leverages a modern tech stack for optimal performance and maintainability.

## Application Technologies:

### Next.js 14:
I constructed the application's foundation using Next.js 14, harnessing its ability for server-side rendering and static site generation.

### TypeScript:
I used TypeScript as it provides robust type safety, ensuring code reliability and maintainability and reduced runtime errors.

### Tailwind CSS:
Offers a utility-first CSS framework for rapid and responsive UI development.

### Prisma with Neon.tech:
Added prisma that acts as an ORM for seamless interaction with the PostgreSQL database hosted by Neon.tech.

### NextAuth v5 (beta):
I integrated NextAuth v5 to manage authentication, including credential-based login signup, OAuth flows with Google and Github, and session management. I have tailored the callbacks and events to customize authentication behavior for different providers.

### Shadcn-UI:
It Provides accelerated UI development by providing ready-made components, contributing to a cohesive visual style.

## Application Details:
I adopted a meticulously structured project architecture, separating concerns into app router, API routes, server actions, and components. Added a custom middleware to enforce route protection, differentiating between public, auth, and protected routes. I also extended the user session to showcase how to tailor it according to your needs.

I have added a custom middleware that ensures route protection by separating protected, auth, and public routes. Also implemented Two-factor authentication (2FA) as an optional security measure for credential-based logins. Also the implementation of password reset and recovery functionalities is added.

To showcase how to handle user management and how to fetch session on both server and client sides, I have added server example, and a client example that showcase it.

I have also added an admin example that shows how NextJS API routes, and server actions can be protected for admin role. The example will clearly help on how to use it according to your needs. Also in this example a role-based access control was implemented using a role gate, ensuring that only authorized users can access specific sections. toasts are used to show the behaviour of this example.

#### NOTE:
Changing of role is only for demonstration purpose only, be sure to remove it.
#### NOTE:
This project was created by help of code with antonio next-auth v5 advanced guide tutorial

It is deployed using vercel, you can see it here:

### Live demo:
[https://next-auth-psi-sage.vercel.app](https://next-auth-psi-sage.vercel.app)

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
### Envoirment Variables
Replace these first before using the project

```bash
DATABASE_URL= # can be added from neon.tech
AUTH_SECRET= # generate and add a secret

GITHUB_CLIENT_ID= # get from GitHub
GITHUB_CLIENT_SECRET= # get from GitHub

GOOGLE_CLIENT_ID= # get from Google
GOOGLE_CLIENT_SECRET= # get from google

# For nodeMailer
EMAIL_SERVICE= # gmail or desired service
EMAIL_USERNAME= # add email
EMAIL_PASSWORD= # add password

NEXT_PUBLIC_APP_URL= # YOUR_URL_HERE
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
