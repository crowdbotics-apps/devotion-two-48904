import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_devotions_list = createAsyncThunk(
  "devotionsLists/api_v1_devotions_list",
  async payload => {
    const response = await apiService.api_v1_devotions_list(payload)
    return response.data
  }
)
export const api_v1_devotions_create = createAsyncThunk(
  "devotionsLists/api_v1_devotions_create",
  async payload => {
    const response = await apiService.api_v1_devotions_create(payload)
    return response.data
  }
)
export const api_v1_devotions_retrieve = createAsyncThunk(
  "devotionsLists/api_v1_devotions_retrieve",
  async payload => {
    const response = await apiService.api_v1_devotions_retrieve(payload)
    return response.data
  }
)
export const api_v1_devotions_update = createAsyncThunk(
  "devotionsLists/api_v1_devotions_update",
  async payload => {
    const response = await apiService.api_v1_devotions_update(payload)
    return response.data
  }
)
export const api_v1_devotions_partial_update = createAsyncThunk(
  "devotionsLists/api_v1_devotions_partial_update",
  async payload => {
    const response = await apiService.api_v1_devotions_partial_update(payload)
    return response.data
  }
)
export const api_v1_devotions_destroy = createAsyncThunk(
  "devotionsLists/api_v1_devotions_destroy",
  async payload => {
    const response = await apiService.api_v1_devotions_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const devotionsListsSlice = createSlice({
  name: "devotionsLists",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_devotions_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_devotions_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_devotions_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_devotions_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_devotions_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_devotions_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_devotions_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_devotions_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_devotions_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_devotions_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_devotions_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_devotions_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_devotions_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_devotions_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_devotions_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_devotions_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_devotions_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_devotions_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_devotions_list,
  api_v1_devotions_create,
  api_v1_devotions_retrieve,
  api_v1_devotions_update,
  api_v1_devotions_partial_update,
  api_v1_devotions_destroy,
  slice: devotionsListsSlice
}
