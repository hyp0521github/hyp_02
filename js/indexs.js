window.addEventListener('load', function() {
	var focus = document.querySelector('.focus');
	var l = document.querySelector('.arrow_l');
	var r = document.querySelector('.arrow_r');
	focus.addEventListener('mouseover', function() {
		l.style.display = 'block';
		r.style.display = 'block';
		clearInterval(timer);
		timer = null;
	})
	focus.addEventListener('mouseout', function() {
		l.style.display = 'none';
		r.style.display = 'none';
		timer = setInterval(function() {
			r.click();
		}, 2000)
	})
	var circle = focus.querySelector('.circle');
	var ul = focus.querySelector('ul');
	var focusWidth = focus.offsetWidth;
	for(i = 0; i < ul.children.length; i++) {
		var li = document.createElement('li');
		circle.appendChild(li);
		circle.children[i].setAttribute('index', i);
		li.addEventListener('click', function() {
			for(i = 0; i < circle.children.length; i++) {
				//这里因为li是新建的所以不能用li[i]
				circle.children[i].style.backgroundColor = '#F1F1F1';
			}
			this.style.backgroundColor = 'red';
			var index = this.getAttribute('index');
			num = index;
			circlenum = index;
			animate(ul, -index * focusWidth);
		})
	}
	circle.children[0].style.backgroundColor = 'red';
	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);
	var circlenum = 0;
	var num = 0;
	var flag = true;
	r.addEventListener('click', function() {
		if(flag) {
			flag = false;
			if(num == ul.children.length - 1) {
				ul.style.left = 0;
				num = 0;
			}
			num++;
			animate(ul, -num * focusWidth, function() {
				flag = true;
			});
			circlenum++;
			//如果circlenum=5，说明走到最后一张图片了，就把他改为0
			if(circlenum == circle.children.length) {
				circlenum = 0;
			}
			domo();
		}
	})
	l.addEventListener('click', function() {
		if(flag) {
			flag = false;
			if(num == 0) {
				ul.style.left = -num * focusWidth + 'px';
				num = ul.children.length - 1;
			}
			num--;
			animate(ul, -num * focusWidth, function() {
				flag = true;
			});
			circlenum--;
			//if(circlenum < 0) {
			//改成第五个小圆圈，第五个小圆圈索引号为4
			//circlenum = circle.children.length - 1;
			circlenum = circlenum < 0 ? circle.children.length - 1 : circlenum;
			domo();
		}
	})
	function domo() {
		for(i = 0; i < circle.children.length; i++) {
			circle.children[i].style.backgroundColor = '#F1F1F1';
		}
		circle.children[circlenum].style.backgroundColor = 'red';
	}
	var timer = setInterval(function() {
		r.click();
	}, 2000)
})