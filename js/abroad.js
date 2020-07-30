$(function(){
    //画面読み込み時に実行する。
    $("#autumnpicture").hide();
    $("#winterpicture").hide();
    $("#springpicture").hide();//初期表示で隠しておく
    
    //秋のところをクリックすると処理を開始する
    $("#autumn").on("click", function(){
        $("#autumnpicture").show();//秋の写真を表示
    });
    
    $("#winter").on("click", function(){
        $("#winterpicture").show();//冬の写真を表示
    });
    
    $("#spring").on("click", function(){
        $("#springpicture").show();//春の写真を表示
    });
    
});