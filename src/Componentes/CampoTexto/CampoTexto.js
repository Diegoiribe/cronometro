import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`

  const { type = 'text' } = props

  const handleChange = (e) => {
    props.setValor(e.target.value)
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 0,
          width: '100%'
        }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          style={{ color: 'white', outline: 'none', border: 'none' }}
          color="error"
          id="standard-multiline-static"
          label={props.titulo}
          multiline
          variant="standard"
          maxRows={4}
          placeholder={placeholderModificado}
          required={props.required}
          value={props.valor}
          onChange={handleChange}
          type={type}
        />
      </div>
    </Box>
  )
}

export default CampoTexto
