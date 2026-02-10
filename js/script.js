<script>
const startupSound = document.getElementById("startup")
const navSound = document.getElementById("nav")
startupSound.play()

const sections = [...document.querySelectorAll(".xmb-title")]
let sectionIndex = 0
let itemIndex = 0

function getItems() {
    return [...sections[sectionIndex].querySelectorAll(".submenu-item")]
}

function updateUI() {
    sections.forEach((s,i)=>{
        s.classList.toggle("active", i===sectionIndex)
        s.querySelectorAll(".submenu-item").forEach(x=>x.classList.remove("active"))
    })
    const items = getItems()
    if(items[itemIndex]) items[itemIndex].classList.add("active")
}

document.addEventListener("keydown", e=>{
    const items = getItems()
    switch(e.key){
        case "ArrowRight":
            navSound.play()
            sectionIndex = Math.min(sectionIndex+1, sections.length-1)
            itemIndex = 0
            break
        case "ArrowLeft":
            navSound.play()
            sectionIndex = Math.max(sectionIndex-1,0)
            itemIndex = 0
            break
        case "ArrowDown":
            navSound.play()
            itemIndex = Math.min(itemIndex+1, items.length-1)
            break
        case "ArrowUp":
            navSound.play()
            itemIndex = Math.max(itemIndex-1,0)
            break
    }
    updateUI()
})

updateUI()
</script>

<style>
.xmb-contents{display:none}
.xmb-title.active .xmb-contents{display:block}
.submenu-item{opacity:.5}
.submenu-item.active{opacity:1}
</style>

</body>
</html>
