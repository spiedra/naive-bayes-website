import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Controller, useForm } from 'react-hook-form'
import { Box, Grid, MenuItem, Button, TextField } from '@mui/material'

import { learningStyles } from './styles'

import ModalResponse from '../../components/ModalResponse'
import useModal from '../../hooks/useModal'
import { createInputs } from '../../services/Posts'

const baseURL =
  'https://euclidean-distance-calculation-api.vercel.app/euclidean-distance-api/student-genre/calculation'

const StudentGender = () => {
  const [result, setResult] = useState({ result: '' })
  const [isOpen, { setOpen, setClose }] = useModal(false)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      learningStyle: '',
      gpa: '',
      campus: ''
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
        <h1>Sexo de estudiante</h1>
        <h2>Instrucciones</h2>
        <Box component="p" sx={learningStyles.paragraph}>
          Para utilizar el instrumento usted debe indicar su estilo de
          aprendizaje (Asimilador, Acomodador, Divergente, Convergente), su
          último promedio para matrícula y su recinto (Paraíso o Turrialba).
        </Box>
        <Box component="p">
          Todas las respuestas son buenas, ya que el fin del instrumento es
          describir cómo y no juzgar su habilidad para aprender.
        </Box>
        <Box component="p">
          Si aún no sabe su estilo de aprendizaje puede descubrirlo en el
          siguiente test:{' '}
          <Link to="/learning-style">Estilo de aprendizaje #1</Link>
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
                name="learningStyle"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.learningStyle}
                    label="Estilo de aprendizaje"
                  >
                    <MenuItem value={1}>Asimilador</MenuItem>
                    <MenuItem value={2}>Acomodador</MenuItem>
                    <MenuItem value={3}>Divergente</MenuItem>
                    <MenuItem value={4}>Convergente</MenuItem>
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
        title="Sexo de estudiante"
        description={`Su sexo es: ${
          result.result === 'M' ? 'Masculino' : 'Femenino'
        }`}
      />
    </>
  )
}

export default StudentGender
