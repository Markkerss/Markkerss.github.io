document.getElementById("btn").addEventListener("click", function() {
    var nums = []
    nums.push(document.getElementById("textBox1").value)
    nums.push(document.getElementById("textBox2").value)
    nums.push(document.getElementById("textBox3").value)
    nums.push(document.getElementById("textBox4").value)
    nums.push(document.getElementById("textBox5").value)
    let ranNums = []
    let i = nums.length
    let j = 0

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        ranNums.push(nums[j]);
        nums.splice(j,1);
    }

    for (let i = 0; i<5; i++) {
        let li = document.createElement("li")
        let output = `${i+1}. ${ranNums[i]}`
        let textnode = document.createTextNode(output)
        li.appendChild(textnode)
        document.getElementById("resultsList").appendChild(li)
    }
})

document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById("textBox1").value = ""
    document.getElementById("textBox2").value = ""
    document.getElementById("textBox3").value = ""
    document.getElementById("textBox4").value = ""
    document.getElementById("textBox5").value = ""
})