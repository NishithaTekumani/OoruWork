# OoruWork

A mobile first hackathon MVP for Track 4 UnlockED, Problem Statement 3: Hyper-Local Job Matching for Informal & Semi-Skilled Workers.

> A worker shouldn’t need a resume to find work.

## Run locally

Requirements: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production build, run `npm run build` then `npm start`.

## Demo walkthrough

1. Choose **Find work**, then **Set up my profile**. Add a name, locality (try `Indiranagar`), practical skills (try Cooking or Packing), availability and wage preference.
2. Browse the clearly labelled **DEMO LISTING** sample jobs. Open a job to see the match score and its reasons, or quick apply from a card.
3. Choose **Hire workers**, post a job with one or more skills, then submit a worker application to see the applicant profile and update its status.
4. Refresh the page: profiles, listings and applications persist in this browser on this device.
5. Open **Frequently asked questions** in the menu or visit `/faq`. Unknown routes show the custom 404 page.

## Matching rules

The displayed score is deterministic and inspectable: skill fit contributes up to 45 points, an exact locality match 25, a compatible availability 15, and meeting the worker's minimum wage preference 15. Match reason chips show which conditions were met. A score is a useful filter, not a guarantee of employment. Jobs remain browseable when no profile exists; scores appear after a worker adds skills.

## Data and scope

This prototype uses browser `localStorage`; there is no Supabase configuration or external service dependency. Data is local to the current browser and device, so separate users/devices do not share new profiles, listings, or applications. Five sample jobs are seeded and explicitly labelled sample listings; they are not real or verified offers. The UI is English and text first. Voice, GPS, maps, authentication, and cross-device backend sync are outside this MVP. There is no blocked-access page because the prototype has no access restrictions.
