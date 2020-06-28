/*
*+ Usage
*   const {
    openModal,
    closeModal,
    toggleModal,
    modalState
  } = useModal(ModalContents, false)
*/

import { useState, useCallback } from 'react';

export type State = {
  isOpen: boolean;
};

const useModal = (isOpen: boolean) => {
  const [modalState, updateModalState] = useState<State>({
    isOpen: isOpen || false
  });

  const closeModal = useCallback(() => {
    updateModalState({
      ...modalState,
      isOpen: false
    });
  }, [modalState]);

  const openModal = useCallback(() => {
    updateModalState({
      ...modalState,
      isOpen: true
    });
  }, [modalState]);

  const toggleModal = useCallback(() => {
    updateModalState({
      ...modalState,
      isOpen: !modalState.isOpen
    });
  }, [modalState]);

  return {
    openModal,
    closeModal,
    toggleModal,
    modalState
  };
};

export default useModal;
