import { AuthProvider } from '@/contexts/authContext'
import { Toaster, toast } from 'sonner'

function GenericWrapper({ children }) {
    return (
        <AuthProvider>
            {children}
            <Toaster />
        </AuthProvider>
    )
}

export default GenericWrapper
