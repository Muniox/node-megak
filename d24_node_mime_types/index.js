const http = require('http');
const { readFile } = require('fs/promises');

const server = http.createServer();

server.on('request', async (req, res) => {
  const html = await readFile('./index.html', 'utf-8');
  //ogarnąc statusy
  /**
   * 100+ kod informacyjny
   * 200+ kody sukscesu
   * 300+ kody błędu przekierowania
   * 400+ kody błędu klienta
   * 500+ kody błędu serwera
   * 700+ podobno jakieś śmieszne
   */
  res.writeHead(200, {
    //mime types
    'Content-type': 'text/html; charset=utf-8',

    //podtsawowe mime types
    /**
     * 'Content-type': 'application/json'
     * 'Content-type': 'text/css'
     * 'Content-type': 'text/plain'
     * 'Content-type': 'text/html'
     * 'Content-type': 'video/mp4'
     * 'Content-type': 'image/png'
     * 'Content-type': 'image/jpeg'
     *
     * Uzywamy ich aby przeglądarka wiedziała co zrobic z tym co jej serwujemy
     */
  });
  res.end(html);
});

server.listen(3000, 'localhost');
