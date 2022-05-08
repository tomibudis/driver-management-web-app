import React, { createContext } from "react";

import { ResponsiveType } from "~src/types/components";
import { useCalculationResponsive } from "~hooks/useResponsive";

const ResponsiveContext = createContext<ResponsiveType>({});

const ResponsiveProvider: React.FC = (props): JSX.Element => {
  const sizeScreen = useCalculationResponsive();
  return (
    <ResponsiveContext.Provider value={sizeScreen}>
      {props.children}
    </ResponsiveContext.Provider>
  );
};

export { ResponsiveContext };
export default ResponsiveProvider;
