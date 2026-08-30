# 🚨 How to Fix Cloudflare Error 522 for imam.skoriyatech.com

Error 522 (Connection timed out) happens because the CNAME record in Cloudflare DNS has **Orange Cloud (Proxied)** enabled for a `.workers.dev` target.

---

## ⚡ Solution 1: Change Proxy Status to DNS Only (1 Click Fix)

1. Open [Cloudflare Dashboard](https://dash.cloudflare.com/) and select **`skoriyatech.com`**.
2. Go to **DNS** -> **Records**.
3. Find the **`imam`** CNAME record.
4. Click **Edit**.
5. Toggle the **Proxy status** switch from **Orange Cloud 🟧 (Proxied)** to **Gray Cloud 🩶 (DNS Only)**.
6. Click **Save**.

---

## ⚡ Solution 2: Add Custom Domain inside Workers Dashboard (Recommended)

1. Open Cloudflare Dashboard -> **Workers & Pages** -> Click **`hasnain-portfolio`**.
2. Click the **Triggers** tab (or **Custom Domains** tab).
3. Click **Add Custom Domain**.
4. Type **`imam.skoriyatech.com`** and click **Add Custom Domain**.

---

🎉 After applying either solution, `https://imam.skoriyatech.com/` will immediately load your portfolio perfectly!
