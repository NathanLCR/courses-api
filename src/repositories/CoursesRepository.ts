import Course from '../models/Course';

interface RequestCreate {
  title: string;
  value: number;
  image_url: string;
}

interface RequestUpdate {
  id: number;
  title?: string;
  value?: number;
  image_url?: string;
}

export default class CoursesRepository {
  private courses: Course[];
  constructor() {
    this.courses = [];
  }

  public all(): Course[] {
    return this.courses;
  }

  public getOne(id: number): Course {
    const course = this.courses.find((course) => course.id === id);

    if (!course) {
      throw new Error('Course does not exist');
    }

    return course;
  }

  public create({ image_url, value, title }: RequestCreate): Course {
    const id = this.courses.length + 1;

    if (!image_url || !value || !title) {
      throw new Error('Insert all values');
    }

    const newCourse = new Course({ id, image_url, value, title });

    this.courses.push(newCourse);

    return newCourse;
  }

  public delete(id: number): Course {
    const deletedCourse = this.getOne(id);
    this.courses = this.courses.filter((course) => course.id !== id);
    return deletedCourse;
  }

  public update({ id, image_url, value, title }: RequestUpdate): Course {
    const course = this.getOne(id);

    course.value = value ? value : course.value;
    course.title = title ? title : course.title;
    course.image_url = image_url ? image_url : course.image_url;

    return course;
  }
}
