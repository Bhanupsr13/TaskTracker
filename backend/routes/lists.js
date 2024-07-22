const express = require('express')
const router = express.Router()
const {
        getitems,
        getItem,
        addItem,
        deleteItem,
        updateItem
} = require('../contollers/listController')

// Get all items.
router.get('/', getitems)

// Get a single item.
router.get('/:id', getItem)

// Add to todo list.
router.post('/', addItem)

// Delete a single item.
router.delete('/:id', deleteItem)

// Update a single item.
router.patch('/:id', updateItem)

module.exports = router