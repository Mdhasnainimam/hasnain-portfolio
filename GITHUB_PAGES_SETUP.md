# 🚀 GitHub Pages Setup for imam.skoriyatech.com (Guaranteed Fix)

Since GitHub Pages already powers `www.skoriyatech.com`, follow these 2 simple steps to make `imam.skoriyatech.com` live via GitHub Pages with 0 Cloudflare errors!

---

## 📌 Step 1: Set GitHub Pages Branch
1. Open [`https://github.com/Mdhasnainimam/hasnain-portfolio/settings/pages`](https://github.com/Mdhasnainimam/hasnain-portfolio/settings/pages).
2. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: Select **`gh-pages`** -> Folder **`/ (root)`**.
   - Click **Save**.
3. Under **Custom domain**:
   - Type: **`imam.skoriyatech.com`**
   - Click **Save**.

---

## 📌 Step 2: Update Cloudflare DNS Record
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) -> Select **`skoriyatech.com`**.
2. Click **DNS** -> **Records**.
3. Find the **`imam`** record and click **Edit**.
4. Set:
   - **Type**: `CNAME`
   - **Name**: `imam`
   - **Target**: **`mdhasnainimam.github.io`**
   - **Proxy Status**: **Proxied (Orange Cloud 🟧)**
5. Click **Save**.

---

🎉 **Done!** GitHub Pages & Cloudflare DNS will automatically generate free SSL and load `https://imam.skoriyatech.com/` live!
