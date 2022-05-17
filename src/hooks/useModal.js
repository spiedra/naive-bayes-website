import { useState } from 'react'

const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return [isOpen, { setOpen: handleOpen, setClose: handleClose }]
}

export default useModal
