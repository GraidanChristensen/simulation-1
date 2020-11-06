module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(products => {
            res.status(200).send(products);
        }).catch(err => {
            res.status(500).send("Oops! Something went wrong");
        })
    },

    addProduct: (req, res) => {
        const db = req.app.get('db');
        const {url, name, price} = req.body;

        db.add_product(name, url, price)
        .then(() => {
            res.status(200)
        }).catch(err => {
            console.log(err);
            res.status(500).send("Oops! Something went wrong");
        })

    }
}