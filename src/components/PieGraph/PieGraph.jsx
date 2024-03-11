import { PieChart } from 'react-minimal-pie-chart';

const PieGraph = ({value, color }) => {
    return (
        <PieChart
                background={"white"}
                className={"w-24 transform -rotate-90"}
                data={[{ value: 1, key: 1, color: color }]}
                reveal={value}
                lineWidth={50}
                lengthAngle={360}
                animate
            />
    )
}

export default PieGraph