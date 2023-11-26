const express = require('express')
const app = express()
const router = require('./routes/people')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1/people', router)

//app.get('/api/v1/people', (req,res) => {
//    res.status(200).json({success: true, data:people})
//})

//app.post('/api/v1/people', (req,res) =>{
//    if (!req.body.name){
//        return res.status(400).json({success: false, message: 'Please provide a name'})
//    }
//    people.push({id: Number(people.length + 1), name: req.body.name})
//    res.status(201).json({success: true, name: req.body.name})
//})

app.listen(3000, () => {
    console.log('server is listening on 3000....')
})