function Sumwithouthighestandlowestnumber(array) {
if (array == null) return 0
let maxvalue = Math.max(...array)
let minvalue = Math.min(...array)
let removemaxandmin=array.filter((x)=>x !==maxvalue&&minvalue);
let namarray=removemaxandmin.reduce((acc,carent) => acc+carent)
return namarray;
}