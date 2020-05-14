import { Router, response, request } from 'express';

import CoursesRepository from '../repositories/CoursesRepository';

const routes = Router();

const coursesRepository = new CoursesRepository();

routes.get('/courses', (request, response) => {
  const courses = coursesRepository.all();

  return response.json(courses);
});

routes.get('/courses/:id', (request, response) => {
  const { id } = request.params;

  try {
    const course = coursesRepository.getOne(parseInt(id));

    return response.json(course);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.post('/courses', (request, response) => {
  try {
    const { image_url, title, value } = request.body;
    const course = coursesRepository.create({
      image_url,
      title,
      value,
    });

    return response.json(course);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.delete('/courses', (request, response) => {
  try {
    const { id } = request.body;

    const course = coursesRepository.delete(id);

    return response.json(course);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

routes.put('/courses', (request, response) => {
  try {
    const { id, image_url, value, title } = request.body;

    const course = coursesRepository.update({ id, image_url, value, title });

    response.json(course);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
});

export default routes;
