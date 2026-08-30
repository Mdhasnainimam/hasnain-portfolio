# 🔒 How to Enable Always Use HTTPS in Cloudflare

GitHub Pages text says:
`Enforce HTTPS — Unavailable for your site because your domain is not properly configured to support HTTPS (imam.skoriyatech.com)`

Since Cloudflare manages `skoriyatech.com`, Cloudflare automatically handles HTTPS SSL! Follow these 2 simple steps:

---

## 📌 Step 1: Turn ON "Always Use HTTPS" in Cloudflare

1. Open [Cloudflare Dashboard](https://dash.cloudflare.com/) -> Select **`skoriyatech.com`**.
2. Click **SSL/TLS** in the left menu -> Select **Edge Certificates**.
3. Scroll down to **Always Use HTTPS**.
4. Toggle the switch to **ON**.

---

## 📌 Step 2: Open website with HTTPS in Browser

Open: **[`https://imam.skoriyatech.com/`](https://imam.skoriyatech.com/)**

---

🎉 **Done!** Turning on "Always Use HTTPS" forces Cloudflare to serve your portfolio over secure HTTPS SSL, resolving the white screen issue!
