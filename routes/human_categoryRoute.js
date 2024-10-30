const express = require('express')
const router = express.Router();
const human_categoryController = require("../controller/human_categoryController")

/** 
* @swagger
* tags:
*    name: Human_categorys
*    description: Human_categorys management
*/

/**
* @swagger
* /api/human_categorys:
*  post:
*     tags: [Human_categorys]
*     summary: Create a new human_category
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*               start_age:
*                 type: string
*               finish_age:
*                 type: string
*               gender_id:
*                 type: number
*     responses:
*       201:
*         description: human_category created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/human_categorys", human_categoryController.createHuman_category)

/**
* @swagger
* /api/human_categorys:
*   get:
*     tags: [Human_categorys]
*     summary: Get all human_categorys
*     responses:
*       200: 
*         description: List of human_categorys
*       500:
*         description: Server error
*/
router.get("/human_categorys", human_categoryController.getHuman_category)

/**
* @swagger
* /api/human_categorys/{id}:
*   get:
*     tags: [Human_categorys]
*     summary: Update human_categorys by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: human_category ID
*     responses:
*       '200':
*         description: Human_category detailes
*       '400':
*         description: Human_category not found
*       '500':
*         description: Server error
*/
router.get("/human_categorys/:id", human_categoryController.getHuman_categoryById)

/**
 * @swagger
 * /api/human_categorys/{id}:
 *   put:
 *     tags: [Human_categorys]
 *     summary: Update human_category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human_category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
*               name:
*                 type: string
*               start_age:
*                 type: string
*               finish_age:
*                 type: string
*               gender:
*                 type: string
 *     responses:
 *       200:
 *         description: Human_category updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Human_category not found
 *       500:
 *         description: Server error
 */
router.put("/human_categorys/:id", human_categoryController.updateHuman_category)

/**
 * @swagger
 * /api/human_categorys/{id}:
 *   delete:
 *     tags: [Human_categorys]
 *     summary: Delete human_category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human_category ID
 *     responses:
 *       204:
 *         description: Human_category deleted
 *       404:
 *         description: Human_category not found
 *       500:
 *         description: Server error
 */
router.delete("/human_categorys/:id", human_categoryController.deleteHuman_category)

module.exports = router