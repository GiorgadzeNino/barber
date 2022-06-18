import { Navigate } from 'react-router-dom'

export const AuthorizedRoutes = ({
    user,
    redirectUrl = '/auth/signin',
    children
}) => {
    if (!user) {
        return <Navigate to={redirectUrl} replace />
    }

    return children
}

export const UnauthorizedRoutes = ({
    user,
    redirectUrl = '/dashboard',
    children
}) => {
    if (user) {
        return <Navigate to={redirectUrl} replace />
    }

    return children
}