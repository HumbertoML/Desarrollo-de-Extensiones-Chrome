$(function () {
    var data;
    function getSavedChannel() {
        if (localStorage.youtubechannel) {
            $("#youtubeLink").attr("placeholder", localStorage.youtubechannel);
        }
        setTimeout(getSavedChannel, 1000);
    }

    getSavedChannel();

    function checkParameters() {
        if (data.length < 28) return "Invalid URL";
        if (data.indexOf("videos") == -1) data = data.replace(/\/featured/i, "") + "/videos";
        if (data.indexOf("youtube") == -1) return "Invalid URL";
        if (data.substring(data.length, data.length - 6) != "videos") return "invalid URL";
        return true;
    }

    $("#submit").click(function () {
        $("#checkResponse").remove();
        data = $("#youtubeLink").val();
        var correct = checkParameters(data);
        if (correct == true) {
            localStorage.youtubechannel = data;
            $("body").append('<center><span id="checkResponse"><br><br><b>Sucesfully saved</b></span></center>');
            $("#checkResponse").fadeOut(3500);
        }
        else {
            $("body").append('<center><span id="checkResponse"><br><br><b style="color: red !important">' + correct + '</b></span></center>');
        }
    });
});