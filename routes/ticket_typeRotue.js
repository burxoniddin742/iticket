const express = require('express')
const router = express.Router();
const ticket_typeController = require("../controller/ticket_typeController")

/** 
* @swagger
* tags:
*    name: Ticket_types
*    description: Ticket_types management
*/

/**
* @swagger
* /api/ticket_types:
*  post:
*     tags: [Ticket_types]
*     summary: Create a new ticket_type
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               ticket_id:
*                 type: number
*               color:
*                 type: string
*               name:
*                 type: string
*     responses:
*       201:
*         description: ticket_type created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/ticket_types", ticket_typeController.createTicket_type)

/**
* @swagger
* /api/ticket_types:
*   get:
*     tags: [Ticket_types]
*     summary: Get all ticket_types
*     responses:
*       200: 
*         description: List of ticket_types
*       500:
*         description: Server error
*/
router.get("/ticket_types", ticket_typeController.getTicket_type)

/**
* @swagger
* /api/ticket_types/{id}:
*   get:
*     tags: [Ticket_types]
*     summary: Update ticket_types by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: ticket_type ID
*     responses:
*       '200':
*         description: Ticket_type detailes
*       '400':
*         description: Ticket_type not found
*       '500':
*         description: Server error
*/
router.get("/ticket_types/:id", ticket_typeController.getTicket_typeById)

/**
 * @swagger
 * /api/ticket_types/{id}:
 *   put:
 *     tags: [Ticket_types]
 *     summary: Update ticket_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket_type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               color:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ticket_type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket_type not found
 *       500:
 *         description: Server error
 */
router.put("/ticket_types/:id", ticket_typeController.updateTicket_type)

/**
 * @swagger
 * /api/ticket_types/{id}:
 *   delete:
 *     tags: [Ticket_types]
 *     summary: Delete ticket_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket_type ID
 *     responses:
 *       204:
 *         description: Ticket_type deleted
 *       404:
 *         description: Ticket_type not found
 *       500:
 *         description: Server error
 */
router.delete("/ticket_types/:id", ticket_typeController.deleteTicket_type)

module.exports = router