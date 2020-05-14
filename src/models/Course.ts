export default class Courses {
  id: number;

  image_url: string;

  title: string;

  value: number;

  constructor({ id, image_url, title, value }: Courses) {
    this.id = id;
    this.image_url = image_url;
    this.title = title;
    this.value = value;
  }
}
