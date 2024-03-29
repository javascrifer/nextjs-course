import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  name: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'John Doe' });
};

export default handler;
