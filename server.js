const express = require("express");
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
const port = 8000;

app.use(session({ secret: 'tupalabrasecreta' }));
app.use(flash());
//anteponer /static a todos nuestros archivos de estilo y js
app.use('/static', express.static('static'))
    // sin anteponer /static v
    //app.use(express.static(_dirname + "/static"));

//para el uso de variables POST en req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

// importar las rutas
app.use(require('./routes/auth'));
app.use(require('./routes/routes'));




app.listen(port, () => console.log(`Listening on port: ${port}`));