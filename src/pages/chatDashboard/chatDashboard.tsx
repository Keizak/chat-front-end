import {FlexBlock} from "../../shared/styled-components";
import styled from "styled-components";
import {UserPanel} from "./userPanel/contacts.tsx";
import {Chat} from "./chat/chat.tsx";
import {useState} from "react";
import {UserType} from "../../service/auth/auth-api.ts";

export const ChatDashboard = () => {


    const [currentContact,setCurrentContact] = useState<UserType | null>(null)


    return (
        <StyledContainer>
            <UserPanel setCurrentContact={setCurrentContact}/>
            {currentContact && <Chat currentContact={currentContact}/>}
        </StyledContainer>
    )
}

const StyledContainer = styled(FlexBlock)`
  height: 100vh;
  width: 100vw`


