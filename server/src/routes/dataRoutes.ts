import { Router, Request, Response } from 'express';
import DataSet from '../models/DataSet';

const router = Router();

// GET /api/data - Retrieve all dataset listings
router.get('/', async (req: Request, res: Response) => {
  try {
    const dataSets = await DataSet.find();
    res.json(dataSets);
  } catch {
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST /api/data - Create a new dataset listing
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, description, dataUrl } = req.body;
    const newDataSet = new DataSet({ title, description, dataUrl });
    const savedDataSet = await newDataSet.save();
    res.status(201).json(savedDataSet);
  } catch {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
