
const { query } = require('express')
const product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const products = await product.find({})
    res.status(200).json({ products })
}
const getAllProducts = async (req, res) => {
    const { featured, name, sort, fields, numericFilters } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true :false
    }

    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }

    if(numericFilters){
        const operatorMap = {
            '>' : '$gt',
            '>=' : '$gte',
            '=' : '$eq',
            '<' : '$lt',
            '<=' : '$lte',
        }
        const regEx = /\b(<|>|>=|=|<|<=)|\b.g
        let filters = numericFilters.replace(regEx,(match)=>`-${operatorMap[match]}-`
        )
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach(item)=>{
            const [field,operator, value] = item.split('-')
            if(options.include(field)){
                queryObject[field] = {[operator]: Number(valueg)}
            }
        }

    }
    
    

    const result = product.find(queryObject);
    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList)
    }

    if (fields) {
        const fieldList = fields.split(',').join(' ');
        result = result.select(fieldList)
    }

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit)

    const products = await result

    res.status(200).json({products})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}