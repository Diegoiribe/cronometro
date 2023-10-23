import * as React from 'react'
import Button from '@mui/material/Button'

const Boton = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'end' }}>
      <Button
        style={{ margin: '20px 0', background: '#ba4949' }}
        variant="contained"
        type={props.type}
      >
        Crear tarea
      </Button>
    </div>
  )
}

export default Boton
