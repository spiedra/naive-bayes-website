export const getSumOfColumns = (inputs) => {
  const ec =
    inputs.Receptivamente +
    inputs.Sintiendo +
    inputs.Aceptando +
    inputs.Intuitivamente +
    inputs.Orientado_al_presente +
    inputs.Aprendo_mas_de_la_experiencia

  const or =
    inputs.Ensayando +
    inputs.Observando +
    inputs.Observando_ +
    inputs.Reflexivamente +
    inputs.Aprendo_mas_de_la_observacion +
    inputs.Reservado

  const ca =
    inputs.Analiticamente +
    inputs.Pensando +
    inputs.Evaluando +
    inputs.Logicamente +
    inputs.Aprendo_mas_de_la_conceptualizacion +
    inputs.Racional

  const ea =
    inputs.Practicando +
    inputs.Haciendo +
    inputs.Activo +
    inputs.Pragmatico +
    inputs.Aprendo_mas_de_la_experimentacion +
    inputs.Abierto

  return { CA: String(ca), EC: String(ec), EA: String(ea), OR: String(or) }
}

export const validateInputs = (inputs) => {
  for (const key in inputs) {
    if (inputs[key] === 0) {
      return false
    }
  }
  return true
}
