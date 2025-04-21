# Node Secrets Assignment – Secure Application Development

This project demonstrates **three different approaches** to handling application secrets in Node.js. Each step builds upon the previous by improving the security and management of sensitive data.

The goal is to explore and understand the **risks of hardcoded secrets**, **the dangers of pushing secrets to source control**, and **the best practices for secure secret management**.

---

## 📁 Project Structure

Node Secrets/
├── Step 1/ → Hardcoded secret in source code
├── Step 2/ → Secret stored in .env (pushed to GitHub – insecure)
└── Step 3/ → Secret stored in .env (excluded via .gitignore – secure)

---

## 🔹 Step 1: Hardcoded Secret

**Location:** `Step 1/`  

This example uses a hardcoded secret directly inside `app.js`. The secret is checked against user input through a simple HTML form.

**Purpose:**  
To demonstrate the **insecurity of embedding secrets in source code**, especially when committed to version control. This is a common mistake in early development or small projects but should always be avoided.

---

## 🔹 Step 2: Shared `.env` Secret (Insecure Practice)

**Location:** `Step 2/`  

This example uses the `dotenv` package to load a secret from a `.env` file, but **intentionally pushes the `.env` file to GitHub** to demonstrate how this exposes secrets in source control.

**Purpose:**  
To simulate what happens when secrets are included in a public repository. GitHub may issue a warning, and the secret is fully visible to anyone accessing the repo.

---

## 🔹 Step 3: Secure `.env` Secret (Best Practice)

**Location:** `Step 3/`  

This version uses a `.env` file that is excluded using `.gitignore`, following best practices. The secret is loaded securely using `dotenv`, and the `README.md` provides instructions for running the app.

**Purpose:**  
To demonstrate the **recommended method** for managing secrets in Node.js: use environment variables, exclude them from source control, and document what’s needed for setup.

---

## 🧠 Summary

| Step | Secret Method     | Risk Level | Good Practice? |
| ---- | ----------------- | ---------- | -------------- |
| 1    | Hardcoded in code | 🔴 High    | ❌ No          |
| 2    | `.env` pushed     | 🟠 Medium  | ❌ No          |
| 3    | `.env` ignored    | ✅ Low     | ✅ Yes         |

Each step demonstrates a real-world scenario developers face when dealing with API keys, credentials, or configuration secrets. This project reinforces why secrets must be managed carefully in any application development process.
