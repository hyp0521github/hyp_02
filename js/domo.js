function animate(obj, target, callback) {
	//清除掉定时器，只保留一个定时器
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		//因为step可能有负值，负值就得往小了取，所以要加个判断条件
		//					var step = Math.ceil((target - div.offsetLeft) / 10)步长值
		var step = (target - obj.offsetLeft) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step); //三元运算符写的格式是step = step判断条件
		if(obj.offsetLeft == target) {
			clearInterval(obj.timer)
			//调用函数，写在定时器结束之后
			//if (callback) {
			//callback();
			//	}
			callback && callback();
		}
		obj.style.left = obj.offsetLeft + step + 'px';
	}, 15)
}