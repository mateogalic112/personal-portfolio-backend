"use strict";

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
    const to = "mateogalic112@gmail.com";
    const subject = "HEy";
    const html = "<h1>Hello</h1>";

    return await strapi.services.email.sendEmail(to, subject, html);
  },
};
