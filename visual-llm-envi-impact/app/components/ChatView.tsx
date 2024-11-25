"use client"
import { Message } from 'ai'
import { useChat } from 'ai/react'


import React from 'react'

type Props = {}

export default function ChatView({ }: Props) {
    const { messages, input, handleInputChange, handleSubmit } = useChat()
    return (
        <div>
            <p>Chat View Component</p>
            {messages.map((m: Message) => {
                return (
                    <div key={m.id}>
                        {m.role === "user" ? "User: " : "AI: "}
                        {m.content}
                    </div>
                )
            })}
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} placeholder='What is the environmental impact of LLMs...' onChange={handleInputChange} />
            </form>
        </div>
    )
}