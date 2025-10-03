import { produce } from "immer";
import { create } from "zustand";

type State = {
    FileState: {cvFile:  File | ''};
    filePostPitch: {pitchDeckFile:  File | ''},
    filePostFinancial: {financialFile:  File | ''},
    filePostFinancialModel: {financialModelFile:  File | ''},
    filePostBussines: {businessPlanFile:  File | ''}
}

type Action = {
    handleFileChange: (file: State['FileState']) => void,
    handleBusinessFileChange: (file: any) => void,
    handlePitchFileChange: (file: any) => void,
    handleFinancialFileChange: (file: any) => void,
    handleFinancialModelFileChange: (file: any) => void,
}

const useFile = create<State & Action>((set) => {
    return {
        FileState: { cvFile: "" },
        filePostPitch: { pitchDeckFile: ""},
        filePostFinancial: { financialFile: ""},
        filePostFinancialModel: { financialModelFile: ""},
        filePostBussines: { businessPlanFile: ""},
        handleFileChange: (file) => set(() => ({FileState: file})),
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