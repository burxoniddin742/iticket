const express = require('express')
const router = express.Router();
const regionController = require("../controller/regionController")

/** 
* @swagger
* tags:
*    name: Regions
*    description: Regions management
*/

/**
* @swagger
* /api/regions:
*  post:
*     tags: [Regions]
*     summary: Create a new region
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*               postpone:
*                 type: number
*     responses:
*       201:
*         description: region created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/regions", regionController.createRegion)

/**
* @swagger
* /api/regions:
*   get:
*     tags: [Regions]
*     summary: Get all regions
*     responses:
*       200: 
*         description: List of regions
*       500:
*         description: Server error
*/
router.get("/regions", regionController.getRegion)

/**
* @swagger
* /api/regions/{id}:
*   get:
*     tags: [Regions]
*     summary: Update regions by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: region ID
*     responses:
*       '200':
*         description: Region detailes
*       '400':
*         description: Region not found
*       '500':
*         description: Server error
*/
router.get("/regions/:id", regionController.getRegionById)

/**
 * @swagger
 * /api/regions/{id}:
 *   put:
 *     tags: [Regions]
 *     summary: Update region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Region ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
*               name:
*                 type: string
*               postpone:
*                 type: number
 *     responses:
 *       200:
 *         description: Region updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.put("/regions/:id", regionController.updateRegion)

/**
 * @swagger
 * /api/regions/{id}:
 *   delete:
 *     tags: [Regions]
 *     summary: Delete region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Region ID
 *     responses:
 *       204:
 *         description: Region deleted
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.delete("/regions/:id", regionController.deleteRegion)

module.exports = router