const db = require("../models");
const config = require("../config/auth.config");

const Weight = db.weight;

const Op = db.Sequelize.Op;


exports.save_weight = (req, res) => {
    Weight.create({
        weight: req.body.weight,
        userId: req.body.user_id
    }).then(() => {
        res.send({ message: "Weight has been added successfully." });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.get_weight_history = (req, res) => {
    Weight.findAll({
        where: {
            userId: req.query.user_id
        }
    }).then(weight => {
        if (!weight) {
            return res.status(404).send({ message: "No weight records found." })
        }
        res.status(200).send(res.json(weight));
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.update_weight = (req, res) => {
    const id = req.body.id;
    Weight.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Weight was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Weight with id=${id}. Maybe Weight was not found or req.body is empty!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error updating Weight with id = " + id
        });
    });
};

exports.delete_weight = (req, res) => {
    const id = req.body.id;
    Weight.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Weight was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete weight with id = ${id}. Maybe weight was not found!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Could not delete weight with id = " + id
        });
    });
}

