import { useEffect, useState, useContext } from "react";
import { CircularProgress } from "@material-ui/core";
import { AuthContext } from "../../context/Auth/AuthContext";
import { authUser } from "../../context/Auth/AuthActions";

//eslint-disable-next-line
export default function (ComposedClass, routeType) {
  const [loading, setLoading] = useState(true);
  const { dispatch, userDetail } = useContext(AuthContext);
  const AuthenticationCheck = (props) => {
    useEffect(() => {
      authUser(dispatch).then((res) => {
          console.log(res)
        if (!userDetail.isAuth) {
          if (routeType) {
            props.history.push("/login");
          }
        } else {
          if (!routeType) {
            props.history.push("/profile/:username");
          }
        }
      });
      setLoading({
        loading: false,
      });
    });

    return (
      <div>
        {loading ? (
          <CircularProgress
            style={{ textAlign: "center", marginTop: "100px" }}
            thickness={7}
          />
        ) : (
          <ComposedClass />
        )}
      </div>
    );
  };

  return AuthenticationCheck;
}
