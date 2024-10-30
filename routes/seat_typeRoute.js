const express = require('express')
const router = express.Router();
const seat_typeController = require("../controller/seat_typeController")

/** 
* @swagger
* tags:
*    name: Seat_types
*    description: Seat_types management
*/

/**
* @swagger
* /api/seat_types:
*  post:
*     tags: [Seat_types]
*     summary: Create a new seat_type
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
*         description: seat_type created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/seat_types", seat_typeController.createSeat_type)

/**
* @swagger
* /api/seat_types:
*   get:
*     tags: [Seat_types]
*     summary: Get all seat_types
*     responses:
*       200: 
*         description: List of seat_types
*       500:
*         description: Server error
*/
router.get("/seat_types", seat_typeController.getSeat_type)

/**
* @swagger
* /api/seat_types/{id}:
*   get:
*     tags: [Seat_types]
*     summary: Update seat_types by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: seat_type ID
*     responses:
*       '200':
*         description: Seat_type detailes
*       '400':
*         description: Seat_type not found
*       '500':
*         description: Server error
*/
router.get("/seat_types/:id", seat_typeController.getSeat_typeById)

/**
 * @swagger
 * /api/seat_types/{id}:
 *   put:
 *     tags: [Seat_types]
 *     summary: Update seat_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat_type ID
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
 *         description: Seat_type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Seat_type not found
 *       500:
 *         description: Server error
 */
router.put("/seat_types/:id", seat_typeController.updateSeat_type)

/**
 * @swagger
 * /api/seat_types/{id}:
 *   delete:
 *     tags: [Seat_types]
 *     summary: Delete seat_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat_type ID
 *     responses:
 *       204:
 *         description: Seat_type deleted
 *       404:
 *         description: Seat_type not found
 *       500:
 *         description: Server error
 */
router.delete("/seat_types/:id", seat_typeController.deleteSeat_type)

module.exports = router