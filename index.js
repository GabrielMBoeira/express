const express = require('express')
const app = express()
const bodyParser = require('body-parser')


require('./api/produto') (app, ' com parametros!!') //já está associando os métodos http dentro da pasta ('./api/produto')




const usuarioApi = require('./api/usuario')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)





app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/opa',(req, res, next) => {
    console.log('Antes..')
    next()
})

app.get('/clientes/relatorio', (req,res) => {
    res.send(`Cliente relatório: Completo ${req.query.completo} ano ${req.query.ano}`)
})


app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })
    // req.on('end', function(){
    //     res.send(corpo)
    // })
    res.send(req.body)
})


app.get('/clientes/:id',(req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})



app.get('/opa',(req, res, next) => {
        console.log('Durante...')
        res.json({
            data: [
                {id: 7, name: 'Ana', position: 1},
                {id: 8, name: 'Bia', position: 2},
                {id: 5, name: 'Gabriel', position: 3}
            ],
            count: 30,
            skip: 0,
            limit: 3,
        })
    // res.json([
        // {id:7, name: 'Ana', position: 1},
        // {id:5, name: 'Bia', position: 2},
        // {id:10, name: 'Gabriel', position: 4}
    // ])

        // res.json({
        //     name: 'Ipad',
        //     price: 1899.00,
        //     discount: 0.12   
        // })
    //res.send('<h1>Estou bem!</h1><br><h2>Tipo é HTML</h2>')  -> pode enviar um HTML
    next()
}) 

app.use('/opa',(req, res) => {
    console.log('Depois..')
})

app.listen(3000, () => {
    console.log('Backend executando..')
})