'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

module.exports = cb => {
  var io = require('socket.io')(strapi.server);
  var users = [];
  io.on('connection', socket => {
    socket.user_id = Math.random() * 100000000000000; // not so secure
    users.push(socket); // save the socket to use it later
    socket.on('disconnect', () => {
      users.forEach((user, i) => {
        if (user.user_id === socket.user_id) {
          users.splice(i, 1);
        }
      });
    });
  });
  strapi.io = io;

  // send to all users connected
  strapi.emitToAllUsers = time => io.emit('time', time);

  cb();
};
