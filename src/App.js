import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Header from './Componentes/Header/Header'
import AggCard from './Componentes/AggCard/AggCard.js'
import Formulario from './Componentes/Formulario/Formulario'
import Tarea from './Componentes/Tarea/Tarea'
import { Alert } from '@mui/material'

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [tareas, setTareas] = useState([
    {
      id: uuid(),
      nombre: 'Programación',
      tiempo: 3 * 60 * 60,
      color: '#dac429',
      corriendo: false
    },
    {
      id: uuid(),
      nombre: 'Escritura',
      tiempo: 59 * 60,
      color: '#29991e',
      corriendo: false
    }
  ])
  const [tareaIdToStart, setTareaIdToStart] = useState(null)
  const [temporizadorEnPausa, setTemporizadorEnPausa] = useState(false)
  const [alertaMostrada, setAlertaMostrada] = useState(false)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarTarea = (tarea) => {
    setTareas([...tareas, tarea])
  }

  const iniciarDetenerTemporizador = (id) => {
    if (tareaIdToStart === id) {
      // Si se hizo clic en el botón de la tarea que ya está en ejecución, cambia el estado de pausa
      setTemporizadorEnPausa(!temporizadorEnPausa)
    } else {
      setTareaIdToStart(id) // Cambia la tarea que se está ejecutando
      setTemporizadorEnPausa(false) // Iniciar el temporizador
      setAlertaMostrada(false)
    }
  }

  const formatearTiempo = (tiempo) => {
    let horas = Math.floor(tiempo / 3600)
    let minutos = Math.floor((tiempo % 3600) / 60)
    let segundos = tiempo % 60

    if (tiempo > 0 && !temporizadorEnPausa) {
      if (segundos < 0) {
        segundos = 59
        minutos--
        if (minutos < 0) {
          minutos = 59
          horas--
        }
      }
    }

    const formattedHoras = String(horas).padStart(2, '0')
    const formattedMinutos = String(minutos).padStart(2, '0')
    const formattedSegundos = String(segundos).padStart(2, '0')

    return `${formattedHoras}:${formattedMinutos}:${formattedSegundos}`
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (tareaIdToStart && !temporizadorEnPausa) {
        setTareas((tareas) =>
          tareas.map((tarea) => {
            if (tarea.id === tareaIdToStart && tarea.tiempo > 0) {
              return { ...tarea, tiempo: tarea.tiempo - 1 }
            }
            while (tarea.id === tareaIdToStart && tarea.tiempo === 0) {
              const audio = new Audio('../public/assets/audio1.mp3')
              audio.play()
              setAlertaMostrada(true)
              setTemporizadorEnPausa(true) // Marcar la alerta como mostrada
              alert('¡Se acabó el tiempo!')

              tarea.tiempo = ''
              break
            }

            return tarea
          })
        )
      }
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [tareaIdToStart, temporizadorEnPausa, alertaMostrada])

  return (
    <div>
      <Header></Header>
      <AggCard cambiarMostrar={cambiarMostrar} />
      {mostrarFormulario && <Formulario registrarTarea={registrarTarea} />}
      {tareas.map((tarea, index) => (
        <Tarea
          key={index}
          datos={tarea}
          iniciarDetenerTemporizador={iniciarDetenerTemporizador}
          formatearTiempo={formatearTiempo}
        />
      ))}
    </div>
  )
}

export default App
