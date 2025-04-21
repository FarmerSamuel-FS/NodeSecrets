# Step 3 – Secure `.env` File (Best Practice)

This Node.js application demonstrates the proper handling of secrets using environment variables, while preventing secrets from being committed to source control.

## 🔐 Overview

- The secret is stored in a `.env` file (excluded via `.gitignore`).
- The app uses the `dotenv` package to access the secret at runtime.
- If the `.env` file is missing, the app will fail or reject all access attempts.
- The required secret is documented in the `README.md`.

## ✅ Security Best Practice

Unlike the previous examples, this version follows proper security practices:

- `.env` is excluded from the repository.
- Secrets are not hardcoded or exposed in public code.
- Documentation tells users how to set up their own `.env` file to run the app.

## 🧪 How to Run

1. Create a `.env` file in the root folder and add the following: SECRET_KEY=secureenv-9999
2. Install dependencies: npm install
3. Start the server: node app.js
4. Open your browser: http://localhost:3002
5. Enter: secureenv-9999

## 📁 File Highlights

- `.env`: Not included in the repo — must be created locally.
- `.gitignore`: Properly excludes `.env` from being tracked or pushed.
- `app.js`: Loads secret via `dotenv` and validates form input.
- `views/index.html`: Form input for secret key.

## ❗Missing Secret Behavior

If the `.env` file is missing or the secret is not set, the app will fail to validate the key, and access will be denied. This mimics real-world behavior when required environment variables are not configured.

## 🔗 GitHub Repository

[https://github.com/FarmerSamuel-FS/node-env-secure](https://github.com/FarmerSamuel-FS/node-env-secure)
