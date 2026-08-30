# 🌐 Fixed DNS CNAME Target for imam.skoriyatech.com

To fix the `"Content for CNAME record is invalid"` error, remove `https://` and `/#projects` from the Target field!

---

## 📌 Correct CNAME Record Values

| Field / Setting | Value to Enter | Notes |
| :--- | :--- | :--- |
| **Type** | **`CNAME`** | Select CNAME from dropdown |
| **Name** | **`imam`** | Hostname prefix |
| **Target** | **`hasnain-portfolio.hasnainimam2026.workers.dev`** | **No `https://` or `/#projects`** |
| **Proxy status** | **Proxied** | Orange Cloud 🟧 enabled |
| **TTL** | **Auto** | Default |

---

## ❌ Why it failed earlier:
- **Incorrect Target**: `https://hasnain-portfolio.hasnainimam2026.workers.dev/#projects` (DNS target cannot contain `https://` or URL paths like `/#projects`).
- **Correct Target**: `hasnain-portfolio.hasnainimam2026.workers.dev`

---

🎉 Click **Save** in Cloudflare DNS, and `https://imam.skoriyatech.com/` will be live!
