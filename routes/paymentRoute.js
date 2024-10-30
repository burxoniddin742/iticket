const express = require('express')
const router = express.Router();
const paymentController = require("../controller/paymentController")

/** 
* @swagger
* tags:
*    name: Payments
*    description: Payments management
*/

/**
* @swagger
* /api/payments:
*  post:
*     tags: [Payments]
*     summary: Create a new payment
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
*         description: payment created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/payments", paymentController.createPayment)

/**
* @swagger
* /api/payments:
*   get:
*     tags: [Payments]
*     summary: Get all payments
*     responses:
*       200: 
*         description: List of payments
*       500:
*         description: Server error
*/
router.get("/payments", paymentController.getPayment)

/**
* @swagger
* /api/payments/{id}:
*   get:
*     tags: [Payments]
*     summary: Update payments by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: payment ID
*     responses:
*       '200':
*         description: Payment detailes
*       '400':
*         description: Payment not found
*       '500':
*         description: Server error
*/
router.get("/payments/:id", paymentController.getPaymentById)

/**
 * @swagger
 * /api/payments/{id}:
 *   put:
 *     tags: [Payments]
 *     summary: Update payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
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
 *         description: Payment updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
router.put("/payments/:id", paymentController.updatePayment)

/**
 * @swagger
 * /api/payments/{id}:
 *   delete:
 *     tags: [Payments]
 *     summary: Delete payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     responses:
 *       204:
 *         description: Payment deleted
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
router.delete("/payments/:id", paymentController.deletePayment)

module.exports = router