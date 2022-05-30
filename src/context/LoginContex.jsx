const { createContext, useContext, useMemo } = require("react");

const loginContext = createContext();

export const useLogin = () => {
  const context = useContext(loginContext);
  return context;
};

export const LoginProvider = ({ children }) => {
  const contextValue = useMemo(() => {
    return {};
  }, []);

  return (
    <loginContext.Provider value={contextValue}>
      {children}{" "}
    </loginContext.Provider>
  );
};
