Help manage shifts with simple UI.

## Getting Started

Firstly, copy the `.env.local.example` file to `.env.local` locally and edit the configurations of your local environment.

### Setup Dependencies

1. Make sure you have Docker engine installed locally
2. Run MongoDB Server locally

```bash
docker run --name mongodb -d -p 27017:27017 mongo
```

3. Make sure you have Node.js installed locally - version v21.5.0 or above
   Thats it!

### Setup Local Development Environment

Run the following command in order to install all NPM dependencies:

```bash
npm install
```

Now you can run the local server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Key Features

The project allows you to keep track of the On-Call person for today.

## Tech Stack

- Next.js (v14) as a Fullstack solution (both backend and frontend)
- Tailwind CSS as the design library
- ShadCN UI as a component library

## Deployment

The simplest method to deploy the project is to use a docker image, and setup on some docker swarm (like Openshift or Kubernetes)
