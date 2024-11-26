import Image from "next/image";
import ChatView from "./views/ChatView";
import TopAppBar from "./components/TopAppBar";

import Paper from '@mui/material/Paper';


export default function Home() {
  return (
    <>
      <div className="rounded">


        <TopAppBar 
        title="How Thirsty is Your LLM?" 
        description="Chat with a Large Language Model (LLM) below to get the estimated environmental impact of your AI usage."
        />

        <Paper elevation={2} >
          <ChatView />
        </Paper>
      </div>
    </>
  );
}
