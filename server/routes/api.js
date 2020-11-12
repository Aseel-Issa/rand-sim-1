const express = require('express')
const router = express.Router()

const todos = []
let id = 1

router.get('/todos', function (req, res) {
    res.send(todos)
})

router.post('/todo', function (req, res) {
    const text = req.body.text
    const newTodo = { id: id++, text: text, complete: false , priority:'low'}
    todos.push(newTodo)
    res.send(todos)
})

router.put('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    const item = todos.find(t => t.id == todoID)
    item.complete = !(item.complete)
    res.send(todos)
})

router.put('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    const item = todos.find(t => t.id == todoID)
    if(item.priority == 'low'){
        item.priority = 'med'
    }else if(item.priority == 'med'){
        item.priority = 'heigh'
    }else{
        item.priority = 'low'
    }
    
    res.send(todos)
})

router.delete('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    for(let i=0; i<todos.length; i++){
        if(todos[i].id== todoID){
            todos.splice(i, 1)
            break
        }
    }
    
    console.log('hello')
    res.send(todos)
})

module.exports = router