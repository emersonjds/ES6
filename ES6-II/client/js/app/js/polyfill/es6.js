if(!Array.prototype.includes) {
  console.log('Pollyfil para Array.includes aplicado')

  Array.prototype.includes = function(elemento) {
    return this.indexOf(elemento) != -1
  }
}