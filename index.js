import express from 'express'

const app = express()

const router = express.Router()

const port = +process.env.PORT || 4000
//json url
const dataURL = 'https://d-raff.github.io/VueJS-Portfolio-data/data/'
// application middleware
app.use(
    router
)

router.get('^/$|/ejd', (req,res)=>{
    res.json({
        status: res.statusCode,
        msg: "'You\'re home"
    })
})

router.get('/education', async (req, res)=>{
    let {education} = await (await fetch (dataURL)).json()
    res.json({
        status: res.statusCode,
        education
    })
})

app.listen(port, ()=>{
    console.log(`Server is running at https://localhost:${port}`);
})