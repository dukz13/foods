const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

const randomId =() => {
    return Math.floor(Math.random()*99999)
}

const foods =[
    { id: randomId(), name: 'ผัดผัก'},
    { id: randomId(), name: 'ข้าวผัด'},
    { id: randomId(), name: 'ผัดเผ็ด'}
]
// get funtion
app.get('/food', (req, res) => {

  res.send(foods)
})
// get create function
app.post('/food', (req, res) => {
    const body = req.body;
    const tempFoods = {id: randomId(), name: body.name}
    foods.push(tempFoods);

    res.send({ message:  'insert sccuss'})
  })


// get update function
app.put('/food', (req, res) => {

    const body = req.body;
    const tempObj = foods.find(item => item.id == body.id);
    const findIndex = foods.indexOf(tempObj);
    const newObject = { ...tempObj, name: body.name};

    foods.splice(findIndex,1,newObject);
   

    res.send({ message:  'insert sccuss'})
  })

// get Del function
app.delete('/food', (req, res) => {

    const body = req.body;
    const tempObj = foods.find(item => item.id == body.id);
    const findIndex = foods.indexOf(tempObj);
    

    foods.splice(findIndex, 1);
   

    res.send({ message:  'del sccuss'})
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})