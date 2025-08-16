# 🤖 Techno-Bot (Techno Buddy)

Techno-Bot (also called **Techno Buddy**) is an **AI-powered campus assistant bot** built for **Techno International New Town (TINT)**.  
It helps students, faculty, and visitors by answering queries about **placements, academics, events, facilities, administrative processes, and student life**.  

This project was developed by **Team HackWarriors** (Druhin Mitra, Surya Chakraborty, Sukrit Goswami) during **Hack-TINT 2025**.

---

## 🚀 Features
- 🔹 **AI Chatbot** using **Google Gemini API** & **LangChain**
- 🔹 **Custom Knowledge Base** stored in **FAISS Vector Store**
- 🔹 **Telegram Bot Integration** for real-time student interaction
- 🔹 **PDF, CSV, TXT document ingestion** for knowledge building
- 🔹 **FastAPI Backend** with Webhook support
- 🔹 **Ngrok support** for local testing

---

## 📂 Project Structure
```
backend/
│── chatbot.py        # Chatbot logic with Gemini + FAISS
│── embed.py          # Embeddings & vectorstore creation
│── main.py           # FastAPI app with Telegram webhook
│── Commands.txt      # Setup & execution commands
│── requirements.txt  # Python dependencies
│── data/             # Knowledge base (PDF/CSV/TXT)
│── Vector_store/     # Saved FAISS vector store
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/DruhinMitra/Techno-Bot.git
cd Techno-Bot
```

### 2️⃣ Create & activate virtual environment
```bash
python -m venv venv
# Activate (Windows)
venv\Scripts\activate
# Activate (Linux/Mac)
source venv/bin/activate
```

### 3️⃣ Install dependencies
```bash
pip install -r requirements.txt
```

### 4️⃣ Setup environment variables  
Create a `.env` file in the root folder:
```env
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
GEMINI_API_KEY=your_google_gemini_api_key
WEBHOOK_URL=https://your-ngrok-url/webhook
```

### 5️⃣ Build Vector Store
```bash
python backend/embed.py
```

### 6️⃣ Run FastAPI server
```bash
uvicorn backend.main:app --reload --port 8000
```

### 7️⃣ Setup Webhook (via Ngrok)
```bash
ngrok http 8000
```

---

## 📌 Example Commands
- Say **"Hi" / "Hello"** → Bot introduces itself  
- Ask **placement details, academics, events, facilities** → Bot fetches from vector DB  
- Custom queries → Answered using Gemini-powered QA system  

---

## 🛠️ Tech Stack
- **Python 3.11+**
- **FastAPI** (backend server)
- **LangChain** (retrieval-based QA)
- **Google Gemini API** (LLM)
- **FAISS** (vector search)
- **Telegram Bot API**
- **HuggingFace Transformers**

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License
This project is licensed under the **MIT License**.
