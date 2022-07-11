const express = require('express')
const app = express()
const PORT = 9000

const refridgerator = {

    'top shelf': {
        'top shelf': ['seltzer', 'budweiser']
    },
    'middle shelf' : {
        'middle shelf': ['salad', 'chicken']
    },
    'bottom shelf' : {
        'bottom shelf': ['Water','Orange Juice']
    },
    'freezer' : {
        'freezer': ['frozen strawberries', 'broccoli', 'asparagus', 'frozen chicken']
    },
    'side shelf' : {
        'side shelf' : ['butter', 'jelly', 'soy sauce', 'ketchup']
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const shelf = req.params.name.toLowerCase()
    if (refridgerator[shelf]) {
        res.json(refridgerator[shelf])
    }

})

app.listen(PORT , ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})