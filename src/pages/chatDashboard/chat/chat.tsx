import {FlexBlock} from "../../../shared/styled-components";
import styled from "styled-components";
import {CustomForm} from "../../../shared/components";
import {messageField} from "../../../shared/constants/forms/message.ts";

export  const Chat = () => {


    const messageForm = [messageField]
    return (
        <StyledContainer>
            <StyledContactInfo></StyledContactInfo>
            <StyledMessages></StyledMessages>
            <StyledInput>
                <CustomForm
                    formStyle={{display:"flex",width:"100%"}}
                    FormContainerComponent={StyledForm}
                    onSubmit={() => console.log(12)}
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