$(document).ready(function() {
    $(".parentList").click(function() {
        $(this).siblings().children().next().children().addClass("folded")
        // sibling的child的ul位於第二個節點所以用next()
        // 還要用一次children（）撈ul下的li
        // J三小

        $(this).children().children().removeClass("folded");
    })
})