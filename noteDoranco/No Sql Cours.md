## <font color="#00b050">Exercice Mongo DB</font>
	1.   `db.restaurants.find({borough: 'Brooklyn'}`
	2.   `db.restaurants.find({cuisine: 'American'})`
	3.   `db.restaurants.find({'grades.grade': 'A'})`
	4.   `db.restaurants.find({'grades.score': {$gt: 10}})`
	5.   `db.restaurants.find({$and: [{'grades.grade': 'A'}, {'grades.score': 5}]})`
	6.   `db.restaurants.find({'address.street': 'Stillwell Avenue'})`

## <font color="#00b050">Test Projet</font>
- <font color="#0070c0">Express.js</font> -> Framework Node.js pour créer des requêtes http
	Sert a créer des routes depuis le serveur avec des API directement connecter a la page "/..."
```js 
import 'dotenv/config'
import express from "express"
 

const app = express()


app.get('/', (req, res) => {
    res.json({ message: 'Hello World'})
})

 app.get('/home', (req, res) => {
    res.send('<h1>Coucou</h1>')
}) 

app.listen(2900, () => console.log('Serveur Web HTTP démarrer'))
```


- <font color="#0070c0">Mongoose</font> -> Utilisation de mongoose pour connecter le serveur a la base de données
```js
import 'dotenv/config'
import express from "express"
import mongoose from 'mongoose'

  

const app = express() 

app.get('/api/stations', (req, res) => {
    res.json({ vide: true})
})  

// Démarre le seurveur Web HTTP (http://localhost:2900)
app.listen(2900, () => console.log('Serveur Web HTTP démarrer sur :2900'))
  

// Initialisation de la connexion à MongoDB (avec `mongoose`)
mongoose.connect('mongodb://localhost:27017/maplib').then(()=> {
    console.log('Connexion à MongoDB établie !');
})
// Le port 27017 par default est celui de MongoDB
//? Pour voir tous les ports disponibles sur un terminal (netstat -a)

```

- Ajout du port et de la bd dans le fichier ".env"
```js title:.env
PORT=2900

MONGO_URI="mongodb://localhost:27017/maplib"

```

```js
import 'dotenv/config'
import express from "express"
import mongoose from 'mongoose'
  

const app = express()
  

app.get('/api/stations', (req, res) => {
    res.json({ vide: true})
})
 
// Démarre le seurveur Web HTTP (http://localhost:2900)

app.listen(process.env.PORT, () => console.log('Serveur Web HTTP démarrer sur :', process.env.PORT))  


// Initialisation de la connexion à MongoDB (avec `mongoose`)
mongoose.connect(process.env.MONGO_URI).then(()=> {
    console.log('Connexion à MongoDB établie !');
})  

//? Pour voir tous les ports disponibles sur un terminal (netstat -a)

```

- Maj du server.js avec l'ajout du fichier "helpers.js"
```js
import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'  

import { startApp, log, exitWithError } from './helpers.js';
 

const app = express();
  

app.get('/api/stations', (req, res) => {
  res.send({ vide: true });
}); 

mongoose
  .connect(process.env.MONGO_URI)
  .then(log('MONGO', 'Connected successfully!'), exitWithError('MONGO'))
  .then(startApp(app))
  .then(log('EXPRESS', `Listening http://${process.env.HOST}:${process.env.PORT}`), exitWithError('EXPRESS'));
```

```js title: helpers
export function startApp(app) {
  return () =>
    new Promise((resolve, reject) => {
      app
        .listen(process.env.PORT, process.env.HOST, resolve)
        .on("error", reject);
    });
}
 

export function exitWithError(type) {
  return (err) => {
    console.error("❌", type, "-", err?.message);
    process.exit(1);
  };
}
  

export function log(type, message) {
  return () => {
    console.log("✅", type, "-", message);
  };
}

```
 - Ajout du fichier "router.js" + Maj "server.js"
```js
import { Router } from "express";
  
const router = Router();  

router.get("/stations", (req, res) => {
  res.send({ vide: true });
}); 

export default router;
```

```js
import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
  

import { startApp, log, exitWithError } from './helpers.js';
import router from "./router.js" 

const app = express(); 

app.use('/api', router) 

mongoose
  .connect(process.env.MONGO_URI)
  .then(log('MONGO', 'Connected successfully!'), exitWithError('MONGO'))
  .then(startApp(app))
  .then(log('EXPRESS', `Listening http://${process.env.HOST}:${process.env.PORT}`), exitWithError('EXPRESS'));
```

- Maj "router"
```js
import { Router } from "express";
import Stations from "./stations.js";
  

const router = Router();  

router.get("/stations", async (req, res) => {
    const stations = await Stations.find()
  res.send(stations);
});  

export default router;
```
- installer dans le bckend le package "cors"