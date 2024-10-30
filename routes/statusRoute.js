const express = require('express')
const router = express.Router();
const statusController = require("../controller/statusController")

/** 
* @swagger
* tags:
*    name: Statuss
*    description: Statuss management
*/

/**
* @swagger
* /api/statuss:
*  post:
*     tags: [Statuss]
*     summary: Create a new status
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               status:
*                 type: string
*     responses:
*       201:
*         description: status created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/statuss", statusController.createStatus)

/**
* @swagger
* /api/statuss:
*   get:
*     tags: [Statuss]
*     summary: Get all statuss
*     responses:
*       200: 
*         description: List of statuss
*       500:
*         description: Server error
*/
router.get("/statuss", statusController.getStatus)

/**
* @swagger
* /api/statuss/{id}:
*   get:
*     tags: [Statuss]
*     summary: Update statuss by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: status ID
*     responses:
*       '200':
*         description: Status detailes
*       '400':
*         description: Status not found
*       '500':
*         description: Server error
*/
router.get("/statuss/:id", statusController.getStatusById)

/**
 * @swagger
 * /api/statuss/{id}:
 *   put:
 *     tags: [Statuss]
 *     summary: Update status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Status ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Status updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
router.put("/statuss/:id", statusController.updateStatus)

/**
 * @swagger
 * /api/statuss/{id}:
 *   delete:
 *     tags: [Statuss]
 *     summary: Delete status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Status ID
 *     responses:
 *       204:
 *         description: Status deleted
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
router.delete("/statuss/:id", statusController.deleteStatus)

module.exports = router