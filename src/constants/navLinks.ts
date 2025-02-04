export interface INavLinks {
  id: number;
  name: string;
  path: string;
}

export const navLinks: INavLinks[] = [
  {
    id: 1,
    name: "Home",
    path: "#hero",
  },
  {
    id: 2,
    name: "Nosso Estúdio",
    path: "#studio",
  },
  {
    id: 3,
    name: "Cases de Sucesso",
    path: "#cases",
  },
  {
    id: 4,
    name: "Depoimentos",
    path: "#studio",
  },
  {
    id: 5,
    name: "Serviços",
    path: "#services",
  },
  {
    id: 6,
    name: "Fale Conosco",
    path: "#contact",
  },
];
