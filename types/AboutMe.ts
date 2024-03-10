export type AboutMe = {
  _id: string;
  _type: string;
  description: string;
  profileImage: string;
  socialLinks: {
    socialIconImage: string;
    platform: string;
    url: string;
    icon: string;
  }[];
  skillsName: {
    skillIconImage: string;
    iconImage: string;
    name: string;
  }[];
};



