$(document).ready(function()){

    $('.form__upload').on("click", function(){
        const val = document.querySelector(".form__upload").value;
        const target = document.querySelector("#output")

        if (val === 'output') {
            target.innerHTML = "しばしお待ちください";
        } else {
            target.innerHTML = "まだかかるよ";
        }
};
