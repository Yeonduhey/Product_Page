$(document).ready(function(){

    var $price = $(".pd_price span").text(); //현재 가격 정보를 저장
    console.log("현재 가격의 원본 정보 : " + $price);
    console.log("현재 가격의 데이터 타입 : " + typeof $price); //string
    var $origin_price = $price.replace(",",""); //쉼표 제거한 원본 숫자만 저장
    console.log("숫자정보의 값 : " + $origin_price);
    console.log("숫자정보의 데이터 타입 : " + typeof $origin_price); //string

    var $basic_price = parseFloat($origin_price); //parseInt() - 문자열을 정수로 바꾸는 함수입니다.
    console.log(typeof $basic_price); //Number

/*  var $total_price; */
    var $total_price_opt;
    var $total_price_result = ""; //문자형 데이터라고 선언
    var $opt_val = "";
    var $num = $(".pd_count_box input").val();
    function calc_price(){//중복되는 내용 함수에 담기!
        $(".pd_count_box input").val($num);
/*         
        $total_price = $basic_price * $num;//숫자형 데이터 "," 없음
        var $total_result = $total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        console.log($total_result);

        $(".total_price_num span").text($total_result);
 */
        $opt_val = $(".pd_option select").val(); //0, 10000, 5000
        console.log($opt_val); //string 
        console.log(typeof $opt_val); //string
/* 
        $total_price = $basic_price * $num;//숫자형 데이터 "," 없음
        var $total_result = $total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        console.log($total_result);
 */
/*         $(".total_price_num span").text($total_result); 
 */
        $total_price_opt = $basic_price * $num + parseFloat($opt_val);
        $total_price_result = $total_price_opt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        console.log($total_price_result);

        $(".total_price_num span").text($total_price_result);
        
        var $detail_img = $(".pd_img img").attr("src");
        $(".cart_img img").attr("src", $detail_img);
        var $detail_title = $(".pd_title h3").text();
        $(".cart_info h4").text($detail_title);
        $(".buy_price span").text($total_price_result);

        var $sel_opt_txt = $(".pd_option select option:selected").text(); //선택된 항목 가져오겠다.
        console.log("aa"+$sel_opt_txt);
        $(".bottom_list p span").text($sel_opt_txt);

        var $opt_default = $(".pd_option select option:selected").attr("value");
        if($opt_default == "0"){
            $(".bottom_list").hide();
        }else{
            $(".bottom_list").show();
        }  
    };

    $(".pd_count_box a:first").click(function(){
        //1이 처음에 나와있어야 함
        if($num < 2){ //현재 구매수량이 1일 경우, 작동 금지
            
        }else{ //현재 구매수량이 2 이상일 경우, 1씩 감소 
            $num--; // 10 -> 9 -> 8 ... -> 1
            calc_price();
        }
        return false;
    });

    // 샐러드, 디저트 추가 select
    $(".pd_option select").change(function(){
        var $opt_val = $(this).val();
        console.log(typeof $opt_val); //string 
        calc_price();
    });

    $(".pd_btn li:last-child input").click(function(){
        $(".mycart").addClass("active");
        $(".dark").addClass("active");
        calc_price();
        /* var $detail_img = $(".pd_img img").attr("src");
        $(".cart_img img").attr("src", $detail_img);
        var $detail_title = $(".pd_title h3").text();
        $(".cart_info h4").text($detail_title);
        $(".buy_price span").text($total_price_result);

        var $sel_opt_txt = $(".pd_option select op  tion:selected").text(); //선택된 항목 가져오겠다.
        
        $(".bottom_list p span").text($sel_opt_txt);

        var $opt_default = $(".pd_option select option:selected").attr("value");
        if($opt_default == 0){
            $(".bottom_list").hide();
        }else{
            $(".bottom_list").show();
        } */
    });

    $(".pd_count_box a:last").click(function(){
        $num++;
        calc_price();
        return false;
    });

    $(".dark, .close_btn, .cart_btn li:last-child input").click(function(){
        $(".mycart").removeClass("active");
        $(".dark").removeClass("active");
    });

    //정규식 표현 /\B(?=(\d{3})+(?!\d))/g
    // ⑴ /~/ : 정규식 표현의 시작과 끝 
    // ⑵ \B : 공백처리(Blank) 
    // ⑶ ?= : 내부의 정규시 실행문을 조합하여 결론 도출
    // ⑷ \d : dimension 0~9까지의 숫자 데이터만을 지정
    // ⑸ \d{3} : 좌측자리부터 세자리마다 패턴 구성
    // ⑹ ?!\d : 숫자 데이터 만을 지정 (!)숫자를 세는 과정에서 역순으로 개수를 세겠다는 의미 - 부정형 전방 탐색(역방향으로 셈)

    // (실수의 우측으로부터 첫번째 자리 숫자가 총 10개라면 10의 자리 순서까지 지정)
    // 1000000000   =>  100 000 000 0   =>  1 000 000 000   =>  1,000,000,000

    // ⑺ g : Global(글로벌) 정규 표현을 사용하겠다는 의미




});