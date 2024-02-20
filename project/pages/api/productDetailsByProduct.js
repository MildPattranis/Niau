// pages/api/products.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { productID } = req.query;

            if (!productID) {
                return res.status(400).json({ error: 'productID parameter is required' });
            }

            const product = await prisma.productDetail.findUnique({
                where: {
                    productID: parseInt(productID)
                }
            });

            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }

            res.status(200).json(product);
        } catch (error) {
            console.error('Error fetching product:', error);
            res.status(500).json({ error: 'Error fetching product' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
