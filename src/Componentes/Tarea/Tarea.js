import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import AlarmIcon from '@mui/icons-material/Alarm'

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background: linear-gradient(rgb(186, 73, 73), rgb(186, 73, 73)), #000;
  height: 60px;
  width: auto;
  margin: 5px 25%;
  border-radius: 10px;
`

const StyledP = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  min-width: 30%;
`

const StyledPTiempo = styled.p`
  font-size: 1.75rem;
  font-weight: 900;
  color: #ffffff;
  min-width: 30%;
`

const Tarea = ({ datos, iniciarDetenerTemporizador, formatearTiempo }) => {
  const { nombre, tiempo, color, id, corriendo } = datos

  // La función formatearTiempo debe ser importada desde donde esté definida

  return (
    <StyledDiv style={{ background: color }}>
      <StyledP>{nombre}</StyledP>
      <StyledPTiempo>{formatearTiempo(tiempo)}</StyledPTiempo>
      <IconButton
        aria-label="add an alarm"
        onClick={() => iniciarDetenerTemporizador(id)}
      >
        {corriendo ? console.log('inicio') : console.log('Pausa')}
        {/* Ajuste aquí */}
        <AlarmIcon style={{ color: 'white' }} />
      </IconButton>
    </StyledDiv>
  )
}

export default Tarea
