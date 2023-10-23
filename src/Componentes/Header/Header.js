import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 50%;
  min-width: 50%;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  min-width: 150px;
  max-width: 200px;
`

function Header() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      }}
    >
      <StyledDiv>
        <h1 style={{ color: '#a01412' }}>NewTarea</h1>
        <StyledHeader>
          <p
            style={{
              fontWeight: 'bolder',
              fontSize: '14px',
              color: '#a01412',
              padding: '10px',
              background: '#f2f4f8',
              borderRadius: '5px'
            }}
          >
            Home
          </p>
          <p
            style={{
              fontWeight: 'bolder',
              fontSize: '14px',
              color: '#a01412',
              padding: '10px',
              background: '#f2f4f8',
              borderRadius: '5px'
            }}
          >
            Contacto
          </p>
        </StyledHeader>
      </StyledDiv>
    </div>
  )
}

export default Header
