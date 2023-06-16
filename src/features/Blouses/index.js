import { Content } from "../../common/Content";

export const Blouses = () => {
  const blouses = [
    {
      name: "Nazwa wzoru 1",
      id: "1aaa",
      imagePath: "https://i.postimg.cc/0yjjyJRn/PERSONAL-EXPENSE-TRACKER-5.png",
      description:
        "Bluzka wykonana z wysokiej jakości materiałów, zapewnia wygodę i doskonałe dopasowanie",
      prise: "60,00 zł",
    },
    {
      name: "Nazwa wzoru 2",
      id: "1bbb",
      imagePath: "https://i.postimg.cc/0yjjyJRn/PERSONAL-EXPENSE-TRACKER-5.png",
      description:
        "Bluzka wykonana z wysokiej jakości materiałów, zapewnia wygodę i doskonałe dopasowanie",
      prise: "60,00 zł",
    },
    {
      name: "Nazwa wzoru 3",
      id: "1ccc",
      imagePath: "https://i.postimg.cc/0yjjyJRn/PERSONAL-EXPENSE-TRACKER-5.png",
      description:
        "Bluzka wykonana z wysokiej jakości materiałów, zapewnia wygodę i doskonałe dopasowanie",
      prise: "60,00 zł",
    },
    {
      name: "Nazwa wzoru 4",
      id: "1ddd",
      imagePath: "https://i.postimg.cc/0yjjyJRn/PERSONAL-EXPENSE-TRACKER-5.png",
      description:
        "Bluzka wykonana z wysokiej jakości materiałów, zapewnia wygodę i doskonałe dopasowanie",
      prise: "60,00 zł",
    },
    {
      name: "Nazwa wzoru 5",
      id: "1eee",
      imagePath: "https://i.postimg.cc/0yjjyJRn/PERSONAL-EXPENSE-TRACKER-5.png",
      description:
        "Bluzka wykonana z wysokiej jakości materiałów, zapewnia wygodę i doskonałe dopasowanie",
      prise: "60,00 zł",
    },
    {
      name: "Nazwa wzoru 6",
      id: "1fff",
      imagePath: "https://i.postimg.cc/0yjjyJRn/PERSONAL-EXPENSE-TRACKER-5.png",
      description:
        "Bluzka wykonana z wysokiej jakości materiałów, zapewnia wygodę i doskonałe dopasowanie",
      prise: "60,00 zł",
    },
  ];

  return <Content title="Bluzki" list={blouses} />;
};
