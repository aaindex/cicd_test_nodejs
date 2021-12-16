const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Top 10 List';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
      <script data-ad-client="ca-pub-4040726878920274" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>ALL ABOUT INDEX</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Add Yours</label>
            <input type="text" name="goal">
          </div>
          <button>Add</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  res.redirect('/');
});

app.listen(3000);
