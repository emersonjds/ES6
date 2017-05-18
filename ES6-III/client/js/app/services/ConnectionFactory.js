var stores = ['negociacoes']
var version = 4
var dbName = 'negociacoesDB'

class ConnectionFactory {

  constructor() {
    throw new Error('Nao é possivel criar instancias de ConnectionFactory')
  }

  static getConnection() {

    return new Promise((resolve, reject) => {
      let openRequest = window.indexedDB.open(dbName, version)

      openRequest.onupgradeneeded = e => {
        ConnectionFactory._createStore(e.target.result)
      }

      openRequest.onsuccess = e => {
        resolve(e.target.result)
      }

      openRequest.onerror = e => {
        console.log(e.target.error)
        reject(e.target.error.name)
      }
    })
  }

  static _createStore(connection) {

    stores.forEach((store) => {
      if (connection.objectStoreNames.contains(store))
        connection.deleteObjectStore(store)

      connection.createObjectStore(store, { autoincrement: true })
    })

  }

}