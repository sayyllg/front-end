let versionCompare = function(v1, v2){
	
	if(typeof(v1) == 'undefined'|| v1 == null || typeof(v2) == 'undefined'|| v2 == null){
		
		return '参数不正确！';
	}

	if(typeof(v1) != typeof(v2)){
		
		return '版本号格式不相同';
	}

	if(typeof(v1) == 'number' && typeof(v2) === 'number'){

		return compare(v1, v2);
	}
	
	if(v1 === v1 && (v1 == '' || v2 == '')){
		return v1==''? v2: v1;
	}

	if(typeof(v1) == 'string' && typeof(v2) === 'string'){

		const arrV1 = v1.split('.');
		const arrV2 = v2.split('.');
		let arr = [];
		let res = '';
		if(arrV1.length >= arrV2.length){
			arr = arrV1;
		}else{
			arr = arrV2;
		}
		console.log(arr);
		for(var i in arr){	

			itemV1 = arrV1[i] ? arrV1[i] : 0;
			itemV2 = arrV2[i] ? arrV2[i] : 0;
			if(itemV1 != itemV2){
				if(itemV1>itemV2){
					res = v1;
				}else{
					res = v2;
				}
				break;
			}
			
		}
		return res == '' ? '相等': res;
	}

}

let compare = function(v1, v2){

	if(v1 == v2){
		return '相等';
	}else if(v1>v2){
		return v1;
	}else{
		return v2;
	}
}
