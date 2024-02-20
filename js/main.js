var nameInput =document.getElementById("productName")
var priceInput =document.getElementById("productPrice")
var categoryInput =document.getElementById("productCategory")
var saleInput =document.getElementById("productSale")
var descriptionInput =document.getElementById("productDescription")
var searchInput = document.getElementById("searchInput")
var productList = []
//el else case hia eno hatfdal el array fadia zai ma hia fo2
if (localStorage.getItem("productList") != null) {
    productList = JSON.parse(localStorage.getItem("productList"))
    ShowData()
}

function addProduct(){
    var product = {
        name: nameInput.value,
        price: Number(priceInput.value),
        category: categoryInput.value,
        desc: descriptionInput.value,
        sale: saleInput.checked
    }
    productList.push(product)
    //hereee
    ShowData()
    localStorage.setItem("productList", JSON.stringify(productList))
    clearForm()
}
function deleteProduct(x) {
    productList.splice(x,1)
    ShowData()
    localStorage.setItem("productList",JSON.stringify(productList))
}
function clearForm(){
    nameInput.value =''
    priceInput.value = ''
    categoryInput.value = 'tv'
    saleInput.value = ''
    descriptionInput.value = ''
    saleInput.checked = false
}

function ShowData(){
    var temp = '';
    for (var i = 0; i < productList.length; i++) {
        //el += ta7t hna 3lshan kol row ytdaf 3la elly ablo
        temp += ` <tr>   
                    <td>`+i+`</td>
                    <td>`+productList[i].name+`</td>
                    <td>`+productList[i].price+`</td>
                    <td>`+productList[i].category+`</td>
                    <td>`+productList[i].sale+`</td>
                    <td>`+productList[i].desc+`</td>
                    <td><button class="btn btn-warning">Update</button></td>
                    <td><button onclick="deleteProduct(`+i+`)" class="btn btn-danger">Delete</button></td>
                </tr>`
    }
    document.getElementById("tableData").innerHTML = temp
}
function searchData(){
    var temp = '';
    var searchVal = searchInput.value.toLowerCase()
    for (var i = 0; i < productList.length; i++) {
        if(productList[i].category.toLowerCase().includes(searchVal) == true || productList[i].name.toLowerCase().includes(searchVal)){
        temp += ` <tr>
        <td>`+i+`</td>
        <td>`+productList[i].name.toLowerCase().replace(searchVal,"<span class= 'bg-info'>"+searchVal+"</span>")+`</td>
        <td>`+productList[i].price+`</td>
        <td>`+productList[i].category.toLowerCase().replace(searchVal,"<span class= 'bg-info'>"+searchVal+"</span>")+`</td>
        <td>`+productList[i].sale+`</td>
        <td>`+productList[i].desc+`</td>
        <td><button class="btn btn-warning">Update</button></td>
        <td><button class="btn btn-danger">Delete</button></td>
        </tr>`
        }
    }
    document.getElementById("tableData").innerHTML = temp
}
