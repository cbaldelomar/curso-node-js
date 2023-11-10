import mysql from 'mysql2/promise'
import 'dotenv/config.js'

export class Database {
  constructor (server) {
    this.server = server
  }

  connect = async () => {
    try {
      return await mysql.createConnection(this.server)
    } catch (error) {
      console.error(error)
      throw new Error('Error connecting to the database.')
    } // finally {
    //   // Ensures that the client will close when you finish/error
    //   await client.close()
    // }
  }
}
