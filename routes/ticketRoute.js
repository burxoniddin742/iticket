const express = require('express')
const router = express.Router();
const ticketController = require("../controller/ticketController")

/** 
* @swagger
* tags:
*    name: Tickets
*    description: Tickets management
*/

/**
* @swagger
* /api/tickets:
*  post:
*     tags: [Tickets]
*     summary: Create a new ticket
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               event_id:
*                 type: number
*               seat_id:
*                 type: number
*               price:
*                 type: number
*               service_fee:
*                 type: number
*               status_id:
*                 type: number
*               ticket_type:
*                 type: number
*     responses:
*       201:
*         description: ticket created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/tickets", ticketController.createTicket)

/**
* @swagger
* /api/tickets:
*   get:
*     tags: [Tickets]
*     summary: Get all tickets
*     responses:
*       200: 
*         description: List of tickets
*       500:
*         description: Server error
*/
router.get("/tickets", ticketController.getTicket)

/**
* @swagger
* /api/tickets/{id}:
*   get:
*     tags: [Tickets]
*     summary: Update tickets by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: ticket ID
*     responses:
*       '200':
*         description: Ticket detailes
*       '400':
*         description: Ticket not found
*       '500':
*         description: Server error
*/
router.get("/tickets/:id", ticketController.getTicketById)

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     tags: [Tickets]
 *     summary: Update ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
*               event_id:
*                 type: number
*               seat_id:
*                 type: number
*               price:
*                 type: number
*               service_fee:
*                 type: number
*               status_id:
*                 type: number
*               ticket_type:
*                 type: number
 *     responses:
 *       200:
 *         description: Ticket updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.put("/tickets/:id", ticketController.updateTicket)

/**
 * @swagger
 * /api/tickets/{id}:
 *   delete:
 *     tags: [Tickets]
 *     summary: Delete ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       204:
 *         description: Ticket deleted
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.delete("/tickets/:id", ticketController.deleteTicket)

module.exports = router