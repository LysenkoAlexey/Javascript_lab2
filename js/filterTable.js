newTable.getResultLogOpr = function(valueLeft, opr, valueRight) {
    if (opr == '==') {
        return valueLeft == valueRight;
    }
    if (opr == '!=') {
        return valueLeft != valueRight;
    }
    if (opr == '>') {
        return valueLeft > valueRight;
    }
    if (opr == '<') {
        return valueLeft < valueRight;
    }
    if (opr == '>=') {
        return valueLeft >= valueRight;
    }
    if (opr == '<=') {
        return valueLeft <= valueRight;
    }
};

newTable.where = function(arr) {
    if (arr.length == 0) return;
    let indexTrue = [];
    for (let i in this[arr[0]['key']])
        indexTrue.push(parseInt(i));
    for (let i in arr) {
        let arrTrue = [];
        for (let j = 0; j < this[arr[i]['key']].length; j++) {
            if (this.getResultLogOpr(this[arr[i]['key']][j],arr[i]['operation'],arr[i]['value'])){
                arrTrue.push(j);
            }
        }
        indexTrue = intersection(indexTrue, arrTrue);
    }
    let keysThis = this.getAllKey();
    for (let k in keysThis) {
        let newValue = [];
        for (let i in indexTrue) {
            newValue.push(this[keysThis[k]][indexTrue[i]]);
        }
        this[keysThis[k]] = newValue;
    }
};

function intersection (arr1, arr2) {
    let result = [];
    for(let i in arr1)
    {
        if(arr2.includes(arr1[i])) result.push(arr1[i]);
    }
    return result;
};

//columnNames = ['№', 'Дебют','Ходы','Количество партий','Процент побед', 'Открытость'],
let filterButton = document.getElementById('filterButton');
filterButton.onclick = function() {
    new_stats.setToDefault();
    let arr = [];
    if (document.getElementsByName('NoFilter')[0].value !== '') {
        let object = {
            key: '',
            operation: "==",
            value: document.getElementsByName('NameFilter')[0].value
        }
        arr.push(object);
    }
    if (document.getElementsByName("BeginFilter")[0].value !== "") {
        let object = {
            key: "Begin",
            operation: ">=",
            value: parseFloat(document.getElementsByName("BeginFilter")[0].value)
        }
        arr.push(object);
    }
    if (document.getElementsByName("EndFilter")[0].value !== "") {
        let object = {
            key: "End",
            operation: "<=",
            value: parseFloat(document.getElementsByName("EndFilter")[0].value)
        }
        arr.push(object);
    }
    if (document.getElementsByName("FirstSideFilter")[0].value !== "") {
        let object = {
            key: "FirstSide",
            operation: "==",
            value: document.getElementsByName("FirstSideFilter")[0].value
        }
        arr.push(object);
    }
    if (document.getElementsByName("SecondSideFilter")[0].value !== "") {
        let object = {
            key: "SecondSide",
            operation: "==",
            value: document.getElementsByName("SecondSideFilter")[0].value
        }
        arr.push(object);
    }
    if (document.getElementsByName("PeaceTreatyFilter")[0].value !== "") {
        let object = {
            key: "PeaceTreaty",
            operation: "==",
            value: document.getElementsByName("PeaceTreatyFilter")[0].value
        }
        arr.push(object);
    }
    new_stats.where(arr);
    document.getElementById('Table').innerHTML = new_stats.print();
};