import Swal from 'sweetalert2'

export const showSwalFire = ({
    closeModal, 
    position = 'center',
    icon = 'success',
    title = 'Proceso Exitoso',
    showConfirmButton = true,
    callback
}) => {
    if (closeModal) {
        closeModal();
    }
    return(
        Swal.fire({
            position: position,
            icon: icon,
            title: title,
            showConfirmButton: showConfirmButton,
        }).then(() => callback)
    )
}
