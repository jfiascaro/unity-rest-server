const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';


        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        // Directorio Público
        this.app.use(express.static('public'));
        // BodyParser
        this.app.use(bodyParser.urlencoded({ extended: true })); //UNITY
        //this.app.use(express.json());
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'));                  
    }

    listen () {
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en puerto ', this.port);
        });
    }

}

 module.exports = Server;