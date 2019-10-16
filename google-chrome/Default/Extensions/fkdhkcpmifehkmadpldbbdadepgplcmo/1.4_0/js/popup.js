function toggleOption(option, status) {
  console.log(option, status);
  if (status == true) {
    document.querySelector('#' + option).parentElement.MaterialSwitch.on();
  } else {
    document.querySelector('#' + option).parentElement.MaterialSwitch.off();
    console.log(option, status);
  }
}

$(window).on("load", function() {

  restore_options()

  function save_options() {
    maxSeedsWithoutTrust = document.getElementById('maxSeedsWithoutTrust').value;
    trustedTorrentsOnly = document.getElementById('trustedTorrentsOnly').parentElement.MaterialSwitch.inputElement_.checked;
    hideUntrustedTorrentsWithoutComments = document.getElementById('hideUntrustedTorrentsWithoutComments').parentElement.MaterialSwitch.inputElement_.checked;
    dontHideJustWarn = document.getElementById('dontHideJustWarn').parentElement.MaterialSwitch.inputElement_.checked;
    disableThisCompletely = document.getElementById('disableThisCompletely').parentElement.MaterialSwitch.inputElement_.checked;
    hidePorn = document.getElementById('hidePorn').parentElement.MaterialSwitch.inputElement_.checked;
    hideFrench = document.getElementById('hideFrench').parentElement.MaterialSwitch.inputElement_.checked;
    hideTelesyncsAndCams = document.getElementById('hideTelesyncsAndCams').parentElement.MaterialSwitch.inputElement_.checked;

    chrome.storage.local.set({
      maxSeedsWithoutTrust: maxSeedsWithoutTrust,
      trustedTorrentsOnly: trustedTorrentsOnly,
      hideUntrustedTorrentsWithoutComments: hideUntrustedTorrentsWithoutComments,
      dontHideJustWarn: dontHideJustWarn,
      disableThisCompletely: disableThisCompletely,
      hidePorn: hidePorn,
      hideFrench: hideFrench,
      hideTelesyncsAndCams: hideTelesyncsAndCams
    });
  }

  function restore_options() {
    chrome.storage.local.get({
      maxSeedsWithoutTrust: 1000,
      trustedTorrentsOnly: false,
      hideUntrustedTorrentsWithoutComments: false,
      dontHideJustWarn: true,
      disableThisCompletely: false,
      hidePorn: true,
      hideFrench: true,
      hideTelesyncsAndCams: true
    }, function(options) {
      document.getElementById('maxSeedsWithoutTrust').value = options.maxSeedsWithoutTrust;
      toggleOption("trustedTorrentsOnly", options.trustedTorrentsOnly);
      toggleOption("hideUntrustedTorrentsWithoutComments", options.hideUntrustedTorrentsWithoutComments);
      toggleOption("dontHideJustWarn", options.dontHideJustWarn);
      toggleOption("disableThisCompletely", options.disableThisCompletely);
      toggleOption("hidePorn", options.hidePorn);
      toggleOption("hideFrench", options.hideFrench);
      toggleOption("hideTelesyncsAndCams", options.hideTelesyncsAndCams);
      console.log(options.maxSeedsWithoutTrust, options.trustedTorrentsOnly, hideUntrustedTorrentsWithoutComments, dontHideJustWarn, disableThisCompletely, hidePorn, hideFrench, hideTelesyncsAndCams);
    });

  }

  document.getElementById('save-settings').addEventListener("click", function() {
    save_options();
    chrome.tabs.reload();
    window.close();
  });
  document.getElementById('close').addEventListener("click", function() {
    window.close();
  });
  document.getElementById('help-link').addEventListener("click", function() {
    chrome.tabs.create({url: 'https://www.reddit.com/r/Piracy/comments/79bg64/i_made_a_chrome_extension_that_automatically/'});
  });
});