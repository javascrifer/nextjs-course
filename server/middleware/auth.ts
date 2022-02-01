import type { NextApiHandler } from 'next';

interface ForbiddenResponse {
  error: string;
}

type Middleware<T> = (handler: NextApiHandler<T>) => NextApiHandler<T>;

export const withAuth: Middleware<unknown | ForbiddenResponse> =
  (handler) => (req, res) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (req.session) {
      return handler(req, res);
    }

    return res.status(403).json({ error: 'forbidden' });
  };
