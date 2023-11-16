let words = ['cook','save','taste','aves','vase','state','map']

const isSame =(current, other)=>{
	if(current.length !== other.length){
		return false
	}else if(current === other){
		return false
	}else{
		let sameByChar = false
		for (let i = 0; i < current.length; i++){
			for (let j = 0; j < other.length;j++){
				if(current[i]=== other[j]){
					return sameByChar = true
				}
			}
		}
	}
}

let result =[];
for (let i = 0; i < words.length; i++){
	let temp = []

	for(let j = 0; j <words.length; j++){
			if(temp.length === 0){
					temp.push(words[i])
				}
			if(isSame(words[i], words[j])){
				temp.push(words[j])
				words[j] = ''
			}
		}

	if(temp[0].length !== 0){
		result.push(temp)
	}
	temp=[]

}
console.log(result)
