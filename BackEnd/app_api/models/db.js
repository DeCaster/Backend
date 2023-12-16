const mongooseLib = require("mongoose");
const connectionString = 'mongodb+srv://murad:Wattson@nodeexpressprojects.csweoyl.mongodb.net/?retryWrites=true&w=majority';





mongooseLib.connect(connectionString);

mongooseLib.connection.on("connected", () => {
    console.log(`Connected to database at: ${connectionString}`);
});

mongooseLib.connection.on("error", () => {
    console.log("Database connection failed.");
});

mongooseLib.connection.on("disconnected", () => {
    console.log("Database disconnected.");
});


// function gracefulShutdown(msg, callback) {
//     mongooseLib.connection.close(() => {
//         console.log(`Mongoose disconnected through ${msg}`);
//         callback();
//     });
// }

process.on("SIGINT", () => {
    gracefulShutdown("app termination", () => {
        process.exit(0);
    });
});


require("./Venue");






