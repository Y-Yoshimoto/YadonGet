//入力した数字の送受信
$(function(){
    $('#button1').click(function() {
        //多重送信防止
        var button = $(this);
        button.attr("disabled", true);
        //　JSON形式に変形
        var sed_data ={
            // number: Number($("#number").val()),
            number: Number($("input[name='q1']:checked").val())
            }
        console.log("コンソール");
        console.log(sed_data)
        $.ajax({
            type:"post",                    //POST形式
            url:"http://127.0.0.1/api_py/eeveeget", //URL
            data:JSON.stringify(sed_data),      //送信JSONデータ
            contentType: 'application/json',//リクエストタイプ
            dataType: "json",               //受信データ
            // API送受信完了
            success: function(rcv_data){
                console.log(rcv_data);
                if ( rcv_data.result == 0) {
                    $("#message1").text("ゲット")
                }
                else if ( rcv_data.result == 1) {
                $("#message1").text("失敗")
            }
                else $("#message1").text("サポートへご連絡ください。")
            return;
            },
            error: function(rcv_data){
                console.log(rcv_data);
                $("#message1").text("サポートへご連絡ください。")
                return;
            },
            complete: function(){
                button.attr("disabled", false);
            }
        })
    })
});
