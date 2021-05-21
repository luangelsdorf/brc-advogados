/*
require('dotenv').config()

export default function (req, res) {
    console.log('mailer')
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: 'edpereira6161@gmail.com',
            pass: 'ed-pereira-61',
        },
        secure: true,
    })

    console.log('mailData')
    const mailData = {
        from: 'edpereira6161@gmail.com',
        to: 'luanferreira2136@gmail.com',
        subject: `Message from ${req.body.name}`,
        text: req.body.message,
        html: <div>{req.body.message}</div>
    }

    console.log('sendMail')
    transporter.sendMail(mailData, function (err, info) {
        console.log(process.env.password)
        if (err)
            console.log(err)
        else
            console.log(info)
    })

    res.status(200)
}*/
require('dotenv').config()

export default function (req, res) {
    if (req.method === 'POST') {
        let nodemailer = require('nodemailer')
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.email,
                pass: process.env.password,
            },
            secure: true,
        });

        const mailData = {
            from: 'edpereira6161@gmail.com',
            to: 'luanferreira2136@gmail.com',
            subject: `Nova Inscrição | Newsletter Site BRC`,
            text: `Nova inscrição para ${req.body.email}`,
            html: `
                <div>Nova inscrição recebida:</div>
                <p><strong>E-mail</strong>: ${req.body.email}</p>
              `
        }

        transporter.sendMail(mailData, function (err, info) {
            if(err)
                console.log(err)
            else
                console.log(info);
        })


        res.send('success')
    } else {
        res.status(405).send('405 - Method not Allowed.')
    }
}