import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create async thunk for password reset request
export const requestPasswordReset = createAsyncThunk(
  'forgotPassword/requestReset',
  async (email, { rejectWithValue }) => {
    try {
      // Replace with your actual API call
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({ 
          message: "Password reset instructions sent successfully" 
        }), 1000)
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  userEmail: '',
  isSubmitting: false,
  error: null,
  success: false
};

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetState: (state) => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestPasswordReset.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
        state.success = false;
      })
      .addCase(requestPasswordReset.fulfilled, (state) => {
        state.isSubmitting = false;
        state.success = true;
        state.userEmail = '';
      })
      .addCase(requestPasswordReset.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.payload;
        state.success = false;
      });
  }
});

export const { setUserEmail, clearError, resetState } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;