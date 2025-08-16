import os
import httpx
from dotenv import load_dotenv
from fastapi import FastAPI , Request
from contextlib import asynccontextmanager
from backend.chatbot import *
load_dotenv()


WEBHOOK_URL=os.getenv("WEBHOOK_URL")
TELEGRAM_BOT_TOKEN=os.getenv("TELEGRAM_BOT_TOKEN")
BASE_TELEGRAM_URL=f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}"

@asynccontextmanager

async def lifespan(app:FastAPI):
    async with httpx.AsyncClient() as client:
        resp= await client.post(
            f"{BASE_TELEGRAM_URL}/setWebhook",
            params={"url":WEBHOOK_URL}
        )
        if resp.status_code==200:
            print(f"Webhook set to {WEBHOOK_URL}")

        else:
            print("Webhook didnt set")
    
    yield

    async with httpx.AsyncClient() as client:
        await client.post(
            f"{BASE_TELEGRAM_URL}/deleteWebhook"

        )
        print("Webhook deleted as the app is closed")


app=FastAPI(lifespan=lifespan)

@app.post("/webhook")


async def Telegram_BOT(request:Request):
    data= await request.json()
    if "message" in data and "text" in data["message"]:
        chat_id=data["message"]["chat"]["id"]
        chat_query=data["message"]["text"]
        if chat_query.lower() in ["hi","hello"]:
            reply="Hi I am Techno Buddy is your friendly AI-powered campus assistant bot, designed for Techno International New Town (TINT). It answers college-related queries like placements, academics, events, facilities, administrative processes, and student life. Created by the HackWarriors (Druhin Mitra, Surya Chakraborty, Sukrit Goswami) during Hack-TINT 2025."
        else:
            reply= get_ans(chat_query)
        async with httpx.AsyncClient() as client:
            await client.post(
                f"{BASE_TELEGRAM_URL}/sendMessage",
                json={"chat_id":chat_id,"text":reply}
            )
    print(f"Incoming Data: {data}")
    print(f"Reply: {reply}")
    return {"OK":True}