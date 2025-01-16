import "dotenv/config";
import "./infraestructure/database/config";
import server from "./infraestructure/server";

server.listen(process.env.PORT, () =>
   console.log(`Server running on port ${process.env.PORT} 🚀`)
);
