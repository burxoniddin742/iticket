const express = require('express')
const router = express.Router();
const discountController = require("../controller/discountController")

/** 
* @swagger
* tags:
*    name: Discounts
*    description: Discounts management
*/

/**
* @swagger
* /api/discounts:
*  post:
*     tags: [Discounts]
*     summary: Create a new discount
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               discount:
*                 type: string
*               finish_date:
*                 type: string
*     responses:
*       201:
*         description: discount created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/discounts", discountController.createDiscount)

/**
* @swagger
* /api/discounts:
*   get:
*     tags: [Discounts]
*     summary: Get all discounts
*     responses:
*       200: 
*         description: List of discounts
*       500:
*         description: Server error
*/
router.get("/discounts", discountController.getDiscount)

/**
* @swagger
* /api/discounts/{id}:
*   get:
*     tags: [Discounts]
*     summary: Update discounts by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: discount ID
*     responses:
*       '200':
*         description: Discount detailes
*       '400':
*         description: Discount not found
*       '500':
*         description: Server error
*/
router.get("/discounts/:id", discountController.getDiscountById)

/**
 * @swagger
 * /api/discounts/{id}:
 *   put:
 *     tags: [Discounts]
 *     summary: Update discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discount ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: string
 *               finish_date:
 *                 type: string
 *     responses:
 *       200:
 *         description: Discount updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.put("/discounts/:id", discountController.updateDiscount)

/**
 * @swagger
 * /api/discounts/{id}:
 *   delete:
 *     tags: [Discounts]
 *     summary: Delete discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discount ID
 *     responses:
 *       204:
 *         description: Discount deleted
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.delete("/discounts/:id", discountController.deleteDiscount)

module.exports = router