import { ResponsiveLine } from '@nivo/line'

function AdminLineGraph({ dataa }) {

    const data = [
            {
                "id": "japan",
                "color": "hsl(244, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 273
                    },
                    {
                        "x": "helicopter",
                        "y": 298
                    },
                    {
                        "x": "boat",
                        "y": 154
                    },
                    {
                        "x": "train",
                        "y": 65
                    },
                    {
                        "x": "subway",
                        "y": 107
                    },
                    {
                        "x": "bus",
                        "y": 237
                    },
                    {
                        "x": "car",
                        "y": 175
                    },
                    {
                        "x": "moto",
                        "y": 12
                    },
                    {
                        "x": "bicycle",
                        "y": 267
                    },
                    {
                        "x": "horse",
                        "y": 298
                    },
                    {
                        "x": "skateboard",
                        "y": 277
                    },
                    {
                        "x": "others",
                        "y": 97
                    }
                ]
            },
            {
                "id": "france",
                "color": "hsl(60, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 11
                    },
                    {
                        "x": "helicopter",
                        "y": 169
                    },
                    {
                        "x": "boat",
                        "y": 5
                    },
                    {
                        "x": "train",
                        "y": 249
                    },
                    {
                        "x": "subway",
                        "y": 128
                    },
                    {
                        "x": "bus",
                        "y": 209
                    },
                    {
                        "x": "car",
                        "y": 281
                    },
                    {
                        "x": "moto",
                        "y": 47
                    },
                    {
                        "x": "bicycle",
                        "y": 283
                    },
                    {
                        "x": "horse",
                        "y": 46
                    },
                    {
                        "x": "skateboard",
                        "y": 145
                    },
                    {
                        "x": "others",
                        "y": 193
                    }
                ]
            },
            {
                "id": "us",
                "color": "hsl(355, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 148
                    },
                    {
                        "x": "helicopter",
                        "y": 54
                    },
                    {
                        "x": "boat",
                        "y": 47
                    },
                    {
                        "x": "train",
                        "y": 296
                    },
                    {
                        "x": "subway",
                        "y": 135
                    },
                    {
                        "x": "bus",
                        "y": 35
                    },
                    {
                        "x": "car",
                        "y": 79
                    },
                    {
                        "x": "moto",
                        "y": 118
                    },
                    {
                        "x": "bicycle",
                        "y": 229
                    },
                    {
                        "x": "horse",
                        "y": 248
                    },
                    {
                        "x": "skateboard",
                        "y": 233
                    },
                    {
                        "x": "others",
                        "y": 228
                    }
                ]
            },
            {
                "id": "germany",
                "color": "hsl(130, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 267
                    },
                    {
                        "x": "helicopter",
                        "y": 195
                    },
                    {
                        "x": "boat",
                        "y": 200
                    },
                    {
                        "x": "train",
                        "y": 225
                    },
                    {
                        "x": "subway",
                        "y": 200
                    },
                    {
                        "x": "bus",
                        "y": 293
                    },
                    {
                        "x": "car",
                        "y": 1
                    },
                    {
                        "x": "moto",
                        "y": 256
                    },
                    {
                        "x": "bicycle",
                        "y": 189
                    },
                    {
                        "x": "horse",
                        "y": 249
                    },
                    {
                        "x": "skateboard",
                        "y": 178
                    },
                    {
                        "x": "others",
                        "y": 106
                    }
                ]
            },
            {
                "id": "norway",
                "color": "hsl(120, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 79
                    },
                    {
                        "x": "helicopter",
                        "y": 186
                    },
                    {
                        "x": "boat",
                        "y": 219
                    },
                    {
                        "x": "train",
                        "y": 267
                    },
                    {
                        "x": "subway",
                        "y": 143
                    },
                    {
                        "x": "bus",
                        "y": 25
                    },
                    {
                        "x": "car",
                        "y": 225
                    },
                    {
                        "x": "moto",
                        "y": 203
                    },
                    {
                        "x": "bicycle",
                        "y": 163
                    },
                    {
                        "x": "horse",
                        "y": 93
                    },
                    {
                        "x": "skateboard",
                        "y": 226
                    },
                    {
                        "x": "others",
                        "y": 46
                    }
                ]
            }
        ]


    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'linear' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-$.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            colors={{ scheme: 'category10' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableArea={true}
            areaOpacity={0.1}
            enableTouchCrosshair={true}
            useMesh={true}
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
        />
    );
}

export default AdminLineGraph;