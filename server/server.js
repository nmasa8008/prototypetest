'use strict';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const indexRouter = require('./controller/routes/demoController');
const usersRouter = require('./controller/routes/users');


const create = async () => {
    const app = express();
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

  // view
  app.use('/', express.static(path.join(__dirname, '../client/dist')) );

  //API
  app.use('/index', indexRouter);

  app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
  });

    return app;
};

module.exports = {
    create
};
// app.use(cors())


// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// const PORT = process.env.PORT ||5000;
// const start = () => {
//   // await createConnection();
//   app.listen(PORT, () => {
//     console.log(`Web Server is running at ${PORT}.`);
//   });
// };

// start();
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
