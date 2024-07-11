import mongoose, { ConnectOptions } from "mongoose";
import app from "./app";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
