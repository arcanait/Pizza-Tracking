import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

/**
 * 
 * @param {string} title titulo que va a tener en el encabezado
 * @param {any} children cualquier contenido que se quiere introducir en la card
 * @param {object} style estilos customizados
 * @returns card con encabezado y cuerpo para organizar datos
 */
export const CustomCard = ({title, children, style}) => {
    return (
        <>
            <Card style={{ textAlign: 'center', marginBottom: 20 }}>
                <CardHeader style={{
                    backgroundColor: 'var(--main-bg-color)', 
                    textTransform: 'capitalize', 
                    color: '#fff',
                    fontWeight: 500
                }}>
                    {title}
                </CardHeader>
                <CardBody style={{...style}}>
                    {children}
                </CardBody>
            </Card>
        </>
    )
}
