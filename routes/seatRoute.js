const express = require('express')
const router = express.Router();
const seatController = require("../controller/seatController")

/** 
* @swagger
* tags:
*    name: Seats
*    description: Seats management
*/

/**
* @swagger
* /api/seats:
*  post:
*     tags: [Seats]
*     summary: Create a new seat
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               sector:
*                 type: number
*               row_number:
*                 type: number
*               number:
*                 type: number
*               venue_id:
*                 type: number
*               seat_type_id:
*                 type: number
*     responses:
*       201:
*         description: seat created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/seats", seatController.createSeat)

/**
* @swagger
* /api/seats:
*   get:
*     tags: [Seats]
*     summary: Get all seats
*     responses:
*       200: 
*         description: List of seats
*       500:
*         description: Server error
*/
router.get("/seats", seatController.getSeat)

/**
* @swagger
* /api/seats/{id}:
*   get:
*     tags: [Seats]
*     summary: Update seats by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: seat ID
*     responses:
*       '200':
*         description: Seat detailes
*       '400':
*         description: Seat not found
*       '500':
*         description: Server error
*/
router.get("/seats/:id", seatController.getSeatById)

/**
 * @swagger
 * /api/seats/{id}:
 *   put:
 *     tags: [Seats]
 *     summary: Update seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
*               sector:
*                 type: number
*               row_number:
*                 type: number
*               number:
*                 type: number
*               venue_id:
*                 type: number
*               seat_type_id:
*                 type: number
 *     responses:
 *       200:
 *         description: Seat updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
router.put("/seats/:id", seatController.updateSeat)

/**
 * @swagger
 * /api/seats/{id}:
 *   delete:
 *     tags: [Seats]
 *     summary: Delete seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       204:
 *         description: Seat deleted
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
router.delete("/seats/:id", seatController.deleteSeat)

module.exports = router