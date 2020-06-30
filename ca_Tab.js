
var toggle = document.getElementById('toggle');
var enabled = false; // Default false

// Retrieves one or more items from the storage area
browser.storage.local.get('enabled', data => { // data a part of element
  enabled = !!data.enabled;
  toggle.textContent = enabled ? 'Disable' : 'Enable';
});

toggle.onclick = () => {
  enabled = !enabled;
  toggle.textContent = enabled ? 'Disable' : 'Enable';
  browser.storage.local.set({enabled:enabled});
};

    
     
