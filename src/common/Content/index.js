import { FetchLoading } from "./FetchLoading";
import { FetchSuccess } from "./FetchSuccess";
import { FetchError } from "./FetchError";

export const Content = ({state, title, list} ) => {

  switch (state) {
    case "loading":
      return <FetchLoading />;
    case "success":
      return <FetchSuccess title={title} list={list} />;
    case "error":
      return <FetchError />;
  }
};
