import './App.css'
import {io} from "socket.io-client";
import {useEffect, useState} from "react";


const socket = io("http://localhost:3000/", {
    autoConnect: false,
});

function App() {

    const [message,setMessage] = useState("")
    const [chatId,setChatId] = useState("")
    const [userId,setUserId] = useState("")
    const [userName,setUserName] = useState("")
    const [displayMessage,setDisplayMessage] = useState<MessageInterface[]>([])

    const sendMessage = (message:string,chatId: string,userId:string) => {
        return socket.emit("send message",{message:message,chatId:chatId,userId:userId})
    }

    const setUserConnected = (userName:string,userId:string) => {
        return socket.emit("user connected",{name:userName,id:userId})
    }

    const checkDb = () => {
        socket.emit("check usersDB")
        socket.emit("check chatsDb")
    }




    useEffect(() => {
        socket.connect()
        socket.on("server response",(message:string) => {
            console.log(message)
        })

        // Обработка события получения сообщения
        socket.on('update', (chat:ChatInterface) => {
            setDisplayMessage(chat.messages)
        });
    }, [])


    return (
        <>
            <div style={{display:"flex",alignItems:"center"}}>
            UserName<input value={userName} onChange={(e) => setUserName(e.currentTarget.value)}/>
            UserId<input value={userId} onChange={(e) => setUserId(e.currentTarget.value)}/>
            <button onClick={() => setUserConnected(userName,userId)}>Send</button>
            </div>
            <br/>
            <button onClick={() => checkDb()}>Check users</button><br/>
            <div style={{display:"flex",alignItems:"center"}}>
            Text message <input value={message} onChange={(e) => setMessage(e.currentTarget.value)}/>
            ChatId <input value={chatId} onChange={(e) => setChatId(e.currentTarget.value)}/>
            <button onClick={() => sendMessage(message,chatId,userId)}>Send</button>
            </div>
            <br/>
            <br/>
            Chat:  <br/>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
            {displayMessage.map(message => <div>Отправил {message.userId} - содержимое {message.text} Дата: {message.addedAt}</div>)}
            </div>

        </>
    )
}

export default App

export interface MessageInterface {
    id: string
    text: string
    addedAt:string
    userId: string
}

export interface UserInterface {
    id:string
    name: string
    chats : string[]
}

export interface ChatInterface {
    id:string
    messages: MessageInterface[]
}
