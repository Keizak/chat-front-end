import {FlexBlock} from "../../../shared/styled-components";
import styled from "styled-components";
import {CustomForm} from "../../../shared/components";
import {messageField} from "../../../shared/constants/forms/message.ts";
import {useEffect} from "react";
import {io} from "socket.io-client";
import {UserType} from "../../../service/auth/auth-api.ts";

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

type MessageFromType = {
    message:string
}


const socket = io("http://localhost:3000/", {
    autoConnect: false,
});

type ChatPropsType = {
    currentContact: UserType
}

export  const Chat = ({currentContact}:ChatPropsType) => {

    useEffect(() => {
        socket.connect()
        socket.on("server response",(message:string) => {
            console.log(message)
        })

        // Обработка события получения сообщения
        socket.on('update', (chat:ChatInterface) => {
            // setDisplayMessage(chat.messages)
        });
    }, [])

    const sendMessage = (message:string,chatId: string,userId:string) => {
        return socket.emit("send message",{message:message,chatId:chatId,userId:userId})
    }


    const sendMessageHandler = (data:MessageFromType) => {
        console.log(data,"data")
        sendMessage(data.message,currentContact._id)
    }


    const messageForm = [messageField]
    return (
        <StyledContainer>
            <StyledContactInfo></StyledContactInfo>
            <StyledMessages></StyledMessages>
            <StyledInput>
                <CustomForm
                    <MessageFromType>
                    formStyle={{display:"flex",width:"100%"}}
                    FormContainerComponent={StyledForm}
                    onSubmit={sendMessageHandler}
                    submitTitle="Отправить сообщение"
                    forms={messageForm}/>
            </StyledInput>
        </StyledContainer>

    )
}

const StyledForm = styled(FlexBlock)`
  width: 95%;
    flex-direction: row;
`

const StyledContainer = styled(FlexBlock)`
  height: 90%;
  width: 65%;
  flex-direction: column;
  border: 1px solid black;
`

const StyledContactInfo = styled(FlexBlock)`
  width: 100%;
  height: 10%;
   border: 1px solid red;
`
const StyledMessages = styled(FlexBlock)`
  width: 100%;
  height: 70%;
  border: 1px solid green;`
const StyledInput = styled(FlexBlock)`
  width: 100%;
      height: 20%;
  border: 1px solid yellow;`