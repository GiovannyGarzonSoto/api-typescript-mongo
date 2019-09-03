import app from './app'
import { startConnection } from './database'

async function main() {
    startConnection()
    await app.listen(app.get('port'))
    console.log(`Escuchando en el puerto ${app.get('port')}`)
}

main()