import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  Layout,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/styles.min.css";
import routerProvider from "@pankod/refine-react-router-v6";
import { dataProvider } from "providers/contentServiceProvider";
import { SeriesList } from "pages/series/list";
import { SeriesShow } from "pages/series/show";
import { SeriesEdit } from "pages/series/edit";
import { EpisodeShow } from "pages/episodes/show";
import { EpisodesList } from "pages/episodes/list";
import { EpisodeEdit } from "pages/episodes/edit";

function App() {
  return (
    <Refine
     disableTelemetry
      notificationProvider={notificationProvider}
      Layout={Layout}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      routerProvider={routerProvider}
      dataProvider={{default: dataProvider('https://dev-internal.api.golottie.com/internal')}}
      resources={[
        { name: "series", list: SeriesList, edit: SeriesEdit, show: SeriesShow},
        { name: "episodes", list: EpisodesList, edit: EpisodeEdit, show: EpisodeShow}
      ]}
    />
  );
}

export default App;
