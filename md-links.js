const fs = require('fs');
const fetch = require('node-fetch');
const command = process.argv[2] //ingresar el comando en la terminal desde la posicion 2
const markdownLinkExtractor = require('markdown-link-extractor');

const readFiles = (file, type) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, type, (error, content) => {
            error ? reject(error) : resolve(content);
        })
    })
}

readFiles(command, 'utf-8')
.then(res => {
const links = markdownLinkExtractor(res);
links.forEach(function(element) { //recorremos el archivo 
    fetch(element).then((res) => { //fetch toma cada elemento que recorrio y le entrega la respuesta
        console.log(res.url + ' ' + res.status + ' ' + res.statusText);
    })
    .catch (error => {
        console.log(error.message)
    })
})
})

module.exports.readFiles = readFiles;