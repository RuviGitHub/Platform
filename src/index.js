import dotenv from 'dotenv';
import dbConfig from './configs/dbConfig.js';
import app from './app.js';
import seedInitialData from "./seeders/initial-data-seeder.js";

dotenv.config();

const PORT = process.env.PORT || 8001;

async function startServer() {
  try {
    await dbConfig();
    await seedInitialData();
    app.listen(PORT, () => {
      console.log(`User-data service running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServer();