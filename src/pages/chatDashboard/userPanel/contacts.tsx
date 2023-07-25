import styled from "styled-components";
import {FlexBlock} from "../../../shared/styled-components";
import {useLoaderData} from "react-router-dom";
import {UserType} from "../../../service/auth/auth-api.ts";
import {CustomForm} from "../../../shared/components";
import {phoneField} from "../../../shared/constants";
import {AddContactFormType} from "../../../service/chat/types.ts";
import {useAddContactMutation, useGetUserMutation, useGetUserQuery} from "../../../service/chat/chat-api.ts";
import {SubmitHandler} from "react-hook-form";
import React, {useEffect, useState} from "react";


type UserPanelPropsType = {
    setCurrentContact: React.Dispatch<React.SetStateAction<UserType | null>>
}
export const UserPanel = ({setCurrentContact}: UserPanelPropsType) => {
    const user = useLoaderData() as UserType;

    const [currentId, setCurrentId] = useState<string | null>(null)


    const registerMutation = useAddContactMutation();

    const {refetch, data} = useGetUserQuery(currentId || "")
    const onSubmit: SubmitHandler<AddContactFormType> = (data: AddContactFormType) => {
        registerMutation.mutate(data);
    };

    const addContactForm = [phoneField]

    const clickContactHandler = async (id: string) => {
        setCurrentId(id)
        await refetch()
    }

    useEffect(() => {
        if (data?.data) setCurrentContact(data?.data)
        console.log(data, "data")
    }, [data])
    return (
        <StyledContainer>
            <StyledMyInfo>
                userName: {user.userName} phone:{user.phone}
            </StyledMyInfo>
            <StyledContacts>
                <FlexBlock>
                    <CustomForm
                        <AddContactFormType>
                        formStyle={{display: "flex", alignItems: "center", justifyContent: "center"}}
                        FormContainerComponent={StyledForm}
                        onSubmit={onSubmit}
                        submitTitle="Добавить контакт"
                        forms={addContactForm}/>
                </FlexBlock>
                {user.chatIds.map(chatID => <StyledContact
                    onClick={() => clickContactHandler(chatID)}>{chatID}</StyledContact>)}
            </StyledContacts>

        </StyledContainer>
    )
}

const StyledForm = styled(FlexBlock)`
  flex-direction: row;
`
const StyledContainer = styled(FlexBlock)`
  height: 90%;
  width: 30%;
  flex-direction: column;
  border: 1px solid red;
`

const StyledMyInfo = styled(FlexBlock)`
  height: 20%;
  width: 95%;
  border-bottom: 4px solid black;
`
const StyledContacts = styled(FlexBlock)`
  width: 95%;

  height: 80%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const StyledContact = styled(FlexBlock)`
  height: 40px;
  border-bottom: 1px solid gray;
  width: 100%`