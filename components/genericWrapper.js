import { AuthProvider } from '@/contexts/authContext'
import { ModalProvider } from '@/contexts/modalContext'
import { SearchParamsProvider } from '@/contexts/searchParamContext'
import Modal from '@/uikits/modal'
import { Toaster, toast } from 'sonner'

function GenericWrapper({ children }) {
    return (
        <SearchParamsProvider>
            <ModalProvider>
                <AuthProvider>
                    {children}
                    <Modal />
                    <Toaster richColors={true} />
                </AuthProvider>
            </ModalProvider>
        </SearchParamsProvider>
    )
}

export default GenericWrapper
