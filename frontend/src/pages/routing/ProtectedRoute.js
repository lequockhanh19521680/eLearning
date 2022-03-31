import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Spinner } from 'react-bootstrap'


const ProtectedRoute = ({component: Component, ...rest}) => {

    const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)

    if (authLoading) {
        return (
            <div className="spinner-container">
                <Spinner animation='border' variant='info' />
            </div>
           
        )
    }

    return (
        <Route {...rest} render={props => isAuthenticated ? 
            (
                
                    
                    <Component {...props} {...rest} />
            )
                
             :
            <Navigate to='/login'/>
        }/>
       
    )
}

export default ProtectedRoute
