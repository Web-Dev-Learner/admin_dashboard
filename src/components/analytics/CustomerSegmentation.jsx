import { motion } from "framer-motion";
import {
	ResponsiveContainer,
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend,
	Tooltip,
} from "recharts";

const customerSegmentationData = [
	{ subject: "Engagement", A: 120, B: 110, fullMark: 150 },
	{ subject: "Loyalty", A: 98, B: 130, fullMark: 150 },
	{ subject: "Satisfaction", A: 86, B: 130, fullMark: 150 },
	{ subject: "Spend", A: 99, B: 100, fullMark: 150 },
	{ subject: "Frequency", A: 85, B: 90, fullMark: 150 },
	{ subject: "Recency", A: 65, B: 85, fullMark: 150 },
];

const CustomerSegmentation = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.6 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Customer Segmentation</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<RadarChart cx='50%' cy='50%' outerRadius='80%' data={customerSegmentationData}>
						<PolarGrid stroke='#374151' />
						<PolarAngleAxis dataKey='subject' stroke='#9CA3AF' />
						<PolarRadiusAxis angle={30} domain={[0, 150]} stroke='#9CA3AF' />
						<Radar name='Segment A' dataKey='A' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.6} />
						<Radar name='Segment B' dataKey='B' stroke='#10B981' fill='#10B981' fillOpacity={0.6} />
						<Legend />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
					</RadarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default CustomerSegmentation;


// Tooltip
// Provides interactive data when hovering over chart elements,
//  showing detailed information.
//  It adds interactivity to  charts, allowing users to view exact data points when they hover over different 
// sections of the radar chart.

// ResponsiveContainer: Ensures the chart adjusts its size automatically based on the screen size.
// Radar: Plots the data points on the chart for each category.
// RadarChart: Displays the radar (spiderweb) chart structure.
// PolarGrid: Adds grid lines behind the radar chart for better visualization.
// PolarAngleAxis: Displays the labels (e.g., Engagement, Loyalty) around the chart.
// PolarRadiusAxis: Shows the scale/range of values from the center to the edges.
// Legend: Adds a key to identify different data series.
// Tooltip: Shows data details when hovering over points in the chart.
// Animations with framer-motion make interactions (like chart loading or hovering) smooth, improving user experience.