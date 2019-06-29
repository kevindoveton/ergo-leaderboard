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
    console.log({
      Participant: participant.attributes,
      Time: ctx.request.body.Time,
      Event: event.attributes
    });

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
