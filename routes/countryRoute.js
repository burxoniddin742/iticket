const express = require('express')
const router = express.Router();
const countryController = require("../controller/countryController")

/** 
* @swagger
* tags:
*    name: Countrys
*    description: Countrys management
*/

/**
* @swagger
* /api/countrys:
*  post:
*     tags: [Countrys]
*     summary: Create a new country
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               country:
*                 type: string
*     responses:
*       201:
*         description: country created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/countrys", countryController.createCountry)

/**
* @swagger
* /api/countrys:
*   get:
*     tags: [Countrys]
*     summary: Get all countrys
*     responses:
*       200: 
*         description: List of countrys
*       500:
*         description: Server error
*/
router.get("/countrys", countryController.getCountry)

/**
* @swagger
* /api/countrys/{id}:
*   get:
*     tags: [Countrys]
*     summary: Update countrys by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: country ID
*     responses:
*       '200':
*         description: Country detailes
*       '400':
*         description: Country not found
*       '500':
*         description: Server error
*/
router.get("/countrys/:id", countryController.getCountryById)

/**
 * @swagger
 * /api/countrys/{id}:
 *   put:
 *     tags: [Countrys]
 *     summary: Update country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
*               country:
*                 type: string
 *     responses:
 *       200:
 *         description: Country updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.put("/countrys/:id", countryController.updateCountry)

/**
 * @swagger
 * /api/countrys/{id}:
 *   delete:
 *     tags: [Countrys]
 *     summary: Delete country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     responses:
 *       204:
 *         description: Country deleted
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.delete("/countrys/:id", countryController.deleteCountry)

module.exports = router