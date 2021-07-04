import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import { barchartData } from '../../data/barchartData'
import { piechartData } from '../../data/piechartData'
import { CustomCard } from '../ui/CustomCard'
import { CustomBarChart } from './graphics/CustomBarChart'
import CustomPieChart from './graphics/CustomPieChart'
import  { CustomTable }  from './tables/CustomTable'

const mensajeTablaVacia = 'En este momento no hay información para mostrar... por favor, crea una pizza.'

export const DashBoard = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        if (localStorage.getItem('pizzaList')) {
            setData(JSON.parse(localStorage.getItem('pizzaList')))
        }
    }, [])

    const renderContent = (content) => {
        return data.length > 0 ? content : mensajeTablaVacia
    } 

    return (
        <div className='dashboard-container'>
            <Row>
                <Col md={12}>
                    <CustomCard 
                        title={'Lista de Pizzas vendidas'}
                        style={{padding: 20}}
                        children={renderContent(
                        <CustomTable 
                            data={data} 
                        />)}
                    />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <CustomCard 
                        title={'Pizzas vendidas por mes (Cantidad - Monto)'}
                        children={renderContent(<CustomBarChart data={barchartData(data)}/>)}
                    />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <CustomCard 
                        title={'Pizzas vendidas por mes (Cantidad)'}
                        children={renderContent(<CustomPieChart param={piechartData(data)}/>)}
                    />
                </Col>
            </Row>
        </div>
    )
}
