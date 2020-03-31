var timeTo,time,result;
var dayArray = [23 ,15, 14, 33, 18, 10, 9]; // 2017년부터 시작
var univ = ["가야대","	가야대(김해)","	가천대(글로벌)","	가천대(메디컬)","가톨릭관동대","가톨릭대(성신)","	가톨릭대(성심)","	가톨릭대(성의)","	감리교신학대","	강남대","강릉원주대","	강릉원주대(원주)","	강원대","	강원대(도계)","	강원대(삼척)","건국대","	건국대(글로컬)","	건양대","	건양대(메디컬)","	경기대","경기대(서울)	","경남과학기술대","	경남대","	경동대(Medical)","	경동대(Metropol)","경동대(URIE1)","	경동대(URIE2)","	경북대","	경북대(상주)","	경상대","경상대(칠암)","	경상대(통영)","	경성대","	경운대","	경인교대(경기)","경인교대(인천)","	경일대","	경주대","	경찰대학","	경희대","계명대","	계명대(대명)","	고려대","	고려대(세종)","	고신대","고신대(송도)","	공군사관학교	공주교대","	공주대","	공주대(예산)","공주대(옥룡)","	공주대(천안)","	광신대","	광운대","	광주가톨릭대","광주과학기술원	광주교대","	광주대","	광주여대","	국군간호사관학교","국민대","	군산대","	그리스도대","	극동대","	금강대","금오공과대","	김천대","	꽃동네대","	나사렛대","	남부대","남서울대","	단국대(죽전)","	단국대(천안)","	대구가톨릭대","	대구경북과학기술원대구교대","	대구대","	대구예술대","	대구외대","	대구한의대","대구한의대(수성)","	대신대","	대전가톨릭대","	대전대","	대전신학대","대진대","	덕성여대","	동국대","	동국대(경주)","	동국대(바이오메디)동덕여대","	동명대","	동서대","	동신대","	동아대","동양대","	동의대","	루터대","	명지대","	명지대(서울)","목원대","	목포가톨릭대","	목포대","	목포해양대","	배재대","배재대(대덕)","	백석대","	부경대","	부경대(용당)","	부산가톨릭대","부산교대","	부산대","	부산대(밀양)","	부산대(양산)","	부산외대","부산장신대","	삼육대","	상명대","	상명대(천안)","	상지대","서강대","	서경대","	서남대","	서남대(아산)","	서울과학기술대","서울교대","	서울기독대","	서울대","	서울시립대","	서울신학대","서울여대","	서울장신대","	서원대","	선문대","	성결대","성공회대","	성균관대","	성균관대(자연과학)	"," 성신여대(돈암수정)","	성신여대(미아운정그린)","세명대","	세종대","	세한대","	세한대(당진)","	송원대","수원가톨릭대","	수원대","	숙명여대","	순천대","	순천향대","숭실대","	신경대","	신라대","	신한대(동두천)","	신한대(의정부)","아세아연합신학대","	아주대","	안동대","	안양대","	안양대","(강화)연세대","	연세대(국제)","	연세대(원주)","	영남대","	영남대(대구)","영남신학대","	영동대","	영산대","	영산대(양산)","	영산선학대","예수대","	예원예술대","	예원예술대(양주)","	용인대","	우석대","우석대(진천ASEM)","	우송대","	울산과학기술대","	울산대","	원광대","위덕대","	육군사관학교	을지대","	을지대(성남)","	이화여대","인제대","	인제대(부산)","	인천가톨릭대","	인천가톨릭대(신학)","	인천대","인하대","	장로회신학대","	전남대","	전남대(여수)","	전북대","전북대(고창)","	전북대(익산)","	전주교대","	전주대","	제주국제대","제주대","	제주대(사라)","	조선대","	중부대","	중부대(고양)","중앙대","	중앙대(안성)","	중앙승가대","	중원대","	진주교대","차의과학대","	창신대","	창원대","	청운대","	청운대(인천)","청주교대","	청주대","	청주대(오송바이오)","	초당대","	총신대","추계예술대","	춘천교대","	충남대","	충북대","	침례신학대","칼빈대","	평택대","	포항공과대","	한경대","	한국과학기술원한국교원대","	한국교통대","	한국교통대(의왕)","	한국교통대(증평)","	한국국제대","한국기술교대","	한국뉴욕주립대","	한국산업기술대","	한국성서대","	한국외대","한국외대(글로벌)","	한국체육대","	한국항공대","	한국해양대","	한남대","한동대","	한라대","	한려대","	한림대","	한밭대","한서대","	한서대(태안)","	한성대","	한세대","	한신대","한양대","	한양대(ERICA)","	한영신학대","	한일장신대","	한중대","해군사관학교","	협성대","	호남대","	호남대(쌍촌)","	호남신학대","호서대","	호서대(아산)","	호원대","	홍익대","	홍익대(세종)"];
var dayLeft,hourLeft,minLeft,secLeft;
var day,hour,min,sec,mili;
var dayElement,hourElement,minElement,secElement,miliElement;

function init() {
    var year = new Date().getFullYear();
    var targetDay;

    document.getElementById('year').innerHTML = year + 1;

    if (year >= 2024){
        console.log('저장된 연도를 벗어납니다');
    } else {
        targetDay = dayArray[year-2017];
    }

    timeTo = new Date(year,10,targetDay,8,40); //Month range (0~11)
    time = Date.now();

    result = (timeTo/1000) - (time/1000);

    if (result <= 0) {
        document.getElementById('year').innerHTML = year + 2;
        targetDay = dayArray[year-2017+1];
        timeTo = new Date(year+1,10, targetDay,8,40);
        result = (timeTo/1000) - (time/1000);
    }

    day = Math.floor(result/86400);
    hour = Math.floor(result%86400/3600);
    min = Math.floor(result%86400%3600/60);
    sec = Math.floor(result%86400%3600%60);
    mili = Math.floor(((time-timeTo)*-1)%1000/10);
    mili = (mili < 10) ? addZeroInSingleDigit(mili) :sec;

    dayLeft = day;
    hourLeft = hour;
    minLeft = min;
    secLeft = sec;
    //document
    dayElement = document.getElementById('day');
    hourElement = document.getElementById('hour');
    minElement = document.getElementById('min');
    secElement = document.getElementById('sec');
    miliElement = document.getElementById('mili');

    dayElement.innerHTML = dayLeft;
    hourElement.innerHTML = (hourLeft < 10) ? addZeroInSingleDigit(hourLeft) : hourLeft;
    minElement.innerHTML = (minLeft < 10) ? addZeroInSingleDigit(minLeft) : minLeft;
    secElement.innerHTML = (secLeft < 10) ? addZeroInSingleDigit(secLeft) : secLeft;
    miliElement.innerHTML = mili;
}

function timer() {
    time = Date.now();
    result = (timeTo/1000) - (time/1000);

    if (result <= 0){
        init();
    }

    day = Math.floor(result/86400);
    hour = Math.floor(result%86400/3600);
    min = Math.floor(result%86400%3600/60);
    sec = Math.floor(result%86400%3600%60);
    mili = Math.floor(((time-timeTo)*-1)%1000/10);

    if (dayLeft > day){
        dayLeft = day;
        dayElement.innerHTML = dayLeft;
    }
    if (hourLeft > hour || ((hour==23) && (hourLeft == 0))){
        hourLeft = hour;
        hourElement.innerHTML = (hourLeft < 10) ? addZeroInSingleDigit(hourLeft) : hourLeft;
    }
    if (minLeft > min || ((min == 59) && (minLeft == 0))){
        minLeft = min;
        minElement.innerHTML = (minLeft < 10) ? addZeroInSingleDigit(minLeft) : minLeft;
    }
    if (secLeft > sec || ((sec == 59) && (secLeft == 0))){
        secLeft = sec;
        secElement.innerHTML = (secLeft < 10) ? addZeroInSingleDigit(secLeft) : secLeft;
    }
    miliElement.innerHTML = (mili < 10) ? addZeroInSingleDigit(mili) : mili;
}

var z = function(){
    document.getElementById("background").insertAdjacentHTML("beforeend","<span class='background_effect' style='top:"+(getRandomIntInclusive(0,20)*5)+"% ;'>"+univ[getRandomIntInclusive(0,263)]+"</span>");
}

var zz = function(){
    var target = document.getElementsByClassName('background_effect');
    target[0].remove(0);
}

var addZeroInSingleDigit = function(digit){
    return "0"+digit;
};

var getRandomIntInclusive = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

init();

var intervalTimer = setInterval(timer,32);
var intervalZ = setInterval(z,400);
setTimeout(function() {
    intervalZZ = setInterval(zz,400);
},5000);
