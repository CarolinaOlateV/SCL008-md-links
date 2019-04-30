# Markdown Links
## Preámbulo

mdLinks es un módulo construido con JavaScript para ahorrar tiempo a la hora de comprobar enlaces rotos dentro de tus archivos Markdown. Esta librería utilizada tanto en archivos externos como en la terminal analiza los archivos .md y verificando el estado de sus links.

## Instalación
Lo primero que debemos hacer es instalar nuestra librería ...

De forma local con el siguiente comando:

```sh
npm install CarolinaOlateV/SCL008-md-links
```


El siguiente paso es ingresar la linea de comando md-links y el nombre del archivo que desea analizar:

```sh
md-links NOMBRE-DEL-ARCHIVO.md
```

La terminal debería retornar lo siguiente:

```sh
{ link: 'https://jestjs.io/', status: 200, statusText: 'OK' }
{ link:
   'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
  status: 200,
  statusText: 'OK' }
{ link: 'https://semver.org/', status: 200, statusText: 'OK' }
{ link: 'https://nodejs.org/en/', status: 200, statusText: 'OK' }
```
## Planificacíon 

El primer paso para la creación este proyecto fue crear la planificación:
[Selecciona aquí](https://trello.com/b/Ri8xdboB/markdown-links)