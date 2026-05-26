import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Machine {
  machineID: number;
  machineName: string;
  machineCode: string;
}

interface MachineState {
  selectedMachine: Machine | null;
}

const initialState: MachineState = {
  selectedMachine: null,
};

const machineSlice = createSlice({
  name: 'machine',
  initialState,
  reducers: {
    setSelectedMachine: (state, action: PayloadAction<Machine>) => {
      state.selectedMachine = action.payload;
    },
    clearSelectedMachine: (state) => {
      state.selectedMachine = null;
    },
  },
});

export const { setSelectedMachine, clearSelectedMachine } = machineSlice.actions;
export default machineSlice.reducer;