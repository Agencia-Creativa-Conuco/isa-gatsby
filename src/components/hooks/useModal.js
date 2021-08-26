import { useState } from 'react'


const useModal = (params) => {

    const  [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
      setIsOpenModal(true);
    }
  
    const closeModal = () => {
      setIsOpenModal(false);
    }
    


    return[isOpenModal, openModal, closeModal];
    
}

export default useModal