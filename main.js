const config = require('config')

const app = require('./src/app')

const port = process.env.PORT || config.get('port')

app.listen(port, () => console.log(`server listen at ${port}`))

// film zatrzymany  1:44:55 w app.js wsadzic plik html
// w dokumentajci ktorą mam zapisana uzyc metody render i za pomoca tej metody wsadzic indeks html