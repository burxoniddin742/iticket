const express = require('express')
const router = express.Router();
const districtController = require("../controller/districtController")

/** 
* @swagger
* tags:
*    name: Districts
*    description: Districts management
*/

/**
* @swagger
* /api/districts:
*  post:
*     tags: [Districts]
*     summary: Create a new district
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*               region_id:
*                 type: number
*     responses:
*       201:
*         description: district created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/districts", districtController.createDistrict)

/**
* @swagger
* /api/districts:
*   get:
*     tags: [Districts]
*     summary: Get all districts
*     responses:
*       200: 
*         description: List of districts
*       500:
*         description: Server error
*/
router.get("/districts", districtController.getDistrict)

/**
* @swagger
* /api/districts/{id}:
*   get:
*     tags: [Districts]
*     summary: Update districts by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: district ID
*     responses:
*       '200':
*         description: District detailes
*       '400':
*         description: District not found
*       '500':
*         description: Server error
*/
router.get("/districts/:id", districtController.getDistrictById)

/**
 * @swagger
 * /api/districts/{id}:
 *   put:
 *     tags: [Districts]
 *     summary: Update district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
*               name:
*                 type: string
*               region_id:
*                 type: number
 *     responses:
 *       200:
 *         description: District updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.put("/districts/:id", districtController.updateDistrict)

/**
 * @swagger
 * /api/districts/{id}:
 *   delete:
 *     tags: [Districts]
 *     summary: Delete district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     responses:
 *       204:
 *         description: District deleted
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.delete("/districts/:id", districtController.deleteDistrict)

module.exports = router