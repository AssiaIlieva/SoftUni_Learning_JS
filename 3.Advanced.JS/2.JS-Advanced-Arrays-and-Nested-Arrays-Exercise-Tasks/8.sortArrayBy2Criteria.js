function sortArrayBy2Criteria(array){
array.sort((a, b) => a.length - b.length || a.localeCompare(b));
console.log(array.join('\n'));
}
sortArrayBy2Criteria(['test', 
'Deny', 
'omen', 
'Default']
)