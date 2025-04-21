# Step 2 – Shared `.env` Secret (Insecure Practice)

This Node.js app demonstrates an **insecure use of environment variables** by storing secrets in a `.env` file and pushing that file to a public repository.

## 🔐 Overview

- A secret key is defined in a `.env` file.
- The app uses the `dotenv` package to load the secret into `process.env`.
- A form allows the user to enter an API key, which is validated against the `.env` value.

## 🚨 Security Risk

Pushing `.env` files to public repositories exposes secrets to anyone with access to the code. This can lead to unauthorized access, data breaches, and compromised systems. This method is a common cause of secret leaks in open-source projects and should be avoided in real-world applications.

## 🧪 How to Run

1. Install dependencies: npm Install
2. Start the server: node app.js
3. Open your browser and visit: http://localhost:3001
4. Enter the secret key: envshared-5678

## 📁 File Highlights

- `.env`: Contains `SECRET_KEY=envshared-5678` (this file is **intentionally committed**).
- `app.js`: Uses `dotenv` to load the secret from the `.env` file.
- `views/index.html`: Front-end form to submit the key.
- `.gitignore`: Does NOT exclude `.env`.

## 📂 Warning

You may receive a warning from GitHub or `git` for pushing `.env` files containing secrets. This is expected and part of the demonstration.

## 🔗 GitHub Repository

[https://github.com/FarmerSamuel-FS/node-env-shared-secret](https://github.com/FarmerSamuel-FS/node-env-shared-secret)
