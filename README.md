# Scrollytelling Portfolio

A high-performance personal portfolio website using Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 📁 Repository Structure
This repository contains the Next.js application within the `portfolio-app` directory.

- `portfolio-app/`: The Next.js application source code.

## 🚀 Deployment Instructions (Vercel)

When deploying this repository to Vercel, you must configure the **Root Directory**:

1. Import the repository in Vercel.
2. In the "Configure Project" step, locate the **Root Directory** setting (under "Build & Development Settings" or general project settings).
3. Click **Edit** and select `portfolio-app`.
4. Deploy.

### Why is this needed?
The `package.json` file is located inside `portfolio-app`, not at the repository root. Vercel needs to know where to find the project configuration.

## 🛠️ Local Development

```bash
cd portfolio-app
npm install
npm run dev
```
