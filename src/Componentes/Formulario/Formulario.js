import { useState } from 'react'
import CampoTexto from '../CampoTexto/CampoTexto'
import { v4 as uudd } from 'uuid'
import { styled } from '@mui/material/styles'
import Boton from '../Boton/Boton'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const Formulario = (props) => {
  const [nombre, setNombre] = useState('')
  const [tiempo, setTiempo] = useState('')
  const [color, setColor] = useState('')

  const { registrarTarea } = props

  const handleSubmit = (e) => {
    e.preventDefault()
    let datosAEnviar = {
      corriendo: false,
      nombre,
      tiempo: tiempo * 60,
      color,
      id: uudd()
    }

    registrarTarea(datosAEnviar)
  }

  return (
    <section style={{ width: 'auto', margin: '20px 25%' }}>
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: '#ba4949', textAlign: 'center' }}>
          Rellena el formulario para crear nueva tarea
        </h2>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <CampoTexto
                titulo="Nombre de la tarea"
                placeholder="Nombre"
                required
                value={nombre}
                setValor={setNombre}
              />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <CampoTexto
                titulo="Tiempo"
                placeholder="Ingresar tiempo"
                required
                value={tiempo}
                setValor={setTiempo}
                type="number"
              />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <CampoTexto
                titulo="Color"
                placeholder="Ingresar el color en hexadecimal"
                required
                value={color}
                setValor={setColor}
                type="color"
              />
            </Item>
          </Grid>
        </Grid>

        <Boton type="submit" />
      </form>
    </section>
  )
}

export default Formulario
