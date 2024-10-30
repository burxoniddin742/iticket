const express = require('express')
const router = express.Router();
const venue_photoController = require("../controller/venue_photoController")

/** 
* @swagger
* tags:
*    name: Venue_photos
*    description: Venue_photos management
*/

/**
* @swagger
* /api/venue_photos:
*  post:
*     tags: [Venue_photos]
*     summary: Create a new venue_photo
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               venue_id:
*                 type: number
*               url:
*                 type: string
*     responses:
*       201:
*         description: venue_photo created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/venue_photos", venue_photoController.createVenue_photo)

/**
* @swagger
* /api/venue_photos:
*   get:
*     tags: [Venue_photos]
*     summary: Get all venue_photos
*     responses:
*       200: 
*         description: List of venue_photos
*       500:
*         description: Server error
*/
router.get("/venue_photos", venue_photoController.getVenue_photo)

/**
* @swagger
* /api/venue_photos/{id}:
*   get:
*     tags: [Venue_photos]
*     summary: Update venue_photos by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: venue_photo ID
*     responses:
*       '200':
*         description: Venue_photo detailes
*       '400':
*         description: Venue_photo not found
*       '500':
*         description: Server error
*/
router.get("/venue_photos/:id", venue_photoController.getVenue_photoById)

/**
 * @swagger
 * /api/venue_photos/{id}:
 *   put:
 *     tags: [Venue_photos]
 *     summary: Update venue_photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_photo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
*           schema:
*             type: object
*             properties:
*               venue_id:
*                 type: number
*               url:
*                 type: string
*     responses:
*       200:
*         description: Venue_photo updated
*       400:
*         description: Invalid input
*       404:
*         description: Venue_photo not found
*       500:
*         description: Server error
*/
router.put("/venue_photos/:id", venue_photoController.updateVenue_photo)

/**
 * @swagger
 * /api/venue_photos/{id}:
 *   delete:
 *     tags: [Venue_photos]
 *     summary: Delete venue_photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_photo ID
 *     responses:
 *       204:
 *         description: Venue_photo deleted
 *       404:
 *         description: Venue_photo not found
 *       500:
 *         description: Server error
 */
router.delete("/venue_photos/:id", venue_photoController.deleteVenue_photo)

module.exports = router