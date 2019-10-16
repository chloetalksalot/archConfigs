var maxSeedsWithoutTrust
var trustedTorrentsOnly
var hideUntrustedTorrentsWithoutComments
var hidePorn
var hideFrench
var hideTelesyncsAndCams
var dontHideJustWarn 
var disableThisCompletely

chrome.storage.local.get({
    maxSeedsWithoutTrust: 1000,
    trustedTorrentsOnly: false,
    hideUntrustedTorrentsWithoutComments: false,
    dontHideJustWarn: true,
    disableThisCompletely: false,
    hidePorn: true,
    hideFrench: true,
    hideTelesyncsAndCams:true
  }, function(options) {
    maxSeedsWithoutTrust = options.maxSeedsWithoutTrust;
    trustedTorrentsOnly = options.trustedTorrentsOnly;
    hideUntrustedTorrentsWithoutComments = options.hideUntrustedTorrentsWithoutComments;
    dontHideJustWarn = options.dontHideJustWarn;
    disableThisCompletely = options.disableThisCompletely;
    hidePorn = options.hidePorn;
    hideFrench = options.hideFrench;
    hideTelesyncsAndCams = options.hideTelesyncsAndCams;

    run();

  });


function hide(badtorrent) {
	if (dontHideJustWarn) {
		badtorrent.style.background = '#fbbdbd';
	} else {
		badtorrent.style.display = "none";
	}
} 

function run() {

	function hide(badtorrent) {
    	if (dontHideJustWarn) {
    		badtorrent.css('background','#fbbdbd');
    	} else {
    		badtorrent.hide();
    	}
    }
    if (!disableThisCompletely) {
    	if (hidePorn) {
    		$('#searchResult tbody tr').each(function( index ) {
    			if ($(this).children('td:nth-child(1)').text().search('Porn') != -1) {
    				hide( $(this) );
    			}
    		});
    	}
    	if (hideFrench) {
    		$('#searchResult tbody tr').each(function( index ) {
    			if ($(this).find('td .detLink').text().toLowerCase().search('french') != -1) {
    				hide( $(this) );
    			}
    		});
    	}
    	if (hideTelesyncsAndCams) {
    		$('#searchResult tbody tr').each(function( index ) {
    			torrentTitle = $(this).find('td .detLink').text().toLowerCase();
    			if (
    				torrentTitle.search('hdcam') != -1 ||
    				torrentTitle.search(' cam ') != -1 ||
    				torrentTitle.search('hd-ts') != -1 ||
    				torrentTitle.search('hdts') != -1 ||
    				torrentTitle.search('.cam.') != -1
    				) {
    				hide( $(this) );
    			}
    		});
    	}
    	$('#searchResult tbody tr:not(:has(img[title="VIP"],img[title="Trusted"],img[title="Moderator"],img[title="Helper"],td[style="text-align:center;"]))').each(function( index ) {
    		if (trustedTorrentsOnly) {
    			hide( $(this) );
    		} else {
    			if (hideUntrustedTorrentsWithoutComments) {
    				// Max seeds exceeded AND no comments
    				torrentSeeds = Number( $(this).children('td:nth-child(3)').text() );
    				if ( (torrentSeeds >= maxSeedsWithoutTrust) || ( $(this).has("img[src='//thepiratebay.org/static/img/icon_comment.gif']").length === 0) )  {
    					hide( $(this) );
    				}
    			} else {
    				// Max seeds exceeded
    				torrentSeeds = Number( $(this).children('td:nth-child(3)').text() );
    				if (torrentSeeds >= maxSeedsWithoutTrust) {
    					hide( $(this) );
    				}
    			}
    		}
    	});
    }
}