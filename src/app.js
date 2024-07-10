import express from "express";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import metaDataRoute from "./routes/metaDataRoute.js";
import workspaceRoute from "./routes/workspaceRoute.js";
import calendarRoute from "./routes/calendarRoute.js";
import defRoute from "./routes/defRoute.js"
import widgetRoute from "./routes/widgetRoute.js"
import dazhRoute from "./routes/dazhRoute.js"

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Health-check route
app.get("/v1/platform/health-check", (req, res) => {
  res.status(200).json({ status: "Server is up and running" });
});

// Routes
app.use("/v1/platform", metaDataRoute);
app.use("/v1/platform/user", userRoute);
app.use("/v1/platform/workspace", workspaceRoute);
app.use("/v1/platform/calendar", calendarRoute);
app.use("/v1/platform/def", defRoute);
app.use("/v1/platform/dazh", dazhRoute);
app.use("/v1/platform/widget", widgetRoute);

export default app;
