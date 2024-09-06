export interface Prize {
  id: number;
  type: string;
  title: string;
  texto: string;
  points: number;
  picture: string;
  photo: any;

}


export interface IAuthProvider {
    children: JSX.Element;
}