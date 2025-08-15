import { produce } from "immer";
import { create } from "zustand";

type State = {
    cvFileState: {cvFile:  File | ''};
    filePostPitch: {pitchDeckFile:  File | ''},
    filePostFinancial: {financialFile:  File | ''},
    filePostFinancialModel: {financialModelFile:  File | ''},
    filePostBussines: {businessPlanFile:  File | ''}
}

type Action = {
    handleCvFileChange: (file: State['cvFileState']) => void,
    handleBusinessFileChange: (file: any) => void,
    handlePitchFileChange: (file: any) => void,
    handleFinancialFileChange: (file: any) => void,
    handleFinancialModelFileChange: (file: any) => void,
}

const useFile = create<State & Action>((set) => {
    return {
        cvFileState: { cvFile: "" },
        filePostPitch: { pitchDeckFile: ""},
        filePostFinancial: { financialFile: ""},
        filePostFinancialModel: { financialModelFile: ""},
        filePostBussines: { businessPlanFile: ""},
        handleCvFileChange: (file) => set(() => ({cvFileState: file})),
        handleBusinessFileChange: (file) => set(produce((state) => {
            state.filePostBussines.businessPlanFile = file
        })),
        handlePitchFileChange: (file) => set(produce((state) => {
            state.filePostPitch.pitchDeckFile = file
        })),       
        handleFinancialFileChange: (file) => set(produce((state) => {
            state.filePostFinancial.financialFile = file
        })),
        handleFinancialModelFileChange: (file) => set(produce((state) => {
            state.filePostFinancial.financialFile = file
        })),
    };
});

export { useFile }