# 🌐 DNS Settings for imam.skoriyatech.com

Add this exact **CNAME** record to the DNS settings of `skoriyatech.com` to make `https://imam.skoriyatech.com/` live!

---

## 📌 DNS Record Details

| Setting / Field | Value to Enter |
| :--- | :--- |
| **Record Type** | **`CNAME`** |
| **Name (Host)** | **`imam`** *(or `imam.skoriyatech.com`)* |
| **Target (Points to)** | **`hasnain-portfolio.pages.dev`** |
| **Proxy status** | **Proxied** *(Orange Cloud 🟧 on Cloudflare)* |
| **TTL** | **Auto** |

---

## 📝 Step-by-Step Instructions in Cloudflare DNS

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) and select **`skoriyatech.com`**.
2. Click **DNS** -> **Records** on the left menu.
3. Click **Add Record**.
4. Fill in:
   - **Type**: `CNAME`
   - **Name**: `imam`
   - **Target**: `hasnain-portfolio.pages.dev`
   - **Proxy status**: `Proxied` (Orange Cloud 🟧)
5. Click **Save**!

---

🎉 **Done!** Cloudflare will automatically generate a free SSL certificate and your portfolio will be live globally at [`https://imam.skoriyatech.com/`](https://imam.skoriyatech.com/)!
