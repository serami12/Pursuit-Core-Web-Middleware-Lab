const express = require('express');
const app = express();

const port = 3000;
const listOfAnimal = ['zebra', 'tiger', 'lion', 'elephant']

const isAnimal = (req, res, next) => {
    console.log("req params", req.params.animal)
    let animalParams = req.params.animal
    console.log(listOfAnimal)
    for (let i = 0; i < listOfAnimal.length; i++) {
        if (animalParams === listOfAnimal[i]) {
            res.json({
                status: "success",
                message: true
            })
        }
    }
    res.json({
        status: "failure",
        message: false
    })

}

app.get('/animal/:animal', isAnimal)
app.listen(port, () => {
    console.log(`listening to http://localhost:${port}`)
})