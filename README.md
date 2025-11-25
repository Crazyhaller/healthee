# Healthee

Healthee is a Next.js + Appwrite starter for a medical appointment and patient management frontend. It's a modern TypeScript project with Tailwind CSS and Appwrite integration for auth, storage and database operations.

**Tech stack:**

- **Framework:** `Next.js (App Router)`
- **Language:** `TypeScript`
- **Styling:** `Tailwind CSS`
- **Backend-as-a-Service:** `Appwrite` (used for database, storage, auth)

## Features

- Patient registration and appointment creation UI
- File upload support for patient documents
- Admin and patient routes
- Modular UI components (forms, tables, dialogs)

## Quick Start

Prerequisites: Node.js v18+ and a package manager (`npm`, `pnpm`, or `yarn`).

1. Install dependencies

```powershell
npm install
```

2. Create an environment file

Create a `.env.local` in the project root and add the required environment variables (example below). Never commit secrets to git.

3. Run the development server

```powershell
npm run dev
# Open http://localhost:3000
```

4. Build for production

```powershell
npm run build
npm run start
```

## Environment Variables

Below are the environment variable names expected by this project. Provide values locally through `.env.local` or your deployment provider's secrets manager. Do not paste secrets into public repos.

```
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
DOCTOR_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=
NEXT_PUBLIC_ENDPOINT=
NEXT_PUBLIC_ADMIN_PASSKEY=
SENTRY_AUTH_TOKEN=
TWILIO_RECOVERY_CODE=
```

Notes:

- `NEXT_PUBLIC_ENDPOINT` should point to your Appwrite endpoint (e.g. `https://cloud.appwrite.io/v1`).
- `API_KEY` and other IDs are sensitive. Use your hosting provider's secret storage for production.

## App structure

Top-level overview of important folders and files:

- `app/` - Next.js App Router pages and routes
- `components/` - Reusable UI components and forms
- `components/forms/` - Form components (Appointment, Patient, Register)
- `components/table/` - Data table and column definitions
- `lib/` - Appwrite config, utilities, and action helpers
- `constants/` - Application constants
- `public/` - Static assets
- `types/` - TypeScript types

Key files:

- `app/page.tsx` - Public landing page
- `app/admin/page.tsx` - Admin UI
- `components/theme-provider.tsx` - Theme + provider setup
- `lib/appwrite.config.ts` - Appwrite client configuration

## Appwrite notes

- This frontend expects an Appwrite project and collections configured for patients, doctors and appointments.
- Configure the corresponding collection IDs and project/endpoint values in `.env.local`.

## Deployment

- Vercel works well with Next.js App Router. Add the environment variables in the Vercel dashboard.
- Ensure `NEXT_PUBLIC_ENDPOINT` and other Appwrite IDs are set as environment variables in production.

## Contributing

- Fork the repo, create a feature branch, and open a pull request.
- Keep secrets out of PRs and use mock/test accounts for demos.
