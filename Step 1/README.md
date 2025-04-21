# Step 1 – Hardcoded Secret (Insecure Practice)

This is a simple Node.js + Express application that demonstrates the **insecure use of hardcoded secrets** in source code.

## 🔐 Overview

- A hardcoded API key is declared directly in `app.js`.
- A basic HTML form (`views/index.html`) allows the user to enter a key.
- If the key matches the hardcoded value, access is granted.

## 🚨 Security Risk

Storing secrets like API keys or credentials directly in the code is a major security vulnerability. If this code is shared or pushed to a public GitHub repository, anyone can view and misuse the secret. Hardcoded secrets are discouraged in production environments.

## 🧪 How to Run

1. Install dependencies: npm install
2. Start the server: node app.js
3. Open your browser and visit: http://localhost:3000
4. Enter the following hardcoded key to test: hardcoded-1234

## 📁 File Highlights

- `app.js`: Contains the hardcoded secret and logic to check user input.
- `views/index.html`: Simple form interface to submit the key.
- `.gitignore`: Excludes `node_modules` from the repo.

## 🔗 GitHub Repository

[https://github.com/FarmerSamuel-FS/node-hardcoded-secret](https://github.com/FarmerSamuel-FS/node-hardcoded-secret)
