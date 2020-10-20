import styled from 'styled-components/native'
import Colors from '../../constants/Colors'


export const StyledTouchable = styled.TouchableOpacity`
    background-color: ${Colors.light.tint};
    position: absolute;
    bottom: 20px;
    right: 20px;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content:center;
`