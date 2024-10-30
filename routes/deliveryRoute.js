const express = require('express')
const router = express.Router();
const deliveryController = require("../controller/deliveryController")

/** 
* @swagger
* tags:
*    name: Deliverys
*    description: Deliverys management
*/

/**
* @swagger
* /api/deliverys:
*  post:
*     tags: [Deliverys]
*     summary: Create a new delivery
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*     responses:
*       201:
*         description: delivery created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/deliverys", deliveryController.createDelivery)

/**
* @swagger
* /api/deliverys:
*   get:
*     tags: [Deliverys]
*     summary: Get all deliverys
*     responses:
*       200: 
*         description: List of deliverys
*       500:
*         description: Server error
*/
router.get("/deliverys", deliveryController.getDelivery)

/**
* @swagger
* /api/deliverys/{id}:
*   get:
*     tags: [Deliverys]
*     summary: Update deliverys by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: delivery ID
*     responses:
*       '200':
*         description: Delivery detailes
*       '400':
*         description: Delivery not found
*       '500':
*         description: Server error
*/
router.get("/deliverys/:id", deliveryController.getDeliveryById)

/**
 * @swagger
 * /api/deliverys/{id}:
 *   put:
 *     tags: [Deliverys]
 *     summary: Update delivery by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Delivery updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
router.put("/deliverys/:id", deliveryController.updateDelivery)

/**
 * @swagger
 * /api/deliverys/{id}:
 *   delete:
 *     tags: [Deliverys]
 *     summary: Delete delivery by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery ID
 *     responses:
 *       204:
 *         description: Delivery deleted
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
router.delete("/deliverys/:id", deliveryController.deleteDelivery)

module.exports = router