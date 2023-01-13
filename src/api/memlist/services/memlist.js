'use strict';

/**
 * memlist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::memlist.memlist');
