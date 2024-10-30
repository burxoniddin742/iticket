const express = require('express')
const router = express.Router();
const customer_cardController = require("../controller/customer_cardController")

/** 
* @swagger
* tags:
*    name: Customer_cards
*    description: Customer_cards management
*/

/**
* @swagger
* /api/customer_cards:
*  post:
*     tags: [Customer_cards]
*     summary: Create a new customer_card
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               customer_id:
*                 type: number
*               name:
*                 type: string
*               phone:
*                 type: string
*               number:
*                 type: string
*               year:
*                 type: string
*               month:
*                 type: string
*               is_active:
*                 type: boolean
*               is_main:
*                 type: boolean
*     responses:
*       201:
*         description: customer_card created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/customer_cards", customer_cardController.createCustomer_card)

/**
* @swagger
* /api/customer_cards:
*   get:
*     tags: [Customer_cards]
*     summary: Get all customer_cards
*     responses:
*       200: 
*         description: List of customer_cards
*       500:
*         description: Server error
*/
router.get("/customer_cards", customer_cardController.getCustomer_card)

/**
* @swagger
* /api/customer_cards/{id}:
*   get:
*     tags: [Customer_cards]
*     summary: Update customer_cards by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: customer_card ID
*     responses:
*       '200':
*         description: Customer_card detailes
*       '400':
*         description: Customer_card not found
*       '500':
*         description: Server error
*/
router.get("/customer_cards/:id", customer_cardController.getCustomer_cardById)

/**
 * @swagger
 * /api/customer_cards/{id}:
 *   put:
 *     tags: [Customer_cards]
 *     summary: Update customer_card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_card ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
*               customer_id:
*                 type: number
*               name:
*                 type: string
*               phone:
*                 type: string
*               number:
*                 type: string
*               year:
*                 type: string
*               month:
*                 type: string
*               is_active:
*                 type: boolean
*               is_main:
*                 type: boolean
 *     responses:
 *       200:
 *         description: Customer_card updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer_card not found
 *       500:
 *         description: Server error
 */
router.put("/customer_cards/:id", customer_cardController.updateCustomer_card)

/**
 * @swagger
 * /api/customer_cards/{id}:
 *   delete:
 *     tags: [Customer_cards]
 *     summary: Delete customer_card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_card ID
 *     responses:
 *       204:
 *         description: Customer_card deleted
 *       404:
 *         description: Customer_card not found
 *       500:
 *         description: Server error
 */
router.delete("/customer_cards/:id", customer_cardController.deleteCustomer_card)

module.exports = router