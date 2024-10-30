const express = require('express')
const router = express.Router();
const customer_addressController = require("../controller/customer_addressController")

/** 
* @swagger
* tags:
*    name: Customer_addresss
*    description: Customer_addresss management
*/

/**
* @swagger
* /api/customer_addresss:
*  post:
*     tags: [Customer_addresss]
*     summary: Create a new customer_address
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               customer_id:
*                 type: number
*               country_id:
*                 type: number
*               name:
*                 type: string
*               region_id:
*                 type: number
*               district_id:
*                 type: number
*               street:
*                 type: string
*               house:
*                 type: string
*               flat:
*                 type: number
*               location:
*                 type: string
*               post_index:
*                 type: string
*               info:
*                 type: string
*     responses:
*       201:
*         description: customer_address created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/customer_addresss", customer_addressController.createCustomer_address)

/**
* @swagger
* /api/customer_addresss:
*   get:
*     tags: [Customer_addresss]
*     summary: Get all customer_addresss
*     responses:
*       200: 
*         description: List of customer_addresss
*       500:
*         description: Server error
*/
router.get("/customer_addresss", customer_addressController.getCustomer_address)

/**
* @swagger
* /api/customer_addresss/{id}:
*   get:
*     tags: [Customer_addresss]
*     summary: Update customer_addresss by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: customer_address ID
*     responses:
*       '200':
*         description: Customer_address detailes
*       '400':
*         description: Customer_address not found
*       '500':
*         description: Server error
*/
router.get("/customer_addresss/:id", customer_addressController.getCustomer_addressById)

/**
 * @swagger
 * /api/customer_addresss/{id}:
 *   put:
 *     tags: [Customer_addresss]
 *     summary: Update customer_address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_address ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
*               customer_id:
*                 type: number
*               country_id:
*                 type: number
*               name:
*                 type: string
*               region_id:
*                 type: number
*               district_id:
*                 type: number
*               street:
*                 type: string
*               house:
*                 type: string
*               flat:
*                 type: number
*               location:
*                 type: string
*               post_index:
*                 type: string
*               info:
*                 type: string
 *     responses:
 *       200:
 *         description: Customer_address updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer_address not found
 *       500:
 *         description: Server error
 */
router.put("/customer_addresss/:id", customer_addressController.updateCustomer_address)

/**
 * @swagger
 * /api/customer_addresss/{id}:
 *   delete:
 *     tags: [Customer_addresss]
 *     summary: Delete customer_address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_address ID
 *     responses:
 *       204:
 *         description: Customer_address deleted
 *       404:
 *         description: Customer_address not found
 *       500:
 *         description: Server error
 */
router.delete("/customer_addresss/:id", customer_addressController.deleteCustomer_address)

module.exports = router