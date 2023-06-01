
//alert("newsort")

d3.select("div.main")
     .select("table")
     .select("thead")
     .append("tr")
     .selectAll("th")
     .data(columnNames)
     .enter()
     .append('th');

d3.select("div.main")
   .select("table")
   .select("thead")
   .selectAll("th")
   .data(columnNames)
   .html( function(d){

      return `<th>${d}</th>`;
   })
   .style("display", "");

d3.select("div.main")
     .select("table")
     .select("tbody")
     .selectAll("tr")
     .data(superTable)
     .enter()
     .append('tr');

d3.select("div.main")
   .select("table")
   .select("tbody")

   .selectAll("tr")
   .data(superTable)
   .html( function(d){
     return `<td>${d.number}</td><td>${d.debut}</td><td>${d.moves}</td>
     <td>${d.parties}</td><td>${d.percent}</td><td>${d.openness}</td>`;
     })
   .style("display", "");
     
 /*
 // сформируем список дебютов

 let groupObj = d3.group(superTable, d => d.debut)
 let debut = keys = [...groupObj.keys()];

// формируем поле со списком
 d3.select("div.main")
 .select("select")
 .selectAll("option")
 .data(debut)
 .enter()
 .append('option');

 d3.select("div.main")
 .select("select")
 .selectAll("option")
 .data(debut)
 .text( function(d){
 return d;
 });
 // добавляем опцию "Все дебюты", отвечаем, что она выбрана
 d3.select("div.main")
 .select("select")
 .insert("option", "option")
 .attr("selected", "selected")
 .text("Все дебюты");
 */
 

/*
 function filter(selectDebut) {
    //alert("filtering")
 // все строки делаем видимыми
    d3.select("table")
     .select("tbody")
    .selectAll("tr")
     .style("display", "");

 //делаем невидимыми все строки, кроме нужных
 d3.select("table")
 .select("tbody")
 .selectAll("tr")
 .filter(function (d) {
    
    if(selectDebut!=='Все дебюты')
        return !(d.debut == selectDebut);
    else
        return false;
    })
 .style("display", "none");
}
*/

//let groupObj2 = d3.group(columnNames, d => columnNames)
//let namesOfColumns = keys2 = [...groupObj2.keys()];
// формируем поле со списком
d3.select("div.main")
 .select("select")
 .selectAll("option")
 .data(columnNames)
 .enter()
 .append('option');

d3.select("div.main")
 .select("select")
 .selectAll("option")
 .data(columnNames)
 .text( function(d){
 return d;
 });


 d3.select("div.main")
 .select("select")
 .selectAll("option")
 .data(columnValues)
 .property('value', function(d){
 return d;
 });

//d3.select("select").attr("name", "toFilter");

let CompareData = function (a, b, sortBy, sortBy2, ascOrDes) {

   if (ascOrDes == 'descending') {
      let c = a

      a = b
      b = c
   }

      if  (!isNumberSort[sortBy]) {
         if (a[sortBy] < b[sortBy]) return -1;
         if (a[sortBy] > b[sortBy]) return 1;
      } else {
         if (Number(a[sortBy]) < Number(b[sortBy])) return -1;
         if (Number(a[sortBy]) > Number(b[sortBy])) return 1;
      }


      if (!isNumberSort[sortBy2]) {
         return ( a[sortBy2] > b[sortBy2]) ? -1 : 1
      } else {
         return ( Number(a[sortBy2]) > Number(b[sortBy2])) ? 1 : -1
      }
   
   // else {
   //    if (a[sortBy] < b[sortBy]) return 1;
   //    if (a[sortBy] > b[sortBy]) return -1;

   //    return ( a.sortBy2 > b.sortBy2) ? 1 : -1
   // }
};

let superSort = function() {
   name1 = d3.select('input[name="quest_2"]:checked').node().value
   name2 = d3.select('input[name="quest_3"]:checked').node().value
   name3 = d3.select('input[name="quest_1"]:checked').node().value

   alert('sorting ' + name1 + ' ' + name2 + ' ' + name3)

   d3.select("table")
 .select("tbody")
 .selectAll("tr")
 //.sort(function(a,b) { return d3.ascending(a[name1], b[name1]) ||  d3.ascending(a[name1], b[name2]) })
 .sort(function(a,b) {return CompareData(a, b, name1, name2, name3)})

}

function filter() {
   let selectFilter = d3.select('select[id="toFilter"]').node().value;
   let filterText = d3.select('input[name="filterText"]').node().value;
   console.log(selectFilter);
   console.log(filterText);
   
 // все строки делаем видимыми
    d3.select("table")
     .select("tbody")
    .selectAll("tr")
     .style("display", "");

 //делаем невидимыми все строки, кроме нужных
 if (filterText!=''){
   d3.select("table")
   .select("tbody")
   .selectAll("tr")
   .filter(function (d) {
     console.log(d)
    if (isNumberSort[selectFilter]) {
      return d[selectFilter]>Number(filterText)
    }
    else {
         return !(d[selectFilter].toLowerCase().startsWith(filterText.toLowerCase()))
          }
   })
   .style("display", "none");
   }
}



function reset_filter(){
   d3.select("div.main")
   .select("input")
   .property('value','')
   
   filter()
}
/*
d3.select("table")
 .select("tbody")
 .selectAll("tr")
 .sort(superSort)
 */

   