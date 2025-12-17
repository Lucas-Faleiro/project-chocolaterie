import { Outlet } from "react-router";

const ProviderLayout = ({ provider }) => {
  const Provider = provider;
  return (
    <Provider>
      <Outlet />
    </Provider>
  );
};

export default ProviderLayout;
