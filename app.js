const express = require('express')

const app = express()
const PORT = 3000

// home page
app.get('/', (req, res) => {
    res.send('server is online')
})

// data page
app.get('/data', (req, res) => {
    const data = {
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
    res.send(data)
})

app.listen(PORT, () => {
    console.log(`App listen at http://localhost:${PORT}`)
})