const App = require('./Application');
const Controller = require('./Controllers');

const port = process.env.PORT || 4000;

const app = new App();

app.post('/card', Controller.ValidateCard);

app.listen(port, () => console.log('Listening on post 4000'))
