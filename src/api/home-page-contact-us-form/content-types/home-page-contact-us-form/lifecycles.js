const _ = require('underscore');
module.exports = {
    async afterCreate(event) {
    const { result } = event;
    console.log(result)
      try {
        const data = await strapi.db.query("api::home-page-contact-us-form.home-page-contact-us-form")
        console.log("=>>>>>>>>>>> Email data",data)
        await strapi.plugins["email"].services.email.send({
          to: "contact@kodexolabs.com",
          from: "contact@kodexolabs.com",
          subject: "Home Page Contact US Form Response",
          html: `<div><h1>Contact Us Information</h1><br/>
          <div><h5>First Name: ${result.fname}</h5></div>
          <div><h5>Last Name:${result.lname}</h5></div>
          <div><h5>Phone No:${result.phoneNo}</h5></div>
          <div><h5>Email:${result.email}</h5></div>
          <div><h5>Message:${result.message}</h5></div>
          </div>`
        });
      } catch (err) {
        console.log("error1",err);
      }

      try {
        await strapi.plugins["email"].services.email.send({
          to: `${result?.email}`,
          from: "contact@kodexolabs.com",
          subject: "call",
          html: `<div><h5>Hi <b>${` `+ result?.firstName}</b></h5>
          <p>Thanks so much for reaching out! This auto-reply is just to let you know…</p>
          <p>We received your email and will get back to you with a (human) response as soon as possible.</p>
          <p>If you have any additional information that you think will help us to assist you, please feel free to reply to this email.</p>
          <p>We look forward to chatting soon!</p>
          <p>Cheers,</p>
          <p>To this</p>
          </div>`
        });
      } catch (err) {
        console.log("erorr2",err);
      }
    },
};
