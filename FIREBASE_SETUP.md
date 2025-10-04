# Firebase Setup Guide for TechGenieHub

This guide will help you set up Firebase for the TechGenieHub website to store contact form submissions.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter a project name (e.g., "TechGenieHub")
4. Choose whether to enable Google Analytics (recommended)
5. Follow the prompts to complete project creation

## Step 2: Set Up Firestore Database

1. In the Firebase console, navigate to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in production mode" (recommended for most cases)
4. Select a database location closest to your users
5. Wait for the database to be provisioned

## Step 3: Set Up Security Rules

1. Navigate to the "Rules" tab in Firestore
2. Update the rules to allow write access for contact form submissions:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public write access to contact submissions
    match /contactSubmissions/{document=**} {
      allow write: if true;
      allow read: if false;
    }
    // Deny access to all other collections
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Step 4: Register Your Web App

1. In the Firebase console, click on the gear icon (⚙️) next to "Project Overview" and select "Project settings"
2. Scroll down to "Your apps" section
3. Click on the web icon (</>) to add a web app
4. Register your app with a nickname (e.g., "TechGenieHub Web")
5. You'll be shown the Firebase configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyADH73eG_H9nRDkglZKmmFfFQtXD3ZXYDQ",
  authDomain: "freelancing-website-cbab5.firebaseapp.com",
  projectId: "freelancing-website-cbab5",
  storageBucket: "freelancing-website-cbab5.firebasestorage.app",
  messagingSenderId: "4567196028",
  appId: "1:4567196028:web:9ae76ef1d497908e6604f9",
  measurementId: "G-3GDYW8Z8PZ"
};
```

## Step 5: Set Up Environment Variables

1. Create a `.env.local` file in the root of your project
2. Add the following variables with your Firebase config values:

```
VITE_FIREBASE_API_KEY="YOUR_API_KEY"
VITE_FIREBASE_AUTH_DOMAIN="your-project-id.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="your-project-id"
VITE_FIREBASE_STORAGE_BUCKET="your-project-id.appspot.com"
VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
VITE_FIREBASE_APP_ID="YOUR_APP_ID"
VITE_FIREBASE_MEASUREMENT_ID="YOUR_MEASUREMENT_ID"
```

## Step 6: Restart Your Development Server

After setting up the environment variables, restart your development server:

```bash
npm run dev
```

## Step 7: Test the Contact Form

1. Fill out the contact form on the website
2. Submit the form
3. Check the Firebase console under "Firestore Database" to see if the submission was stored

## Step 8: Viewing Submissions

To view form submissions:
1. Go to the Firebase console
2. Navigate to "Firestore Database"
3. Look for the "contactSubmissions" collection
4. You should see documents representing each form submission

## Troubleshooting

- **Form submissions not appearing in Firestore**: Check browser console for errors; verify your Firebase config values are correct
- **CORS errors**: Ensure you've added your domain to the Firebase project's Authorized Domains in Firebase Authentication settings
- **Firebase initialization errors**: Make sure you've installed the Firebase SDK with `npm install firebase` 