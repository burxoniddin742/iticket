const express = require('express')
const router = express.Router();
const languageController = require("../controller/languageController")

/** 
* @swagger
* tags:
*    name: Languages
*    description: Languages management
*/

/**
* @swagger
* /api/languages:
*  post:
*     tags: [Languages]
*     summary: Create a new language
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               language:
*                 type: string
*               description:
*                 type: string
*     responses:
*       201:
*         description: language created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/languages", languageController.createLanguage)

/**
* @swagger
* /api/languages:
*   get:
*     tags: [Languages]
*     summary: Get all languages
*     responses:
*       200: 
*         description: List of languages
*       500:
*         description: Server error
*/
router.get("/languages", languageController.getLanguage)

/**
* @swagger
* /api/languages/{id}:
*   get:
*     tags: [Languages]
*     summary: Update languages by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: language ID
*     responses:
*       '200':
*         description: Language detailes
*       '400':
*         description: Language not found
*       '500':
*         description: Server error
*/
router.get("/languages/:id", languageController.getLanguageById)

/**
 * @swagger
 * /api/languages/{id}:
 *   put:
 *     tags: [Languages]
 *     summary: Update language by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Language ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               language:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Language updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error
 */
router.put("/languages/:id", languageController.updateLanguage)

/**
 * @swagger
 * /api/languages/{id}:
 *   delete:
 *     tags: [Languages]
 *     summary: Delete language by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Language ID
 *     responses:
 *       204:
 *         description: Language deleted
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error
 */
router.delete("/languages/:id", languageController.deleteLanguage)

module.exports = router