/*исходные данные
const number = [1, 2, 3, 4, 5]
const debut = ['Сицилианская защита', 'Открытое начало', 'Дебют Рети', 'Английское начало', 'Староиндийское начало']
const moves = ['1.e4 с5', '1.е4 е5', '1.Nf3', '1.c4', '1.g3']
const parties = [115998, 49163, 59276, 45320, 5864]
const percent = [46.4, 44.7, 55.7, 56.3, 55]
const country = []
//var title = 'Таблица'
const columnNames = ['№', 'Дебют','Ходы','Количество партий','Процент побед']
*/
let isNumberSort = {
    debut: false, 
    moves: false,
    parties: true,
    percent: true,
    openness: false,
    number: true,
}

let tableOriginal = {
	debut: ['Сицилианская защита', 'Открытое начало', 'Дебют Рети', 'Английское начало', 'Староиндийское начало', 'Дебют Ларсена', 'Французская защита', 'Защита Каро-Канн', 'Защита Пирца-Уфимцева', 'Защита Робача', 'Дебют ферзевых пешек', 'Голландская защита', 'Вариант Бенони', 'Англо-Индийская защита', 'Дебют четырех коней', 'Защита Алехина', 'Защита Бенони', 'Защита Грюнфельда', 'Защита Нимцовича', 'Защита Филидора'],
	moves: ['1.e4 с5', '1.е4 е5', '1.Nf3', '1.c4', '1.g3', '1.b3', '1.e4 e6', '1.e4 c6', '1.e4 d6', '1.e4 g6', '1.d4 d5', '1.d4 f5', '1.d4 g6', '1.c4 Nf6', '1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6', '1.e4 Nf6', '1.d4 Nf6 2.c4 c5 3.d5','1.d4 Nf6 2.c4 e6 3.Nc3 d5', '1.d4 Nf6 2.c4 e6 3.Nc3 Cb4', '1.e4 e5 2.Nf3 d6'],
	parties: [115998, 49163, 59276, 45320, 5864, 1505, 31007, 16320, 9509, 8499, 43384, 5798, 5568, 13834, 2067, 5823, 8990, 9621, 19086, 1307],
	percent: [46.4, 44.7, 55.7, 56.3, 55, 52.9, 44.3, 44.7, 44.1, 44.9, 42.7, 41.7, 42.5, 42.4, 48.5, 43.4, 58.2, 44.3, 45.7, 39.7],
	openness: ['Открытый', 'Открытый', 'Закрытый', 'Закрытый', 'Закрытый', 'Закрытый', 'Полуоткрытый', 'Полуоткрытый', 'Полуоткрытый', 'Полуоткрытый', 'Закрытый', 'Закрытый', 'Закрытый', 'Закрытый', 'Открытый', 'Полуоткрытый', 'Закрытый', 'Закрытый', 'Закрытый', 'Открытый'],
	columnNames: ['№', 'Дебют','Ходы','Количество партий','Процент побед', 'Открытость'],

	print: function() {
        let html = '<table><tr>';
        for(let i = 0; i < this[columnNames].length; i++) {
            html += '<th>' + this[columnNames[i]] + '</th>';
        }
        html += '</tr>';
        for(let i = 0; i < this[debut].length; i++) {
            html += '<tr>';
            html += '<td>' + i + '</td>';
            html += '<td>' + this[debut[i]] + '</td>';
            html += '<td>' + this[moves[i]] + '</td>';
            html += '<td>' + this[parties[i]] + '</td>';
            html += '<td>' + this[percent[i]] + '</td>';
            html += '<td>' + this[openness[i]] + '</td>';
            html += '</tr>';
        }
        html += '</table>';
        return html;
    },

    getAllKey: function () {
        let arrKey = [];
        for(let key in this) {
            if (typeof(this[key]) !== 'function') {
                arrKey.push(key);
            }
        }
        return arrKey;
    },
}

let newTable = {
    __proto__: tableOriginal,
    toOriginal: function() {
        this.debut= ['Сицилианская защита', 'Открытое начало', 'Дебют Рети', 'Английское начало', 'Староиндийское начало',
         'Дебют Ларсена', 'Французская защита', 'Защита Каро-Канн', 'Защита Пирца-Уфимцева', 'Защита Робача',
         'Дебют ферзевых пешек', 'Голландская защита', 'Вариант Бенони', 'Англо-Индийская защита',
         'Дебют четырех коней', 'Защита Алехина', 'Защита Бенони', 'Защита Грюнфельда', 'Защита Нимцовича',
         'Защита Филидора'],
        this.moves= ['1.e4 с5', '1.е4 е5', '1.Nf3', '1.c4', '1.g3', '1.b3', '1.e4 e6', '1.e4 c6', '1.e4 d6', '1.e4 g6', '1.d4 d5', '1.d4 f5', '1.d4 g6', '1.c4 Nf6', '1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6', '1.e4 Nf6', '1.d4 Nf6 2.c4 c5 3.d5','1.d4 Nf6 2.c4 e6 3.Nc3 d5', '1.d4 Nf6 2.c4 e6 3.Nc3 Cb4', '1.e4 e5 2.Nf3 d6'],
        this.parties= [115998, 49163, 59276, 45320, 5864, 1505, 31007, 16320, 9509, 8499, 43384, 5798, 5568, 13834, 2067, 5823, 8990, 9621, 19086, 1307],
        this.percent= [46.4, 44.7, 55.7, 56.3, 55, 52.9, 44.3, 44.7, 44.1, 44.9, 42.7, 41.7, 42.5, 42.4, 48.5, 43.4, 58.2, 44.3, 45.7, 39.7],
        this.openness= ['Открытый', 'Открытый', 'Закрытый', 'Закрытый', 'Закрытый', 'Закрытый', 'Полуоткрытый', 'Полуоткрытый', 'Полуоткрытый', 'Полуоткрытый', 'Закрытый', 'Закрытый', 'Закрытый', 'Закрытый', 'Открытый', 'Полуоткрытый', 'Закрытый', 'Закрытый', 'Закрытый', 'Открытый'],
        this.columnNames= ['№', 'Дебют','Ходы','Количество партий','Процент побед', 'Открытость'];
        this.columnValues = ['number', 'debut','moves','parties','percent', 'openness'];
    }
};

//let resetButton = document.getElementById('resetButton');
//resetButton.onclick = function(){
//    new_stats.setToDefault();
//    let table = document.getElementById('Table');
//    table.innerHTML = newTable.print();
//}

let columnNames = ['№', 'Дебют','Ходы','Количество партий','Процент побед', 'Открытость'];
let columnValues = ['number', 'debut','moves','parties','percent', 'openness'];

let superTable = [];
for (let i = 0; i < tableOriginal.debut.length; i++) {
    let toAdd = {};
    toAdd.number = i + 1;
    toAdd.debut = tableOriginal.debut[i];
    toAdd.moves = tableOriginal.moves[i];
    toAdd.parties = tableOriginal.parties[i];
    toAdd.percent = tableOriginal.percent[i];
    toAdd.openness = tableOriginal.openness[i];
    superTable.push(toAdd);
}

//alert(superTable[0].debut);