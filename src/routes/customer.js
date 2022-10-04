const { json } = require('express');
const express = require('express');
const router = express.Router();
const {customer, identifier} = require('../models/customermodel');

router.post('/createcustomer', async (req, res) => {
    try {
        const customerObj = {
            name: req.body.name,
            phone: req.body.phone,
        }
        const Customer = new customer(customerObj);
        const createCustomer = await Customer.save();
        res.status(200).json(createCustomer);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.post('/identifycustomer', async (req, res) => {
    try {
        const Obj = {
            customerCode: req.body.customerCode,
            customer: req.body.customer
        }
        const Identify = new identifier(Obj);
        const identify = await Identify.save();
        res.status(200).json(identify);
    } catch (error) {
        res.status(500).send(error);
    }
})
router.get('/customer', async(req, res) => {
    try {
        const customers = await customer.find();
        res.status(200).json(customers);
        return;
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/identifiedcustomer', async(req, res) => {
    try {
        const customers = await identifier.find().populate('customer');
        res.status(200).json(customers);
        return;
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch('/updatecustomer/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const body = {
            name : req.body.name,
            phone: req.body.phone,
        };
        const updateCustomer = await customer.findByIdAndUpdate(_id, body, {
            new: true
        });
        res.status(200).json(updateCustomer);
        return;
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/deletecustomer/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deletecustomer = await customer.findByIdAndDelete(_id);
        res.status(200).json(deletecustomer);
        return;
    }catch (error) {
        res.status(500).send(error);
    }
});

router.get('/report', (req, res) => {
    res.status(200).send(`Running!`)
})

module.exports = router;