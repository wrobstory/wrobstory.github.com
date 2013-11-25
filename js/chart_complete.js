var data = [];
var values = [];
for (var i = 2; i <= 50; i++) {
    var val = Math.floor(Math.random() * (50 - 5 + 1) + 5);
    data.push({index: i, value: val});
    values.push(val);
}

var margin = {top: 20, right: 20, bottom: 60, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width])
    .domain([0, 50]);

var y = d3.scale.linear()
    .range([height, 0])
    .domain([0, d3.max(values) + 5]);

var brush = d3.svg.brush()
    .x(x)
    .on("brush", brushmove)
    .on("brushend", brushend);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(11);

var svg = d3.select(".chart-complete").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "x axis")
    .attr("clip-path", "url(#clip)")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

svg.append("g")
    .attr("class", "brush")
    .call(brush)
  .selectAll('rect')
    .attr('height', height);

svg.append("defs").append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height + 20);

points = svg.selectAll(".point")
    .data(data)
  .enter().append("circle")
    .attr("class", "point")
    .attr("clip-path", "url(#clip)")
    .attr("r", function(d){return Math.floor(Math.random() * (20 - 5 + 1) + 5);})
    .attr("cx", function(d) { return x(d.index); })
    .attr("cy", function(d) { return y(d.value); })
    .call(d3.helper.tooltip());

points.on('mousedown', function(){
  brush_elm = svg.select(".brush").node();
  new_click_event = new Event('mousedown');
  new_click_event.pageX = d3.event.pageX;
  new_click_event.clientX = d3.event.clientX;
  new_click_event.pageY = d3.event.pageY;
  new_click_event.clientY = d3.event.clientY;
  brush_elm.dispatchEvent(new_click_event);
});

function brushmove() {
  var extent = brush.extent();
  points.classed("selected", function(d) {
    is_brushed = extent[0] <= d.index && d.index <= extent[1];
    return is_brushed;
  });
}

function brushend() {
  get_button = d3.select(".clear-button");
  if(get_button.empty() === true) {
    clear_button = svg.append('text')
      .attr("y", 460)
      .attr("x", 825)
      .attr("class", "clear-button")
      .text("Clear Brush");
  }

  x.domain(brush.extent());

  transition_data();
  reset_axis();

  points.classed("selected", false);
  d3.select(".brush").call(brush.clear());

  clear_button.on('click', function(){
    x.domain([0, 50]);
    transition_data();
    reset_axis();
    clear_button.remove();
  });
}

function transition_data() {
  svg.selectAll(".point")
    .data(data)
  .transition()
    .duration(500)
    .attr("cx", function(d) { return x(d.index); });
}

function reset_axis() {
  svg.transition().duration(500)
   .select(".x.axis")
   .call(xAxis);
}