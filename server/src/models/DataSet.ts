import mongoose, { Schema, Document } from 'mongoose';

export interface IDataSet extends Document {
  title: string;
  description: string;
  dataUrl: string;
  createdAt: Date;
}

const DataSetSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dataUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IDataSet>('DataSet', DataSetSchema);
