const express = require('express')
const router = express.Router();
const venue_typeController = require("../controller/venue_typeController")

/** 
* @swagger
* tags:
*    name: Venue_types
*    description: Venue_types management
*/

/**
* @swagger
* /api/venue_types:
*  post:
*     tags: [Venue_types]
*     summary: Create a new venue_type
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
*         description: venue_type created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/venue_types", venue_typeController.createVenue_type)

/**
* @swagger
* /api/venue_types:
*   get:
*     tags: [Venue_types]
*     summary: Get all venue_types
*     responses:
*       200: 
*         description: List of venue_types
*       500:
*         description: Server error
*/
router.get("/venue_types", venue_typeController.getVenue_type)

/**
* @swagger
* /api/venue_types/{id}:
*   get:
*     tags: [Venue_types]
*     summary: Update venue_types by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: venue_type ID
*     responses:
*       '200':
*         description: Venue_type detailes
*       '400':
*         description: Venue_type not found
*       '500':
*         description: Server error
*/
router.get("/venue_types/:id", venue_typeController.getVenue_typeById)

/**
 * @swagger
 * /api/venue_types/{id}:
 *   put:
 *     tags: [Venue_types]
 *     summary: Update venue_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_type ID
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
 *         description: Venue_type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue_type not found
 *       500:
 *         description: Server error
 */
router.put("/venue_types/:id", venue_typeController.updateVenue_type)

/**
 * @swagger
 * /api/venue_types/{id}:
 *   delete:
 *     tags: [Venue_types]
 *     summary: Delete venue_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_type ID
 *     responses:
 *       204:
 *         description: Venue_type deleted
 *       404:
 *         description: Venue_type not found
 *       500:
 *         description: Server error
 */
router.delete("/venue_types/:id", venue_typeController.deleteVenue_type)

module.exports = router