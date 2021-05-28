"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  /**
   * Send email service
   *
   * @return {string}
   */
  sendEmail: async (to, subject, html) => {
    try {
      const result = await strapi.plugins["email"].services.email.send({
        to,
        from: process.env.SENDGRID_DEFAULT_FROM,
        replayTo: process.env.SENDGRID_DEFAULT_TO,
        subject,
        html,
      });
      return {
        message: result,
      };
    } catch (err) {
      return err;
    }
  },
};
