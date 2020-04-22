var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src/index.html')); //aqui você define onde está o index.html da sua aplicação.

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});

app.listen(process.env.PORT || 3000);