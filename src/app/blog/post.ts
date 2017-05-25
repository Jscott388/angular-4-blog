export class Post {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public image: string,
    public category: string,
    public tags: any,
    public createdDate: string,
    public author: any,
  ) {}
}
