function featuredAppModel(e) {
    var a = "",
        i = request.ajaxSettings(utility.get_feature_App, e, utility.base_url_api);
    $.ajax(i).done(function(e) {
        $.each(e, function(e, i) {
            var t = i.Logo.split("~"),
                s = utility.base_url + t[1];
            a += '<div class="row featured_app_row">',
             a += '<a href="' + i.RedirectLink + '">',
              a += '<div class="col eachsize s4">', 
              a += '<img src="' + s + '" class="img-responsive" style="height: 81px;">',
            a += "</div>",
            a += '<div class="col eachsize s7" style="margin-top:12px;padding-left: 13px;">',
             a += '<span class="featured_app_text">' + i.Title + "</span>",
              a += "</div>", a += "</a>",
               a += "</div>"
        }), $("#main_featured_app").html(a)
    })
}