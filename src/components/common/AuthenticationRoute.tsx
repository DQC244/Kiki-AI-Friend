import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { PathConstant } from "const";

const AuthenticationRoute = ({ element }: AuthenticationRouteProps): JSX.Element => {
  // Check authentication with the page need to be protected
  const isChecked = true;

  return <>{isChecked ? element : <Navigate to={PathConstant.LOGIN} replace />}</>;
};

type AuthenticationRouteProps = {
  element: ReactNode;
};

export default AuthenticationRoute;
