function updateObject(target, source){
	for (var property in source) {
		if (source.hasOwnProperty(property)) {
			if (["number", "string", "boolean", "undefined", "symbol", "function"].indexOf(typeof source[property]) >= 0) {
				target[property] = source[property];
			}else if(typeof source[property] == "object"){
				if(!target[property]){
					target[property] = {};
				}
				updateObject(target[property], source[property]);
			}else{
				console.log("Unhandled OBJ", typeof source[property]);
			}
		}
	}
}

module.exports = updateObject;