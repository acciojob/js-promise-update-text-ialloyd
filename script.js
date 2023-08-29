//your JS code here. If required.

const func=()=>{

	return new Promise(resolve => {
		setTimeout(()=>{

			resolve('Hello, world!');
		},1000)
		
	})
}

func().then(data=>document.getElementById('output').textContent=data)