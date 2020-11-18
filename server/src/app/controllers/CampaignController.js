import * as Yup from 'yup';
import { parseISO } from 'date-fns';
import Campaign from '../models/Campaign';
import User from '../models/User';

class CampaignController {
  async index(req, res) {
    const campaigns = await Campaign.findAll({
      where: {
        owner_user: req.userId,
        finished_date: null,
      },
      order: ['start_date'],
      attributes: [
        'id',
        'name',
        'description',
        'start_date',
        'end_date',
        'limit_hour_start',
        'limit_hour_end',
      ],
      include: [
        {
          model: User,
          as: 'owner',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json({ campaigns });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      start_date: Yup.date().default(() => new Date()),
      end_date: Yup.date().default(() => new Date()),
      finished_date: Yup.date().default(() => new Date()),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Dados incorretos! Verifique os dados inseridos.' });
    }

    const {
      name,
      description,
      start_date,
      end_date,
      finished_date,
      limit_hour_start,
      limit_hour_end,
    } = req.body;

    const startDateParsed = parseISO(start_date);
    const endDateParsed = parseISO(end_date);
    const finishedDateParsed = parseISO(finished_date);

    const { id } = await Campaign.create({
      name,
      description,
      start_date: startDateParsed,
      end_date: endDateParsed,
      finished_date: finishedDateParsed,
      limit_hour_start,
      limit_hour_end,
      owner_user: req.userId,
    });

    return res.json({
      id,
      name,
      description,
    });
  }
}

export default new CampaignController();
