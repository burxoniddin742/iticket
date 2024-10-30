const express = require('express')
const router = express.Router();
const genderController = require("../controller/genderController")

/** 
* @swagger
* tags:
*    name: Genders
*    description: Genders management
*/

/**
* @swagger
* /api/genders:
*  post:
*     tags: [Genders]
*     summary: Create a new gender
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
*         description: gender created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/genders", genderController.createGender)

/**
* @swagger
* /api/genders:
*   get:
*     tags: [Genders]
*     summary: Get all genders
*     responses:
*       200: 
*         description: List of genders
*       500:
*         description: Server error
*/
router.get("/genders", genderController.getGender)

/**
* @swagger
* /api/genders/{id}:
*   get:
*     tags: [Genders]
*     summary: Update genders by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: gender ID
*     responses:
*       '200':
*         description: Gender detailes
*       '400':
*         description: Gender not found
*       '500':
*         description: Server error
*/
router.get("/genders/:id", genderController.getGenderById)

/**
 * @swagger
 * /api/genders/{id}:
 *   put:
 *     tags: [Genders]
 *     summary: Update gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Gender ID
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
 *         description: Gender updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
router.put("/genders/:id", genderController.updateGender)

/**
 * @swagger
 * /api/genders/{id}:
 *   delete:
 *     tags: [Genders]
 *     summary: Delete gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Gender ID
 *     responses:
 *       204:
 *         description: Gender deleted
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
router.delete("/genders/:id", genderController.deleteGender)

module.exports = router