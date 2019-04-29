const mdLinks = require('../md-links');


describe('mdLinks', () => {

  it('Debería retornar los 3 links que se encuentran en PRUEBA.md', () => {
    expect(mdLinks.readFiles('./PRUEBA.md')).resolves.toEqual(['https://es.wikipedia.org/wiki/Markdown', 'https://nodejs.org/','https://nodejs.org/docs/latest-v0.10.x/api/modules.html']);
  });

});
