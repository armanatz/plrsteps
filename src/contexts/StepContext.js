import { createContext, useState } from "react";

const StepContext = createContext({});

export const StepProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(null);

    return (
        <StepContext.Provider
            value={{
                currentStep,
                setCurrentStep,
            }}
        >
            {children}
        </StepContext.Provider>
    );
};

export default StepContext;
