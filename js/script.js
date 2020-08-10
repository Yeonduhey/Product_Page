$(document).ready(function () {
    //이차 배열 패턴 = ["이미지 파일", "타이틀", "콘텍스트", "가격정보", "업데이트 날짜", "좋아요 횟수"]
    var $pd_arr = [
        ["img1.jpg", "거실 인테리어 4", "합리주의 실용 인테리어 4", "3000000", "20200802", "50"],
        ["img2.jpg", "거실 인테리어 1", "합리주의 실용 인테리어 1", "1500000", "20190503", "302"],
        ["img3.jpg", "침실 인테리어 4", "모더니즘 실용 인테리어 3", "2000000", "20200402", "100"],
        ["img4.jpg", "침실 인테리어 4", "심플 실용 인테리어 2", "2800000", "20180102", "400"],
        ["img5.jpg", "주방 인테리어 1", "포스트 모더니즘 인테리어 1", "3500000", "20190702", "200"],
        ["img6.jpg", "침실 인테리어 3", "합리주의 실용 인테리어 8", "300000", "20191202", "1000"],
        ["img7.jpg", "서재 인테리어 1", "아르데코 실용 인테리어 4", "1900000", "20181223", "989"],
        ["img8.jpg", "욕실 인테리어 4", "합리주의 실용 인테리어 5", "2300000", "20200305", "133"],
        ["img1.jpg", "거실 인테리어 4", "합리주의 실용 인테리어 4", "3000000", "20200802", "50"],
        ["img2.jpg", "거실 인테리어 1", "합리주의 실용 인테리어 1", "1500000", "20190503", "302"],
        ["img3.jpg", "침실 인테리어 4", "모더니즘 실용 인테리어 3", "2000000", "20200402", "100"],
        ["img4.jpg", "침실 인테리어 4", "심플 실용 인테리어 2", "2800000", "20180102", "400"],
        ["img5.jpg", "주방 인테리어 1", "포스트 모더니즘 인테리어 1", "3500000", "20190702", "200"],
        ["img6.jpg", "침실 인테리어 3", "합리주의 실용 인테리어 8", "300000", "20191202", "1000"],
        ["img7.jpg", "서재 인테리어 1", "아르데코 실용 인테리어 4", "1900000", "20181223", "989"]
    ];

    var $pd_box = `
    <div class="pd_box">
        <div class="pd_photo">
            <img src="img/img1.jpg" alt="">
        </div>
        <div class="pd_info">
            <h3 class="pd_title">Title</h3>
            <p class="pd_text">Context</p>
            <div class="pd_etc">
                <span class="pd_price">가격정보</span>
                <span class="pd_date">업데이트 날짜</span>
            </div>
        <p class="fav">좋아요&nbsp; <span>100</span></p>
        </div>
    </div>
    `;

    var $btn_index; //최신 순 클릭하면 <button> 태그의 인덱스 번호인 0

    for (i = 0; i < $pd_arr.length; i++) {
        $(".pd_frame").append($pd_box);
    }
    //append 나의 마지막 자식으로 끼워넣겠다    
    /* sort 함수 
    http://dudmy.net/javascript/2015/11/16/javascript-sort/
     */
    function pd_sort() {
        $(".pd_box").each(function (index) {
            $(this).find(".pd_photo img").attr("src", "img/" + $pd_arr[index][0]);
            $(this).find("h3.pd_title").text($pd_arr[index][1]);
            $(this).find(".pd_text").text($pd_arr[index][2]);
            $(this).find(".pd_price").text($pd_arr[index][3]);
            $(this).find(".pd_date").text($pd_arr[index][4]);
            $(this).find(".fav span").text($pd_arr[index][5]);
        });
        $(".sort_button button").removeClass("active"); //모든 버튼으로부터 active라는 클래스를 제거
        $(".sort_button button").eq($btn_index).addClass("active"); //클릭한 곳의 인덱스 번호와 일치한 곳에 active라는 클래스명 부여
        $(".sort_sel option").prop("selected", false); //모든 셀렉트 박스에서 옵션의 속성(prop)에서 선택을 풀어버린다.
        $(".sort_sel option").eq($btn_index+1).prop("selected", true); //내가 클릭한 곳과 연관된 옵션에만 selected 값을 부여한다.

    }
    pd_sort(); //브라우저가 로딩되면서 함수문을 호출한다.(sort)가 적용되지 않은 상태

    // "최신순" 버튼 클릭 시 

    $(".date_sort").click(function () {
        //sort(메서드: 순차적으로 나열을 시키는 메서드, 오름차순으로 나열)
        $pd_arr.sort(function (a, b) { // 왼쪽에 있던 사람 a, 오른쪽 사람 b

            //return a[4] - b[4]; //작은 순으로 차례대로 정렬이 된다. 
            return b[4] - a[4]; //큰 순으로 차례대로 정렬_ 여기에 reverse는 오래된 순

        });
        console.log($pd_arr); //배열의 순서가 변경
        /* $pd_arr.reverse(); //reverse():현재 배열을 역순으로 변경 -> 큰 순으로 변경, 작성순서 상관없이 다 바꿔버림(sort의 값도 바꿔버림)/*
        console.log($pd_arr); 
        /* $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
            $(this).find("h3.pd_title").text($pd_arr[index][1]);
            $(this).find(".pd_text").text($pd_arr[index][2]);
            $(this).find(".pd_price").text($pd_arr[index][3]);
            $(this).find(".pd_date").text($pd_arr[index][4]);
            $(this).find(".fav span").text($pd_arr[index][5]);
        }); */
        $btn_index = $(this).index();/* 이 자리에 써줘야 해 */
        pd_sort();
    });

    // "낮은 가격순" 버튼 클릭 시
    $(".low_sort").click(function () {
        /* each문에만 index!!! */
        $pd_arr.sort(function (a, b) {
            return a[3] - b[3]; //작은 순으로 정렬
        });
        console.log($pd_arr);
        /* $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
            $(this).find("h3.pd_title").text($pd_arr[index][1]);
            $(this).find(".pd_text").text($pd_arr[index][2]);
            $(this).find(".pd_price").text($pd_arr[index][3]);
            $(this).find(".pd_date").text($pd_arr[index][4]);
            $(this).find(".fav span").text($pd_arr[index][5]);
        }); */
        $btn_index = $(this).index();
        pd_sort();
    });

    // "높은 가격순" 버튼 클릭 시
    $(".high_sort").click(function () {
        /* each문에만 index!!! */
        $pd_arr.sort(function (a, b) {
            return b[3] - a[3]; //높은 가격 순으로 정렬
        });
        console.log($pd_arr);
        /* $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
            $(this).find("h3.pd_title").text($pd_arr[index][1]);
            $(this).find(".pd_text").text($pd_arr[index][2]);
            $(this).find(".pd_price").text($pd_arr[index][3]);
            $(this).find(".pd_date").text($pd_arr[index][4]);
            $(this).find(".fav span").text($pd_arr[index][5]);
        }); */
        $btn_index = $(this).index();
        pd_sort();
    });
    // "인기순" 버튼 클릭 시
    $(".fav_sort").click(function () {
        $pd_arr.sort(function (a, b) {
            return b[5] - a[5];
        });
        /* $(".pd_box").each(function(index){
            $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
            $(this).find("h3.pd_title").text($pd_arr[index][1]);
            $(this).find(".pd_text").text($pd_arr[index][2]);
            $(this).find(".pd_price").text($pd_arr[index][3]);
            $(this).find(".pd_date").text($pd_arr[index][4]);
            $(this).find(".fav span").text($pd_arr[index][5]);
        }); */
        $btn_index = $(this).index();
        pd_sort();

    });

    $(".sort_sel").change(function () {
        var $sel_val = $(this).val(); //value 값을 뽑아옴
        console.log($sel_val);

        if ($sel_val == "date") {
            $pd_arr.sort(function (a, b) {
                return b[4] - a[4];
            });
            pd_sort();

        } else if ($sel_val == "low") {
            $pd_arr.sort(function (a, b) {
                return a[3] - b[3];
            });
            pd_sort();

        } else if ($sel_val == "high") {
            $pd_arr.sort(function (a, b) {
                return b[3] - a[3];
            });
            pd_sort();
            
        } else if ($sel_val == "fav") {
            $pd_arr.sort(function (a, b) {
                return b[5] - a[5];
            });
            pd_sort();
            
        }
        $(".sort_button button").removeClass("active"); //selected 박스에서 선택을 변경하였을 때, button의 모든 active Calss명은 지겅
            $(".sort_button button[class^='"+$sel_val+"']").addClass("active"); //vaule =date -> class = date_sort 연관된 부분에만 active 클래스명을 부여한다.

            $(".sort_sel option").prop("selected", false); //셀렉트박스 옵션에서 선택을 해제
            $(".sort_sel option[value='"+$sel_val+"']").prop("selected", true); //선택한 곳의 value 값과 일치하는 곳에만 선택.
    });

/*  
    배열 데이터의 개수가 총 8개(4의 배수)이고, 4개씩 페이지 하나씩마다 보여줄 때 2개의 페이지가 필요하다.
    
    => 하단부에 1, 2라는 표시장치가 필요
    
    8/4 = > 몫은 2, 나머지 0 => if
    for문 => 초기값 k=0; k < 8/4; k++ 
    0,1 값만 나올 수 있다.
    */
   
   /* 
   <ol class="pager">
   <li>0(k)</li> ===> k+1 ===> 1
   <li>1(k)</li> ===> k+1 ===> 2
   </ol>
   */
  /* 
  만약 상품의 개수가 9개라면? = 필요한 페이지 수는 3개 (4개:1p, 4개:2p, 1개:3p) 
  if(9%4 !=0)
  for(k=0; k <= 8/4 ; k++) 3번 돌아감 (k=0, 1, 2)
  <ol>
  <li>0(k)</li> ===> k+1 ===> 1
  <li>1(k)</li> ===> k+1 ===> 2
  <li>2(k)</li> ===> k+1 ===> 3
  </ol>
  
  */
    var $ea_item = 4; //각 페이지별로 4개의 아이템을 보여주겠다는 선언

    //배열데이터에서 나머지 값이 없다면?
    if($pd_arr.length % 4 == 0){ //4의 배수 개념
        for(k=0; k<$pd_arr.length/$ea_item ; k++){
            $(".pager").append("<li>"+(k+1)+"</li>");
        }
    }else{
        for(k=0; k <= parseInt($pd_arr.length/$ea_item ); k++){
            $(".pager").append("<li>"+(k+1)+"</li>");
        }
    }
    //$(".pd_box").show();
    $(".pd_box").eq($ea_item - 1).nextAll().hide();
    console.log("진입");
    $(".pager li").eq(0).addClass("active");


    $(".pager li").click(function(){
        var $pager_txt = $(this).text();
        $(".pd_box").show();
        $(".pd_box").eq($ea_item * ($pager_txt - 1)).prevAll().hide();
        $(".pd_box").eq($ea_item *$pager_txt -1).nextAll().hide();
        
        $(".pager li").removeClass("active");
        $(this).addClass("active");

    });
/* 
    2번을 클릭했다면(text 2), 인덱스번호로 4~7번만 보여준다. 4($ea_item) * (2 - 1)
    4 * 1 => 4(2번째 페이지에서 처음 보여주어야 할 인덱스 번호)
    4 * (2 - 1) = 보여주어야 할 개수 * (클릭한 곳의 페이지 번호 -1)

    4 * ??? => 7(2번째 페이지에서 마지막에 보여주어야 할 인덱스 번호)

    3번을 클릭했다면(text 3), 인덱스 번호 8~11번만 보여준다.
    4 * 2 => 8(3번째
        
        
        음 보여주어야 할 인덱스)
 */
});