import { styled } from "@mui/system";
import { max } from "d3-array";
import { axisLeft, axisTop } from "d3-axis";
import { interpolate } from "d3-interpolate";
import { scaleBand, scaleLinear } from "d3-scale";
import { useD3 } from "../common/hooks/useD3";
import { transition } from 'd3-transition';

const Svg = styled('svg', {})(
    ({ theme, ...rest }) => `
        width:${rest.size[0]}px;
        height:${rest.size[1]}px;
        font-size: 10px;
        font-family: sans-serif;
        font-weight: bold;
    `
);

export const HorizontalBarChart = (props) => {

    const svgRef = useD3((svg) => {
        let topContainer = svg
            .selectAll(".top-container")
            .data([0])
            .enter()
            .append("g")
            .attr("class", "top-container")
            .attr("transform", "translate(30,20)")

        topContainer = svg.select("g.top-container");

        const margin = { bottom: 25, left: 40, right: 70 };
        const [width, height] = props.size; 
        const [xKey, yKey] = props.axisKeys;
        const maxNumber = max(props.data, d => d[xKey]); 
        
        const xScale = scaleLinear()
            .domain([0, maxNumber])
            .range([margin.left, width - margin.right]); 

        const yScale = scaleBand()
            .domain(props.data.map(d => d[yKey]))
            .range([0, height - margin.bottom])
            .padding(0.1);

        const xAxis = (g, scale = xScale) => {
            g
            .attr("class", "xAxis")
            .call(axisTop(scale).tickSizeOuter(0))
            .call(g => g.select(".domain").remove()); 
        }

        const yAxis = (g, scale = yScale) => {
            g
            .attr("class", "yAxis")
            .attr("transform", d => `translate(${margin.left}, 0)`)
            .call(axisLeft(scale))
            .call(g => g.select(".domain").remove());
        }

        const defaultTransition = transition().duration(1500);

        topContainer 
            .selectAll("g.xAxis")
            .data([0], d => d)
            .enter()
            .append("g")
            .call(xAxis, xScale);

        topContainer
            .select("g.xAxis")
            .transition(defaultTransition)
            .call(xAxis, xScale);

        topContainer
            .selectAll("g.yAxis")
            .data([0], d => d)
            .enter()
            .append("g")
            .call(yAxis, yScale)
        
        topContainer
            .selectAll("rect")
            .data(props.data, d => d.key)
            .enter()
            .append("rect")
            .attr("fill", "#26a69a")
            .attr("x", d => xScale(0))
            .attr("y", d => yScale(d[yKey]))
            .attr("width", 0)
            .attr("height", yScale.bandwidth())

        topContainer
            .selectAll("rect")
            .transition(defaultTransition)
            .attr("width", d => xScale(d[xKey]) - margin.left);
                
        topContainer 
            .selectAll(".barText")
            .data(props.data, d => d.key)
            .enter()
            .append("text")
            .attr("class", "barText")
            .attr("y", d => yScale(d[yKey])  + (yScale.bandwidth()/2) + 4)
            .attr("fill", "white")
            .style("text-anchor", "end")
            .text(d => 0)
            .each(function(d) {
                const deepCopy = JSON.parse(JSON.stringify(d));
                deepCopy[xKey] = 0; 
                this._current = deepCopy;
            });
        
        topContainer 
            .selectAll(".barText")
            .transition(defaultTransition) 
            .attr("x", d => xScale(d[xKey]) -5)
            .textTween(function(d) {
                const interpolateToD = interpolate(this._current, d);
                    return (t) => {
                        this._current = interpolateToD(t);
                        return this._current[xKey].toFixed(0); 
                    };
            });
    }); 

    return (
        <Svg ref={svgRef} size={props.size}/>
    )
}; 
