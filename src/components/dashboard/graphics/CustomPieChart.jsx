import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, PieChart, Pie, Sector, Cell, Legend } from 'recharts'
import PropTypes from 'prop-types'

/**
 * 
 * @param {*} param parámetros de la forma [ {tag: 'Enero', valor: 1000, color: '#f55c47'},]
 * @returns gráfica de torta 
 */
const CustomPieChart = ({ param }) => {
    const [data, setData] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        setData(param)
    }, [param])

    const onPieEnter = (data, index) => {
        setActiveIndex(index)
    };

    const renderColorfulLegendText = (value) => {
        return <span style={{ fontWeight: '100' }}>{value}</span>;
    }

    const uppeCasetoLowerCase = (text) => {
        let textSize = text.length
        let newText = text[0]
        for (let n = 1; n < textSize; n++) {
            newText = newText.concat(text[n].toLowerCase())
        }
        return newText
    } 

    const renderizarMouseOver = (props, info) => {
        const radianes = Math.PI / 180;
        const {
            cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
            payload, valor, fill
        } = props;
        const sin = Math.sin(-radianes * midAngle);
        const cos = Math.cos(-radianes * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';
        return (
            <g>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={obtenerColor(info, payload.tag)}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={obtenerColor(info, payload.tag, true)}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#525252">{valor}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill={obtenerColor(info, payload.nombre)}>
                    {payload.tag}
                </text>
            </g>
        );
    }

    const obtenerColor = (info, nombre, ponerOpacidad) => {
        ponerOpacidad = ponerOpacidad === undefined ? false : true;
        for (let k = 0; k < info.length; k++) {
            if (info[k].tag === nombre) {
                return ponerOpacidad ? info[k].color + 'B3' : info[k].color
            }
        }
    }

    return (
        <ResponsiveContainer height='30%' aspect={10.0 / 7} >
            <PieChart style={{ backgroundColor: "rgb(252,252,252)", borderRadius: 5 }}>
                <Legend
                    formatter={renderColorfulLegendText}
                    iconSize={20}
                    onMouseEnter={onPieEnter}
                    verticalAlign={'bottom'}
                    payload={
                        data.map(
                            item => ({
                                id: item.tag,
                                type: "circle",
                                color: item.color,
                                value: `${uppeCasetoLowerCase(item.tag)}`,
                            })
                        )
                    }
                />
                <Pie
                    activeIndex={activeIndex}
                    activeShape={(activeProps) => renderizarMouseOver(activeProps, data)}
                    data={data}
                    cx={"50%"}
                    cy={"50%"}
                    outerRadius={80}
                    fill="#b0b0b0"
                    dataKey="valor"
                    onMouseEnter={onPieEnter}
                >
                    {data.map((dataPie) => <Cell key={'estado' + dataPie.tag} fill={dataPie.color} />)}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
        
}

CustomPieChart.propTypes = {
    param: PropTypes.array
}

export default CustomPieChart;