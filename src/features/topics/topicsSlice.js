import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const newTopic = {
        [action.payload.id]: {
          ...action.payload,
          quizIds: []
        }
      };
      state.topics = {
        ...state.topics,
        ...newTopic
      };
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
