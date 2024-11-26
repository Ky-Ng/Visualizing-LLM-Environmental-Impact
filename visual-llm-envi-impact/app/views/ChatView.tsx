"use client"
import { Box, Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
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
            <p>Total Chat Length in words: {calculateLength(messages)}</p>
            {messages.map((m: Message) => {
                return (
                    <div key={m.id}>
                        {m.role === "user" ? "User: " : "AI: "}
                        {m.content}
                    </div>
                )
            })}

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                padding: '20px',
                gap: "10px"
            }}>
                <TextField
                    id="outlined-multiline-static"
                    // multiline
                    rows={1}
                    value={input}
                    onChange={handleInputChange}
                    fullWidth
                />
                <Button fullWidth variant="contained" onClick={handleSubmit}>Submit to LLM</Button>
            </Box>
        </div>
    )
}