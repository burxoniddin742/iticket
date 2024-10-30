const express = require('express')
const router = express.Router();
const venueController = require("../controller/venueController")

/** 
* @swagger
* tags:
*    name: Venues
*    description: Venues management
*/

/**
* @swagger
* /api/venues:
*  post:
*     tags: [Venues]
*     summary: Create a new venue
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*               address:
*                 type: string
*               location:
*                 type: string
*               site:
*                 type: string
*               phone:
*                 type: string
*               venue_type_id:
*                 type: number
*               house:
*                 type: string
*               region_id:
*                 type: number
*               district_id:
*                 type: number
*     responses:
*       201:
*         description: venue created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/venues", venueController.createVenue)

/**
* @swagger
* /api/venues:
*   get:
*     tags: [Venues]
*     summary: Get all venues
*     responses:
*       200: 
*         description: List of venues
*       500:
*         description: Server error
*/
router.get("/venues", venueController.getVenue)

/**
* @swagger
* /api/venues/{id}:
*   get:
*     tags: [Venues]
*     summary: Update venues by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: venue ID
*     responses:
*       '200':
*         description: Venue detailes
*       '400':
*         description: Venue not found
*       '500':
*         description: Server error
*/
router.get("/venues/:id", venueController.getVenueById)

/**
 * @swagger
 * /api/venues/{id}:
 *   put:
 *     tags: [Venues]
 *     summary: Update venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
*               name:
*                 type: string
*               address:
*                 type: string
*               location:
*                 type: string
*               site:
*                 type: string
*               phone:
*                 type: string
*               venue_type_id:
*                 type: number
*               house:
*                 type: string
*               region_id:
*                 type: number
*               district_id:
*                 type: number
 *     responses:
 *       200:
 *         description: Venue updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.put("/venues/:id", venueController.updateVenue)

/**
 * @swagger
 * /api/venues/{id}:
 *   delete:
 *     tags: [Venues]
 *     summary: Delete venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     responses:
 *       204:
 *         description: Venue deleted
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.delete("/venues/:id", venueController.deleteVenue)

module.exports = router