const express = require('express')
const app = express()
const { products } = require('./data')

app.use(express.static('./server'))

app.get('/api/v1/test', (req,res) => {
    res.json({message: 'It worked!'})
})

app.get('/api/v1/products', (req,res) => {
    res.json(products)
})

app.get('/api/v1/products/:productID', (req,res) => {
    const idToFind = parseInt(req.params.productID) 
    const product = products.find((p) => p.id === idToFind)

    if(!product){
        return res.status(404).send('That product not foud')
    }
    res.json(product)

})

app.get('/api/v1/query', (req,res) => {
    
    const { search, limit, price } = req.query
    console.log(req.query)
    let sortedProducts = [...products]
    
if(search){
    sortedProducts = sortedProducts.filter((product)=> {
        return product.name.startsWith(search)
    })
}
if(limit){
    sortedProducts = sortedProducts.slice(0,Number(limit))
}
if(price){
    sortedProducts = sortedProducts.filter((product)=> {
        return product.price < Number(price)
    })

}

res.status(200).send(sortedProducts)
})


app.all('*', (req,res) => {
    res.status(404).send('Page not found')
})

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})