const usermodel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tourmodel = require('../models/tourModel');
const orderModel = require('../models/orderModel');
const cartmodel = require('../models/cartModel');

class user {
    static async useregister(req, res) {
        try {
            const { name, email, password } = req.body;

            let salt = bcrypt.genSaltSync(10);
            let hashpass = bcrypt.hashSync(password, salt);

            let newuser = new usermodel({ name, email, password: hashpass });
            newuser = await newuser.save();

            res.status(201).json({ message: 'new user registered', newuser });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'error while registering user' });
        }
    }

    static async userlogin(req, res) {
        try {
            const { email, password } = req.body;

            let matchmail = await usermodel.findOne({ email });
            if (!matchmail) {
                res.status(201).json({ message: 'email does not match' })
            }

            let passmatch = bcrypt.compareSync(password, matchmail.password);
            if (!passmatch) {
                res.status(201).json({ message: 'password does not match' })
            }

            let token = jwt.sign({ id: matchmail._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

            res.status(201).json({ message: 'user login successful', token })
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'error while user login' })
        }
    }

    static async getuser(req, res) {
        try {
            const userid = req.id;

            let user = await usermodel.findOne({ _id: userid });
            if (!user) {
                res.status(201).json({ message: 'email does not match' })
            }

            res.status(201).json({ message: 'user get successful', user })
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'error while getting user' })
        }
    }

    static async getalltour(req, res) {
        try {
            let alltour = await tourmodel.find();
            res.status(201).json({ message: 'all tours present', alltour });
        }
        catch (error) {
            console.log(error);
            req.status(404).json({ message: 'error while getting all tours' });
        }
    }

    static async getour(req, res) {
        try {
            const tourname = req.params.name;

            let tour = await tourmodel.findOne({ _id: tourname });
            if (!tour) {
                res.status(201).json({ message: 'tour does not exist' })
            }

            res.status(201).json({ message: 'tour find successful', tour });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'error while getting tour' });
        }
    }

    static async postcart(req, res) {
        try {
            const { name, image, person, price, total, tourid, startdate } = req.body;
            const userid = req.id;

            let cart = new cartmodel({ name, image, person, price, total, tour: tourid, user: userid, startdate });
            cart = await cart.save();

            let userupdate = await usermodel.updateOne({ _id: userid }, {
                $push: {
                    cartitems: cart._id
                }
            })

            res.status(201).json({ message: 'cart creation successful', cart, userupdate });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'error while creating cart' });
        }
    }

    static async updatecart(req, res) {
        try {
            const { person, cartid, total } = req.body;

            let cart = await cartmodel.updateOne({ _id: cartid }, {
                $set: {
                    person, total
                }
            })

            res.status(201).json({ message: 'cart update successful', cart });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'error while updating cart' });
        }
    }

    static async deletecart(req, res) {
        try {
            const { cartid } = req.body;
            const userid = req.id;

            let userupdate = await usermodel.updateOne({ _id: userid }, {
                $pull: {
                    cartitems: cartid
                }
            })

            let cart = await cartmodel.deleteOne({ _id: cartid })

            res.status(204).json({ message: 'cartitem delete successful', cart, userupdate });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'error while deleting cartitem' });
        }
    }

    static async deleteallcart(req, res) {
        try {
            const userid = req.id;

            let userupdate = await usermodel.updateOne({ _id: userid }, {
                $set: {
                    cartitems: []
                }
            })

            let cart = await cartmodel.deleteMany({});

            res.status(204).json({ message: 'all cartitem delete successful', cart, userupdate });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'error while deleting all cartitem' });
        }
    }

    static async getcart(req, res) {
        try {
            const userid = req.id;

            let cart = await cartmodel.find({ user: userid });
            if (!cart) {
                res.status(201).json({ message: 'cart does not exist' })
            }

            res.status(201).json({ message: 'cart find successful', cart });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: 'error while getting cart' });
        }
    }

    static async tourorder(req, res) {
        try {
            const { username, email, tourname, person, tour, startdate, price, total, image } = req.body;
            const user = req.id;

            let neworder = new orderModel({
                username, email, tourname, person, tour, startdate,
                price, total, user, image
            });
            neworder = await neworder.save();

            let userupdate = await usermodel.updateOne({ _id: user }, {
                $push: {
                    orders: neworder._id
                }
            })

            res.status(201).json({ message: 'tour booked successfully', tour, userupdate });
        }
        catch (error) {
            console.log(error);
            res.status(201).json({ message: 'error while booking tour' })
        }
    }

    static async getorders(req, res) {
        try {
            let userid = req.id;
            let orders = await orderModel.find({ user: userid });

            res.status(201).json({ message: 'all orders of user got successfully', orders });
        }
        catch (error) {
            console.log(error);
            res.status(201).json({ message: 'error while getting user all orders' })
        }
    }
}

module.exports = user;
