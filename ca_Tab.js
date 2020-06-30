
var toggle = document.getElementById('toggle');
var toggleDisp = document.getElementById("toggleDisp");
var enabled = false; // Default false

// Retrieves one or more items from the storage area at extension start up
browser.storage.local.get('enabled', data => { // data a part of element
  enabled = !!data.enabled;
  toggle.textContent = enabled ? 'Disable' : 'Enable';
  if (enabled == false)
  {
    toggleDisp.innerHTML = "Disabled";  
  }
  else
  {
    toggleDisp.innerHTML = "Enabled";  
  }
});
// Update storage variable and displays to user
toggle.onclick = () => {
  enabled = !enabled;
  toggle.textContent = enabled ? 'Disable' : 'Enable';
  browser.storage.local.set({enabled:enabled});
  if (enabled == false)
  {
    toggleDisp.innerHTML = "Disabled";  
  }
  else
  {
    toggleDisp.innerHTML = "Enabled";  
  }
};


    
     
