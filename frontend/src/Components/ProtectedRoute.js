import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = (props) =>{
    if (props.isAuthenticated){
        return <Route {...props}/>
    }else{
        return <Redirect to= '/error_404'/>
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    user: state.authReducer.user
  });
  
  export default connect(mapStateToProps)(ProtectedRoute);
  