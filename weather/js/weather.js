var output = document.getElementById("out");

var appid = 'dj0zaiZpPVRUWHpIdFdwd3J2aSZzPWNvbnN1bWVyc2VjcmV0Jng9ZGY-';
var urlText = 'http://weather.olp.yahooapis.jp/v1/place?coordinates=139.732293,35.663613&appid=' + appid;
    
    function callOtherDomain() {
        var req = new XMLHttpRequest({
        mozSystem: true
        });

        if(req) {
        console.log('req is not null');
        req.open('GET', urlText, true);
        req.onreadystatechange = function(aEvt){
            //console.log('onreadystatechange');
            //alert('req.readyState == ' + req.readyState);
            if(req.readyState == 4){
                console.log('一連の動作が完了');
                console.log(req.statusText);
                if(req.status == 200){
                    console.log(req.responseText);
                    alert(req.responseText);
                }else{
                    //
                }
            }else if(req.readyState == 0){
                console.log('openがまだ');
            }else if(req.readyState == 1){
                console.log('sendがまだ');
            }else if(req.readyState == 2){
                console.log('ヘッダーとステータスが通った');
            }else if(req.readyState == 3){
                console.log('ダウンロード中');
            }
        };
        req.send(null); 
        }
    }
    

    function load(){
        var showWeath = document.getElementById("showWeatherBtn");
        showWeath.addEventListener('click', callOtherDomain, false);
    }

    //documentが完全に読み込まれたとき
    document.addEventListener('DOMContentLoaded', load, false);

