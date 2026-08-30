# 🌐 How to Bind Custom Domain in Cloudflare Worker Settings

Follow these exact 4 steps inside your Cloudflare **Worker Settings** to bind `imam.skoriyatech.com` to your portfolio:

---

## 📌 Step-by-Step Instructions

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Go to **Workers & Pages** -> Click your worker name **`hasnain-portfolio`**.
3. Click the **Settings** tab at the top -> Click **Triggers** on the left menu (or **Custom Domains**).
4. Under **Custom Domains**, click **Add Custom Domain**.
5. Type **`imam.skoriyatech.com`** and click **Add Custom Domain**.

---

🎉 **Why this works**: Adding `imam.skoriyatech.com` directly inside the Worker Settings automatically binds the Cloudflare Worker route, creates the DNS record, and generates the SSL certificate instantly!
