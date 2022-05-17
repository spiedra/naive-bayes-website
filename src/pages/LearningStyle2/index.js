import React, { useState } from 'react'

import { Controller, useForm } from 'react-hook-form'
import { Box, Grid, MenuItem, Button, TextField } from '@mui/material'

import { learningStyles } from './styles'

import ModalResponse from '../../components/ModalResponse'
import useModal from '../../hooks/useModal'
import { createInputs } from '../../services/Posts'

const baseURL =
  'https://euclidean-distance-calculation-api.vercel.app/euclidean-distance-api/learning-style/2/calculation'

const LearningStyle2 = () => {
  const [result, setResult] = useState({ result: '' })
  const [isOpen, { setOpen, setClose }] = useModal(false)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      campus: '',
      gpa: '',
      genre: ''
    }
  })

  const onSubmit = (values) => {
    createInputs(baseURL, values).then((response) => {
      setResult(response)
      setOpen()
    })
  }

  return (
    <>
      <Box sx={learningStyles.instructionsContainer}>
        <h1>Estilo de aprendizaje #2</h1>
        <h2>Instrucciones</h2>
        <Box component="p" sx={learningStyles.paragraph}>
          Para utilizar el instrumento usted debe indicar su recinto (Paraíso,
          Turrialba), su último promedio para matrícula y su sexo.
        </Box>
        <Box component="p">
          Todas las respuestas son buenas, ya que el fin del instrumento es
          describir cómo y no juzgar su habilidad para aprender.
        </Box>
        <Box component="p">
          Si aún no sabe acerca de los estilos de aprendizaje puede descubirlo
          en el siguiente link:{' '}
          <a
            href="https://9brains.es/cuatro-estilos-de-aprendizaje/"
            target="_blank"
            rel="noreferrer"
          >
            Estilos de aprendizaje
          </a>
        </Box>
        <Box
          component="form"
          my="3rem"
          sx={{
            '& .MuiTextField-root': {
              my: 1,
              width: { xs: '37ch', md: '41ch' }
            }
          }}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid
            container
            justifyContent="flex-start"
            spacing={{ xs: 0.5, sm: 0.5, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item>
              <Controller
                control={control}
                name="campus"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.campus}
                    label="Recinto"
                  >
                    <MenuItem value={1}>Turrialba</MenuItem>
                    <MenuItem value={2}>Paraíso</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                control={control}
                name="gpa"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    type="number"
                    error={!!errors.gpa}
                    label="Último promedio de matrícula"
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                control={control}
                name="genre"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.genre}
                    label="Sexo"
                  >
                    <MenuItem value={1}>Masculino</MenuItem>
                    <MenuItem value={2}>Femenino</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={learningStyles.button}
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </Box>
      </Box>

      <ModalResponse
        open={isOpen}
        handleOpen={setOpen}
        handleClose={setClose}
        title="Estilo de aprendizaje"
        description={`Su estilo de aprendizaje es: ${result.result}`}
      />
    </>
  )
}

export default LearningStyle2
