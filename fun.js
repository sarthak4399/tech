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
let socket;
let reconnects = 0;
function connectWebsocket(url) {
	socket = new WebSocket(url);
	// socket.onmessage = function onmessage_callback(_message) {
	// 	console.log("sdkfjslkdjf")
	//
	// };
	//
	socket.onmessage = function(s) {
		console.log(s)
	};
	socket.onopen = function onopen_callback() {
		console.log("Connected to: " + socket.url);
		// socket.send(JSON.stringify({ "Hi": "from client" }));
	};
	socket.onclose = function onclose_callback(_event) {
		console.error("Connection Closed: ");
		reconnects++;
		if (reconnects > 10) {
			console.error("Tried reconnecting {reconnect} times");
		} else {
			console.warn("Trying to reconnect");
			setTimeout(function() {
				connectWebsocket(url);
			}, 5000);
		}
	};
	socket.onerror = function onerror_callback(_) {
		console.warn("Error Occured. Trying to reconnect.");
		setTimeout(function() {
			connectWebsocket(url);
		}, 5000);
	};
}
connectWebsocket("ws://localhost:5500");
    
