const nodemailer = require("nodemailer");

function mailTemplateContainer(mailBody) {
  return `<body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:37.5em;margin:0 auto;padding:20px 0 48px">
      <tr style="width:100%">
        <td><img alt="Koala" src="https://i.ibb.co/KyjptFQ/icon.png" width="120" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" />
          <div style="font-size:16px;line-height:26px;margin:16px 0">${mailBody}</div>
          <p style="font-size:16px;line-height:26px;margin:16px 0">Cordialement,<br />L'equipe HireTop</p>
          <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
          <p style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa">Adresse et reference de HireTop</p>
        </td>
      </tr>
    </table>
  </body>`
}

export async function mailSetter(subject, template, receiverEmail) {
  return new Promise(async (resolve, reject) => {
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
          user: process.env.smtpEmail,
          pass: process.env.smtpPassword
        },
      });

      let info = await transporter.sendMail({
        from: 'HireTop <' + process.env.smtpEmail + '>', // sender address
        to: receiverEmail, // list of receivers
        subject, // Subject line
        html: mailTemplateContainer(template), // html body
      });
      resolve(info);
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
      console.log(error);
      reject(error)
    }
  });

}

