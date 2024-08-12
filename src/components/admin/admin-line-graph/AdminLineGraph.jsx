import { ResponsiveLine } from '@nivo/line'

function AdminLineGraph({ data }) {

    const theme = {
        axis: {
            ticks: {
                text: {
                    fill: '#ff9513', 
                },
            },
            legend: {
                text: {
                    fill: '#ff9513', 
                },
            },
        },
    };

    return (
        <ResponsiveLine
        data={data}
        margin={{ top: 80, right: 80, bottom: 80, left: 80 }}

        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: '0',
            max: '500',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'hours',
            legendOffset: -60,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={false}
        enableGridX={false}
        useMesh={true}
        colors="#ff9513"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        theme={theme}
    />
    );
}

export default AdminLineGraph;