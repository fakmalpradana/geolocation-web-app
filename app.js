const express = require('express')
const expressLayout = require('express-ejs-layouts')

const app = express()
const PORT = 3000

// setup ejs
app.set('view engine', 'ejs')
app.use(expressLayout)
app.use(express.static('public')) 
app.use(express.urlencoded({extended: true})) 

// home page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        layout: 'layout/main'
    })
})

// map layout page
app.get('/map', (req, res) => {
    res.render('map', {
        title: 'Map Page',
        layout: 'layout/main'
    })
})

// data page
app.get('/data', (req, res) => {
    const data1 = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "coordinates": [
                110.36481875548787,
                -7.8013734829515045
              ],
              "type": "Point"
            }
          }
        ]
      }
      const data = JSON.parse(JSON.stringify(data1))
      res.render('data', {
        title: 'Data Page',
        layout: 'layout/main',
        data: data,
    })
})

app.listen(PORT, () => {
    console.log(`App listen at http://localhost:${PORT}`)
})