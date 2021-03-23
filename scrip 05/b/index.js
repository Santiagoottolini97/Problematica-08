let a = ["start", "middle", "end", "bottom", "top"];
let b = a.length;
for (let i = 0; i < b; i++) {
  alert(a[i].charAt().toUpperCase() + a[i].substr(1, 6).toLowerCase());
}
