# 🎯 Jeopardy! — VCE Physical Education

An AI-powered Jeopardy game for classroom use. Questions are generated live from textbook content using the Claude API.

## Features
- 🤖 AI-generated questions from real textbook chapters
- 📺 Classroom display mode (fullscreen on projector)
- 👥 2–6 teams with score tracking
- 🎯 2–6 topic categories, 5 point levels each ($200–$1000)
- 🏆 Winner screen with leaderboard and confetti

## How to Deploy

### Option 1: Vercel (recommended)
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Deploy — no build step needed

### Option 2: GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages → Deploy from branch → `main` / `root`

### Option 3: Run Locally
Just open `index.html` in any browser. No server needed.

## How to Play
1. Enter your Anthropic API key (get one at console.anthropic.com)
2. Select 2–6 topics from the chapter
3. Name your teams (2–6)
4. Click **Generate Questions & Play**
5. Claude reads the textbook and writes unique questions for each topic and point value
6. Teams take turns selecting squares — teacher reads the clue, team answers
7. Click **Reveal Answer**, then award points to the correct team

## Adding More Chapters
Edit `js/textbook-content.js` to add new chapters and topics. Each topic needs:
- `id`: unique string
- `name`: display name
- `icon`: emoji
- `description`: short subtitle
- `content`: textbook text (pasted from the chapter)

## Tech Stack
- Pure HTML/CSS/JavaScript — no framework, no build step
- Claude API (claude-sonnet-4-20250514) for question generation
- Google Fonts (Bebas Neue + Barlow)
