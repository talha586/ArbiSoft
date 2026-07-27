# GameFlix

## Project Title

GameFlix

## Description

GameFlix is a full-stack web application for discovering games, exploring trending titles, managing playlists, and reading user reviews. The project combines a Django REST API with a React/Vite frontend to provide a smooth and modern browsing experience.

## Features

- Browse and explore game content
- View trending games and featured lists
- Create and manage playlists
- Read and submit reviews
- JWT-based authentication for API access
- Role-based authorization for moderation actions
- Automated API tests for authentication, CRUD workflows, and error handling

## Prerequisites

Before getting started, make sure you have the following installed:

- Python 3.10+
- Node.js 18+
- npm or yarn
- Git

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd GameFlix
```

### 2. Set up the backend

```bash
cd BackEnd
python3 -m venv .venv
source .venv/bin/activate
pip install -r ../requirements.txt
python manage.py migrate
```

### 3. Set up the frontend

```bash
cd ../FrontEnd
npm install
```

## Usage

### Start the backend

```bash
cd BackEnd
source .venv/bin/activate
python manage.py runserver
```

### Start the frontend

```bash
cd FrontEnd
npm run dev
```

### Run backend tests

```bash
cd BackEnd
source .venv/bin/activate
pytest -q reviews/tests.py
```
