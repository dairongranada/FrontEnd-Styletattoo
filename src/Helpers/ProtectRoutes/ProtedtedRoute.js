import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import '../../App.scss'

export function ProtedtedRoute({ children }) {
    const {user, loading } = useAuth()

        if (loading) return(<div className="centerLoading"><div class="ringLoading"></div><span className="spanLoading">Loading...</span></div>)

        if (!user) return <Navigate to='/Registro'/>
    return <>{children}</>
    
}
