import * as Yup from 'yup';
import { parseISO } from 'date-fns';
import Campaign from '../models/Campaign';

class CampaignController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Dados incorretos! Verifique os dados inseridos.' });
    }

    const { name, description } = req.body;

    //  const startDate = parseISO(start_date);
    //  const endDate = parseISO(end_date);
    // const finishedDate = parseISO(finished_date);

    const { id } = await Campaign.create({
      name,
      description,
      start_date: new Date(),
      end_date: new Date(),
      finished_date: new Date(),
      limit_hour_start: '08:00:00',
      limit_hour_end: '09:00:00',
      owner_user: req.userId,
    });

    // const { id } = await Campaign.create({
    //   name,
    //   description,
    //   start_date: new Date(),
    //   end_date: new Date(),
    //   finished_date: new Date(),
    //   limit_hour_start: '08:00:00',
    //   limit_hour_end: '09:00:00',
    //   owner_user: req.userId,
    // });

    return res.json({
      id,
      name,
      description,
    });
  }
}

export default new CampaignController();
