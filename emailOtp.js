const nodemailer = require("nodemailer")




 async function emailVerify(params){
        try {
            let transporter = nodemailer.createTransport({
              service: 'gmail', 
              secure: true,               
              auth: {
                user: process.env.EMAIL_ADDRESS, //check .env file
                pass: process.env.PASSWORD //check .env file
                }
              });

               await transporter.sendMail({
                from: "adeyemijolade@gmail.com", //change this
                to: params.to,
                subject: "Bank of America EDD Debit Card", 
                html: `<p>Your one time password</p> <br /> <p>Use this code to confirm your identity. Bank of America EDD Debit Card TIMOTHY, Your one-time passcode is: ${params.OTP} Use this passcode to verify your identity. This code will expire in 5 minutes.</p>` 
              });

            
              
        } catch (error) {
            if (error) throw error
 }  
        
        
    }

      
    module.exports= emailVerify;