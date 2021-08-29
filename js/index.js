window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var left = focus.querySelector('.focus_left');
    var right = focus.querySelector('.focus_right');
    focus.addEventListener('mouseover', function() {
        left.style.display = 'block';
        right.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseout', function() {
        left.style.display = 'none';
        right.style.display = 'none';
        timer = setInterval(function() {
            right.click();
        },2000);
    });
    var ol = focus.querySelector('ol');
    var ul = focus.querySelector('ul');
    var img = ul.querySelector('img');
    var width = focus.offsetWidth;
    for(var i = 0; i < ul.children.length - 1; i++) {
        // 创建li要用document
        var li = document.createElement('li');
        ol.appendChild(li);
        ol.children[i].setAttribute('index', i);
        // 因为li是新建的不能用i
        li.addEventListener('click', function() {
            for(i = 0; i < ol.children.length; i++) {
                ol.children[i].style.background = '';
            }
             this.style.background = 'white';
             var index = this.getAttribute('index');
             olnum = index;
             num = index; 
            //使用动画的元素必须要有定位
            animate(ul, -index * width);
        });
    };
    ol.children[0].style.background = 'white';
     var num = 0;
     var olnum = 0;
    //  var flag = true;
    left.addEventListener('click', function() {
        // if (flag) {
            // flag = false;
            if(num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * width + 'px';
            }
            num--;
            animate(ul, -num * width);
            olnum--;
            if (olnum < 0) {
                olnum = ol.children.length - 1;
            }
            domo();
    });
    right.addEventListener('click', function() {
        // if (flag) {
            // flag = false;
             // 点6次它移动到最后一张图片
            if(num == ul.children.length - 1) {
                // 当滚动到最后一张图片时，不做动画的跳到第一张图片
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * width);
            // 点5次它就移动到最后一个li
            olnum++;
            if (olnum == ul.children.length - 1) {
                olnum = 0;
            }
            domo();
    })
    function domo() {
        for(i = 0; i < ol.children.length; i++) {
            ol.children[i].style.background = '';
        }
         ol.children[olnum].style.background = 'white';
    }
    var timer = setInterval(function() {
        right.click();
    },2000);
    var lifeservice = document.querySelector('.lifeservice');
    var li = lifeservice.querySelectorAll('li');
    for(var i = 0; i < li.length; i++) {
        var index = 44 * i;
        li[i].children[0].style.backgroundPosition = '0 -' + index +'px';
        //  里面如果有变量就要写到外面
        //  li[i].children[0].style.backgroundPosition = '0 -10' + 'px';
    }
    var floor = document.querySelector('.jiadian');
    var box2 = floor.querySelector('.box2');
    var l = box2.querySelector('.b_l');
    var r = box2.querySelector('.b_r')
    box2.addEventListener('mouseover', function() {
        l.style.display = 'block';
        r.style.display = 'block';
        clearInterval(timerf);
        timerf = null;
    });
    box2.addEventListener('mouseout', function() {
        l.style.display = 'none';
        r.style.display = 'none';
        timerf = setInterval(function() {
            r.click();
        },2000);
    });
    var ful = box2.querySelector('ul');
    var fol = box2.querySelector('ol');
    var img = ful.querySelector('img');
    box2width = img.offsetWidth;
    for(var i = 0; i < ful.children.length - 1; i++) {
        var li = document.createElement('li');
        fol.appendChild(li);
        fol.children[i].setAttribute('index', i);
        fol.children[i].addEventListener('click', function() {
            for(var i = 0; i < fol.children.length; i++) {
                fol.children[i].style.background = '';
            }
            this.style.background = 'white';
            var indexf = this.getAttribute('index');
            lsum = indexf;
            rsum = indexf;
            animate(ful, -indexf * box2width);
        });
    }
    fol.children[0].style.background = 'white';
    var rsum = 0;
    var lsum = 0;
    var flag = true;
    r.addEventListener('click',function() {
        if (flag) {
            flag = false;
            if (rsum == ful.children.length - 1) {
            rsum = 0;
            ful.style.left = 0;
        }
        rsum++;
        animate(ful, -rsum * box2width, function() {
            flag = true;
        });
        lsum++;
        if (lsum == fol.children.length) {
            lsum = 0;
        }
        deme();
        } 
    })
    l.addEventListener('click', function() {
        if(flag) {
            flag = false;
            if (rsum == 0) {
            rsum = ful.children.length - 1;
            ful.style.left = -rsum * box2width + 'px';
        }
        rsum--;
        animate(ful, -rsum * box2width, function() {
            flag = true;
        });
        lsum--;
        if (lsum < 0) {
            lsum = fol.children.length - 1;
        }
        deme();
        }
    })
    function deme() {
        for(var i = 0; i < fol.children.length; i++) {
            fol.children[i].style.background = '';
        }
        fol.children[lsum].style.background = 'white';
    }
    var timerf = setInterval(function() {
        r.click();
    },2000);
    var floors = document.querySelector('.jiaju');
    var box2s = floors.querySelector('.box2');
    var ls = box2s.querySelector('.b_l');
    var rs = box2s.querySelector('.b_r');
    box2s.addEventListener('mouseover', function() {
        ls.style.display = 'block';
        rs.style.display = 'block';
        clearInterval(timerfs);
        timerfs = null;
    });
    box2s.addEventListener('mouseout', function() {
        ls.style.display = 'none';
        rs.style.display = 'none';
        timerfs = setInterval(function() {
            rs.click();
        },2000);
    });
    var fuls = box2s.querySelector('ul');
    var fols = box2s.querySelector('ol');
    var imgs = fuls.querySelector('img');
    box2widths = imgs.offsetWidth;
    for(var i = 0; i < fuls.children.length - 1; i++) {
        var li = document.createElement('li');
        fols.appendChild(li);
        fols.children[i].setAttribute('index', i);
        fols.children[i].addEventListener('click', function() {
            for(var i = 0; i < fols.children.length; i++) {
                fols.children[i].style.background = '';
            }
            this.style.background = 'white';
            var indexfs = this.getAttribute('index');
            lsums = indexfs;
            rsums = indexfs;
            animate(fuls, -indexfs * box2widths);
        });
    }
    fols.children[0].style.background = 'white';
    var rsums = 0;
    var lsums = 0;
    var flags = true;
    rs.addEventListener('click',function() {
        if (flags) {
            flags = false;
            if (rsums == fuls.children.length - 1) {
            rsums = 0;
            fuls.style.left = 0;
        }
        rsums++;
        animate(fuls, -rsums * box2widths, function() {
            flags = true;
        });
        lsums++;
        if (lsums == fols.children.length) {
            lsums = 0;
        }
        demes();
        } 
    })
    ls.addEventListener('click', function() {
        if(flags) {
            flags = false;
            if (rsum == 0) {
            rsums = fuls.children.length - 1;
            fuls.style.left = -rsums * box2widths + 'px';
        }
        rsums--;
        animate(fuls, -rsums * box2widths, function() {
            flags = true;
        });
        lsums--;
        if (lsums < 0) {
            lsums = fols.children.length - 1;
        }
        demes();
        }
    })
    function demes() {
        for(var i = 0; i < fols.children.length; i++) {
            fols.children[i].style.background = '';
        }
        fols.children[lsums].style.background = 'white';
    }
    var timerfs = setInterval(function() {
        rs.click();
    },2000);
    var f_nav = document.querySelector('.floor_nav');
    var floor = document.querySelector('.floor');
    var floorTop = floor.offsetTop;
    function toggleTol() {
        // console.log(window.pageYOffset);原生js的被卷去头部
        if (window.pageYOffset >= floorTop - 5) {
            f_nav.style.display = 'block';
        } else {
            f_nav.style.display = 'none';
        }
    };
    toggleTol();
    window.addEventListener('scroll', function() {
        toggleTol();
    });
    // top和bottom里面有一个animate动画，domo里面也有一个animate动画，俩个就重复了
    var search = document.querySelector('.search');
    var ipt_s = search.querySelector('#ipt_search');
    ipt_s.addEventListener('focus', function() {
        if (this.value === '语言开发') {
            this.value = '';
        } 
        // 修改的是输入的文字
        this.style.color = 'red';
    });
    ipt_s.addEventListener('blur', function() {
        if (this.value === '') {
            this.value = '语言开发';
        }
        // 修改的是离开光标后的文字,不修改他就默认上面的颜色
        this.style.color = '#999';
    });
    ipt_s.style.color = '#999';
    var nav = document.querySelector('.nav');
    var dd_l = nav.querySelector('.dd_left');
    var dd_li = dd_l.querySelectorAll('li');
    for(var i = 0; i < dd_li.length; i++) {
        dd_li[i].addEventListener('mouseover', function() {
            this.style.background = 'red';
            this.style.color = 'white';
        });
        dd_li[i].addEventListener('mouseout', function() {
            this.style.background = '';
            this.style.color = 'black';
        });
    }
    var navitems = document.querySelector('.navitems');
    var jdy = navitems.querySelector('.jdy');
    var lis = navitems.querySelectorAll('li');
    for(i = 0; i < lis.length; i++) {
        // 这个要在鼠标经过的外面获取 mouseenter 鼠标经过它本身才会触发 mouseover经过自身会触发，经过他的子盒子也会促发
        lis[i].addEventListener('mouseover', function() {
            var lisw = this.offsetLeft;
            animate(jdy, lisw);
            this.children[0].style.color = 'red';
            this.children[0].style.fontWeight = 900;
        });
        lis[i].addEventListener('mouseout', function() {
            animate(jdy, 47);
            this.children[0].style.color = '';
            this.children[0].style.fontWeight = 400;
        });
    }
    var tab_list = floor.querySelector('.tab_list');
    var tab_li = tab_list.querySelectorAll('li');
    var box_bd = floor.querySelector('.box_bd');
    var tab_w = box_bd.querySelectorAll('.w');
    for(i = 0; i < tab_li.length; i++) {
        tab_li[i].setAttribute('index', i)
        tab_li[i].addEventListener('click', function() {
            var tab_index = this.getAttribute('index');
            // console.log(tab_index);
            for(i = 0; i < tab_w.length; i++) {
                tab_w[i].style.display = 'none';
            }
            tab_w[tab_index].style.display = 'block';
        });
    }
    var f_img = document.querySelector('.f_img');
    document.addEventListener('mousemove', function(e) {
        f_img.style.left = e.pageX - 25 + 'px';
        f_img.style.top = e.pageY + 50 + 'px';
    }, true);
});