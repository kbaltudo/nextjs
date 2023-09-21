'use strict';

/**
 * page-500 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::page-500.page-500');
