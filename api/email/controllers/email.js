"use strict";

const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Send email to subscribed people
   *
   * @return {void}
   */
  send: async (ctx) => {
    const emails = await strapi.services.email.find(ctx.query);
    const to = emails.map(
      (entity) =>
        sanitizeEntity(entity, { model: strapi.models.email }).user_mail
    );
    const subject = "HEy";
    const html = "<h1>Hello</h1>";

    return await strapi.services.email.sendEmail(to, subject, html);
  },
};
