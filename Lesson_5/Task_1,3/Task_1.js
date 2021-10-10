var table = document.getElementById('chessboard');
table.style.borderCollapse = 'collapse';
var x = 0;
var y = 10;
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var figures = ['Л', 'К', 'С', 'Ф', 'К', 'C', 'К', 'Л'];

for (var f = 0; (f < 10); f++) {
    if (f % 2 != 0) {
        var string = document.createElement('tr');
        string.id = 'string' + f;
        string.style.height = '60px';
        for (var l = 1; (l < 11); l++) {
            var column = document.createElement('td');
            column.id = 'sell' + (l + y);
            column.style.width = '60px';
            column.style.borderStyle = 'solid';
            column.style.borderRadius = '1px';
            column.style.borderColor = 'black';
            if (f == 1 && l > 1) {
                column.innerText = figures[9 - l];
                column.style.textAlign = 'center';
                column.style.fontSize = '46px';
                column.style.color = 'black';
                column.style.transform = 'rotate(180deg)';
            }
            if (f == 7) {
                column.innerText = 'П';
                column.style.textAlign = 'center';
                column.style.fontSize = '46px';
                column.style.color = 'black';
            }
            if (l % 2 != 0) {
                column.style.backgroundColor = 'black';
                if (f == 7) {
                    column.innerText = 'П';
                    column.style.textAlign = 'center';
                    column.style.fontSize = '46px';
                    column.style.color = 'white';
                }
                if (f == 1 && l > 1) {
                    column.innerText = figures[9 - l];
                    column.style.textAlign = 'center';
                    column.style.fontSize = '46px';
                    column.style.color = 'white';
                    column.style.transform = 'rotate(180deg)';
                }
            }
            if (f == 9) {
                column.style.backgroundColor = 'black';
                column.style.borderColor = 'black';
                if (l + y > 1 + y && l + y < 10 + y) {
                    column.innerText = letters[l - 2];
                    column.style.textAlign = 'center';
                    column.style.fontSize = '46px';
                    column.style.color = 'white';
                }
            }
            else if (f > 0 && f < 9) {
                if (l == 1) {
                    column.style.backgroundColor = 'black';
                    column.innerText = f;
                    column.style.textAlign = 'center';
                    column.style.fontSize = '46px';
                    column.style.color = 'white';
                    column.style.borderColor = 'black';
                }
                else if (l == 10) {
                    column.style.backgroundColor = 'black';
                    column.innerText = f;
                    column.style.textAlign = 'center';
                    column.style.fontSize = '46px';
                    column.style.color = 'white';
                    column.style.transform = 'rotate(180deg)';
                    column.style.borderColor = 'black';
                }
            }
            string.append(column);
        }
        y += 20;
    }
    else if (f % 2 == 0) {
        var string = document.createElement('tr');
        string.id = 'string' + f;
        string.style.height = '60px';
        for (var l = 1; (l < 11); l++) {
            var column = document.createElement('td');
            column.id = 'sell' + (l + x);
            column.style.width = '60px';
            column.style.borderStyle = 'solid';
            column.style.borderRadius = '1px';
            column.style.borderColor = 'black';
            if (f == 2 && l > 1) {
                column.innerText = 'П';
                column.style.textAlign = 'center';
                column.style.fontSize = '46px';
                column.style.color = 'black';
                column.style.transform = 'rotate(180deg)';
            }
            if (f == 8) {
                column.innerText = figures[l - 2];
                column.style.textAlign = 'center';
                column.style.fontSize = '46px';
                column.style.color = 'black';
            }
            if (l % 2 == 0) {
                column.style.backgroundColor = 'black';
                column.style.borderColor = 'black';
                if (f == 2) {
                    column.innerText = 'П';
                    column.style.textAlign = 'center';
                    column.style.fontSize = '46px';
                    column.style.color = 'white';
                    column.style.transform = 'rotate(180deg)';
                }
                if (f == 8) {
                    column.innerText = figures[l - 2];
                    column.style.textAlign = 'center';
                    column.style.fontSize = '46px';
                    column.style.color = 'white';
                }
            }
            if (f == 0) {
                column.style.backgroundColor = 'black';
                column.style.borderColor = 'black';
                if (l > 1 && l < 10) {
                    column.innerText = letters[l - 2];
                    column.style.textAlign = 'center';
                    column.style.fontSize = '46px';
                    column.style.color = 'white';
                    column.style.transform = 'rotate(180deg)';
                }
            }
            else if (f > 0 && f < 9) {
                if (l == 1) {
                    column.style.backgroundColor = 'black';
                    column.innerText = f;
                    column.style.textAlign = 'center';
                    column.style.fontSize = '46px';
                    column.style.color = 'white';
                    column.style.borderColor = 'black';
                }
                else if (l == 10) {
                    column.style.backgroundColor = 'black';
                    column.innerText = f;
                    column.style.textAlign = 'center';
                    column.style.fontSize = '46px';
                    column.style.color = 'white';
                    column.style.transform = 'rotate(180deg)';
                    column.style.borderColor = 'black';
                }
            }
            string.append(column);
        }
        x += 20;
    }
    table.append(string);
}