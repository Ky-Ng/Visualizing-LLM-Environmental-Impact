import { createCohere } from '@ai-sdk/cohere'
import { streamText } from 'ai'
import dotenv from 'dotenv'
dotenv.config()
const myCohere = createCohere({
    apiKey: process.env.COHERE_API_KEY
})
console.log("APIKEY", process.env.COHERE_API_KEY)

export async function POST(request: Request) {
    const payload = await request.json()
    console.log("payload", payload)
    const { messages } = payload

    const result = await streamText({
        model: myCohere("command-r-plus-08-2024"),
        messages,
    })
    return result.toDataStreamResponse()
}