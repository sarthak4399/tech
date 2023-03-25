const key = "1000";
document.getElementById('key').innerHTML = "Key: " + key;

for (let i = 0; i < key.length; i++) {
    console.log(key[i]);
        if (key[i] == '1' && i == 0)
            document.getElementById('q0').style.backgroundColor = "black";
        else if (key[i] == '0' && i == 0) {
            document.getElementById('q0').style.backgroundColor = "white";
        }

        if (key[i] == '1' && i == 1)
            document.getElementById('q1').style.backgroundColor = "black";
        else if (key[i] == '0' && i == 1) {
            document.getElementById('q1').style.backgroundColor = "white";
        }

        if (key[i] == '1' && i == 2)
            document.getElementById('q2').style.backgroundColor = "black";
        else if (key[i] == '0' && i == 2) {
            document.getElementById('q2').style.backgroundColor = "white";
        }

        if (key[i] == '1' && i == 3)
            document.getElementById('q3').style.backgroundColor = "black";
        else if (key[i] == '0' && i == 3) {
            document.getElementById('q3').style.backgroundColor = "white";
        }
}
    
