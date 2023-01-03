'use strict';

/**
 *  contact-us-form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-us-form.contact-us-form');


// module.exports = createCoreController("api::contact-us-form.contact-us-form", ({ strapi }) => ({
//   async find(ctx) {
//     ctx.query = { ...ctx.query, populate: '*' }
  
//     // Calling the default core action
//     const { data, meta } = await super.find(ctx);

//     // some more custom logic

//     return { data, meta };
//   }
// }));