const express = require('express')

const users = [{ name: 'haki', email: 'hakifred20@gmail.com' }, { name: 'farida', email: 'farida@yahoo.com' }]

const PORT = process.env.port || 5000

const app = express()

app.get('/api/users', (req, res) => {
    return res.status(200).json(users)
})

app.listen(PORT, () => {
    console.log('server started!')
})