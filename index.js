const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 3000

app.use(bodyParser.json())

const PostsController = require('./controlller/posts')

app.group("/api/v1", (router) => {
    
    router.get('/posts', PostsController.index)    
    router.get('/post/:id', PostsController.show)    
    router.post('/post', PostsController.store)    
    router.patch('/post/:id', PostsController.update)    
    router.delete('/post/:id', PostsController.delete)
    
})


app.listen(port, () => console.log('Hello World app berjalan di http://localhost:3000'))
