import { getWorkshops } from "@utils/db/client";
import WorkshopsClient from "./clientPage";

const Workshops = async () => {
  const { data: workshops } = await getWorkshops();

  return <WorkshopsClient workshops={workshops || []} />;
};

export default Workshops;
