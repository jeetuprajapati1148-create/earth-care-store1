
fetch('products.json')
.then(r=>r.json())
.then(data=>{
  const list = document.getElementById('categories');
  Object.keys(data).forEach(cat=>{
    const li=document.createElement('li');
    li.innerHTML = `<a href="products.html#${encodeURIComponent(cat)}">${cat}</a>`;
    list.appendChild(li);
  });
});
