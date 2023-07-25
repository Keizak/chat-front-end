import styled from "styled-components";


type FlexBlockPropsType = {
    $flexDirection?: string
}
export const FlexBlock = styled.div<FlexBlockPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.$flexDirection || "row"};
`