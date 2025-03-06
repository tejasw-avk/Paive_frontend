import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk for Creating Application
export const createApplication = createAsyncThunk(
  'application/createApplication',
  async ({ applicationTypeId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        'http://localhost:8000/create-user-applications',
        { application_type_id: applicationTypeId },  // Payload
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; // Backend returns { user_application_id: new_id }
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);
/*
export const submitApplication = createAsyncThunk(
  'createApplication/submit',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { createApplication } = getState();
      const { applicationType } = createApplication;
      
      // Get application_type_id from the mapping
      const application_type_id = applicationTypeMap[applicationType];
      
      if (!application_type_id) {
        return rejectWithValue('Invalid application type selected');
      }
      
      // Get token from localStorage
      const token = localStorage.getItem('accessToken');
      
      if (!token) {
        return rejectWithValue('Authentication token not found');
      }
      
      // Make API call
      const response = await axios.put(
        "http://localhost:8000/create-user-applications", 
        { application_type_id },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      // Store the user_application_id for later use
      localStorage.setItem('userApplicationId', response.data.user_application_id);
      
      return response.data;
    } catch (error) {
      let errorMessage = 'Failed to submit application';
      
      if (error.response) {
        // The request was made and the server responded with a status code
        errorMessage = error.response.data.detail || errorMessage;
        
        // Handle authentication errors
        if (error.response.status === 401 || error.response.status === 403) {
          errorMessage = 'Authentication failed. Please log in again.';
        }
      }
      
      return rejectWithValue(errorMessage);
    }
  }
);
*/

const createApplicationSlice = createSlice({
  name: 'createApplication',
  initialState: {
    applicationName: 'House Planning Application001',
    sitePostCode: 'E1 6AN',
    siteAddress: '123, ABC, Brushfield House, 11 Brushfield Street, London',
    applicationType: 'House Holder Planning Application',
    userApplicationId: null, // Store created application ID
    status: 'idle', // idle | loading | succeeded | failed
    error: null, 
  },
  reducers: {
    setApplicationName: (state, action) => {
      state.applicationName = action.payload;
    },
    setSitePostCode: (state, action) => {
      state.sitePostCode = action.payload;
    },
    setSiteAddress: (state, action) => {
      state.siteAddress = action.payload;
    },
    setApplicationType: (state, action) => {
      state.applicationType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createApplication.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createApplication.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userApplicationId = action.payload.user_application_id; // Store backend response
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setApplicationName, setSitePostCode, setSiteAddress, setApplicationType } =
  createApplicationSlice.actions;

export default createApplicationSlice.reducer;
