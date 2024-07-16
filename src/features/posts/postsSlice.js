import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


const BASE_URL =
  "https://968839a5-972f-4c1f-b3a5-90e2d906c8a5-00-1hcl0jmqumd5n.sisko.replit.dev:3000";

// Async thunk for fetching a user's posts
export const fetchPostsByUser = createAsyncThunk(
  "posts/fetchByUser",
  async (userId) => {
    const response = await fetch(`${BASE_URL}/posts/user/${userId}`);
    return response.json();
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId) => {
    
      await axios.delete(`${BASE_URL}/posts/${postId}`);

        return postId; // Return postId if deletion was successful
      } 
    )


export const savePost = createAsyncThunk(
  "posts/savePost",
  async ({postContent, imageUrl}) => {
    console.log("postContent:", postContent);
    console.log("imageUrl:", imageUrl);

    const token = localStorage.getItem("authToken");
    const decode = jwtDecode(token);
    const userId = decode.id;

    const data = {
      title: postContent,
      content: imageUrl, 
      user_id: userId,
    };

    const response = await axios.post(`${BASE_URL}/posts`, data);
    return response.data;
  }
);

export const saveBooking = createAsyncThunk(
  "posts/saveBookings",
  async ({postId, bookingDate, bookingTime, bookingDuration }) => {
    console.log("post_id:", postId);
    console.log("date:", bookingDate);
    console.log("time:", bookingTime);
    console.log("duration:", bookingDuration);

    const token = localStorage.getItem("authToken");
    const decode = jwtDecode(token);
    const userId = decode.id;

    const data = {
      post_id: postId,
      date: bookingDate,
      time: bookingTime, 
      duration: bookingDuration,
      user_id: userId,
    };

    const response = await axios.post(`${BASE_URL}/bookings`, data);
    return response.data;
  }
);

export const setTitle = createAsyncThunk(
  "posts/setTitle",
  async (postTitle) => {
    const token = localStorage.getItem("authToken");
    const decode = jwtDecode(token);
    const userId = decode.id;

    const data = {
      title: postTitle,
      user_id: userId,
    };

    const response = await axios.post(`${BASE_URL}/posts`, data);
    return response.data;
  }
);

export const dateBooking = createAsyncThunk(
    "posts/dateBooking",
    async (dateBooking) => {
      const token = localStorage.getItem("authToken");
      const decode = jwtDecode(token);
      const userId = decode.id;
  
      const data = {
        id: "id",
        date: dateBooking,
        user_id: userId,
      };
  
      const response = await axios.post(`${BASE_URL}/likes/date`, data);
      return response.data;
    }
  );

  export const timeBooking = createAsyncThunk(
    "posts/emailBooking",
    async (timeBooking) => {
      const token = localStorage.getItem("authToken");
      const decode = jwtDecode(token);
      const userId = decode.id;
  
      const data = {
        id: "id",
        date: timeBooking,
        user_id: userId,
      };
  
      const response = await axios.post(`${BASE_URL}/likes/time`, data);
      return response.data;
    }
  );

  export const durationBooking = createAsyncThunk(
    "posts/durationBooking",
    async (durationBooking) => {
      const token = localStorage.getItem("authToken");
      const decode = jwtDecode(token);
      const userId = decode.id;
  
      const data = {
        id: "id",
        duration: durationBooking,
        user_id: userId,
      };
  
      const response = await axios.post(`${BASE_URL}/likes/time`, data);
      return response.data;
    }
  );

  export const fetchBookingsByUser = createAsyncThunk(
    "posts/fetchBookingsByUser",
    async (userId) => {
      const response = await fetch(`${BASE_URL}/bookings/user/${userId}`);
      return response.json();
    }
  );
  
  export const deleteBooking = createAsyncThunk(
    'posts/deleteBooking',
    async (bookingId) => {
      
        await axios.delete(`${BASE_URL}/bookings/${bookingId}`);
  
          return bookingId; // Return postId if deletion was successful
        } 
      )


  export const updateBooking = createAsyncThunk(
    'posts/updateBooking',
    async ({ bookingId, newBookingDate, newBookingTime, newBookingDuration }) => {
      console.log("bookingId:", bookingId );
      console.log("date:", newBookingDate);
      console.log("time:", newBookingTime);
      console.log("duration:", newBookingDuration);
  
      const token = localStorage.getItem("authToken");
      const decode = jwtDecode(token);
      const userId = decode.id;
  
      const data = {
        id: bookingId,
        date: newBookingDate,
        time: newBookingTime, 
        duration: newBookingDuration,
        user_id: userId,
      };
  
      const response = await axios.put(`${BASE_URL}/bookings`, data);
      return response.data;
    }
  )



// Slice
const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: [],  bookings: [],    // For booking data
    loading: true },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostsByUser.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    }),
      builder.addCase(savePost.fulfilled, (state, action) => {
        state.posts = [action.payload, ...state.posts];
      }),
      builder.addCase(durationBooking.fulfilled, (state, action) => {
        state.posts = [action.payload, ...state.posts];
      }),
      builder.addCase(timeBooking.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      }),
      builder.addCase(dateBooking.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      }),
      builder.addCase(deletePost.fulfilled, (state, action) => {
        // Update state after successful deletion (if needed)
        state.posts = state.posts.filter(post => post.id !== action.payload);
        state.loading = false;
      }),
      builder.addCase(deleteBooking.fulfilled, (state, action) => {
        // Update state after successful deletion (if needed)
        state.posts = state.posts.filter(post => post.id !== action.payload);
        state.loading = false;
      }),
      builder.addCase(updateBooking.fulfilled, (state, action) => {
        // Update state after successful deletion (if needed)
        state.posts = action.payload;
        state.loading = false;
      }),
      builder.addCase(fetchBookingsByUser.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      });

  },
});

export default postsSlice.reducer;
