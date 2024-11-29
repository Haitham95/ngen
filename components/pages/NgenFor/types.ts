export interface IHowItWorksCardProps {
  classNames?: string;
  bgColor: string;
  title: string;
  desc: string;
  imgSrc: string;
  altText: string;
}

export interface IHowItWorksData {
  data: IHowItWorksCardProps[];
}
