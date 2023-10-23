import React from 'react'
import styled from 'styled-components'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  align-items: center;
  flex-direction: row;
  background: linear-gradient(rgb(186, 73, 73), rgb(186, 73, 73)), #000;
  height: 60px;
  width: auto;
  margin: 20px 25%;
  border-radius: 10px;
  border: 3px dashed rgba(255, 255, 255, 0.4);
`
const StyledP = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: #fff;
`

const AggCard = (props) => {
  return (
    <StyledDiv>
      <Fab size="small" style={{ background: 'white' }} aria-label="add">
        <AddIcon
          style={{ fontSize: '2rem', color: '#a01412' }}
          onClick={props.cambiarMostrar}
        />
      </Fab>
      <StyledP>Agregar tarea...</StyledP>
    </StyledDiv>
  )
}

export default AggCard
