const houses = require('./db.json')
let houseId = 4



module.exports = {
    getHouses: (req, res) => {
        res.send(houses)
    },
    deleteHouse: (req, res) => {
        const deleteId = req.params.id 
        let index = houses.findIndex(element => element.id === +deleteId)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body


        let newHouse = {
            id: houseId,
            address,
            price: +price,
            imageURL
        }
        // newHouse.price += 1
        // newHouse.price -= 1
        houses.push(newHouse)
        res.status(200).send(houses)
        houseId++
    },
    updateHouse: (req, res) => {
        let { type } = req.body
        let { id } = req.params
        let index = houses.findIndex(elem => +elem.id === +id)

        if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if(type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    }
}