// src/components/PlotlyBrowserLoader.js
// This component ensures Plot and react-plotly.js are only loaded in the browser.
import React, { useState, useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'; // Useful for checking browser environment

// Use a dynamic import for react-plotly.js to prevent it from being processed during SSR
const Plot = ExecutionEnvironment.canUseDOM
  ? require('react-plotly.js').default
  : () => null; // Return null if not in browser environment

function PlotlyBrowserLoader({ chartUrl, style }) {
  const [chartConfig, setChartConfig] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only fetch data if we are in the browser
    if (ExecutionEnvironment.canUseDOM) {
      const fetchChartConfig = async () => {
        try {
          const response = await fetch(chartUrl);

          if (!response.ok) {
            throw new Error(`Failed to fetch Plotly chart configuration from ${chartUrl}`);
          }

          const jsonConfig = await response.json();
          setChartConfig(jsonConfig);
        } catch (err) {
          console.error('Error loading Plotly chart config:', err);
          setError(err.message);
        }
      };
      fetchChartConfig();
    }
  }, [chartUrl]);

  if (error) {
    return <div>Error loading chart: {error}</div>;
  }

  if (!chartConfig) {
    return <div>Loading chart...</div>;
  }

  // Access data and layout from the fetched chartConfig
  const { data, layout } = chartConfig;

  // Basic validation to ensure data and layout exist
  if (!data || !layout) {
    return <div>Error: Chart JSON missing 'data' or 'layout' properties.</div>;
  }

  // Render Plot only if it was successfully loaded (i.e., in browser)
  return (
    <Plot
      data={data}
      layout={layout}
      style={style || { width: '100%', height: '500px' }}
      useResizeHandler={true}
    />
  );
}

export default PlotlyBrowserLoader;