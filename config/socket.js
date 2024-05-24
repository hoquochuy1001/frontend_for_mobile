import io from "socket.io-client";

const socket =
  process.env.NODE_ENV === "production"
    ? io("https://backend-for-mobile-appchat.onrender.com")
    : io("https://backend-for-mobile-appchat.onrender.com");



export default socket;
