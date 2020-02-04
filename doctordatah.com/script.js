var config = {
    "avatar_size": 150
}

var body = d3.select("body");

//var HeaderDivsSet = body.append("div").attr("class", "row")
var HeaderDivsSet_div1 = body.append("div").attr("class", "column")

// HeaderDivsSet_div1 - for image
var svg = HeaderDivsSet_div1.append("svg")
  .attr("width", config.avatar_size * 2)
  .attr("height", config.avatar_size * 1.4);

var defs = svg.append('svg:defs');

  data = [{
    posx: 50,
    posy: 30,
    img: "images/profile.jfif"}]

  data.forEach(function(d, i) {
    defs.append("svg:pattern")
      .attr("id", "grump_avatar" + i)
      .attr("width", config.avatar_size)
      .attr("height", config.avatar_size)
      .attr("patternUnits", "userSpaceOnUse")
      .append("svg:image")
      .attr("xlink:href", d.img)
      .attr("width", config.avatar_size)
      .attr("height", config.avatar_size)
      .attr("x", 0)
      .attr("y", 0);
  
    var circle = svg.append("circle")
      .attr("transform", "translate(" + d.posx + "," + d.posy + ")")
      .attr("cx", config.avatar_size / 2)
      .attr("cy", config.avatar_size / 2)
      .attr("r", config.avatar_size / 2)
      .style("fill", "#fff")
      .style("fill", "url(#grump_avatar" + i + ")");
  
  })

  // HeaderDivsSet_div2 - for name/tag/email
  var HeaderDivsSet_div2 = body.append("div").attr("class", "column")
  HeaderDivsSet_div2.append('h1').text("Malik Hassan Qayyum")
  HeaderDivsSet_div2.append('h3').text("MS Data Analytics")
  HeaderDivsSet_div2.append('h4').text("malik@doctordatah.com")

  // HeaderDivsSet_div3 - Socials


  var HeaderDivsSet_div3 = body.append("div").attr("class", "column")
  //HeaderDivsSet_div3.text("Malik Hassan Qayyum")
