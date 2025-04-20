import mongoose, { connect } from "mongoose";

const env = process.argv[2] || 'dev'; // dev, prod
const dbPath = 'mongodb+srv://rahuladsps:pAgtj2052@cluster0.np6sy.mongodb.net';
connect(`${dbPath}/rudra_${env}?retryWrites=true&w=majority&appName=srhCluster`).then(() => {
  const drop = async () => {
    if (mongoose.connection.db) {
      await mongoose.connection.db.dropDatabase();
        console.log("Database dropped successfully.");
    } else {
      console.error("Database connection is not established.");
    }
    process.exit(0);
  }
  drop();
});