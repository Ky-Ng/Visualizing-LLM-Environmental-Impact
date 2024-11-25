"use client"
import { Message } from 'ai'
import { useChat } from 'ai/react'


import React from 'react'

type Props = {}

export default function ChatView({ }: Props) {
    const { messages, input, handleInputChange, handleSubmit } = useChat()

    function getWordCount(str: string): number {
        // https://stackoverflow.com/questions/18679576/counting-words-in-string
        return str.trim().split(/\s+/).length
    }

    function calculateLength(messages: Message[]) {
        /**
         * Calculates the length of the `msg.content` for both the 
         * Assistant and User roles and returns the sum of the total number of words
         */
        const totalWordCount = messages.reduce((accumulator, msg) => {
            return accumulator + getWordCount(msg.content)
        }, 0)
        return totalWordCount
    }

    return (
        <div>
            <p>Chat View Component</p>
            <p>Total Chat Length in words: {calculateLength(messages)}</p>
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