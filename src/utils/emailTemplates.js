export function verifyEmail(otp) {
  const subject = "Email Verification";
  const html = `
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            .gradient-border {
              border: 6.25px solid;
              border-color: #8e54e9;
              border-image-slice: 1;
              border-radius: 29.44px;
              padding: 20px;
              background: white;
              width: 626px;
              height: 800px;
              margin: 0 auto;
            }
          </style>
        </head>
        <body style="font-family: Arial, Helvetica, sans-serif; text-align: center; align-items: center;">
          <div class="gradient-border">
            <div
              style="width: 138px; height: 34px; margin-top: 39px; margin-left: 190px;"
            >
              <img
                src="http://img.mailinblue.com/6329647/images/66695bd38c821_1718180819.png"
              />
            </div>
            <div style="margin-top: 35px; align-items: center; display: flex; margin-bottom: 15px;">
              <div
                  style="background-color: #ffffff; width: 200px; height: 200px"
              ></div>
              <div>
                <img
                src="http://img.mailinblue.com/6329647/images/66695c991b3ba_1718181017.png"
              />
              
              </div>
            </div>

            <div style="top: 178px">
              <h2 style="font-size: 22px; text-align:center">Verification code (OTP)</h2>
              <p style="font-size: 16px; text-align:center">
                We’ve got a request from you to reset the password for your
                account.<br />
                Use the following verification code to reset your password.
              </p>
            </div>

            <div
              style="
                top: 382px; 
                letter-spacing: 0.5em;
                padding: 10px;
                margin-top: 20px;
                margin-bottom: 40px; 
                font-size: 24.99px;
                font-weight: bold;
                color: #411092;
                text-align:center;
              "
            >
              ${otp}
            </div>

            <div style="margin-left: 60px; margin-right: 60px; text-align:center;">
              <hr style="color: #bdbdbd; align-items: center;" />
              <p style="text-align:center;">
                if you have any questions while you’re getting started,<br />visit
                <b>www.dazhboard.com</b> to support
              </p>
            </div>

            <div style="margin-top: 70px; font-size: 13.96px; text-align:center;">
              <p>Download DaZhboard Mobile app</p>

              <div style="text-align: center">
                <img
                  src="http://img.mailinblue.com/6329647/images/66695c9be3b7d_1718181019.png"
                />
                <img
                  src="http://img.mailinblue.com/6329647/images/66695c9feff17_1718181023.png"
                />
              </div>
            </div>

            <div>
              <div
                class="footer"
                style="
                  font-size: 12px;
                  color: #224975;
                  display: flex;
                
                  text-align: center;
                  margin-top: 10px;
                  margin-right: 40px;
                  margin-left: 50px;
                "
              >
                <div
                  style="background-color: #ffffff; width: 10px; height: 20px"
                ></div>

                <p style="font-size: 13px;">•Terms & Conditions</p>
                <div
                  style="background-color: #ffffff; width: 50px; height: 20px"
                ></div>
                <p style="font-size: 13px;">©️ 2023 Neztdo Corporation</p>
                <div
                  style="background-color: #ffffff; width: 50px; height: 20px"
                ></div>
                <p style="font-size: 13px;">• Privacy Policy</p>
                <div
                  style="background-color: #ffffff; width: 10px; height: 20px"
                ></div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

  return { subject, html };
}

export function inviteNormalUser(tempPassword) {
  const subject= "Register User";
  const html = `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          .gradient-border {
            border: 6.25px solid;
            border-color: #8e54e9;
            border-image-slice: 1;
            border-radius: 29.44px;
            padding: 20px;
            background: white;
            width: 626px;
            height: 800px;
            margin: 0 auto;
          }
        </style>
      </head>
      <body
        style="
          font-family: Arial, Helvetica, sans-serif;
          text-align: center;
          align-items: center;
        "
      >
        <div class="gradient-border">
          <div
            style="
              width: 138px;
              height: 34px;
              margin-top: 29px;
              margin: bottom 10px;
              margin-left: 200px;
            "
          >
            <img
              src="http://img.mailinblue.com/6329647/images/6677bf9d3a854_1719123869.png"
              width="211px"
              height="46px"
            />
          </div>

          <div
            style="
              margin-top: 15px;
              align-items: center;
              display: flex;
              margin-bottom: 15px;
            "
          >
            <div
              style="background-color: #ffffff; width: 200px; height: 200px"
            ></div>
            <div>
              <img
                src="http://img.mailinblue.com/6329647/images/66695c991b3ba_1718181017.png"
              />
            </div>
          </div>

          <div style="top: 118px">
            <h2 style="font-size: 22px; text-align: center">
              Welcome to Dazhboard !
            </h2>
            <p style="font-size: 16px; text-align: center">
              Hi!, <br />
              <br />
              <br />
              To get started, please use the temporary password <br />
              provided below to log in to our mobile app
            </p>
          </div>

          <div>
            <h3
              style="
                font-size: 19px;
                margin-top: 20px;
                margin-bottom: 30px;
                text-align: center;
              "
            >
              Temporary Password: ${tempPassword}
            </h3>
          </div>

          <div style="margin-left: 60px; margin-right: 60px; text-align: center">
            <hr style="color: #bdbdbd; text-align: center" />
            <p style="text-align: center">
              if you have any questions while you’re getting started,<br />visit
              <b>www.dazhboard.com</b> to support
            </p>
          </div>

          <div style="margin-top: 40px; font-size: 13.96px; text-align: center">
            <p>Download DaZhboard Mobile app</p>

            <div style="text-align: center">
              <img
                src="http://img.mailinblue.com/6329647/images/66695c9be3b7d_1718181019.png"
              />
              <img
                src="http://img.mailinblue.com/6329647/images/66695c9feff17_1718181023.png"
              />
            </div>
          </div>

          <div>
            <div
              class="footer"
              style="
                font-size: 12px;
                color: #224975;
                display: flex;

                text-align: center;
                margin-top: 10px;
                margin-right: 40px;
                margin-left: 50px;
              "
            >
              <div
                style="background-color: #ffffff; width: 10px; height: 20px"
              ></div>

              <p>•Terms & Conditions</p>
              <div
                style="background-color: #ffffff; width: 50px; height: 20px"
              ></div>
              <p>©️ 2023 Neztdo Corporation</p>
              <div
                style="background-color: #ffffff; width: 50px; height: 20px"
              ></div>
              <p>• Privacy Policy</p>
              <div
                style="background-color: #ffffff; width: 10px; height: 20px"
              ></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  return { subject, html };
}

export function inviteAdminUser(invitationLink){
  const subject= "Register User";
  const html = `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          .gradient-border {
            border: 6.25px solid;
            border-color: #8e54e9;
            border-image-slice: 1;
            border-radius: 29.44px;
            padding: 20px;
            background: white;
            width: 626px;
            height: 800px;
            margin: 0 auto;
          }
        </style>
      </head>
      <body
        style="
          font-family: Arial, Helvetica, sans-serif;
          text-align: center;
          align-items: center;
        "
      >
        <div class="gradient-border">
          <div
            style="
              width: 138px;
              height: 34px;
              margin-top: 29px;
              margin: bottom 10px;
              margin-left: 200px;
            "
          >
            <img
              src="http://img.mailinblue.com/6329647/images/6677bf9d3a854_1719123869.png"
              width="211px"
              height="46px"
            />
          </div>

          <div
            style="
              margin-top: 35px;
              align-items: center;
              display: flex;
              margin-bottom: 15px;
            "
          >
            <div
              style="background-color: #ffffff; width: 200px; height: 200px"
            ></div>
            <div>
              <img
                src="http://img.mailinblue.com/6329647/images/66695c991b3ba_1718181017.png"
              />
            </div>
          </div>

          <div style="top: 178px">
            <h2 style="font-size: 22px; text-align: center">Welcome to Dazhboard!</h2>

            <p style="font-size: 16px; text-align: center">
              Hi [User's Name], <br />
              <br />
              <br />
              We're excited to welcome you to Dazhboard! <br />
              You can log in to the dashboard using the button below
            </p>
          </div>

          <div style="display: flex; justify-content: center; align-items: center; height: 10vh;">
          <a href="${process.env.FRONTEND_URL}/signup-via-invitation?token=${invitationLink}">
          <button
          style="
            width: 310px;
            height: 40px;
            background: linear-gradient(to right, #4776e6, #8e54e9);
            border-radius: 6px;
            color: white;
            padding: 13px 40px;
            gap: 10px;
            border: none;
            font-size: 14px;
            font-weight: 600;
            line-height: 16.8px;
            text-align: center;
            margin-bottom: 20px;
            margin-left: 150px;
          "
        >
          Accept invitation
        </button>
      </a> 
    </div>

          <div style="margin-left: 60px; margin-right: 60px; text-align: center">
            <hr style="color: #bdbdbd; text-align: center" />
            <p style="text-align: center">
              if you have any questions while you’re getting started,<br />visit
              <b>www.dazhboard.com</b> to support
            </p>
          </div>

          <div style="margin-top: 20px; font-size: 13.96px; text-align: center">
            <p>Download DaZhboard Mobile app</p>

            <div style="text-align: center">
              <img
                src="http://img.mailinblue.com/6329647/images/66695c9be3b7d_1718181019.png"
              />
              <img
                src="http://img.mailinblue.com/6329647/images/66695c9feff17_1718181023.png"
              />
            </div>
          </div>

          <div>
            <div
              class="footer"
              style="
                font-size: 12px;
                color: #224975;
                display: flex;
              
                text-align: center;
                margin-top: 10px;
                margin-right: 40px;
                margin-left: 50px;
              "
            >
              <div
                style="background-color: #ffffff; width: 10px; height: 20px"
              ></div>

              <p>•Terms & Conditions</p>
              <div
                style="background-color: #ffffff; width: 50px; height: 20px"
              ></div>
              <p>©️ 2023 Neztdo Corporation</p>
              <div
                style="background-color: #ffffff; width: 50px; height: 20px"
              ></div>
              <p>• Privacy Policy</p>
              <div
                style="background-color: #ffffff; width: 10px; height: 20px"
              ></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  return {subject, html};
}