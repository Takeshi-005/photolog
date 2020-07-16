/*
*+ Usage
*   const {
    drawerState,
    closeDrawer,
    drawerContent,
    openDrawer,
  } = useDrawer(DrawerContents, false)
*/

import { useState, useCallback } from 'react';
import { getDocumentScroll } from 'utils/getDocumentScroll';

const useDrawer = (isOpen: boolean) => {
  const [drawerState, updateDrawerState] = useState({
    isOpen: isOpen || false,
    passVals: {},
    scrollPosY: 0
  });

  const closeDrawer = useCallback(() => {
    updateDrawerState({
      ...drawerState,
      isOpen: false
    });
  }, [drawerState]);

  const openDrawer = useCallback(
    (passVals = '') => {
      updateDrawerState({
        ...drawerState,
        passVals,
        scrollPosY: getDocumentScroll().y,
        isOpen: true
      });
    },
    [drawerState]
  );

  const toggleDrawer = useCallback(() => {
    updateDrawerState({
      ...drawerState,
      isOpen: !drawerState.isOpen
    });
  }, [drawerState]);

  return {
    openDrawer,
    closeDrawer,
    toggleDrawer,
    drawerState
  };
};

export default useDrawer;
