// funcion principal
import app from "./app";

app.listen(app.get("PORT"), () => {
    console.table({
        "PORT": app.get("PORT"),
        "URL": `http://localhost:${app.get("PORT")}`,
    })
});
