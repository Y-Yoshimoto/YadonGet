//入力した数字の送受信
$(function(){
    $('#button2').click(function() {
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
            url:"https://liuncvp3x8.execute-api.ap-northeast-1.amazonaws.com/EeveeStage/eeveeget/", //URL
            // MF7znvKoGYaArPOXYI9Gd2CtRqX7kb8P9FoUJAun
            data:JSON.stringify(sed_data),      //送信JSONデータ
            contentType: 'application/json',//リクエストタイプ
            dataType: "json",               //受信データ
            // API送受信完了
            success: function(rcv_data){
                console.log(rcv_data);
                console.log(rcv_data.body);
                if (rcv_data.body.result == 0) {
                    $("#message2").text("ゲット")
                }
                else if (rcv_data.body.result == 1) {
                $("#message2").text("失敗")
            }
                else $("#message2").text("サポートへご連絡ください。")
            return;
            },
            error: function(rcv_data){
                console.log(rcv_data);
                console.log("error");
                $("#message2").text("サポートへご連絡ください。")
                return;
            },
            complete: function(){
                button.attr("disabled", false);
            }
        })
    })
});
