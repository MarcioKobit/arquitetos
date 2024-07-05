export interface Prize {
  id: number;
  type: string;
  title: string;
  texto: string;
  points: number;
  picture: string;

}


export interface IAuthProvider {
    children: JSX.Element;
}