# 🚀 How to Deploy Your Portfolio to Cloudflare Pages via GitHub

Follow these simple steps to push your portfolio to GitHub and deploy it live on **Cloudflare Pages**!

---

## Step 1: Create a New GitHub Repository
1. Go to [GitHub - Create New Repository](https://github.com/new).
2. Repository Name: `hasnain-portfolio` (or any name you prefer).
3. Keep it **Public** (or Private), and do **NOT** check "Initialize with README".
4. Click **Create repository**.

---

## Step 2: Push Code to GitHub
Open your terminal in `c:\Users\Admin\Desktop\profile` and run:

```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/hasnain-portfolio.git
git push -u origin main
```
*(Replace `<YOUR_GITHUB_USERNAME>` with your actual GitHub username).*

---

## Step 3: Deploy on Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) and log in.
2. Click **Workers & Pages** in the left sidebar -> Click **Create Application**.
3. Click the **Pages** tab -> Select **Connect to Git**.
4. Select your GitHub account and choose the `hasnain-portfolio` repository.
5. Set the build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
6. Click **Save and Deploy**!

---

🎉 **Done!** Cloudflare Pages will give you a live global HTTPS domain link (e.g. `https://hasnain-portfolio.pages.dev`). Any future changes you push to GitHub will automatically deploy live!
