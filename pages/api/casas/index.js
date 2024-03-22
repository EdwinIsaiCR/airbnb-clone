import { createRouter } from 'next-connect'
import db from '../../../utils/db'
import Casa from '../../../models/Casas';

const router = createRouter();

router
  .get(async (req, res) => {
    //? MONGOOSE FUNCTIONS 
    await db.connect()
    const casas = await Casa.find({});
    await db.disconnect(casas)
    res.send(casas)
  })


export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
  onNoMatch: (req,res) => {
    res.status(404).end('Page is not found');
  }
});