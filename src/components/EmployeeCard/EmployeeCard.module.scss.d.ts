export type Styles = {
  'card': string;
  'card-img': string;
  'card-links': string;
  'card-text': string;
  'link': string;
  'link-container': string;
  'yemployee-bio': string;
  'yemployee-name': string;
  'yemployee-position': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
