import React, { useState } from 'react'

import { Controller, useForm } from 'react-hook-form'
import { Box, Grid, MenuItem, Button, TextField } from '@mui/material'

import { learningStyles } from './styles'

import ModalResponse from '../../components/ModalResponse'
import useModal from '../../hooks/useModal'
import { createInputs } from '../../services/Posts'

const baseURL =
  'https://euclidean-distance-calculation-api.vercel.app/euclidean-distance-api/network-classification/calculation'

const NetworkClassification = () => {
  const [result, setResult] = useState({ result: '' })
  const [isOpen, { setOpen, setClose }] = useModal(false)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      reliability: '',
      linksNumber: '',
      networkCapacity: '',
      networkCost: ''
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
        <h1>Clasificación de redes</h1>
        <h2>Instrucciones</h2>
        <Box component="p" sx={learningStyles.paragraph}>
          Para utilizar el instrumento usted debe indicar la fiabilidad de la
          red (de 2 a 5), número de enlaces (de 7 a 20), la capacidad total de
          la red (Baja, Media, Alta) y el coste de la red (Bajo, Medio, Alto).
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
                name="reliability"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.reliability}
                    label="Fiabilidad de la red"
                  >
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                control={control}
                name="linksNumber"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.linksNumber}
                    label="Número de enlaces"
                  >
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="11">11</MenuItem>
                    <MenuItem value="12">12</MenuItem>
                    <MenuItem value="13">13</MenuItem>
                    <MenuItem value="14">14</MenuItem>
                    <MenuItem value="15">15</MenuItem>
                    <MenuItem value="16">16</MenuItem>
                    <MenuItem value="17">17</MenuItem>
                    <MenuItem value="18">18</MenuItem>
                    <MenuItem value="19">19</MenuItem>
                    <MenuItem value="20">20</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                control={control}
                name="networkCapacity"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.networkCapacity}
                    label="Capacidad total de la red"
                  >
                    <MenuItem value="1">Baja</MenuItem>
                    <MenuItem value="2">Media</MenuItem>
                    <MenuItem value="3">Alta</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item>
              <Controller
                control={control}
                name="networkCost"
                rules={{ required: true }}
                render={({ field: { ...field } }) => (
                  <TextField
                    sx={learningStyles.select}
                    {...field}
                    select
                    error={!!errors.networkCost}
                    label="Coste de la red"
                  >
                    <MenuItem value="1">Bajo</MenuItem>
                    <MenuItem value="2">Medio</MenuItem>
                    <MenuItem value="3">Alto</MenuItem>
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
        title="Clasificación de redes"
        description={`La clase de la red es: ${result.result}`}
      />
    </>
  )
}

export default NetworkClassification
