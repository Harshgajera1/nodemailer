const express = require('express')
const app = express()
const nodemailer  = require('nodemailer')
require('dotenv').config()
const fs = require('fs')
const port = 8000

// Create a Transporter object
const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
})

const templateContent = fs.readFileSync('./template.html','utf-8')

let mailOptions = {
    // form : 'harshgajera@gmail.com',
    to : 'harshgajera202@gmail.com',
    subject: 'Harsh Nodemailer Project',
    html: templateContent,
}


Transporter.sendMail(mailOptions,(err,data)=>{
    if(err){
        console.log("Error ------- " + err)
    } else {
        console.log("Email sent successfully")
    }
})


app.listen(port,()=>{
    console.log(`server start on port ${port}`)
})