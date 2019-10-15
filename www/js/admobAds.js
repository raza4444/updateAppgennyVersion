var admobid = {};
function onDeviceReady() {
  var paramkeyArray = ["admobBannerId", "admobInterstitialId"];
  CustomConfigParameters.get(
    function(configData) {
      if (/(android)/i.test(navigator.userAgent)) {
        admobid = {
          // for Android
          banner: configData.admobBannerId,
          interstitial: configData.admobInterstitialId,
          rewardvideo: "ca-app-pub-3940256099942544/5224354917"
        };
      } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = {
          // for iOS
          banner: "ca-app-pub-3940256099942544/6300978111",
          interstitial: "ca-app-pub-3940256099942544/1033173712",
          rewardvideo: "ca-app-pub-3940256099942544/1712485313"
        };
      } else {
        admobid = {
          // for Windows Phone
          banner: configData.admobBannerId,
          interstitial: configData.admobInterstitialId,
          rewardvideo: ""
        };
      }
    },
    function(err) {
      console.log(err);
    },
    paramkeyArray
  );

  initAd();
  setTimeout(function() {
    initBannerAndinterstitial();
    showBannerAtPosition();
  }, 4000);
}

function initAd() {
  AdMob.getAdSettings(
    function(info) {
      console.log(
        "adId: " +
          info.adId +
          "\n" +
          "adTrackingEnabled: " +
          info.adTrackingEnabled
      );
    },
    function() {
      console.log("failed to get user ad settings");
    }
  );

  AdMob.setOptions({
    // adSize: 'SMART_BANNER',
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: false, // set to true, to receiving test ad for testing purpose
    bgColor: "black", // color name, or '#RRGGBB'
    autoShow: false // auto show interstitial ad when loaded, set to false if prepare/show
    // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
  });

  // new events, with variable to differentiate: adNetwork, adType, adEvent
  $(document).on("onAdFailLoad", function(e) {
    // when jquery used, it will hijack the event, so we have to get data from original event
    // adType: 'banner', 'interstitial', etc.

    var interAd = localStorage.getItem("interAdshown");
    if (interAd == "1") {
      // alert('induestrial true');
      localStorage.setItem("interAdshown", "0");
      prepareInterstitialAd();
      //video modal
      var openVideoModelId = localStorage.getItem("openVideoModelId");
      //run video player
      var runVideoId = localStorage.getItem("runVideoId");
      var runVideoplatform = localStorage.getItem("runVideoplatform");

      //wallpaper

      var category_id_wallpaper = localStorage.getItem("category_id_wallpaper");

      if (openVideoModelId != "0") {
        openModel(openVideoModelId);
        localStorage.setItem("category_id_wallpaper", "0");
        localStorage.setItem("openVideoModelId", "0");
        localStorage.setItem("runVideoId", "0");
        localStorage.setItem("runVideoplatform", "0");
      }

      if (runVideoId != "0" && runVideoplatform != "0") {
        var videoId = runVideoId;
        var platform = runVideoplatform;
        if (platform == "youtube") {
          YoutubeVideoPlayer.openVideo(videoId, function(result) {
            console.log("YoutubeVideoPlayer result = " + result);
          });
        }
        if (platform == "dailymotion") {
          $("#myModal").css("display", "none");
          $("#videoModal").css("display", "block");
          initAdmobWithoutBanner();
          window.screen.orientation.lock("landscape");
          videourl =
            "https://www.dailymotion.com/embed/video/" +
            videoId +
            "?queue-enable=false";
          $("#videoplayer").attr("src", videourl);
        }

        localStorage.setItem("category_id_wallpaper", "0");
        localStorage.setItem("openVideoModelId", "0");
        localStorage.setItem("runVideoId", "0");
        localStorage.setItem("runVideoplatform", "0");
      }
      if (category_id_wallpaper != 0) {
        openModelWallpaper(category_id_wallpaper);
        localStorage.setItem("category_id_wallpaper", "0");
        localStorage.setItem("openVideoModelId", "0");
        localStorage.setItem("runVideoId", "0");
        localStorage.setItem("runVideoplatform", "0");
      }
    }
  });
  $(document).on("onAdPresent", function(e) {});
  $(document).on("onAdLeaveApp", function(e) {});

  $(document).on("onAdDismiss", function(e) {
    var interAd = localStorage.getItem("interAdshown");
    if (interAd == "1") {
      // alert('induestrial true');
      prepareInterstitialAd();
      localStorage.setItem("interAdshown", "0");
      //video modal
      var openVideoModelId = localStorage.getItem("openVideoModelId");

      //run video player
      var runVideoId = localStorage.getItem("runVideoId");
      var runVideoplatform = localStorage.getItem("runVideoplatform");

      //wallpaper

      var category_id_wallpaper = localStorage.getItem("category_id_wallpaper");

      if (openVideoModelId != "0") {
        openModel(openVideoModelId);
        localStorage.setItem("category_id_wallpaper", "0");
        localStorage.setItem("openVideoModelId", "0");
        localStorage.setItem("runVideoId", "0");
        localStorage.setItem("runVideoplatform", "0");
      }

      if (runVideoId != "0" && runVideoplatform != "0") {
        var videoId = runVideoId;
        var platform = runVideoplatform;
        if (platform == "youtube") {
          YoutubeVideoPlayer.openVideo(videoId, function(result) {
            console.log("YoutubeVideoPlayer result = " + result);
          });
        }
        if (platform == "dailymotion") {
          $("#myModal").css("display", "none");
          $("#videoModal").css("display", "block");
          initAdmobWithoutBanner();
          window.screen.orientation.lock("landscape");
          videourl =
            "https://www.dailymotion.com/embed/video/" +
            videoId +
            "?queue-enable=false";
          $("#videoplayer").attr("src", videourl);
        }

        localStorage.setItem("category_id_wallpaper", "0");
        localStorage.setItem("openVideoModelId", "0");
        localStorage.setItem("runVideoId", "0");
        localStorage.setItem("runVideoplatform", "0");
      }
      if (category_id_wallpaper != 0) {
        openModelWallpaper(category_id_wallpaper);
        localStorage.setItem("category_id_wallpaper", "0");
        localStorage.setItem("openVideoModelId", "0");
        localStorage.setItem("runVideoId", "0");
        localStorage.setItem("runVideoplatform", "0");
      }
    }
  });
  $(document).on("resume", function() {
    allReloadedData();
  });
}
function allReloadedData() {
  var interAd = localStorage.getItem("interAdshown");
  if (interAd == "1") {
    prepareInterstitialAd();
    // alert('induestrial true');
    localStorage.setItem("interAdshown", "0");
    //video modal
    var openVideoModelId = localStorage.getItem("openVideoModelId");
    //run video player
    var runVideoId = localStorage.getItem("runVideoId");
    var runVideoplatform = localStorage.getItem("runVideoplatform");

    //wallpaper

    var category_id_wallpaper = localStorage.getItem("category_id_wallpaper");

    if (openVideoModelId != "0") {
      openModel(openVideoModelId);
      localStorage.setItem("category_id_wallpaper", "0");
      localStorage.setItem("openVideoModelId", "0");
      localStorage.setItem("runVideoId", "0");
      localStorage.setItem("runVideoplatform", "0");
    }

    if (runVideoId != "0" && runVideoplatform != "0") {
      var videoId = runVideoId;
      var platform = runVideoplatform;
      if (platform == "youtube") {
        YoutubeVideoPlayer.openVideo(videoId, function(result) {
          console.log("YoutubeVideoPlayer result = " + result);
        });
      }
      if (platform == "dailymotion") {
        $("#myModal").css("display", "none");
        $("#videoModal").css("display", "block");
        initAdmobWithoutBanner();
        window.screen.orientation.lock("landscape");
        videourl =
          "https://www.dailymotion.com/embed/video/" +
          videoId +
          "?queue-enable=false";
        $("#videoplayer").attr("src", videourl);
      }

      localStorage.setItem("category_id_wallpaper", "0");
      localStorage.setItem("openVideoModelId", "0");
      localStorage.setItem("runVideoId", "0");
      localStorage.setItem("runVideoplatform", "0");
    }
    if (category_id_wallpaper != 0) {
      openModelWallpaper(category_id_wallpaper);
      localStorage.setItem("category_id_wallpaper", "0");
      localStorage.setItem("openVideoModelId", "0");
      localStorage.setItem("runVideoId", "0");
      localStorage.setItem("runVideoplatform", "0");
    }
  }
}

function initBannerAndinterstitial() {
  AdMob.createBanner({
    license: "thanksgod@live.co.uk/b9614fd65737b2ef21e9210ed56200a0",
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: false, // TODO: remove this line when release
    overlap: false,
    offsetTopBar: false,
    bgColor: " "
  });
  AdMob.prepareInterstitial({
    license: "thanksgod@live.co.uk/b9614fd65737b2ef21e9210ed56200a0",
    adId: admobid.interstitial,
    isTesting: false, // TODO: remove this line when release
    autoShow: false
  });
}
function showBannerAtPosition() {
  if (AdMob) AdMob.showBanner(AdMob.AD_POSITION.BOTTOM_CENTER);
  // prepareInterstitialAd();
}

function showIndustrialAd() {
  localStorage.setItem("interAdshown", "1");
  AdMob.isInterstitialReady(function(ready) {
    if (ready) {
      AdMob.showInterstitial(
        success => {
          // alert("working");
        },
        error => {
          allReloadedData();
        }
      );
    } else {
      allReloadedData();
    }
  });

  // prepareInterstitialAd();
  //createAndShowBannerAd();
}
function showIndustrialAdForYoutubeVIdeoPlayer() {
  localStorage.setItem("interAdshown", "1");
  AdMob.isInterstitialReady(function(ready) {
    if (ready) {
      AdMob.showInterstitial(
        success => {
          // alert("working");
        },
        error => {
          allReloadedData();
        }
      );
    } else {
      allReloadedData();
    }
  });
}
function createNBannerAd() {
  AdMob.createBanner({
    license: "thanksgod@live.co.uk/b9614fd65737b2ef21e9210ed56200a0",
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: false, // TODO: remove this line when release
    overlap: false,
    offsetTopBar: false,
    bgColor: " "
  });
}
function createAndShowBannerAd() {
  createNBannerAd();
  showBannerAtPosition();
}

function prepareInterstitialAd() {
  AdMob.prepareInterstitial(
    {
      license: "thanksgod@live.co.uk/b9614fd65737b2ef21e9210ed56200a0",
      adId: admobid.interstitial,
      autoShow: false,
      isTesting: false // TODO: remove this line when release
    },
    success => {},
    error => {
      alert("failed to prepare load");
    }
  );
}

function initAdmobWithoutBanner() {
  AdMob.hideBanner();
}

if (/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent)) {
  document.addEventListener("deviceready", onDeviceReady, false);
} else {
  onDeviceReady();
}

