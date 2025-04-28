# 🏩️ 3D Evolution of Currency – Interactive Coin History Viewer

An interactive 3D web application showcasing the **historical evolution of coins**, from ancient civilizations to modern digital currencies. Each coin is visualized in 3D, complete with historical data, textures, and animations. Built with **Next.js**, **React Three Fiber**, and styled using **ShadCN UI + TailwindCSS**.

---

## 🔧 Tech Stack

| Feature                | Technology                         |
|------------------------|-------------------------------------|
| Framework              | Next.js (App Router)               |
| 3D Rendering           | React Three Fiber (Three.js)       |
| UI Components          | ShadCN UI                          |
| Animations             | Framer Motion                      |
| 3D Model Format        | GLB/GLTF (from Blender)            |
| Image Delivery         | Cloudinary                         |
| Web3 Integration       | Wagmi + RainbowKit (optional)      |
| Styling                | Tailwind CSS                       |
| Hosting                | Vercel                             |

---

## 📦 Folder Structure

```
/3d-coin-history/
│
├── public/
│   └── models/           # Coin GLTF/GLB models
│   └── textures/         # Coin textures
│
├── app/                  # Next.js App Router pages
│   └── page.tsx
│
├── components/
│   └── CoinViewer.tsx    # React Three Fiber 3D viewer
│   └── CoinInfo.tsx      # Coin data overlay
│   └── TimelineSlider.tsx
│
├── lib/
│   └── utils.ts          # Utility functions
│
├── styles/
│   └── globals.css
│
├── ui/                   # ShadCN UI components
│   └── button.tsx
│   └── card.tsx
│
└── package.json
```

---

## 🚀 Key Features

### 🎨 Interactive 3D Coin Viewer
- View coins in full 360° using mouse or touch gestures.
- Realistic PBR materials (metal, roughness, ambient occlusion).
- Coin models exported from **Blender** → `.glb` format.

### 📜 Historical Timeline
- Timeline slider shows coins by era:
  - Ancient Greece
  - Roman Empire
  - Islamic Caliphates
  - Colonial Period
  - Modern Coins
  - Web3 Tokens (BTC/ETH)
- Each coin displays:
  - Country
  - Year
  - Description & Historical Context

### 💅 Styled with ShadCN
- Responsive, accessible components:
  - `Card` for coin info
  - `Slider` for timeline navigation
  - `Dialog` for in-depth popups
  - `Button` for switching eras
- All powered by Radix UI under the hood

### 📱 Mobile Ready
- Fully responsive layout
- Gesture-enabled viewer (rotate/zoom coins)

---

## 🌐 Future-Proofing with Web3

> **Goal:** Expand from *history of coins* into *the evolution of value* — with **Web3** coins as the next frontier.

### Web3 Integration Ideas:
- Connect wallet with **RainbowKit + Wagmi**
- Let users:
  - View their token holdings (as 3D coins)
  - Mint commemorative NFTs of historical coins
  - Unlock hidden coins via smart contract interactions

### Potential Stack Additions:
- Smart Contracts → Solidity + Hardhat
- On-chain metadata → IPFS / Filecoin
- NFT Marketplace Integration → OpenSea SDK

---

## 🧐 MVP Milestone Plan

1. ✅ Load GLTF coin models in React Three Fiber.
2. ✅ Add ShadCN components for UI.
3. ✅ Animate timeline scroll with Framer Motion.
4. ✅ Display coin info overlay.
5. ✅ Connect historical data dynamically.
6. 🔜 Optional Web3 wallet connection + NFT coin drops.

---

## 🧠 Optional Features

- 🧠 AI narration for each coin using text-to-speech
- 🗼 Interactive map of coin origins
- 📸 Share 3D coin snapshots to social media
- 📆 Admin dashboard to upload new coins

---

## 👨‍🎨 Author

**KIOGORA MWONGERA**  
*Full-Stack Developer | UI/UX Designer | 3D Dreamer*

> Crafting clean code, crispy visuals, and stories that live in the browser.  
> Find me on GitHub, LinkedIn, or wherever WebGL meets imagination 🌍

> “A coin holds more than value — it holds time, culture, and craft. This project revives that legacy in the language of the web.”  
> – *LeutBalmer*

