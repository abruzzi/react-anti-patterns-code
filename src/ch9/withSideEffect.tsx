import React, { ReactNode } from "react";
import { useService } from "./useService";

type WithChildren<T = {}> = T & { children?: ReactNode };

interface SideEffectProps<T> {
  LoadingComponent?: React.FC;
  ErrorComponent?: React.FC<{ error: Error }>;
  fetchFunc: () => Promise<T>;
}

const withSideEffect =
  <T extends {}>(
    fetchFunc: () => Promise<T>,
    Component: React.FC<WithChildren<T>>
  ) =>
  (props: WithChildren<T>) => {
    const { loading, error, data } = useService(fetchFunc);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error</div>;
    }

    return <Component {...props} data={data} />;
  };

export default withSideEffect;
