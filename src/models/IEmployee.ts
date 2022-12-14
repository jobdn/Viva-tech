export interface IEmployee {
  id: number;
  avatar: string;
  position: string;
  name: string;
  bio: string;
  links: {
    github: string;
    linkedin: string;
    telegram: string;
  };
}
