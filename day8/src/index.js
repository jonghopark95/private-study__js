import express from "express";
import path from "path";
import { sexyMiddleware } from "./middlewares";
import routes from "./routes";
import { home, login, photos, profile } from "./controllers";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!

app.use(sexyMiddleware);

app.get(routes.home, home);
app.get(routes.login, login);
app.get(routes.photos, photos);
app.get(routes.profile, profile);

// Codesanbox does not need PORT :)
app.listen(5003, () => console.log(`Listening!`));
