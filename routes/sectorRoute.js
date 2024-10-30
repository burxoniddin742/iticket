const express = require('express')
const router = express.Router();
const sectorController = require("../controller/sectorController")

/** 
* @swagger
* tags:
*    name: Sectors
*    description: Sectors management
*/

/**
* @swagger
* /api/sectors:
*  post:
*     tags: [Sectors]
*     summary: Create a new sector
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               sector_name:
*                 type: string
*     responses:
*       201:
*         description: sector created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/sectors", sectorController.createSector)

/**
* @swagger
* /api/sectors:
*   get:
*     tags: [Sectors]
*     summary: Get all sectors
*     responses:
*       200: 
*         description: List of sectors
*       500:
*         description: Server error
*/
router.get("/sectors", sectorController.getSector)

/**
* @swagger
* /api/sectors/{id}:
*   get:
*     tags: [Sectors]
*     summary: Update sectors by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: sector ID
*     responses:
*       '200':
*         description: Sector detailes
*       '400':
*         description: Sector not found
*       '500':
*         description: Server error
*/
router.get("/sectors/:id", sectorController.getSectorById)

/**
 * @swagger
 * /api/sectors/{id}:
 *   put:
 *     tags: [Sectors]
 *     summary: Update sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sector ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sector updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.put("/sectors/:id", sectorController.updateSector)

/**
 * @swagger
 * /api/sectors/{id}:
 *   delete:
 *     tags: [Sectors]
 *     summary: Delete sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sector ID
 *     responses:
 *       204:
 *         description: Sector deleted
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.delete("/sectors/:id", sectorController.deleteSector)

module.exports = router