import type { MetaFunction as RouterMetaFunction } from "react-router";

export namespace Route {
  export type LoaderData = {
    teams: Array<{
      team_id: number;
      roles: string;
      product_description: string;
      team_leader: {
        username: string;
        avatar: string;
      };
    }>;
  };

  export type ActionData = {
    // Add action data types here
  };

  export type MetaFunction = RouterMetaFunction;

  export type ComponentProps = {
    loaderData: LoaderData;
  };
}
