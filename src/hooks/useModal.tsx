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

export type Props = {
  passVals: {};
};

export type State = {
  isOpen: boolean;
  passVals: {};
};

const useModal = (modalContents: React.FC<Props> | null, isOpen: boolean) => {
  const [modalState, updateModalState] = useState<State>({
    isOpen: isOpen || false,
    passVals: {}
  });

  const closeModal = useCallback(() => {
    updateModalState({
      ...modalState,
      isOpen: false
    });
  }, [modalState]);

  const openModal = useCallback(
    (passVals = {}) => {
      updateModalState({
        ...modalState,
        passVals,
        isOpen: true
      });
    },
    [modalState]
  );

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
    modalState,
    modalContents: modalContents
      ? modalContents({ passVals: modalState.passVals })
      : null
  };
};

export default useModal;
