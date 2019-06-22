'use strict';

/**
 * Team.js controller
 *
 * @description: A set of functions called "actions" for managing `Team`.
 */

module.exports = {

  /**
   * Retrieve team records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.team.search(ctx.query);
    } else {
      return strapi.services.team.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a team record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.team.fetch(ctx.params);
  },

  /**
   * Count team records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.team.count(ctx.query, populate);
  },

  /**
   * Create a/an team record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.team.add(ctx.request.body);
  },

  /**
   * Update a/an team record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.team.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an team record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.team.remove(ctx.params);
  }
};
