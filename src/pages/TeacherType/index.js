/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { Controller, useForm } from 'react-hook-form'
import { Box, Grid, MenuItem, Button, TextField } from '@mui/material'

import { learningStyles } from './styles'

import ModalResponse from '../../components/ModalResponse'
import useModal from '../../hooks/useModal'
import { createInputs } from '../../services/Posts'

const baseURL =
  'https://euclidean-distance-calculation-api.vercel.app/euclidean-distance-api/teacher-type/calculation'

const TeacherType = () => {
  const [result, setResult] = useState({ result: '' })
  const [isOpen, { setOpen, setClose }] = useModal(false)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      age: '',
      genre: '',
      experience: '',
      numberTimesTeaching: '',
      backgroundDiscipline: '',
      computerSkills: '',
      expTechnologyTeaching: '',
      expWebsiteUse: ''
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
        <h1>Tipo de profesor</h1>
        <h2>Instrucciones</h2>
        <Box component="p" sx={learningStyles.paragraph}>
          Para utilizar el instrumento usted debe indicar su edad, sexo, de
          forma autoevaluativa su experiencia (Principiante, Intermedio,
          Avanzado), número de veces que ha impartido el curso (Nunca, 1 a 5
          veces, más de 5 veces), diciplina o area de especialización (Toma de
          decisiones, Diseño de la red, Otros), sus habilidades en el uso de las
          computadoras (Bajo, Promedio, Alto), su experiencia en el uso de la
          tecnología basada en la web para la enseñanza (Nunca, A veces, A
          menudo) y su experiencia en el uso de sitios web Nunca, A veces, A
          menudo).
        </Box>
        <Box component="p">
          Todas las respuestas son buenas, ya que el fin del instrumento es
          describir cómo y no juzgar su experiencia.
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
                name="age"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.age}
                    label="Edad"
                  >
                    <MenuItem value="1">Menor o igual a 30 años</MenuItem>
                    <MenuItem value="2">
                      Mayor a 30 y menor o igual a 55 años
                    </MenuItem>
                    <MenuItem value="3">Mayor a 55 años</MenuItem>
                  </TextField>
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
                    <MenuItem value="1">Male</MenuItem>
                    <MenuItem value="2">Female</MenuItem>
                    <MenuItem value="3">No indicado</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                control={control}
                name="experience"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.experience}
                    label="Experiencia impartiendo el curso"
                  >
                    <MenuItem value="1">Principiante</MenuItem>
                    <MenuItem value="2">Intermedio</MenuItem>
                    <MenuItem value="3">Avanzado</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                control={control}
                name="numberTimesTeaching"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.numberTimesTeaching}
                    label="Número de veces impartiendo el curso"
                  >
                    <MenuItem value="1">Nunca</MenuItem>
                    <MenuItem value="2">De 1 a 5 veces</MenuItem>
                    <MenuItem value="3">Más de 5 veces</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                control={control}
                name="backgroundDiscipline"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.backgroundDiscipline}
                    label="Disciplina o area de especialización"
                  >
                    <MenuItem value="1">Toma de decisiones</MenuItem>
                    <MenuItem value="2">Diseño de la red</MenuItem>
                    <MenuItem value="3">Otras</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                control={control}
                name="computerSkills"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.computerSkills}
                    label="Habilidades en el uso de computadoras"
                  >
                    <MenuItem value="1">Baja</MenuItem>
                    <MenuItem value="3">Promedio</MenuItem>
                    <MenuItem value="2">Alta</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                control={control}
                name="expTechnologyTeaching"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.expTechnologyTeaching}
                    label="Experiencia enseñando con tecnologías web"
                  >
                    <MenuItem value="1">Nunca</MenuItem>
                    <MenuItem value="2">A veces</MenuItem>
                    <MenuItem value="3">A menudo</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                control={control}
                name="expWebsiteUse"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.expWebsiteUse}
                    label="Experiencia en el uso de sitios web"
                  >
                    <MenuItem value="1">Nunca</MenuItem>
                    <MenuItem value="2">A veces</MenuItem>
                    <MenuItem value="3">A menudo</MenuItem>
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
        title="Tipo de profesor"
        description={`Usted es un tipo de profesor: ${result.result}`}
      />
    </>
  )
}

export default TeacherType
