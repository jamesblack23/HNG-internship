const express = require('express')
const { DateTime } = require('luxon')
const app = express()
const port = process.env.PORT || 8080



app.get('/api', (req, res) => {
    res.send({
        "slack_name": req.query.slack_name,
        "current_day": DateTime.now().toFormat('cccc'),
        "utc_time": DateTime.utc().toISO().slice(0, -5) + 'Z',
        "track": req.query.track,
        "github_file_url": "https://github.com/jamesblack23/HNG-internship/blob/main/index.js",
        "github_repo_url": "https://github.com/jamesblack23/HNG-internship",
        "status_code": 200
    })


})

app.listen(port, () => {
    console.log(`The server is listening on port: ${port}`)
})