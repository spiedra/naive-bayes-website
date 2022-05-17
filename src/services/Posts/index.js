import axios from 'axios'

export const createInputs = async (baseURL, inputs) => {
  try {
    const response = await axios.post(baseURL, {
      inputs: inputs
    })
    return response.data
  } catch (error) {
    if (error.response) {
      return error.response.status
    }
  }
}
