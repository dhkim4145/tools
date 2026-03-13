function escapeHtml(s){if(s==null||s===undefined)return '';const div=document.createElement('div');div.textContent=s;return div.innerHTML.replace(/"/g,'&quot;');}
