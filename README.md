# 🏠 RealtyFi — AI / Blockchain Micro Real Estate Platform

Team Members
1. Sarthak Ganure LCB2022037
2. Mudit Yadav LCB2022031
3. Samarth Sahu LCB2022040
4. Abhay Pratap Singh LCB2022047
5. Prashasti Singhal MDB24002
7. Yashvardhan Srivastava MDB24038
6. Ritik Gupta MDB24020

![RealtyFi banner](frontend/screenshots/brick-banner.png)

Table of contents
- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Repository layout](#repository-layout)
- [Prerequisites](#prerequisites)
- [Quick start (local)](#quick-start-local)
- [Environment variables](#environment-variables)
- [Run services locally](#run-services-locally)
- [Smart contracts](#smart-contracts)
- [Deployment notes](#deployment-notes)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Contact](#contact)

## Overview

RealtyFi enables fractional ownership of real-estate assets via NFTs, combines on-chain ownership with AI-driven valuation, and provides an interface for trading and portfolio management. This repository contains the frontend (Next.js), backend (Express), smart contracts, and a simple ML service used for price prediction.

<div align="center">

### 🌟 Welcome to RealtyFi

**Own a Piece of the Future.**

_Democratizing real estate investment through blockchain technology_

</div>

## Features

- Connect wallets (MetaMask, WalletConnect)
- Buy / sell fractional shares represented as tokens/NFTs
- AI-powered property valuation and ROI predictions
- Smart contract based rental income distribution
- Portfolio and property management dashboards
- On-chain provenance and transaction history

## Tech stack

- Frontend: Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui
- Backend: Node.js, Express, TypeScript
- Smart contracts: Solidity, Hardhat, OpenZeppelin
- Blockchain: Ethereum Sepolia (testnet)
- ML: Python (scikit-learn) local service
- Package manager: pnpm (recommended)

## Repository layout

```
RealtyFi/
├── frontend/      # Next.js app (UI, pages, components)
├── backend/       # Express API and auth
├── contracts/     # Solidity contracts + Hardhat scripts
└── ml-model/      # Python ML model + API
```

## Prerequisites

- macOS / Linux / Windows (instructions below assume macOS with zsh)
- Node.js >= 18 (use `nvm` to manage versions)
- pnpm: `npm i -g pnpm`
- Python 3.8+ (for ML service)
- Git
- A Web3 wallet (MetaMask) for testing

## Quick start (local)

1. Clone the repo and enter the directory

```bash
git clone https://github.com/SaRTHaK0909k/RealtyFi.git
cd RealtyFi
```

2. Install dependencies (use separate terminals for services)

```bash
# Frontend
cd frontend
pnpm install

# Backend
cd ../backend
pnpm install

# Contracts (optional)
cd ../contracts
pnpm install

# ML model
cd ../ml-model
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

3. Create environment files (examples below)

4. Start services (see next section)

## Environment variables

Create `.env` files in the listed folders. Do NOT commit secrets to git.

Example: `frontend/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_ML_API_URL=http://localhost:8000
NEXT_PUBLIC_ETH_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
NEXT_PUBLIC_CONTRACT_ADDRESS=0x0000000000000000000000000000000000000000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_PINATA_API_KEY=
NEXT_PUBLIC_PINATA_SECRET_KEY=
```

Example: `backend/.env`

```env
PORT=3001
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_ANON_KEY=
JWT_SECRET=replace_with_a_secret
FRONTEND_URL=http://localhost:3000
```

Example: `ml-model/.env`

```env
PORT=8000
```



## Run services locally

Open three terminal tabs/windows and run the services:

1) ML service (Python)

```bash
cd ml-model
source .venv/bin/activate
python scripts/api.py
```

2) Backend API

```bash
cd backend
pnpm dev   # or `pnpm start` depending on package.json
```

3) Frontend

```bash
cd frontend
pnpm dev
```

Local URLs

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- ML Model service: http://localhost:8000

## Smart contracts (development)

Compile and run locally using Hardhat (optional):

```bash
cd contracts
pnpm hardhat compile
pnpm hardhat run scripts/deploy.ts --network sepolia
```

Notes: set `PRIVATE_KEY` and `ETH_RPC_URL` in `contracts/.env` before deploying.

## Deployment notes

- Frontend is suitable for deployment on Vercel (set `frontend` as the root).
- Backend and ML services are suitable for Render or similar PaaS providers.
- Make sure to add environment variables in the respective hosting dashboards.

## Troubleshooting

- pnpm not found: `npm i -g pnpm`
- Port conflicts: change `PORT` in `.env` files
- CORS errors: ensure `NEXT_PUBLIC_API_URL` and backend CORS settings match
- Wallet/connect issues: ensure MetaMask is set to Sepolia and has test ETH

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/awesome`
3. Commit changes and push: `git push origin feature/awesome`
4. Open a pull request



---

_Prepared for local development on macOS / zsh using pnpm._


