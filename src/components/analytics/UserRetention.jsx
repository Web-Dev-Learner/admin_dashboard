import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const userRetentionData = [
	{ name: "Week 1", retention: 100 },
	{ name: "Week 2", retention: 75 },
	{ name: "Week 3", retention: 60 },
	{ name: "Week 4", retention: 50 },
	{ name: "Week 5", retention: 45 },
	{ name: "Week 6", retention: 40 },
	{ name: "Week 7", retention: 38 },
	{ name: "Week 8", retention: 35 },
];

const UserRetention = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>User Retention</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={userRetentionData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Line type='monotone' dataKey='retention' stroke='#8B5CF6' strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default UserRetention;



// LineChart: A chart that connects data points with a line, showing trends over time (e.g., user retention per week).
// Line: Represents the actual line in the chart that connects the data points.
// XAxis: The horizontal axis (e.g., weeks or months) that labels data categories.
// YAxis: The vertical axis that shows the values (e.g., retention percentage, sales amount).
// CartesianGrid: The grid lines that run horizontally and vertically across the chart, helping users read the data more easily.
// BarChart: A chart where each data point is represented by a bar, showing comparisons between categories (e.g., sales or revenue by product).
// Bar: Represents each individual bar in the BarChart, showing the data value for a category (e.g., sales, revenue, profit).
// Tooltip: A small box that appears when you hover over a chart, showing detailed information about a specific data point.
// Legend: A key that shows what each color or line represents in the chart (e.g., sales, revenue, or profit).
// Stroke: Refers to the color or style of the line’s border (e.g., the color or width of the Line in LineChart).