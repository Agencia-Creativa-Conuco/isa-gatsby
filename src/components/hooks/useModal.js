import { useState } from 'react'


const useModal = (params) => {

    const  [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
      console.log("OpenModal");
      setIsOpenModal(true);
    }
  
    const closeModal = () => {
      console.log("CloseModal");
      setIsOpenModal(false);
    }
    


    return[isOpenModal, openModal, closeModal];
    
}

export default useModal