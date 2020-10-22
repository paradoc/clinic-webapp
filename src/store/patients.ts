import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { prop } from 'rambda';

type Patient = {
  dateOfBirth: string;
  firstName: string;
  id: string;
  lastName: string;
};

const mockInitialState: Patient[] = [
  { id: '1', firstName: 'mark', lastName: 'coprada', dateOfBirth: '20000715' },
];

const patientsSlice = createSlice<Patient[], SliceCaseReducers<Patient[]>>({
  name: 'patients',
  initialState: mockInitialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    update: (state, action) => {},
  },
});

export const selectPatients = prop('patients');
export const { add, update } = patientsSlice.actions;
export default patientsSlice.reducer;
