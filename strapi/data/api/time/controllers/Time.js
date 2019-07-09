'use strict';

/**
 * Time.js controller
 *
 * @description: A set of functions called "actions" for managing `Time`.
 */

module.exports = {
  /**
   * Retrieve time records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.time.search(ctx.query);
    } else {
      return strapi.services.time.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a time record.
   *
   * @return {Object}
   */

  findOne: async ctx => {
    return strapi.services.time.fetch(ctx.params);
  },

  /**
   * Count time records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.time.count(ctx.query, populate);
  },

  /**
   * Create a/an time record.
   *
   * @return {Object}
   */

  create: async ctx => {
    const participant = await strapi.services.participant.fetch({
      id: ctx.request.body.Participant
    });
    const event = await strapi.services.event.fetch({
      id: ctx.request.body.Event
    });
    strapi.emitToAllUsers({
      Participant: participant.attributes,
      Time: ctx.request.body.Time,
      Event: event.attributes
    });

    // require('nodemailer')
    //   .createTransport({
    //     host: 'smtp.postmarkapp.com',
    //     port: 2525,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //       user: '74503f8b-26db-4732-ad35-e3bd3766a440',
    //       pass: '74503f8b-26db-4732-ad35-e3bd3766a440'
    //     }
    //   })
    //   .sendMail({
    //     from: '"Ergo Fitness" <no-reply@ergoactive.events>', // sender address
    //     to: participant.attributes.Email, // list of receivers
    //     subject: 'Hello ✔', // Subject line
    //     text: 'Hello world?', // plain text body
    //     html: '<b>Hello world?</b>' // html body
    //   });

    return strapi.services.time.add(ctx.request.body);
  },

  /**
   * Update a/an time record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.time.edit(ctx.params, ctx.request.body);
  },

  /**
   * Destroy a/an time record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.time.remove(ctx.params);
  }
};
