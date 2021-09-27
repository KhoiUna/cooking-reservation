# Cooking Reservation App

## Introduction:

- A web application for reserving cooking time slot.
- Utilizing [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#speech_synthesis) to greet users after submitting forms.
- Using [Discord's Webhook](https://discord.com/developers/docs/resources/webhook#execute-webhook) to create alerts when users send feedback or request a cancellation.

- Built with:

  - Frontend: [NextJS](https://nextjs.org/)
  - Backend: [Express](https://expressjs.com/), [Sequelize](https://sequelize.org/)
  - Database: [PostgreSQL](https://www.postgresql.org/)

- Live demo [here](https://cooking-reservation.vercel.app/).

### Instructions:

1. `git clone https://github.com/KhoiUna/cooking-reservation.git`
2. `cd client` -> `npm i` -> `npm run dev`
3. `cd server` -> `touch .env` with your own env variables -> `npm i` -> `npm start`

#### Notes:

- Made this for my [University of North Alabama](https://una.edu)'s dorm - Rice Hall - to follow COVID-19 guidelines.
