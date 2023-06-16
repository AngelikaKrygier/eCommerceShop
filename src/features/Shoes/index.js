import { Content } from "../../common/Content";

export const Shoes = () => {
  const shoes = [
    {
      name: "Nazwa wzoru 1",
      id: "1aa",
      imagePath: "https://i.postimg.cc/C11qy6Mh/PERSONAL-EXPENSE-TRACKER-4.png",
      description:
        "Buty wykonane z wysokiej jakości materiałów, zapewniają wygodę i doskonałe dopasowanie",
      prise: "120,00 zł",
    },
    {
      name: "Nazwa wzoru 2",
      id: "1bb",
      imagePath: "https://i.postimg.cc/C11qy6Mh/PERSONAL-EXPENSE-TRACKER-4.png",
      description:
        "Buty wykonane z wysokiej jakości materiałów, zapewniają wygodę i doskonałe dopasowanie",
      prise: "120,00 zł",
    },
    {
      name: "Nazwa wzoru 3",
      id: "1cc",
      imagePath: "https://i.postimg.cc/C11qy6Mh/PERSONAL-EXPENSE-TRACKER-4.png",
      description:
        "Buty wykonane z wysokiej jakości materiałów, zapewniają wygodę i doskonałe dopasowanie",
      prise: "120,00 zł",
    },
    {
      name: "Nazwa wzoru 4",
      id: "1dd",
      imagePath: "https://i.postimg.cc/C11qy6Mh/PERSONAL-EXPENSE-TRACKER-4.png",
      description:
        "Buty wykonane z wysokiej jakości materiałów, zapewniają wygodę i doskonałe dopasowanie",
      prise: "120,00 zł",
    },
    {
      name: "Nazwa wzoru 5",
      id: "1ee",
      imagePath: "https://i.postimg.cc/C11qy6Mh/PERSONAL-EXPENSE-TRACKER-4.png",
      description:
        "Buty wykonane z wysokiej jakości materiałów, zapewniają wygodę i doskonałe dopasowanie",
      prise: "120,00 zł",
    },
    {
      name: "Nazwa wzoru 6",
      id: "1ff",
      imagePath: "https://i.postimg.cc/C11qy6Mh/PERSONAL-EXPENSE-TRACKER-4.png",
      description:
        "Buty wykonane z wysokiej jakości materiałów, zapewniają wygodę i doskonałe dopasowanie",
      prise: "120,00 zł",
    },
  ];

  return <Content title="Buty" list={shoes} />;
};
